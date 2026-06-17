import { useEffect, useRef, useState, useCallback } from "react"
import { AlertCircleIcon, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import Loader from "@/components/ui/loader"
import * as pdfjsLib from "pdfjs-dist"
import { EventBus, PDFViewer } from "pdfjs-dist/web/pdf_viewer"
import "pdfjs-dist/web/pdf_viewer.css"

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString()

export default function PDFRenderer({ file, pdfUrl }) {
    const containerRef = useRef(null)
    const viewerRef = useRef(null)
    const pdfViewerRef = useRef(null)
    const pdfDocRef = useRef(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [pageInput, setPageInput] = useState("1")
    const [totalPages, setTotalPages] = useState(0)
    const [scale, setScale] = useState(100)

    useEffect(() => {
        if (!file && !pdfUrl) return
        let cancelled = false

        const loadPdf = async () => {
            try {
                setLoading(true)
                setError(null)

                if (!containerRef.current || !viewerRef.current) return

                if (pdfViewerRef.current) {
                    pdfViewerRef.current.cleanup()
                    pdfViewerRef.current = null
                }
                if (pdfDocRef.current) {
                    await pdfDocRef.current.destroy()
                    pdfDocRef.current = null
                }

                let source = null
                if (file) {
                    const arrayBuffer = await file.arrayBuffer()
                    source = { data: arrayBuffer }
                } else if (pdfUrl) {
                    source = { url: pdfUrl }
                }

                const loadingTask = pdfjsLib.getDocument(source)
                const pdfDoc = await loadingTask.promise
                if (cancelled) return

                pdfDocRef.current = pdfDoc
                setTotalPages(pdfDoc.numPages)

                const eventBus = new EventBus()
                const pdfViewer = new PDFViewer({
                    container: containerRef.current,
                    viewer: viewerRef.current,
                    eventBus,
                    textLayerMode: 2,
                })

                pdfViewerRef.current = pdfViewer
                pdfViewer.setDocument(pdfDoc)

                eventBus.on("pagechanging", (evt) => {
                    if (!cancelled) {
                        setPage(evt.pageNumber)
                        setPageInput(evt.pageNumber.toString())
                    }
                })

                eventBus.on("scalechanging", (evt) => {
                    if (!cancelled) setScale(Math.round(evt.scale * 100))
                })

                eventBus.on("pagesinit", () => {
                    pdfViewer.currentScaleValue = "page-width"
                    if (!cancelled) setLoading(false)
                })
            } catch (err) {
                console.error(err)
                if (!cancelled) {
                    setError("Failed to load PDF. Please check the file or URL.")
                    setLoading(false)
                }
            }
        }

        loadPdf()

        return () => {
            cancelled = true
            if (pdfViewerRef.current) pdfViewerRef.current.cleanup()
            if (pdfDocRef.current) pdfDocRef.current.destroy()
        }
    }, [file, pdfUrl])

    const goToPage = useCallback((pageNumber) => {
        if (!pdfViewerRef.current || !containerRef.current) return
        if (pageNumber < 1 || pageNumber > totalPages) return

        const pageEl = viewerRef.current?.querySelector(
            `.page[data-page-number="${pageNumber}"]`
        )

        if (pageEl) {
            const GAP = 16 
            containerRef.current.scrollTop = pageEl.offsetTop - GAP
        } else {
            pdfViewerRef.current.currentPageNumber = pageNumber
        }

        setPage(pageNumber)
        setPageInput(pageNumber.toString())
    }, [totalPages])

    const handleZoomIn = () => {
        if (!pdfViewerRef.current) return
        pdfViewerRef.current.currentScale = Math.min(
            pdfViewerRef.current.currentScale * 1.1, 3.0
        )
    }

    const handleZoomOut = () => {
        if (!pdfViewerRef.current) return
        pdfViewerRef.current.currentScale = Math.max(
            pdfViewerRef.current.currentScale * 0.9, 0.5
        )
    }

    const handleFitWidth = () => {
        if (!pdfViewerRef.current) return
        pdfViewerRef.current.currentScaleValue = "page-width"
    }

    const handlePrevPage = () => {
        const cur = pdfViewerRef.current?.currentPageNumber ?? page
        goToPage(cur - 1)
    }

    const handleNextPage = () => {
        const cur = pdfViewerRef.current?.currentPageNumber ?? page
        goToPage(cur + 1)
    }

    const handlePageSubmit = () => {
        const parsed = parseInt(pageInput, 10)
        if (!isNaN(parsed) && parsed >= 1 && parsed <= totalPages) {
            goToPage(parsed)
        } else {
            setPageInput((pdfViewerRef.current?.currentPageNumber ?? page).toString())
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        handlePageSubmit()
    }, [pageInput])

    return (
        <div className="relative w-full h-full border border-border rounded-md overflow-hidden bg-[#2a2a2a]">
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-auto p-4 flex justify-center pdf-container"
            >
                <div ref={viewerRef} className="pdfViewer singlePageView relative" />
            </div>

            {!loading && !error && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-[#1e1e1f] text-white px-3 py-1.5 rounded-full shadow-2xl border border-neutral-800 text-sm select-none">
                    <div className="flex items-center gap-1.5 px-1">
                        <button
                            disabled={page <= 1}
                            onClick={handlePrevPage}
                            className="p-1 hover:bg-neutral-800 disabled:opacity-40 rounded-full transition-colors"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        <div className="flex items-center gap-1">
                            <input
                                type="number"
                                min={1}
                                max={totalPages}
                                value={pageInput}
                                onChange={(e) => setPageInput(e.target.value)}
                                className="w-10 bg-neutral-800 text-center rounded py-0.5 border border-neutral-700 outline-none focus:border-blue-500 text-xs text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <span className="text-neutral-400 text-xs px-0.5">/</span>
                            <span className="text-xs text-neutral-300 min-w-3.5">{totalPages}</span>
                        </div>

                        <button
                            disabled={page >= totalPages}
                            onClick={handleNextPage}
                            className="p-1 hover:bg-neutral-800 disabled:opacity-40 rounded-full transition-colors"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="w-px h-4 bg-neutral-700 mx-1" />

                    <div className="flex items-center gap-1">
                        <button onClick={handleZoomOut} className="p-1 hover:bg-neutral-800 rounded-full transition-colors" title="Zoom Out">
                            <ZoomOut className="h-4 w-4" />
                        </button>
                        <span className="text-xs font-medium inline-block w-12 text-center text-neutral-200">{scale}%</span>
                        <button onClick={handleZoomIn} className="p-1 hover:bg-neutral-800 rounded-full transition-colors" title="Zoom In">
                            <ZoomIn className="h-4 w-4" />
                        </button>
                        <button onClick={handleFitWidth} className="p-1 hover:bg-neutral-800 rounded-full transition-colors ml-0.5" title="Fit Width">
                            <Maximize2 className="h-3.5 w-3.5 text-neutral-400 hover:text-white" />
                        </button>
                    </div>
                </div>
            )}

            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                    <Loader />
                </div>
            )}

            {error && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-center px-4 bg-background/80">
                    <AlertCircleIcon className="text-destructive h-8 w-8" />
                    <p className="text-sm text-destructive font-medium">Failed to load PDF</p>
                    <p className="text-xs text-muted-foreground max-w-xs">{error}</p>
                </div>
            )}
        </div>
    )
}