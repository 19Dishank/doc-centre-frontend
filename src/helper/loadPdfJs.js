export const loadPdfJs = () =>
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