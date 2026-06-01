import { useEffect, useRef, useState } from "react"
import { AlertCircleIcon } from "lucide-react"

import Loader from "@/components/ui/loader"

import * as pdfjsLib from "pdfjs-dist"
import {
    EventBus,
    PDFViewer,
} from "pdfjs-dist/web/pdf_viewer"

import "pdfjs-dist/web/pdf_viewer.css"

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString()

export default function PDFRenderer({
    file,
    pdfUrl,
}) {
    const containerRef = useRef(null)
    const viewerRef = useRef(null)

    const pdfViewerRef = useRef(null)
    const pdfDocRef = useRef(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!file && !pdfUrl) return

        let cancelled = false

        const loadPdf = async () => {
            try {
                setLoading(true)
                setError(null)

                if (
                    !containerRef.current ||
                    !viewerRef.current
                ) {
                    return
                }

                // Cleanup old viewer instance completely
                if (pdfViewerRef.current) {
                    pdfViewerRef.current.cleanup()
                    pdfViewerRef.current = null
                }

                // Cleanup old document instance
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

                const eventBus = new EventBus()

                // Create viewer with explicit configurations
                const pdfViewer = new PDFViewer({
                    container: containerRef.current,
                    viewer: viewerRef.current,
                    eventBus,
                    textLayerMode: 2, // Enable text selection layering
                })

                pdfViewerRef.current = pdfViewer
                pdfViewer.setDocument(pdfDoc)

                // CRITICAL FIX: Wait for the document to initialize in the viewer 
                // before enforcing the "page-width" calculation.
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
            try {
                if (pdfViewerRef.current) {
                    pdfViewerRef.current.cleanup()
                    pdfViewerRef.current = null
                }
                if (pdfDocRef.current) {
                    pdfDocRef.current.destroy()
                    pdfDocRef.current = null
                }
            } catch (err) {
                console.error(err)
            }
        }
    }, [file, pdfUrl])

    return (
        <div className="relative w-full h-full border border-border rounded-md overflow-hidden bg-zinc-100">
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-auto p-4 flex justify-center"
            >
                <div
                    ref={viewerRef}
                    className="pdfViewer singlePageView"
                />
            </div>
            
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                    <Loader />
                </div>
            )}

            {error && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-center px-4 bg-background/80">
                    <AlertCircleIcon className="text-destructive h-8 w-8" />
                    <p className="text-sm text-destructive font-medium">
                        Failed to load PDF
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                        {error}
                    </p>
                </div>
            )}
        </div>
    )
}