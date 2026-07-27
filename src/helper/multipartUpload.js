import { uploadMultipartDocument, uploadOnSignedURL, getMultipartUploadStatus } from "@/api/file";

const CONCURRENCY_LIMIT = 5;
const MAX_RETRIES_PER_PART = 3;
const MAX_RESUME_ROUNDS = 3;

const retryDelay = (attempt) => 1000 * 2 ** attempt;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class UploadCancelledError extends Error {
  constructor(message = "Upload cancelled") {
    super(message);
    this.name = "UploadCancelledError";
  }
}

const throwIfCancelled = (signal) => {
  if (signal?.aborted) throw new UploadCancelledError();
};

export async function uploadPartWithRetry({ partNumber, url, chunk, onPartProgress, signal }) {
  let attempt = 0;

  while (attempt <= MAX_RETRIES_PER_PART) {
    throwIfCancelled(signal);

    try {
      const response = await uploadOnSignedURL(url, chunk, (pct) => onPartProgress(partNumber, pct), { signal });

      const etag = response.headers?.etag;
      if (!etag) {
        throw new Error(`Missing ETag for part ${partNumber}`);
      }

      return { PartNumber: partNumber, ETag: etag.replaceAll('"', "") };
    } catch (error) {
      if (signal?.aborted || error?.name === "CanceledError" || error?.name === "AbortError") {
        throw new UploadCancelledError();
      }

      attempt++;

      if (attempt > MAX_RETRIES_PER_PART) {
        console.error(`Part ${partNumber} failed after ${MAX_RETRIES_PER_PART} retries:`, error);
        return null;
      }

      onPartProgress(partNumber, 0);
      await sleep(retryDelay(attempt - 1));
    }
  }
}

export async function uploadPartsInParallel(parts, concurrency, onPartProgress, signal) {
  const results = new Array(parts.length);
  let cursor = 0;

  async function worker() {
    while (cursor < parts.length) {
      throwIfCancelled(signal);
      const currentIndex = cursor++;
      const part = parts[currentIndex];
      results[currentIndex] = await uploadPartWithRetry({ ...part, onPartProgress, signal });
    }
  }

  const workerCount = Math.min(concurrency, parts.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));

  return results;
}

export function createProgressThrottle(fn) {
  let scheduled = false;
  return (...args) => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      fn(...args);
    });
  };
}

export async function uploadBatchWithReconciliation({
  documentId,
  startPart,
  chunkSize,
  file,
  onPartProgress,
  onPartSizesKnown,
  partResults,
  signal,
}) {
  throwIfCancelled(signal);

  const partsResponse = await uploadMultipartDocument({ documentId, startPart }, { signal });
  const { urls } = partsResponse?.data?.data?.url || {};

  throwIfCancelled(signal);

  if (!urls?.length) {
    throw new Error(`Failed to get upload URLs for batch starting at part ${startPart}`);
  }

  const parts = urls.map(({ partNumber, url }) => {
    const start = (partNumber - 1) * chunkSize;
    const end = Math.min(start + chunkSize, file.size);
    return { partNumber, url, chunk: file.slice(start, end), size: end - start };
  });

  onPartSizesKnown(parts);

  const uploadedResults = await uploadPartsInParallel(parts, CONCURRENCY_LIMIT, onPartProgress, signal);
  uploadedResults.forEach((r) => {
    if (r) partResults.set(r.PartNumber, r.ETag);
  });

  let missing = parts.filter((p) => !partResults.has(p.partNumber));

  for (let round = 0; round < MAX_RESUME_ROUNDS && missing.length > 0; round++) {
    throwIfCancelled(signal);

    try {
      const statusResponse = await getMultipartUploadStatus(documentId, { signal });
      const statusData = statusResponse?.data?.data || statusResponse?.data || {};
      const statusUploadedParts = statusData.uploadedParts || [];

      statusUploadedParts.forEach((p) => {
        const partNumber = typeof p === "number" ? p : (p.PartNumber ?? p.partNumber);
        const etag = typeof p === "number" ? null : (p.ETag ?? p.etag ?? null);

        if (partNumber != null && !partResults.has(partNumber) && etag) {
          partResults.set(partNumber, etag.replaceAll?.('"', "") ?? etag);
        }
      });
    } catch (statusError) {
      if (signal?.aborted) throw new UploadCancelledError();
      console.error("Failed to fetch upload status:", statusError);
    }

    missing = parts.filter((p) => !partResults.has(p.partNumber));
    if (missing.length === 0) break;

    throwIfCancelled(signal);

    const retryResults = await uploadPartsInParallel(missing, CONCURRENCY_LIMIT, onPartProgress, signal);
    retryResults.forEach((r) => {
      if (r) partResults.set(r.PartNumber, r.ETag);
    });

    missing = parts.filter((p) => !partResults.has(p.partNumber));
  }

  if (missing.length > 0) {
    throw new Error(
      `Failed to upload part(s) ${missing.map((p) => p.partNumber).join(", ")} after ${MAX_RESUME_ROUNDS} retry rounds`
    );
  }

  return parts[parts.length - 1].partNumber;
}

export async function uploadFileInParts({ file, documentId, chunkSize, totalParts, onProgress, signal }) {
  const partResults = new Map();
  const partPercents = new Map();
  const partSizes = new Map();

  let highestReportedPercent = 0;

  const updateOverallProgress = createProgressThrottle(() => {
    let uploadedBytes = 0;
    partSizes.forEach((size, partNumber) => {
      uploadedBytes += ((partPercents.get(partNumber) || 0) / 100) * size;
    });
    const rawPercent = Math.round((uploadedBytes / file.size) * 100);

    highestReportedPercent = Math.max(highestReportedPercent, rawPercent);
    onProgress?.(highestReportedPercent);
  });

  const onPartProgress = (partNumber, pct) => {
    partPercents.set(partNumber, pct);
    updateOverallProgress();
  };

  const registerPartSizes = (parts) => {
    parts.forEach((p) => partSizes.set(p.partNumber, p.size));
  };

  let nextStartPart = 1;
  while (nextStartPart <= totalParts) {
    throwIfCancelled(signal);

    const lastPartNumber = await uploadBatchWithReconciliation({
      documentId,
      startPart: nextStartPart,
      chunkSize,
      file,
      onPartProgress,
      onPartSizesKnown: registerPartSizes,
      partResults,
      signal,
    });

    nextStartPart = lastPartNumber + 1;
  }

  if (partResults.size !== totalParts) {
    throw new Error(`Expected ${totalParts} parts but only have ${partResults.size} confirmed`);
  }

  const sortedParts = Array.from(partResults.entries())
    .map(([PartNumber, ETag]) => ({ PartNumber, ETag }))
    .sort((a, b) => a.PartNumber - b.PartNumber);

  return sortedParts;
}
