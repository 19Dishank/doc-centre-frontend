import { MoreVertical, Trash2, ArchiveRestore, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteFilePermanently, deleteFolderPermanently, restoreFile, restoreFolder } from "@/api/file";
import { useMemo, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { toastNotification } from "@/helper/toastNotification";
import ShareDocumentModal from "@/components/Files/ShareDocumentModal";
import ConfirmationModal from "@/components/ConfirmationModal";
import FileInfoModal from "../FileInfoModel";

const ActionsCell = ({ row: item, getFiles }) => {

    const isFolder = !item.originalFileName;
    const { checkPermission } = usePermissions();
    const [shareDocument, setShareDocument] = useState(null);
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [infoModel, setInfoModel] = useState(false);
    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            isFolder
                ? await deleteFolderPermanently(item._id)
                : await deleteFilePermanently(item._id);
            toastNotification(`${isFolder ? "Folder" : "File"} deleted permanently.`, "success");
            getFiles();
        } catch (error) {
            console.error("Error deleting :", error);
        } finally {
            setIsDeleting(false);
            setConfirmationModalOpen(false);
        }
    };

    const restore = async (id) => {
        try {
            isFolder
                ? await restoreFolder(id)
                : await restoreFile(id);
            getFiles();
        } catch (error) {
            console.error("Error restoring :", error);
        }
    }

    const canRestoreDocument = useMemo(() => checkPermission(PERMISSIONS.RESTORE_DOCUMENT), [checkPermission]);
    const canPermanentlyDeleteDocument = useMemo(() => checkPermission(PERMISSIONS.DELETE_DOCUMENT), [checkPermission]);

    const actions = [
        {
            key: "info",
            show: true,
            label: "Info",
            icon: InfoIcon,
            onClick: () => setInfoModel(true),
        },
        {
            key: "restore",
            show: canRestoreDocument,
            label: "Restore",
            icon: ArchiveRestore,
            onClick: () => restore(item._id),
        },
        {
            key: "delete",
            show: canPermanentlyDeleteDocument,
            label: "Delete Permanently",
            icon: Trash2,
            onClick: () => setConfirmationModalOpen(true),
            danger: true,
        },
    ].filter((action) => action.show);


    return (
        <>
            {actions.length > 0 && (
                <>
                    {/* Desktop / tablet: full icon row */}
                    <div className="hidden sm:flex justify-end items-center gap-0.5">
                        {actions.map(({ key, label, icon: Icon, onClick, danger }) => (
                            <Button
                                key={key}
                                onClick={onClick}
                                variant="ghost"
                                size="icon"
                                title={label}
                                className={`size-8 inline-flex cursor-pointer ${danger ? "text-red-400 hover:text-red-600 hover:bg-red-50" : ""
                                    }`}
                            >
                                <Icon className={`size-3.5 ${danger ? "" : "text-[#71717b]"}`} />
                            </Button>
                        ))}
                    </div>

                    {/* Mobile: single 3-dot trigger, labeled items inside */}
                    <div className="flex sm:hidden justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="size-8 inline-flex cursor-pointer">
                                    <MoreVertical className="size-3.5 text-[#71717b]" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-44">
                                {actions.map(({ key, label, icon: Icon, onClick, danger }) => (
                                    <DropdownMenuItem
                                        key={key}
                                        onClick={onClick}
                                        className={`cursor-pointer gap-2 ${danger ? "text-red-500 focus:text-red-600 focus:bg-red-50" : ""
                                            }`}
                                    >
                                        <Icon className="size-3.5" />
                                        <span>{label}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </>
            )}

            {confirmationModalOpen && (
                <ConfirmationModal
                    setIsOpen={setConfirmationModalOpen}
                    heading={`Delete ${isFolder ? "Folder" : "File"} Permanently`}
                    subheading={`Are you sure you want to permanently delete ${item.originalFileName || item.name} ${isFolder ? "Folder" : "File"}? This action cannot be undone.`}
                    onConfirm={handleDelete}
                    onCancel={() => setConfirmationModalOpen(false)}
                    type="danger"
                    loading={isDeleting}
                    confirmText="Yes, delete it"
                    loadingText="Deleting..."
                />
            )}

            {shareDocument && <ShareDocumentModal documentId={shareDocument} setIsOpen={setShareDocument} />}
            {infoModel && <FileInfoModal item={item} setIsOpen={setInfoModel} />}
        </>
    )
}

export default ActionsCell;