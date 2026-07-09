import { deleteFile, deleteFolder, downloadFile } from "@/api/file";
import ConfirmationModal from "@/components/ConfirmationModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PERMISSIONS } from "@/helper/permissions";
import { toastNotification } from "@/helper/toastNotification";
import { usePermissions } from "@/hooks/usePermissions";
import { Download, InfoIcon, MoreVertical, Pencil, Share2, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import ShareDocumentModal from "../ShareDocumentModal";
import FileInfoModal from "@/components/FileInfoModel";


const ActionsCell = ({ row: item, getFiles, setRenameMode, currentPageItems, setCurrentPage }) => {

  const isFolder = !item.originalFileName;
  const { checkPermission } = usePermissions();
  const [shareDocument, setShareDocument] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [infoModel, setInfoModel] = useState(false);

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


  const actions = [
    {
      key: "info",
      show: true,
      label: "Info",
      icon: InfoIcon,
      onClick: () => setInfoModel(true),
    },
    {
      key: "share",
      show: canShareDocument && !isFolder,
      label: "Share",
      icon: Share2,
      onClick: () => setShareDocument(item._id),
    },
    {
      key: "download",
      show: canDownloadDocument && !isFolder,
      label: "Download",
      icon: Download,
      onClick: () => downloadFile(item._id),
    },
    {
      key: "rename",
      show: canUpdateDocument,
      label: "Rename",
      icon: Pencil,
      onClick: () => setRenameMode(item._id),
    },
    {
      key: "delete",
      show: canDeleteDocument,
      label: "Delete",
      icon: Trash2,
      onClick: () => setConfirmationModalOpen(true),
      danger: true,
    },
  ].filter((action) => action.show);

  return (
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
            <Button
              variant="ghost"
              size="icon"
              className="size-8 inline-flex cursor-pointer"
            >
              <MoreVertical className="size-3.5 text-[#71717b]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
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

      {infoModel && <FileInfoModal item={item} setIsOpen={setInfoModel} />}
    </>
  );
};

export default ActionsCell;