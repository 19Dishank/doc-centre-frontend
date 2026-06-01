import { useEffect, useState } from "react"
import { AlertCircleIcon } from "lucide-react"
import Loader from "@/components/ui/loader"

export default function CodeRenderer({ file, codeUrl }) {
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!file && !codeUrl) return

        let cancelled = false

        const readTextFile = async () => {
            try {
                setLoading(true)
                setError(null)
                let text = ""

                if (file) {
                    text = await file.text()
                } else if (codeUrl) {
                    const response = await fetch(codeUrl)
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
                    setError("Failed to read the raw source code content.")
                    setLoading(false)
                }
            }
        }

        readTextFile()

        return () => {
            cancelled = true
        }
    }, [file, codeUrl])

    return (
        <div className="relative w-full h-full border border-border rounded-md overflow-hidden bg-zinc-950 text-zinc-100 font-mono text-sm antialiased selection:bg-zinc-800">
            
            {/* Code Content Canvas Wrapper */}
            {!error && !loading && (
                <div className="absolute inset-0 overflow-auto p-5 text-left leading-relaxed whitespace-pre tab-size-4">
                    <code className="block select-text min-w-full">
                        {content || "// This file is empty"}
                    </code>
                </div>
            )}

            {/* Central Loader Overlay */}
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm">
                    <Loader />
                </div>
            )}

            {/* Error Message UI Box */}
            {error && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-center px-4 bg-zinc-950/90">
                    <AlertCircleIcon className="text-destructive h-8 w-8" />
                    <p className="text-sm text-destructive font-medium">
                        Failed to load Code File
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                        {error}
                    </p>
                </div>
            )}
        </div>
    )
}