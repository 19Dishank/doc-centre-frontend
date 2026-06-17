import { useState, useEffect } from "react"
import { AlertCircleIcon } from "lucide-react"
import Loader from "@/components/ui/loader"

export default function ImageRenderer({ file, imageUrl }) {
    const [src, setSrc] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!file && !imageUrl) return

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true)
        setError(null)

        if (file) {
            const url = URL.createObjectURL(file)
            setSrc(url)
            return () => URL.revokeObjectURL(url)
        } else if (imageUrl) {
            setSrc(imageUrl)
        }
    }, [file, imageUrl])



    return (
        <div className="w-full h-full border border-border rounded-md overflow-y-auto bg-zinc-100 flex items-center justify-center p-4">

            {src && !error && (
                <div className="relative w-full h-full flex flex-col items-center justify-center ">
                    <img
                        src={src}
                        alt={file?.name || "Document Preview"}
                        className="absolute top-0 object-contain rounded-sm shadow-sm bg-white transition-opacity duration-200"
                        onLoad={() => setLoading(false)}
                        onError={() => {
                            setError("The image file format is unsupported or the preview source is corrupted.")
                            setLoading(false)
                        }}
                    />
                </div>
            )}

            {error && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-center px-4 bg-background/80">
                    <AlertCircleIcon className="text-destructive h-8 w-8" />
                    <p className="text-sm text-destructive font-medium">
                        Failed to load Image
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                        {error}
                    </p>
                </div>
            )}
        </div>
    )
}