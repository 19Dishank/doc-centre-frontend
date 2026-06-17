import { Trash2, ArchiveRestore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteFilePermanently, deleteFolderPermanently, restoreFile, restoreFolder } from "@/api/file";
import { useMemo, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { toastNotification } from "@/helper/toastNotification";
import ShareDocumentModal from "@/components/Files/ShareDocumentModal";
import ConfirmationModal from "@/components/ConfirmationModal";

const ActionsCell = ({ row: item, getFiles }) => {

    const isFolder = !item.originalFileName;
    const { checkPermission } = usePermissions();
    const [shareDocument, setShareDocument] = useState(null);
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

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
            toastNotification(error?.response?.data?.message || `Error deleting ${isFolder ? "folder" : "file"}. Please try again.`, "error");
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
            toastNotification(error?.response?.data?.message || `Error restoring ${isFolder ? "folder" : "file"}. Please try again.`, "error");
        }
    }

    const canRestoreDocument = useMemo(() => checkPermission(PERMISSIONS.RESTORE_DOCUMENT), [checkPermission]);
    const canPermanentlyDeleteDocument = useMemo(() => checkPermission(PERMISSIONS.DELETE_DOCUMENT), [checkPermission]);

    return (
        <>
            <div className="flex justify-end items-center gap-0.5">

                {canRestoreDocument && (
                    <Button
                        onClick={() => restore(item._id)}
                        variant="ghost"
                        size="icon"
                        className="size-8 inline-flex cursor-pointer"
                    >
                        <ArchiveRestore className="size-3.5 text-[#71717b]" />
                    </Button>
                )}

                {canPermanentlyDeleteDocument && (
                    <Button
                        onClick={() => setConfirmationModalOpen(true)}
                        variant="ghost"
                        size="icon"
                        className="size-8 text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                        <Trash2 className="size-3.5" />
                    </Button>
                )}
            </div>

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
        </>
    )
}

export default ActionsCell;