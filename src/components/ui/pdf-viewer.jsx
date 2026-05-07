import { BASE_SCALE } from "@/constants"
import { loadPdfJs } from "@/helper/loadPdfJs"
import {
    AlertCircleIcon,
    FileIcon,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Spinner } from "./spinner"
import { formatSize } from "@/helper/formatSize"


const PageCanvas = ({ pdfDoc, pageNum, scale, totalPages, showBadge }) => {
    const canvasRef = useRef(null)
    const wrapperRef = useRef(null)
    const renderTaskRef = useRef(null)

    useEffect(() => {
        if (!pdfDoc || !canvasRef.current || !wrapperRef.current) return

        let cancelled = false

        const render = async () => {
            renderTaskRef.current?.cancel()

            const page = await pdfDoc.getPage(pageNum)
            if (cancelled) return

            // original viewport
            const viewport = page.getViewport({ scale })

            const wrapperWidth = wrapperRef.current.clientWidth

            // fit inside container
            const fitScale = Math.min(1, wrapperWidth / viewport.width)

            const scaledViewport = page.getViewport({
                scale: scale * fitScale,
            })

            const canvas = canvasRef.current
            canvas.width = scaledViewport.width
            canvas.height = scaledViewport.height

            const ctx = canvas.getContext("2d")

            const task = page.render({
                canvasContext: ctx,
                viewport: scaledViewport,
            })

            renderTaskRef.current = task

            try {
                await task.promise
            } catch {
                // cancelled
            }
        }

        render()

        return () => {
            cancelled = true
            renderTaskRef.current?.cancel()
        }
    }, [pdfDoc, pageNum, scale])

    return (
        <div
            ref={wrapperRef}
            className="relative rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.15)] w-full flex justify-center"
        >
            <canvas
                ref={canvasRef}
                className="block max-w-full h-auto"
            />

            {showBadge && (
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[11px] px-2 py-0.5 rounded-full pointer-events-none select-none">
                    {pageNum} / {totalPages}
                </div>
            )}
        </div>
    )
}

/**
 * PDFPreviewer
 *
 * Props:
 * @param {File}     file       - The PDF File object to display
 * @param {string}   fileName   - Display name of the file
 * @param {string}   fileSize   - Pre-formatted file size string (e.g. "1.2 MB")
 * @param {Function} onClose    - Called when the user clicks the close (×) button
 * @param {Function} onDownload - Called when the user clicks the download button
 *                                (falls back to creating an object URL from `file` if omitted)
 */

export default function PDFPreviewer({ file }) {
    const [pdfDoc, setPdfDoc] = useState(null)
    const [totalPages, setTotalPages] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const hasDoc = !!pdfDoc && !loading && !error

    const fileName = file?.name || "Unknown.pdf"
    const fileSize = file ? formatSize(file.size) : null

    useEffect(() => {
        if (!file) return

        let cancelled = false

        const load = async () => {
            setError(null)
            setLoading(true)

            try {
                const pdfjsLib = await loadPdfJs()
                const arrayBuffer = await file.arrayBuffer()
                const doc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

                if (cancelled) return

                setPdfDoc(doc)
                setTotalPages(doc.numPages)
            } catch {
                if (!cancelled) {
                    setError("Failed to load PDF. Please make sure the file is a valid PDF.")
                }
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        load()
        return () => { cancelled = true }
    }, [file])

    return (
        <div className="font-sans w-full mx-auto">
            <div className="rounded-xl border border-border bg-card text-card-foreground overflow-hidden shadow-sm w-full">

                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/60 gap-3 flex-wrap">
                    <div className="flex items-center gap-2 min-w-0">
                        <FileIcon />
                        <span
                            className="text-[13px] font-medium text-foreground truncate max-w-50"
                            title={fileName}
                        >
                            {fileName}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 min-h-100 max-h-160 w-full overflow-y-auto bg-muted/20">

                    {loading && <Spinner />}

                    {error && (
                        <div className="flex flex-col items-center justify-center min-h-80 gap-3 text-center px-4">
                            <AlertCircleIcon />
                            <p className="text-sm text-destructive font-medium">Failed to load PDF</p>
                            <p className="text-xs text-muted-foreground max-w-xs">{error}</p>
                        </div>
                    )}

                    {hasDoc && Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                        <PageCanvas
                            key={`page-${n}`}
                            pdfDoc={pdfDoc}
                            pageNum={n}
                            scale={BASE_SCALE}
                            totalPages={totalPages}
                            showBadge={totalPages > 1}
                        />
                    ))}
                </div>

                <div className="px-4 py-1.5 text-right border-t border-border bg-muted/60">
                    {hasDoc && fileSize && (
                        <span className="text-xs text-muted-foreground">PDF · {fileSize}</span>
                    )}
                </div>
            </div>
        </div>
    )
}