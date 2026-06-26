import {
    FolderPlus,
    Loader,
    Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useMemo, useRef, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { getSignedURL, uploadOnSignedURL } from "@/api/file";
import { toastNotification } from "@/helper/toastNotification";
import { socket } from "@/helper/socketService";

const UploadButtons = ({ parentId, setNewFolderRow, getFiles }) => {

    const { checkPermission } = usePermissions();
    const canUploadDocument = useMemo(() => checkPermission(PERMISSIONS.UPLOAD_DOCUMENT), [checkPermission]);

    const inputRef = useRef(null);
    const [isUploading, setIsUploading] = useState(false);

    const onChangeFile = async (event) => {
        setIsUploading(true);
        try {
            const file = event.target.files?.[0];
            if (!file) {
                console.log("No file selected");
                return;
            }
            const payload = {
                fileName: file.name,
                contentType: file.type,
                folderId: parentId ?? undefined,
                size: file.size,
            };
            const getSignedURLResponse = await getSignedURL(payload);
            const { url } = getSignedURLResponse.data;
            const uploadResponse = await uploadOnSignedURL(url, file);
            if (uploadResponse.status === 200) {
                setTimeout(() => {
                    setIsUploading(false);
                }, 5000);
            }
        } catch (error) {
            setIsUploading(false);
            toastNotification(
                error?.response?.data?.message
                || error?.response?.data?.errors?.[0]?.msg
                || "File upload failed. Please try again.", "error");
            console.error("File upload failed :", error);
        } finally {
            event.target.value = "";
        }
    };

    const handleNewFolder = () => {
        setNewFolderRow({
            id: "new-folder",
            isNewFolder: true,
            name: "",
        });
    };

    const handleUpload = () => {
        if (!inputRef.current) return;
        inputRef.current?.click();
    }

    useEffect(() => {

        const handleKeyDown = (event) => {
            event.stopPropagation();
            if (event.ctrlKey && event.altKey && event.code === "KeyU") {
                event.preventDefault();
                if (canUploadDocument) {
                    document.getElementById("file-input")?.click();
                }
            }
            else if (event.ctrlKey && event.altKey && event.code === "KeyN") {
                event.preventDefault();
                if (canUploadDocument) {
                    handleNewFolder();
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    useEffect(() => {

        const handleDocumentUploadedEvent = () => {
            console.log("Document uploaded event received");
            getFiles();
            setIsUploading(false);
        };

        socket.on("document-uploaded", handleDocumentUploadedEvent);
        return () => {
            socket.off("document-uploaded", handleDocumentUploadedEvent);
        };

    }, [parentId]);


    return (
        <>
            {canUploadDocument && (
                <div className="flex items-center gap-2 shrink-0">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="sm"
                                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white gap-1.5 shadow-sm"
                                disabled={isUploading}
                                onClick={handleUpload}
                            >
                                {isUploading ? (
                                    <>
                                        <Loader className="size-4 animate-spin" />
                                        <span>Uploading...</span>
                                    </>
                                ) : (
                                    <>
                                        <Plus className="size-4" />
                                        <span>Upload</span>
                                    </>
                                )}
                                <input ref={inputRef} id="file-input" type="file" className="hidden" onChange={onChangeFile} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent><p>Ctrl + Alt + U</p></TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="sm"
                                variant="outline"
                                className="cursor-pointer gap-1.5 text-zinc-700 bg-white shadow-sm"
                                onClick={handleNewFolder}
                            >
                                <FolderPlus className="size-4 text-zinc-500" />
                                <span>New Folder</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent><p>Ctrl + Alt + N</p></TooltipContent>
                    </Tooltip>
                </div>
            )}
        </>
    );
};

export default UploadButtons;