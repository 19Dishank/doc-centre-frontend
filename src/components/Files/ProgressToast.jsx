/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/static-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  Folder,
  ImageIcon,
  Upload,
  Video,
  X,
} from "lucide-react";
import { EXT_ICON_MAP } from "@/constants/supportedFileTypes";
import { cancelUpload } from "@/api/file";

/*  module-level state  */
let uploads = [];
let listeners = new Set();
let abortControllers = new Map(); // id -> () => void, registered by UploadButtons per upload

const notify = () => listeners.forEach((cb) => cb([...uploads]));
const genId = () => `upl_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

/* position map  */

const POSITIONS = {
  "bottom-right": { bottom: "1.5rem", right: "1.5rem" },
  "bottom-left": { bottom: "1.5rem", left: "1.5rem" },
  "bottom-center": { bottom: "1.5rem", left: "50%", transform: "translateX(-50%)" },
  "top-right": { top: "1.5rem", right: "1.5rem" },
  "top-left": { top: "1.5rem", left: "1.5rem" },
  "top-center": { top: "1.5rem", left: "50%", transform: "translateX(-50%)" },
};

const SPEED_WINDOW_MS = 4000;

const formatSpeed = (bytesPerSecond) => {
  if (!bytesPerSecond || bytesPerSecond <= 0) return null;
  if (bytesPerSecond < 1024) return `${Math.round(bytesPerSecond)} B/s`;
  if (bytesPerSecond < 1024 ** 2) return `${(bytesPerSecond / 1024).toFixed(1)} KB/s`;
  if (bytesPerSecond < 1024 ** 3) return `${(bytesPerSecond / 1024 ** 2).toFixed(1)} MB/s`;
  return `${(bytesPerSecond / 1024 ** 3).toFixed(2)} GB/s`;
};

const formatDuration = (seconds) => {
  if (seconds == null || !isFinite(seconds) || seconds < 0) return null;
  if (seconds < 1) return "<1s";
  if (seconds < 60) return `${Math.ceil(seconds)}s`;
  if (seconds < 3600) {
    const m = Math.floor(seconds / 60);
    const s = Math.round(seconds % 60);
    return s > 0 ? `${m}m ${s}s` : `${m}m`;
  }
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
};

export const progressToast = {
  start(name, meta = {}) {
    const id = genId();
    const now = Date.now();
    uploads = [
      ...uploads,
      {
        id,
        name,
        progress: 0,
        status: "uploading",
        error: null,
        type: meta.type || "file",
        removing: false,
        size: meta.size || null,
        startedAt: now,
        completedAt: null,
        samples: [{ t: now, p: 0 }],
        speedBps: 0,
        documentId: null,      // set later via setDocumentId() once backend returns it
        cancelling: false,
        finalizing: false,
      },
    ];
    notify();
    return id;
  },
  setFinalizing(id, value) {
    uploads = uploads.map((u) =>
      u.id === id ? { ...u, finalizing: value } : u
    );
    notify();
  },
  // called from UploadButtons once initiateUpload resolves and we have documentId
  setDocumentId(id, docId) {
    uploads = uploads.map((u) =>
      u.id === id ? { ...u, documentId: docId } : u
    );
    notify();
  },

  // called from UploadButtons right after start(), so cancel() can stop the
  // local upload loop (presigned URL requests + part uploads) immediately,
  // without waiting on the backend abort call.
  registerAbort(id, abortFn) {
    abortControllers.set(id, abortFn);
  },

  update(id, progress) {
    const now = Date.now();
    uploads = uploads.map((u) => {
      if (u.id !== id) return u;

      const clamped = Math.min(100, Math.max(0, progress));

      const samples = [...u.samples, { t: now, p: clamped }].filter(
        (s) => now - s.t <= SPEED_WINDOW_MS
      );

      let speedBps = u.speedBps;
      if (u.size && samples.length >= 2) {
        const oldest = samples[0];
        const newest = samples[samples.length - 1];
        const dt = (newest.t - oldest.t) / 1000;
        const dp = newest.p - oldest.p;
        if (dt > 0 && dp > 0) {
          const bytesDelta = (dp / 100) * u.size;
          speedBps = bytesDelta / dt;
        }
      }

      return { ...u, progress: clamped, samples, speedBps };
    });
    notify();
  },

  success(id) {
    const now = Date.now();
    abortControllers.delete(id);
    uploads = uploads.map((u) =>
      u.id === id ? { ...u, progress: 100, status: "success", completedAt: now } : u
    );
    notify();
    setTimeout(() => {
      uploads = uploads.map((u) => u.id === id ? { ...u, removing: true } : u);
      notify();
      setTimeout(() => {
        uploads = uploads.filter((u) => u.id !== id);
        notify();
      }, 400);
    }, 3000);
  },

  error(id, message = "Upload failed") {
    abortControllers.delete(id);
    uploads = uploads.map((u) =>
      u.id === id ? { ...u, status: "error", error: message } : u
    );
    notify();
  },

  remove(id) {
    abortControllers.delete(id);
    uploads = uploads.map((u) => u.id === id ? { ...u, removing: true } : u);
    notify();
    setTimeout(() => {
      uploads = uploads.filter((u) => u.id !== id);
      notify();
    }, 400);
  },

  clear() {
    abortControllers.clear();
    uploads = [];
    notify();
  },

  // Single entry point for cancelling: stops the local upload loop
  // synchronously (so no more presigned URLs / part uploads fire), then
  // tells the backend to abort the multipart upload server-side.
  // in cancel(id): bail out immediately if we're already finalizing
  async cancel(id) {
    const item = uploads.find((u) => u.id === id);
    if (!item || item.cancelling || item.finalizing) return;

    uploads = uploads.map((u) => (u.id === id ? { ...u, cancelling: true } : u));
    notify();

    abortControllers.get(id)?.();
    abortControllers.delete(id);

    if (!item.documentId) {
      progressToast.remove(id);
      return;
    }

    try {
      await cancelUpload(item.documentId);
      progressToast.remove(id);
    } catch (error) {
      console.error("Cancel upload failed:", error);
      uploads = uploads.map((u) => (u.id === id ? { ...u, cancelling: false } : u));
      notify();
    }
  },
};

function useProgressToasts() {
  const [state, setState] = useState(uploads);
  useEffect(() => {
    listeners.add(setState);
    return () => listeners.delete(setState);
  }, []);
  return state;
}

const getExtension = (name = "") => {
  const parts = name.split(".");
  if (parts.length < 2) return "";
  return parts.pop().toLowerCase();
};

const iconFor = (type, name = "") => {
  if (type === "folder") return Folder;
  const ext = getExtension(name);
  if (ext && EXT_ICON_MAP[ext]) return EXT_ICON_MAP[ext];
  if (type === "image") return ImageIcon;
  if (type === "video") return Video;
  return FileText;
};

/*  single row  */

function ProgressRow({ item }) {
  const Icon = iconFor(item.type, item.name);
  const isUploading = item.status === "uploading";
  const isDone = item.status === "success";
  const isError = item.status === "error";

  // eslint-disable-next-line react-hooks/purity
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!isUploading) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [isUploading]);

  const speedLabel = isUploading ? formatSpeed(item.speedBps) : null;
  const remainingBytes = item.size ? item.size * (1 - item.progress / 100) : null;
  const etaSeconds = (isUploading && item.speedBps > 0 && remainingBytes != null)
    ? remainingBytes / item.speedBps
    : null;
  const etaLabel = etaSeconds != null ? formatDuration(etaSeconds) : null;
  const elapsedSoFarLabel = isUploading ? formatDuration((now - item.startedAt) / 1000) : null;
  const elapsedLabel = (isDone && item.completedAt)
    ? formatDuration((item.completedAt - item.startedAt) / 1000)
    : null;

  const handleCancel = () => {
    if (item.cancelling) return;
    progressToast.cancel(item.id);
  };

  return (
    <div style={{
      opacity: item.removing ? 0 : 1,
      maxHeight: item.removing ? "0px" : "110px",
      overflow: "hidden",
      transition: "opacity 0.35s ease, max-height 0.35s ease",
    }}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-100 last:border-b-0">

        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isError ? "bg-red-50" : isDone ? "bg-emerald-50" : "bg-blue-50"
          }`}>
          <Icon className={`h-4 w-4 ${isError ? "text-red-500" : isDone ? "text-emerald-500" : "text-[#2b7fff]"
            }`} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <p className="truncate text-sm font-medium text-zinc-800">{item.name}</p>

            <div className="flex shrink-0 items-center gap-1">
              {isUploading && (
                <span className="text-xs font-semibold tabular-nums text-[#2b7fff]">
                  {item.progress}%
                </span>
              )}
              {isDone && (
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-500">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Done
                </span>
              )}
              {/* cancel while uploading */}
              {isUploading && !item.finalizing && (
                <button
                  onClick={handleCancel}
                  disabled={item.cancelling}
                  className="flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-red-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed ml-1"
                  aria-label="Cancel upload"
                >
                  <X className="h-3 w-3" />
                  {item.cancelling ? "Cancelling…" : "Cancel"}
                </button>
              )}
              {isUploading && item.finalizing && (
                <span className="text-xs font-medium text-zinc-400">Finishing…</span>
              )}
              {/* dismiss after error */}
              {isError && (
                <button
                  onClick={() => progressToast.remove(item.id)}
                  className="flex items-center gap-1 text-xs font-medium text-red-400 hover:text-red-500 transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-3 w-3" />
                  Dismiss
                </button>
              )}
            </div>
          </div>

          {!isError && (
            <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-100">
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${isDone ? "bg-emerald-500" : item.cancelling ? "bg-zinc-300" : "bg-[#2b7fff]"
                  }`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          )}

          {isUploading && (speedLabel || etaLabel) && (
            <p className="text-[11px] text-zinc-400 mt-1 tabular-nums">
              {speedLabel}
              {speedLabel && etaLabel && " · "}
              {etaLabel && `${etaLabel} left`}
            </p>
          )}

          {isUploading && elapsedSoFarLabel && (
            <p className="text-[11px] text-zinc-400 mt-0.5 tabular-nums">
              Elapsed: {elapsedSoFarLabel}
            </p>
          )}

          {elapsedLabel && (
            <p className="text-[11px] text-zinc-400 mt-1">
              Uploaded in {elapsedLabel}
            </p>
          )}

          {isError && (
            <p className="text-xs text-red-400 leading-tight">{item.error}</p>
          )}

        </div>
      </div>
    </div>
  );
}

/*  main toast  */

export function ProgressToast({ position = "bottom-right" }) {
  const items = useProgressToasts();
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prevCount = useRef(0);

  useEffect(() => {
    if (items.length > 0 && !mounted) requestAnimationFrame(() => setMounted(true));
    if (items.length === 0) setMounted(false);
  }, [items.length]);

  useEffect(() => {
    if (items.length > prevCount.current) setCollapsed(false);
    prevCount.current = items.length;
  }, [items.length]);

  if (items.length === 0) return null;

  const activeCount = items.filter((i) => i.status === "uploading").length;
  const errorCount = items.filter((i) => i.status === "error").length;
  const doneCount = items.filter((i) => i.status === "success").length;
  const allDone = activeCount === 0 && errorCount === 0;

  const headerLabel = () => {
    if (activeCount > 0) return `Uploading ${activeCount} file${activeCount > 1 ? "s" : ""}…`;
    if (errorCount > 0 && doneCount === 0) return `${errorCount} upload${errorCount > 1 ? "s" : ""} failed`;
    if (errorCount > 0) return `${doneCount} done · ${errorCount} failed`;
    return `${doneCount} upload${doneCount > 1 ? "s" : ""} complete`;
  };

  const headerBg = activeCount > 0
    ? "#2b7fff"
    : errorCount > 0 && !allDone
      ? "#ef4444"
      : "#10b981";

  const isTopPosition = position.startsWith("top");
  const posStyle = POSITIONS[position] || POSITIONS["bottom-right"];

  return (
    <div style={{
      position: "fixed",
      zIndex: 9999,
      width: "380px",
      ...posStyle,
      opacity: mounted ? 1 : 0,
      transform: `${posStyle.transform ?? ""} translateY(${mounted ? "0" : isTopPosition ? "-10px" : "10px"})`,
      transition: "opacity 0.25s ease, transform 0.25s ease",
    }}>
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">

        <button
          onClick={() => setCollapsed((c) => !c)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
          style={{ background: headerBg, border: "none", cursor: "pointer", transition: "background 0.3s ease" }}
        >
          <div className="flex items-center gap-2.5">
            <Upload className="h-4 w-4 text-white shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-white leading-tight">
                {headerLabel()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {items.length > 1 && (
              <span className="text-[11px] font-semibold text-white/70 tabular-nums">
                {doneCount}/{items.length}
              </span>
            )}
            {collapsed
              ? <ChevronUp className="h-4 w-4 text-white/80" />
              : <ChevronDown className="h-4 w-4 text-white/80" />
            }
          </div>
        </button>

        {!collapsed && (
          <div style={{ maxHeight: "280px", overflowY: "auto" }}>
            {items.map((item) => (
              <ProgressRow key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressToast;