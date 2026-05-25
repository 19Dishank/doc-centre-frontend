import { BASE_SCALE } from "@/constants"
import { loadPdfJs } from "@/helper/loadPdfJs"
import { AlertCircleIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Loader from "@/components/ui/loader"

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

            const viewport = page.getViewport({ scale })

            const wrapperWidth = wrapperRef.current.clientWidth

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
            className=" relative rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.15)] w-full flex justify-center"
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

export default function PDFRenderer({
    file,
    pdfUrl,
}) {
    const [pdfDoc, setPdfDoc] = useState(null)
    const [totalPages, setTotalPages] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const hasDoc = !!pdfDoc && !loading && !error

    useEffect(() => {
        if (!file && !pdfUrl) return

        let cancelled = false

        const load = async () => {
            setError(null)
            setLoading(true)

            try {
                const pdfjsLib = await loadPdfJs()

                let documentSource = null

                // Local file support
                if (file) {
                    const arrayBuffer = await file.arrayBuffer()

                    documentSource = {
                        data: arrayBuffer,
                    }
                }

                // Cloud URL support
                else if (pdfUrl) {
                    documentSource = {
                        url: pdfUrl,
                    }
                }

                const doc = await pdfjsLib
                    .getDocument(documentSource)
                    .promise

                if (cancelled) return

                setPdfDoc(doc)
                setTotalPages(doc.numPages)
            } catch (err) {
                console.error(err)

                if (!cancelled) {
                    setError(
                        "Failed to load PDF. Please make sure the file or URL is valid."
                    )
                }
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        load()

        return () => {
            cancelled = true
        }
    }, [file, pdfUrl])

    return (
        <>
            <div className="min-h-80 flex flex-col items-center gap-4 p-6 max-h-150 w-full overflow-y-auto bg-muted/20">

                {loading && <Loader />}

                {error && (
                    <div className="flex flex-col items-center justify-center min-h-80 gap-3 text-center px-4">
                        <AlertCircleIcon />

                        <p className="text-sm text-destructive font-medium">
                            Failed to load PDF
                        </p>

                        <p className="text-xs text-muted-foreground max-w-xs">
                            {error}
                        </p>
                    </div>
                )}

                {hasDoc &&
                    Array.from(
                        { length: totalPages },
                        (_, i) => i + 1
                    ).map((n) => (
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
        </>
    )
}