import { useEffect, useState } from "react"
import { AlertCircleIcon } from "lucide-react"
import Loader from "@/components/ui/loader"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { languageMap } from "@/constants/supportedFileTypes"




export default function CodeRenderer({ file, codeUrl, language }) {
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

    const isMarkdown = language === "md"
    const prismLanguage = languageMap[language] || "plaintext"

    return (
        <div className="relative w-full h-full border border-border rounded-md overflow-hidden bg-zinc-950 text-zinc-100 font-mono text-sm antialiased selection:bg-zinc-800">

            {/* Content Canvas Wrapper */}
            {!error && !loading && (
                <div className="absolute inset-0 overflow-auto">
                    {isMarkdown ? (
                        <div className="p-5 prose prose-invert prose-sm max-w-none">
                            <ReactMarkdown>{content || "*This file is empty*"}</ReactMarkdown>
                        </div>
                    ) : (
                        <SyntaxHighlighter
                            language={prismLanguage}
                            style={oneDark}
                            showLineNumbers
                            wrapLongLines={false}
                            customStyle={{
                                margin: 0,
                                padding: "1.25rem",
                                background: "transparent",
                                minHeight: "100%",
                                fontSize: "0.875rem",
                            }}
                            codeTagProps={{
                                className: "select-text",
                            }}
                        >
                            {content || "// This file is empty"}
                        </SyntaxHighlighter>
                    )}
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