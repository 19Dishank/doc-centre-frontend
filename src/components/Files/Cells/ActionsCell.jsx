import { deleteFile, deleteFolder, downloadFile } from "@/api/file";
import ConfirmationModal from "@/components/ConfirmationModel";
import { Button } from "@/components/ui/button";
import { PERMISSIONS } from "@/helper/permissions";
import { toastNotification } from "@/helper/toastNotification";
import { usePermissions } from "@/hooks/usePermissions";
import { Download, Pencil, Share2, Trash2 } from "lucide-react";
import { useState } from "react";
import ShareDocumentModal from "../ShareDocumentModal";

const ActionsCell = ({ row: item, getFiles, setRenameMode }) => {

  const isFolder = !item.originalFileName;
  const { permissionCheck } = usePermissions();
  const [shareDocument, setShareDocument] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

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
  };

  return (
    <>
      <div className="flex justify-end items-center gap-0.5">
        {permissionCheck(PERMISSIONS.SHARE_DOCUMENT) && !isFolder && (
          <Button
            onClick={() => setShareDocument(item._id)}
            variant="ghost"
            size="icon"
            className="size-8 inline-flex cursor-pointer"
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
            onClick={() => setRenameMode(item._id)}
            variant="ghost"
            size="icon"
            className="size-8 inline-flex cursor-pointer"
          >
            <Pencil className="size-3.5 text-[#71717b]" />
          </Button>
        )}

        {permissionCheck(PERMISSIONS.DELETE_DOCUMENT) && (
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
        />
      )}

      {shareDocument && <ShareDocumentModal documentId={shareDocument} setIsOpen={setShareDocument} />}
    </>
  )
}

export default ActionsCell;

