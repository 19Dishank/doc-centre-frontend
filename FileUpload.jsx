import { useState, useRef, useCallback, useEffect } from "react"

// ─── Icons ───────────────────────────────────────────────────────────────────

const FileIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-blue-500 shrink-0"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const ZoomInIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
)

const ZoomOutIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const XIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const UploadCloudIcon = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-muted-foreground"
  >
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
)

const AlertCircleIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-destructive"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

// ─── Helpers ─────────────────────────────────────────────────────────────────

const formatSize = bytes => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1_048_576) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1_048_576).toFixed(1)} MB`
}

const MIN_SCALE = 0.5
const MAX_SCALE = 3.0
const BASE_SCALE = 1.4

const loadPdfJs = () =>
  new Promise((resolve, reject) => {
    if (window.pdfjsLib) return resolve(window.pdfjsLib)
    const script = document.createElement("script")
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
    script.onload = () => {
      const lib = window.pdfjsLib
      lib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"
      resolve(lib)
    }
    script.onerror = reject
    document.head.appendChild(script)
  })

// ─── IconButton ───────────────────────────────────────────────────────────────

const IconButton = ({ onClick, disabled = false, title, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={title}
    className="
      inline-flex items-center justify-center
      w-[30px] h-[30px] rounded-md
      border border-border bg-transparent
      text-muted-foreground
      transition-colors duration-100
      hover:bg-accent hover:text-accent-foreground
      disabled:opacity-40 disabled:cursor-not-allowed
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    "
  >
    {children}
  </button>
)

// ─── Separator ────────────────────────────────────────────────────────────────

const Separator = () => <div className="w-px h-5 bg-border mx-1 shrink-0" />

// ─── PageCanvas ───────────────────────────────────────────────────────────────

const PageCanvas = ({ pdfDoc, pageNum, scale, totalPages, showBadge }) => {
  const canvasRef = useRef(null)
  const renderTaskRef = useRef(null)

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return
    let cancelled = false

    const render = async () => {
      renderTaskRef.current?.cancel()

      const page = await pdfDoc.getPage(pageNum)
      if (cancelled) return

      const viewport = page.getViewport({ scale })
      const canvas = canvasRef.current
      canvas.width = viewport.width
      canvas.height = viewport.height

      const ctx = canvas.getContext("2d")
      const task = page.render({ canvasContext: ctx, viewport })
      renderTaskRef.current = task

      try {
        await task.promise
      } catch {
        // cancelled — no-op
      }
    }

    render()

    return () => {
      cancelled = true
      renderTaskRef.current?.cancel()
    }
  }, [pdfDoc, pageNum, scale])

  return (
    <div className="relative rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
      <canvas ref={canvasRef} className="block" />
      {showBadge && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[11px] px-2 py-0.5 rounded-full pointer-events-none select-none">
          {pageNum} / {totalPages}
        </div>
      )}
    </div>
  )
}

// ─── DropZone ─────────────────────────────────────────────────────────────────

const DropZone = ({ onFile }) => {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleDrop = useCallback(
    e => {
      e.preventDefault()
      setDragging(false)
      const file = e.dataTransfer.files[0]
      if (file?.type === "application/pdf") onFile(file)
    },
    [onFile]
  )

  return (
    <div
      onDragOver={e => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`
        flex flex-col items-center justify-center gap-3
        min-h-[380px] w-full p-8 text-center cursor-pointer rounded-xl
        border-2 border-dashed transition-colors duration-150
        ${
          dragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-muted-foreground/40 hover:bg-muted/20"
        }
      `}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-muted border border-border flex items-center justify-center mb-1">
        <UploadCloudIcon />
      </div>

      <p className="text-[15px] font-medium text-foreground">Drop a PDF here</p>
      <p className="text-sm text-muted-foreground">
        or click to browse your files
      </p>

      {/* Fake button */}
      <div className="inline-flex items-center gap-1.5 h-9 px-4 mt-1 rounded-md border border-border bg-background text-sm font-medium text-foreground pointer-events-none">
        <svg
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 16 12 12 8 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
        </svg>
        Choose PDF
      </div>

      <p className="text-xs text-muted-foreground/60 mt-1">
        Supports any valid PDF file
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        className="hidden"
        onChange={e => {
          if (e.target.files?.[0]) onFile(e.target.files[0])
        }}
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

const Spinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[320px] gap-3 text-muted-foreground text-sm">
    <div className="w-7 h-7 rounded-full border-2 border-border border-t-primary animate-spin" />
    Loading PDF…
  </div>
)

// ─── PDFPreviewer ─────────────────────────────────────────────────────────────

export default function PDFPreviewer() {
  const [pdfDoc, setPdfDoc] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [scale, setScale] = useState(BASE_SCALE)
  const [showAll, setShowAll] = useState(false)
  const [fileInfo, setFileInfo] = useState(null)
  const [status, setStatus] = useState("Ready")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [pageInputVal, setPageInputVal] = useState("1")

  const currentFileRef = useRef(null)

  const zoomPercent = Math.round((scale / BASE_SCALE) * 100)
  const hasDoc = !!pdfDoc && !loading && !error

  // ── File loading ────────────────────────────────────────────────────────────

  const handleFile = useCallback(async file => {
    setError(null)
    setLoading(true)
    setStatus("Loading PDF…")
    currentFileRef.current = file
    setFileInfo({ name: file.name, size: formatSize(file.size) })

    try {
      const pdfjsLib = await loadPdfJs()
      const arrayBuffer = await file.arrayBuffer()
      const doc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

      setPdfDoc(doc)
      setTotalPages(doc.numPages)
      setCurrentPage(1)
      setPageInputVal("1")
      setShowAll(false)
      setStatus(`${doc.numPages} page${doc.numPages !== 1 ? "s" : ""} loaded`)
    } catch {
      setError("Failed to load PDF. Please make sure the file is a valid PDF.")
      setStatus("Error")
      setFileInfo(null)
    } finally {
      setLoading(false)
    }
  }, [])

  // ── Actions ─────────────────────────────────────────────────────────────────

  const handleClose = () => {
    setPdfDoc(null)
    setTotalPages(0)
    setCurrentPage(1)
    setPageInputVal("1")
    setShowAll(false)
    setFileInfo(null)
    setError(null)
    setStatus("Ready")
    currentFileRef.current = null
  }

  const handleDownload = () => {
    const file = currentFileRef.current
    if (!file) return
    const url = URL.createObjectURL(file)
    const a = document.createElement("a")
    a.href = url
    a.download = file.name
    a.click()
    URL.revokeObjectURL(url)
  }

  const goToPage = p => {
    const clamped = Math.max(1, Math.min(totalPages, p))
    setCurrentPage(clamped)
    setPageInputVal(String(clamped))
    setStatus(`Page ${clamped} of ${totalPages}`)
  }

  const handleZoom = delta => {
    setScale(s => {
      const next = Math.round((s + delta) * 10) / 10
      return Math.max(MIN_SCALE, Math.min(MAX_SCALE, next))
    })
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="py-6 font-sans w-fit mx-auto">
      <div className="rounded-xl border border-border bg-card text-card-foreground overflow-hidden shadow-sm w-fit">
        {/* ── Toolbar ── */}
        {fileInfo && (
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/60 gap-3 flex-wrap">
            {/* Left */}
            <div className="flex items-center gap-2 min-w-0">
              <FileIcon />
              <span
                className="text-[13px] font-medium text-foreground truncate max-w-[200px]"
                title={fileInfo.name}
              >
                {fileInfo.name}
              </span>
            </div>

            {/* Center */}
            {hasDoc && (
              <div className="flex items-center gap-1.5">
                <IconButton
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage <= 1 || showAll}
                  title="Previous page"
                >
                  <ChevronLeftIcon />
                </IconButton>

                <input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={pageInputVal}
                  disabled={showAll}
                  onChange={e => setPageInputVal(e.target.value)}
                  onBlur={() => goToPage(parseInt(pageInputVal) || 1)}
                  onKeyDown={e => {
                    if (e.key === "Enter") goToPage(parseInt(pageInputVal) || 1)
                  }}
                  className="
                    w-10 h-7 text-center text-[13px]
                    border border-border rounded-md
                    bg-background text-foreground
                    focus:outline-none focus:ring-2 focus:ring-ring
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                />

                <span className="text-[13px] text-muted-foreground whitespace-nowrap">
                  / {totalPages}
                </span>

                <IconButton
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage >= totalPages || showAll}
                  title="Next page"
                >
                  <ChevronRightIcon />
                </IconButton>

                <Separator />

                <button
                  onClick={() => setShowAll(v => !v)}
                  className={`
                    text-xs px-2.5 h-7 rounded-md border
                    transition-colors duration-100
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                    ${
                      showAll
                        ? "bg-primary/10 text-primary border-transparent font-medium"
                        : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }
                  `}
                >
                  All pages
                </button>
              </div>
            )}

            {/* Right */}
            <div className="flex items-center gap-1.5">
              {hasDoc && (
                <>
                  <IconButton
                    onClick={() => handleZoom(-0.2)}
                    disabled={scale <= MIN_SCALE}
                    title="Zoom out"
                  >
                    <ZoomOutIcon />
                  </IconButton>

                  <span className="text-xs text-muted-foreground min-w-[38px] text-center tabular-nums">
                    {zoomPercent}%
                  </span>

                  <IconButton
                    onClick={() => handleZoom(0.2)}
                    disabled={scale >= MAX_SCALE}
                    title="Zoom in"
                  >
                    <ZoomInIcon />
                  </IconButton>

                  <Separator />

                  <IconButton onClick={handleDownload} title="Download PDF">
                    <DownloadIcon />
                  </IconButton>
                </>
              )}

              <IconButton onClick={handleClose} title="Close">
                <XIcon />
              </IconButton>
            </div>
          </div>
        )}

        {/* ── Viewer ── */}
        <div className="flex flex-col items-center gap-4 p-6 min-h-[400px] max-h-[640px] overflow-y-auto bg-muted/20">
          {!fileInfo && <DropZone onFile={handleFile} />}

          {loading && <Spinner />}

          {error && (
            <div className="flex flex-col items-center justify-center min-h-[320px] gap-3 text-center px-4">
              <AlertCircleIcon />
              <p className="text-sm text-destructive font-medium">
                Failed to load PDF
              </p>
              <p className="text-xs text-muted-foreground max-w-xs">{error}</p>
              <button
                onClick={handleClose}
                className="
                  mt-2 text-xs px-4 h-8 rounded-md
                  border border-border bg-background text-foreground
                  hover:bg-accent transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                "
              >
                Try again
              </button>
            </div>
          )}

          {/* All pages */}
          {hasDoc &&
            showAll &&
            Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <PageCanvas
                key={`page-${n}-${scale}`}
                pdfDoc={pdfDoc}
                pageNum={n}
                scale={scale}
                totalPages={totalPages}
                showBadge={totalPages > 1}
              />
            ))}

          {/* Single page */}
          {hasDoc && !showAll && (
            <PageCanvas
              key={`page-${currentPage}-${scale}`}
              pdfDoc={pdfDoc}
              pageNum={currentPage}
              scale={scale}
              totalPages={totalPages}
              showBadge={false}
            />
          )}
        </div>

        {/* ── Status bar ── */}
        {fileInfo && (
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-border bg-muted/60">
            <span className="text-xs text-muted-foreground">{status}</span>
            {hasDoc && (
              <span className="text-xs text-muted-foreground">
                PDF · {fileInfo.size}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
