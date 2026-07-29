import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchFiles, initiateUpload, completeMultipartUpload } from "@/api/file";
import { uploadFileInParts, UploadCancelledError } from "@/helper/multipartUpload";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { NavLink, useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { formatSize } from "@/helper/formatSize";
import BreadcrumbNavigation from "@/components/Files/BreadcrumbNavigation";
import FileNameCell from "@/components/Files/Cells/FileNameCell";
import OwnerNameCell from "@/components/Files/Cells/OwnerNameCell";
import ActionsCell from "@/components/Files/Cells/ActionsCell";
import PaginationBar from "@/components/ui/pagination-bar";
import FiltersBar from "@/components/Files/FiltersBar";
import UploadButtons from "@/components/Files/UploadButtons";
import { socket } from "@/helper/socketService";
import { useDropzone } from "react-dropzone";
import { toastNotification } from "@/helper/toastNotification";
import clsx from "clsx";
import { progressToast } from "@/components/Files/ProgressToast";
import { SOCKET_EVENTS } from "@/helper/constants/socket.events";
import PageHeading from "@/components/PageHeading";
import useSEO from "@/hooks/useSEO";

export default function Files() {
  const [searchParams, setSearchParams] = useSearchParams();

  useSEO({
    title: "My Files",
    description: "Access, organize, upload, and search documents and folders inside your secure team workspace.",
  });
  const [parentId, setParentId] = useState("");
  const [navigationBar, setNavigationBar] = useState([{ name: "My Files", parentId: "" }]);
  const [tableRows, setTableRows] = useState([]);
  const [newFolderRow, setNewFolderRow] = useState(null);
  const [goBackRow, setGoBackRow] = useState({ isGoBackRow: false });
  const [renameMode, setRenameMode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const { checkPermission } = usePermissions();
  const canUploadDocument = useMemo(() => checkPermission(PERMISSIONS.UPLOAD_DOCUMENT), [checkPermission]);

  const onDrop = useCallback(async (acceptedFiles, fileRejections, event) => {
    if (!canUploadDocument) {
      toastNotification("Doesn't have permission to upload doc", "error");
      return;
    }

    if (fileRejections.length > 0) {
      toastNotification("Only one file can be uploaded at a time.", "error");
      return;
    }

    const file = acceptedFiles[0];
    if (!file) return;

    const toastId = progressToast.start(file.name, {
      size: file.size,
      type: file.type?.startsWith("image")
        ? "image"
        : file.type?.startsWith("video")
          ? "video"
          : "file",
    });

    const controller = new AbortController();
    progressToast.registerAbort(toastId, () => controller.abort());

    try {
      const startUpload = await initiateUpload(
        {
          fileName: file.name,
          contentType: file.type,
          folderId: parentId ?? undefined,
          size: file.size,
        },
        { signal: controller.signal }
      );

      const { documentId, chunkSize, totalParts } = startUpload?.data?.data || {};

      if (!documentId || !totalParts) {
        throw new Error("Failed to start upload");
      }

      progressToast.setDocumentId(toastId, documentId);

      const parts = await uploadFileInParts({
        file,
        documentId,
        chunkSize,
        totalParts,
        onProgress: (percent) => progressToast.update(toastId, percent),
        signal: controller.signal,
      });

      progressToast.setFinalizing(toastId, true);
      await completeMultipartUpload({ documentId, parts }, { signal: controller.signal });

      progressToast.success(toastId);
    } catch (error) {
      if (error instanceof UploadCancelledError || controller.signal.aborted) {
        console.log(`Upload ${toastId} cancelled by user`);
        return;
      }

      progressToast.error(
        toastId,
        error?.response?.data?.message
        || error?.response?.data?.errors?.[0]?.msg
        || error?.message
        || "File upload failed. Please try again."
      );
      console.error("Multipart upload failed:", error);
    } finally {
      if (event?.target && "value" in event.target) {
        event.target.value = "";
      }
    }
  }, [canUploadDocument, parentId]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
  });



  const {
    totalDocuments,
    totalPages,
    pageSize: limit,
    hasNextPage,
    hasPreviousPage
  } = paginationData || {};

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGoBackRow({ isGoBackRow: !!parentId });
  }, [parentId]);

  const tableData = newFolderRow
    ? [newFolderRow, ...tableRows]
    : goBackRow.isGoBackRow
      ? [goBackRow, ...tableRows]
      : tableRows;

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("page", currentPage);
      return prev;
    });
  }, [currentPage, setSearchParams]);

  const handleNavigationClick = (parentId, index) => {
    setParentId(parentId)
    setNavigationBar(prev => prev.slice(0, index + 1))
  }

  const getFiles = useCallback(async (filters) => {
    setLoading(true);
    try {
      const res = await fetchFiles(parentId, {
        page: currentPage,
        limit: 5,
        ...filters,
        sort: undefined,
        [filters?.sort?.split("_")[0]]: filters?.sort?.split("_")[1]
      });
      setTableRows(res.data.documents);
      setPaginationData(res.data.pagination);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  }, [parentId, currentPage]);


  useEffect(() => {
    const refreshFilesData = async () => {
      await getFiles()
    }

    socket.on(SOCKET_EVENTS.DOCUMENT_UPLOADED, refreshFilesData);
    socket.on(SOCKET_EVENTS.DOCUMENT_TRASHED, refreshFilesData);
    socket.on(SOCKET_EVENTS.DOCUMENT_RESTORED, refreshFilesData);

    socket.on(SOCKET_EVENTS.FOLDER_CREATED, refreshFilesData);
    socket.on(SOCKET_EVENTS.FOLDER_TRASHED, refreshFilesData);
    socket.on(SOCKET_EVENTS.FOLDER_RESTORED, refreshFilesData);

    return () => {
      socket.off(SOCKET_EVENTS.DOCUMENT_UPLOADED, refreshFilesData);
      socket.off(SOCKET_EVENTS.DOCUMENT_TRASHED, refreshFilesData);
      socket.off(SOCKET_EVENTS.DOCUMENT_RESTORED, refreshFilesData);
      socket.off(SOCKET_EVENTS.FOLDER_CREATED, refreshFilesData);
      socket.off(SOCKET_EVENTS.FOLDER_TRASHED, refreshFilesData);
      socket.off(SOCKET_EVENTS.FOLDER_RESTORED, refreshFilesData);
    }
  }, [getFiles]);

  const columns = [
    {
      key: "name",
      header: "Name",
      width: "w-[55%] sm:w-[35%] lg:w-[30%]",
      cellClassName: "font-medium",
      render: (row) => {
        return <FileNameCell
          row={row}
          setNewFolderRow={setNewFolderRow}
          setNavigationBar={setNavigationBar}
          parentId={parentId}
          setParentId={setParentId}
          getFiles={getFiles}
          renameMode={renameMode}
          setRenameMode={setRenameMode}
        />;
      },
    },
    {
      key: "type",
      header: "Type",
      width: "w-[15%] lg:w-[10%]",
      headerClassName: "hidden sm:table-cell",
      cellClassName: "hidden sm:table-cell",
      render: (row) => !row?.isGoBackRow && (
        <div className="uppercase">{row?.originalFileName?.split(".").pop() || "Folder"}</div>
      ),
    },
    {
      key: "size",
      header: "Size",
      width: "w-[10%]",
      headerClassName: "hidden lg:table-cell",
      cellClassName: "hidden lg:table-cell",
      render: (row) => !row?.isGoBackRow && (row?.size ? formatSize(row.size) : "—"),
    },
    {
      key: "createdAt",
      header: "Uploaded At",
      width: "w-[10%]",
      headerClassName: "hidden lg:table-cell",
      cellClassName: "hidden lg:table-cell",
      render: (row) => !row?.isGoBackRow && (row?.createdAt ? new Date(row.createdAt).toLocaleDateString() : "—"),
    },
    {
      key: "owner",
      header: "Owner",
      width: "w-[15%]",
      headerClassName: "hidden lg:table-cell",
      cellClassName: "hidden lg:table-cell",
      render: (row) => (!row?.isGoBackRow) && <OwnerNameCell row={row} />,
    },
    {
      key: "actions",
      header: "Actions",
      width: "w-[45%] sm:w-[25%] lg:w-[20%]",
      align: "right",
      render: (row) => !row?.isGoBackRow && (
        <ActionsCell row={row} getFiles={getFiles} setRenameMode={setRenameMode} currentPageItems={tableRows.length} setCurrentPage={setCurrentPage} />
      ),
    },
  ];

  const canRestoreDocument = useMemo(() => checkPermission(PERMISSIONS.RESTORE_DOCUMENT), [checkPermission]);

  return (
    <div
      {...getRootProps()}
      className={clsx(
        "transition-all duration-200",
        isDragActive
          ? "border-blue-500 bg-blue-50 ring-4 ring-blue-200"
          : "border-gray-300 hover:border-gray-400"
      )}
    >
      <input {...getInputProps()} onClick={(e) => e.preventDefault()} />

      <div className="flex h-full w-full max-w-full flex-col gap-6 p-1">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <PageHeading
            heading="Files"
            subheading="Browse, upload, and organize your files."
          />
          {canRestoreDocument && (
            <NavLink to="/trash">
              <Button variant="outline">
                <Trash2 className="size-4" />
                Recycle Bin
              </Button>
            </NavLink>
          )}
        </div>

        {/* Old toolbar layout */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <BreadcrumbNavigation
            navigationBar={navigationBar}
            handleNavigationClick={handleNavigationClick}
          />

          <UploadButtons
            parentId={parentId}
            setNewFolderRow={setNewFolderRow}
          />
        </div>

        <FiltersBar
          parentId={parentId}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          getFiles={getFiles}
        />

        <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
          <DataTable
            columns={columns}
            data={tableData}
            loading={loading}
          />
        </div>

        {tableRows.length > 0 && (
          <div className="mt-auto">
            <PaginationBar
              totalPages={totalPages || 0}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              hasNextPage={hasNextPage}
              hasPreviousPage={hasPreviousPage}
              totalItems={totalDocuments}
              limit={limit}
            />
          </div>
        )}
      </div>
    </div>

  );
}