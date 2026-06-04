import { useEffect, useState } from "react"
import { AlertCircleIcon } from "lucide-react"
import Loader from "@/components/ui/loader"

export default function TextRenderer({ file, fileUrl }) {
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!file && !fileUrl) return

        let cancelled = false

        const readTextContent = async () => {
            try {
                setLoading(true)
                setError(null)
                let text = ""

                if (file) {
                    text = await file.text()
                } else if (fileUrl) {
                    const response = await fetch(fileUrl)
                    if (!response.ok) {
                        throw new Error(`Server responded with status: ${response.status}`)
                    }
                    text = await response.text()
                }

                if (!cancelled) {
                    setContent(text)
                    setLoading(false)
                }
            } catch (err) {
                console.error(err)
                if (!cancelled) {
                    setError("Unable to open or read the text file cleanly.")
                    setLoading(false)
                }
            }
        }

        readTextContent()

        return () => {
            cancelled = true
        }
    }, [file, fileUrl])

    return (
        <div className="relative w-full h-full border border-border rounded-md overflow-hidden bg-background text-foreground antialiased selection:bg-zinc-200">
            
            {!error && !loading && (
                <div className="absolute inset-0 overflow-auto p-6 md:p-8 flex justify-center">
                    <div className="w-full max-w-3xl text-left text-sm leading-relaxed whitespace-pre-wrap wrap-break-word font-normal">
                        {content || (
                            <span className="text-muted-foreground italic">
                                This document is empty.
                            </span>
                        )}
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
                    <p className="text-sm text-destructive font-medium">
                        Failed to load Document
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                        {error}
                    </p>
                </div>
            )}
        </div>
    )
}