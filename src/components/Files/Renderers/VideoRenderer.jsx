import { useState, useEffect } from "react"
import { AlertCircleIcon } from "lucide-react"
import Loader from "@/components/ui/loader"

export default function VideoRenderer({ file, videoUrl }) {
    const [src, setSrc] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!file && !videoUrl) return

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true)
        setError(null)

        if (file) {
            const url = URL.createObjectURL(file)
            setSrc(url)
            return () => URL.revokeObjectURL(url)
        } else if (videoUrl) {
            setSrc(videoUrl)
        }
    }, [file, videoUrl])

    
    return (
        <div className="relative w-full h-full border border-border rounded-md overflow-hidden bg-zinc-950 flex items-center justify-center select-none">
            
            {src && !error && (
                <video
                    src={src}
                    controls
                    controlsList="nodownload"
                    className="w-full h-full max-h-full max-w-full object-contain z-0"
                    onLoadedData={() => setLoading(false)}
                    onError={() => {
                        setError("Video format is either unsupported or the preview path is broken.")
                        setLoading(false)
                    }}
                />
            )}

            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
                    <Loader />
                </div>
            )}

            {error && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-center px-4 bg-zinc-900/90 text-zinc-100">
                    <AlertCircleIcon className="text-destructive h-8 w-8" />
                    <p className="text-sm font-medium">
                        Failed to play Video
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                        {error}
                    </p>
                </div>
            )}
        </div>
    )
}