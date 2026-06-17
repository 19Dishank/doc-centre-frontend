import { X, Download, Loader2, Info } from "lucide-react";
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
import OfficeRendered from "./Renderers/OfficeRendered";
import DocumentDetails from "./DocumentDetails";

const DocumentPreview = ({ setIsOpen, item }) => {

    const [preSignedUrl, setPreSignedUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

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
    }, [item._id]);

    const type = item?.originalFileName?.split(".").pop()?.toLowerCase();

    const getRenderer = () => {
        const imageTypes = ["png", "jpg", "jpeg", "gif", "webp", "svg"];
        const videoTypes = ["mp4", "webm", "ogg", "mov"];
        const audioTypes = ["mp3", "wav", "ogg"];
        const codeTypes = ["js", "jsx", "ts", "tsx", "json", "html", "css", "py", "java", "cpp", "c"];
        const textTypes = ["txt", "md"];
        const officeTypes = [
            'doc', 'docx', 'docm', 'dot', 'dotx', 'dotm',
            'xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'xltm', 'xlam',
            'ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm', 'ppam', 'pps', 'ppsx', 'ppsm', 'sldx', 'sldm',
        ];

        if (type === "pdf") return <PDFRenderer pdfUrl={preSignedUrl} />;
        if (officeTypes.includes(type)) return <OfficeRendered fileUrl={preSignedUrl} />;
        if (imageTypes.includes(type)) return <ImageRenderer imageUrl={preSignedUrl} />;
        if (videoTypes.includes(type)) return <VideoRenderer videoUrl={preSignedUrl} />;
        if (audioTypes.includes(type)) return <AudioRenderer audioUrl={preSignedUrl} />;
        if (codeTypes.includes(type)) return <CodeRenderer codeUrl={preSignedUrl} language={type} />;
        if (textTypes.includes(type)) return <TextRenderer fileUrl={preSignedUrl} />;

        return <UnsupportedRenderer />;

    };

    const handleDownload = () => {
        downloadFile(item._id);
    };

    return (
        <div className="bg-zinc-950/40 flex fixed inset-0 justify-center items-center z-50 backdrop-blur p-2 sm:p-4">
            <div className="rounded-xl border border-border bg-card text-card-foreground overflow-hidden shadow-xl w-full max-w-5xl flex flex-col h-[90vh] md:h-[85vh]">

                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/60 gap-4">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="shrink-0">
                            {getRegistryIcon(item)}
                        </div>
                        <div className="flex flex-col min-w-0 w-full">
                            <span className="text-sm font-medium text-foreground truncate block" title={item?.originalFileName}>
                                {item?.originalFileName || "Document.pdf"}
                            </span>
                            <span className="text-[11px] text-muted-foreground truncate block">
                                Stored as: {item?.storedName}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className={`p-1.5 rounded-md transition-colors cursor-pointer border ${showDetails
                                    ? "bg-primary/10 border-primary/20 text-primary"
                                    : "hover:bg-neutral-200 dark:hover:bg-neutral-800 border-transparent text-muted-foreground"
                                }`}
                            title="Toggle Details"
                        >
                            <Info className="h-4 w-4" />
                        </button>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="cursor-pointer p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-transparent transition-colors text-muted-foreground hover:text-foreground"
                            aria-label="Close preview"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 min-h-0 overflow-hidden relative">
                    <div className="flex-1 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center overflow-auto p-2 sm:p-4 min-w-0">
                        {loading ? (
                            <div className="flex flex-col items-center gap-2">
                                <Loader2 className="size-10 animate-spin text-primary" />
                                <span className="text-xs text-muted-foreground">Fetching live secure stream...</span>
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center max-w-full max-h-full">
                                {getRenderer()}
                            </div>
                        )}
                    </div>

                    {showDetails && <DocumentDetails item={item} />}
                </div>

                <div className="px-4 py-2.5 flex items-center justify-between border-t border-border bg-muted/60 z-10 shrink-0">
                    <span className="text-xs text-muted-foreground uppercase font-medium tracking-wide truncate mr-2">
                        {type} · {formatSize(item?.size)}
                    </span>
                    <button
                        onClick={handleDownload}
                        className="cursor-pointer flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors shrink-0"
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