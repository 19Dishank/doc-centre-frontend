import { FolderPlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useMemo, useRef, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { initiateUpload, completeMultipartUpload } from "@/api/file";
import { uploadFileInParts } from "@/helper/multipartUpload";
import { socket } from "@/helper/socketService";
import { progressToast } from "./ProgressToast";
import { SOCKET_EVENTS } from "@/helper/constants/socket.events";

const UploadButtons = ({ parentId, setNewFolderRow }) => {
    const { checkPermission } = usePermissions();
    const canUploadDocument = useMemo(() => checkPermission(PERMISSIONS.UPLOAD_DOCUMENT), [checkPermission]);

    const inputRef = useRef(null);
    const [isUploading, setIsUploading] = useState(false);

    const onChangeFile = async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsUploading(true);

        const toastId = progressToast.start(file.name, {
            size: file.size,
            type: file.type?.startsWith("image")
                ? "image"
                : file.type?.startsWith("video")
                    ? "video"
                    : "file",
        });

        try {
            const startUpload = await initiateUpload({
                fileName: file.name,
                contentType: file.type,
                folderId: parentId,
                size: file.size,
            });

            const { documentId, chunkSize, totalParts } = startUpload?.data?.data || {};

            if (!documentId || !totalParts) {
                throw new Error("Failed to start upload");
            }

            const parts = await uploadFileInParts({
                file,
                documentId,
                chunkSize,
                totalParts,
                onProgress: (pct) => progressToast.update(toastId, pct),
            });

            await completeMultipartUpload({ documentId, parts });

            progressToast.success(toastId);
            setTimeout(() => setIsUploading(false), 2000);
        } catch (error) {
            setIsUploading(false);

            progressToast.error(
                toastId,
                error?.response?.data?.message ||
                error?.response?.data?.errors?.[0]?.msg ||
                error?.message ||
                "File upload failed"
            );

            console.error("Multipart upload failed:", error);
        } finally {
            event.target.value = "";
        }
    };

    const handleNewFolder = () => {
        setNewFolderRow({ id: "new-folder", isNewFolder: true, name: "" });
    };

    const handleUpload = () => {
        if (!inputRef.current) return;
        inputRef.current?.click();
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            event.stopPropagation();
            if (event.ctrlKey && event.altKey && event.code === "KeyU") {
                event.preventDefault();
                if (canUploadDocument) document.getElementById("file-input")?.click();
            } else if (event.ctrlKey && event.altKey && event.code === "KeyN") {
                event.preventDefault();
                if (canUploadDocument) handleNewFolder();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        const handleDocumentUploadedEvent = () => setIsUploading(false);

        socket.on(SOCKET_EVENTS.DOCUMENT_UPLOADED, handleDocumentUploadedEvent);
        socket.on(SOCKET_EVENTS.FOLDER_CREATED, handleDocumentUploadedEvent);
        return () => {
            socket.off(SOCKET_EVENTS.DOCUMENT_UPLOADED, handleDocumentUploadedEvent);
            socket.off(SOCKET_EVENTS.FOLDER_CREATED, handleDocumentUploadedEvent);
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
                                onClick={handleUpload}
                            >
                                <Plus className="size-4" />
                                <span>Upload</span>
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