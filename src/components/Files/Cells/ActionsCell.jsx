import { deleteFile, deleteFolder, downloadFile } from "@/api/file";
import ConfirmationModal from "@/components/ConfirmationModel";
import { Button } from "@/components/ui/button";
import { PERMISSIONS } from "@/helper/permissions";
import { toastNotification } from "@/helper/toastNotification";
import { usePermissions } from "@/hooks/usePermissions";
import { Download, Pencil, Share2, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import ShareDocumentModal from "../ShareDocumentModal";

const ActionsCell = ({ row: item, getFiles, setRenameMode, currentPageItems, setCurrentPage }) => {

  const isFolder = !item.originalFileName;
  const { checkPermission } = usePermissions();
  const [shareDocument, setShareDocument] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      isFolder
        ? await deleteFolder(item._id)
        : await deleteFile(item._id);
      getFiles();
      if (currentPageItems === 1) {
        setCurrentPage((prev) => Math.max(1, prev - 1));
      }
    } catch (error) {
      console.error("Error deleting :", error);
      toastNotification(error?.response?.data?.message || `Error deleting ${isFolder ? "folder" : "file"}. Please try again.`, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  const canShareDocument = useMemo(() => checkPermission(PERMISSIONS.SHARE_DOCUMENT), [checkPermission]);
  const canDownloadDocument = useMemo(() => checkPermission(PERMISSIONS.DOWNLOAD_DOCUMENT), [checkPermission]);
  const canUpdateDocument = useMemo(() => checkPermission(PERMISSIONS.UPDATE_DOCUMENT), [checkPermission]);
  const canDeleteDocument = useMemo(() => checkPermission(PERMISSIONS.DELETE_DOCUMENT), [checkPermission]);

  return (
    <>
      <div className="flex justify-end items-center gap-0.5">
        {canShareDocument && !isFolder && (
          <Button
            onClick={() => setShareDocument(item._id)}
            variant="ghost"
            size="icon"
            className="size-8 inline-flex cursor-pointer"
          >
            <Share2 className="size-3.5 text-[#71717b]" />
          </Button>
        )}

        {canDownloadDocument && !isFolder && (
          <Button onClick={() => downloadFile(item._id)} variant="ghost" size="icon" className="size-8 cursor-pointer">
            <Download className="size-3.5 text-[#71717b]" />
          </Button>
        )}

        {canUpdateDocument && (
          <Button
            onClick={() => setRenameMode(item._id)}
            variant="ghost"
            size="icon"
            className="size-8 inline-flex cursor-pointer"
          >
            <Pencil className="size-3.5 text-[#71717b]" />
          </Button>
        )}

        {canDeleteDocument && (
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
          heading={`Delete ${isFolder ? "Folder" : "File"}`}
          subheading={`Are you sure you want to delete ${item.originalFileName || item.name} ${isFolder ? "Folder" : "File"}? This action cannot be undone.`}
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

