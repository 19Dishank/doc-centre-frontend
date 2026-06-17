import { FileXIcon } from "lucide-react"

export default function UnsupportedRenderer({ file, extension }) {
    // Dynamically parse the extension if a file object is available
    const fallbackExtension = file?.name ? file.name.split('.').pop() : null
    const displayExtension = (extension || fallbackExtension || "").toUpperCase()

    return (
        <div className="relative w-full h-full border border-border rounded-md bg-zinc-50 flex flex-col items-center justify-center p-6 select-none animate-fade-in">
            
            <div className="flex flex-col items-center max-w-sm text-center space-y-4">
                
                {/* Visual Accent Badge */}
                <div className="h-14 w-14 rounded-xl bg-zinc-200/60 text-muted-foreground flex items-center justify-center border border-zinc-300/40 shadow-sm">
                    <FileXIcon className="h-6 w-6" />
                </div>

                {/* Main Message Block */}
                <div className="space-y-1.5">
                    <h4 className="text-sm font-medium text-zinc-800">
                        Preview not available
                    </h4>
                    <p className="text-xs text-muted-foreground leading-normal">
                        This system does not natively support rendering {displayExtension ? `.${displayExtension}` : "this"} file types inline.
                    </p>
                </div>

                {/* Subtext Action Tip */}
                {file?.name && (
                    <div className="pt-2 px-3 py-1.5 bg-zinc-100 rounded border border-zinc-200 text-[11px] text-zinc-500 max-w-xs truncate font-mono">
                        {file.name}
                    </div>
                )}
            </div>
            
        </div>
    )
}