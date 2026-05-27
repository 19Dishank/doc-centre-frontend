import { Download, Pencil, Share2, Trash2, User } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { formatSize } from "@/helper/formatSize";
import { deleteFile, deleteFolder, downloadFile, renameFile, renameFolder } from "@/api/file";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { toastNotification } from "@/helper/toastNotification";
import ConfirmationModal from "../ConfirmationModel";
import { useState } from "react";
import { Input } from "../ui/input";
import { getRegistryIcon } from "@/helper/getRegistryIcon";
import DocumentPreview from "./DocumentPreview";
import ShareDocumentModal from "./ShareDocumentModal";

const DisplayRow = ({ item, setParentId, setNavigationBar, getFiles }) => {
    
    const { permissionCheck } = usePermissions();
    const [isOpen, setIsOpen] = useState(false);
    const [renameMode, setRenameMode] = useState(false);
    const [previewDocument, setPreviewDocument] = useState(null);
    const [shareDocument, setShareDocument] = useState(null);

    const isFolder = !item.originalFileName;
    const parts = item?.originalFileName?.split(".");
    const displayExtension = isFolder ? "Folder" : parts.pop();
    const displayName = isFolder ? item?.name : parts?.join("");
    const displaySize = isFolder ? "—" : (formatSize(item.size) || "—");

    const [name, setName] = useState(displayName);

    const ownerName = isFolder
        ? `${item.createdBy?.firstName} ${item.createdBy?.lastName}`
        : `${item.uploadedBy?.firstName} ${item.uploadedBy?.lastName}`;

    const ownerEmailId = isFolder ? item.createdBy?.email : item.uploadedBy?.email;

    const handleClick = (parentId, type, name) => {
        if (type === "folder") {
            setParentId(parentId);
            setNavigationBar((prev) => [...prev, { name, parentId }]);
        }
    };

    const handleDelete = async () => {
        try {
            isFolder
                ? await deleteFolder(item._id)
                : await deleteFile(item._id);
            getFiles();
        } catch (error) {
            console.error("Error deleting :", error);
            toastNotification(error?.response?.data?.message || `Error deleting ${isFolder ? "folder" : "file"}. Please try again.`, "error");
        }
    }


    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            isFolder
                ? await renameFolder(item._id, event.target.value)
                : await renameFile(item._id, `${event.target.value}.${displayExtension}`);
            setRenameMode(false);
            getFiles();
        } else if (event.key === "Escape") {
            setRenameMode(false);
        }
    };

    return (
        <>
            <TableRow key={item._id} className="hover:bg-zinc-50/50 transition-colors">
                <TableCell className="first:pl-4">
                    <div className="flex items-center gap-3 min-w-0">
                        {getRegistryIcon(item)}

                        <div
                            className="flex flex-col min-w-0 cursor-pointer hover:underline"
                            onClick={() => handleClick(item._id, isFolder ? "folder" : "file", displayName)}
                        >
                            {renameMode
                                ? <span className="font-semibold text-zinc-950 truncate">
                                    <Input autoFocus={true} onBlur={() => setRenameMode(false)} className="focus:ring-0! w-full" placeholder="Folder name..." onKeyDown={handleKeyDown} value={name} onChange={(e) => setName(e.target.value)} />
                                </span>
                                : <span onClick={() => setPreviewDocument(true)} className="font-semibold text-zinc-950 truncate">
                                    {displayName || item.name}
                                </span>
                            }

                            <span className="text-[10px] text-zinc-400 md:hidden flex gap-1 items-center uppercase">
                                {isFolder ? "Folder" : `${displayExtension} • ${displaySize}`}
                            </span>
                        </div>
                    </div>
                </TableCell>

                <TableCell className="text-[#71717b] text-sm hidden md:table-cell uppercase">
                    {displayExtension}
                </TableCell>

                <TableCell className="text-[#71717b] text-sm hidden md:table-cell">
                    {displaySize}
                </TableCell>

                <TableCell className="text-[#71717b] text-sm whitespace-nowrap">
                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "—"}
                </TableCell>

                <TableCell className="text-[#71717b] text-sm truncate flex items-center gap-2 py-2.5">
                    {(!ownerName.includes("undefined"))
                        ? (<img
                            className="size-7 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${ownerName}&background=random`}
                            alt={`${ownerName}`}
                        />)
                        : <User className="size-6 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                    }
                    <span className="max-w-40 truncate">{ownerName.includes("undefined") ? ownerEmailId : ownerName}</span>
                </TableCell>

                <TableCell className="text-right pr-4">
                    <div className="flex justify-end items-center gap-0.5">
                        {permissionCheck(PERMISSIONS.SHARE_DOCUMENT) && !isFolder && (
                            <Button
                                onClick={() => setShareDocument(item._id)}
                                variant="ghost"
                                size="icon"
                                className="size-8 hidden sm:inline-flex cursor-pointer"
                            >
                                <Share2 className="size-3.5 text-[#71717b]" />
                            </Button>
                        )}

                        {permissionCheck(PERMISSIONS.DOWNLOAD_DOCUMENT) && !isFolder && (
                            <Button onClick={() => downloadFile(item._id)} variant="ghost" size="icon" className="size-8 cursor-pointer">
                                <Download className="size-3.5 text-[#71717b]" />
                            </Button>
                        )}

                        {permissionCheck(PERMISSIONS.UPDATE_DOCUMENT) && (
                            <Button
                                onClick={() => setRenameMode(true)}
                                variant="ghost"
                                size="icon"
                                className="size-8 hidden lg:inline-flex cursor-pointer"
                            >
                                <Pencil className="size-3.5 text-[#71717b]" />
                            </Button>
                        )}

                        {permissionCheck(PERMISSIONS.DELETE_DOCUMENT) && (
                            <Button
                                onClick={() => setIsOpen(true)}
                                variant="ghost"
                                size="icon"
                                className="size-8 text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                            >
                                <Trash2 className="size-3.5" />
                            </Button>
                        )}
                    </div>
                </TableCell>
            </TableRow>

            {isOpen && (
                <ConfirmationModal
                    heading="Delete File"
                    subheading="Are you sure you want to delete this file? This action cannot be undone."
                    onConfirm={handleDelete}
                    onCancel={() => setIsOpen(false)}
                    type="danger"
                />
            )}


            {previewDocument && item?.mimeType && (
                <DocumentPreview setIsOpen={setPreviewDocument} url={previewDocument} type={displayExtension} item={item} />
            )}

            {shareDocument && (
                <ShareDocumentModal documentId={shareDocument} setIsOpen={setShareDocument} />
            )}
        </>
    );
};

export default DisplayRow;