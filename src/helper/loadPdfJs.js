// helper/loadPdfJs.js

export const loadPdfJs = async () => {
    const pdfjsLib = await import("pdfjs-dist")
    const pdfjsViewer = await import("pdfjs-dist/web/pdf_viewer")

    pdfjsLib.GlobalWorkerOptions.workerSrc =
        new URL(
            "pdfjs-dist/build/pdf.worker.min.mjs",
            import.meta.url
        ).toString()

    return {
        pdfjsLib,
        pdfjsViewer,
    }
}