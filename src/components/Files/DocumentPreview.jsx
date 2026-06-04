import { X, Download, Loader2 } from "lucide-react";
import PDFRenderer from "./Renderers/PDFRenderer";
import { formatSize } from "@/helper/formatSize";
import { downloadFile, getPresignedURLForView } from "@/api/file";
import ImageRenderer from "./Renderers/ImageRenderer";
import VideoRenderer from "./Renderers/VideoRenderer";
import AudioRenderer from "./Renderers/AudioRenderer";
import CodeRenderer from "./Renderers/CodeRenderer";
import TextRenderer from "./Renderers/TextRenderer";
import UnsupportedRenderer from "./Renderers/UnsupportedRenderer";
import { useEffect, useState } from "react";
import { getRegistryIcon } from "@/helper/getRegistryIcon";

const DocumentPreview = ({ setIsOpen, item }) => {

    const [preSignedUrl, setPreSignedUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const viewFile = async (id) => {
        setLoading(true);
        try {
            const res = await getPresignedURLForView(id);
            setPreSignedUrl(res.data.url);
        } catch (error) {
            console.error("Error viewing file:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        viewFile(item._id);
    }, [item._id])

    const type = item?.originalFileName?.split(".").pop()?.toLowerCase();

    const getRenderer = () => {

        const imageTypes = ["png", "jpg", "jpeg", "gif", "webp", "svg"];
        const videoTypes = ["mp4", "webm", "ogg", "mov"];
        const audioTypes = ["mp3", "wav", "ogg"];
        const codeTypes = ["js", "jsx", "ts", "tsx", "json", "html", "css", "py", "java", "cpp", "c",];
        const textTypes = ["txt", "md"];

        if (type === "pdf") {
            return <PDFRenderer pdfUrl={preSignedUrl} />;
        }

        if (imageTypes.includes(type)) {
            return <ImageRenderer imageUrl={preSignedUrl} />;
        }

        if (videoTypes.includes(type)) {
            return <VideoRenderer videoUrl={preSignedUrl} />;
        }

        if (audioTypes.includes(type)) {
            return <AudioRenderer audioUrl={preSignedUrl} />;
        }

        if (codeTypes.includes(type)) {
            return <CodeRenderer codeUrl={preSignedUrl} language={type} />;
        }

        if (textTypes.includes(type)) {
            return <TextRenderer fileUrl={preSignedUrl} />;
        }

        return <UnsupportedRenderer />;
    };


    const handleDownload = () => {
        downloadFile(item._id);
    };

    return (
        <div className="bg-zinc-950/40 flex fixed inset-0 justify-center items-center z-100 backdrop-blur">
            <div className="rounded-xl border border-border bg-card text-card-foreground overflow-hidden shadow-sm w-full max-w-3xl mx-4">

                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/60 gap-3 flex-wrap">
                    <div className="flex items-center gap-2 min-w-0">
                        {getRegistryIcon(item)}
                        <span className="text-[13px] font-medium text-foreground truncate max-w-50">
                            {item?.originalFileName || "Document.pdf"}
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Close preview"
                    >
                        <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </button>
                </div>

                {loading ? (
                    <div className="p-40 flex items-center justify-center">
                        <Loader2 className="size-10 animate-spin" />
                    </div>
                ) : (
                    <div className="p-4 h-150 flex items-center justify-center">
                        {getRenderer()}
                    </div>
                )}

                <div className="px-4 py-2 flex items-center justify-between border-t border-border bg-muted/60">
                    <span className="text-xs text-muted-foreground uppercase">
                        {type} · {formatSize(item?.size)}
                    </span>
                    <button
                        onClick={handleDownload}
                        className="cursor-pointer flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                    >
                        <Download className="size-3.5" />
                        Download
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DocumentPreview;