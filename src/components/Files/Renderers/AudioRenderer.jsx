import { useState, useEffect, useRef } from "react"
import { AlertCircleIcon, MusicIcon } from "lucide-react"
import Loader from "@/components/ui/loader"

export default function AudioRenderer({ file, audioUrl }) {
    const audioRef = useRef(null)
    const [src, setSrc] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!file && !audioUrl) return

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true)
        setError(null)

        if (file) {
            const url = URL.createObjectURL(file)
            setSrc(url)
            return () => URL.revokeObjectURL(url)
        } else if (audioUrl) {
            setSrc(audioUrl)
        }
    }, [file, audioUrl])

    const handleCanPlay = () => {
        setLoading(false)
    }

    const handleAudioError = () => {
        setError("Failed to load audio. Format might be unsupported or link is broken.")
        setLoading(false)
    }

    return (
        <div className="relative w-full h-full border border-border rounded-md overflow-hidden bg-zinc-100 flex flex-col items-center justify-center p-6 select-none">

            {/* Audio Visual Dashboard Card */}
            {src && !error && (
                <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 bg-background rounded-xl border border-border/60 shadow-sm transition-all duration-200">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse-slow">
                        <MusicIcon className="h-7 w-7" />
                    </div>

                    <div className="w-full text-center space-y-1">
                        <p className="text-sm font-medium truncate px-2">
                            {file ? file.name : "Audio Track Player"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : "Streaming Asset"}
                        </p>
                    </div>

                    <audio
                        ref={audioRef}
                        src={src}
                        controls
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-10 mt-2 focus:outline-none"
                        onCanPlay={handleCanPlay}
                        onError={handleAudioError}
                    />

                </div>
            )}

            {/* Central Loader Overlay */}
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                    <Loader />
                </div>
            )}

            {/* Error Message UI Box */}
            {error && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-center px-4 bg-background/80">
                    <AlertCircleIcon className="text-destructive h-8 w-8" />
                    <p className="text-sm text-destructive font-medium">
                        Failed to play Audio
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                        {error}
                    </p>
                </div>
            )}
        </div>
    )
}