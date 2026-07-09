import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchFiles, getSignedURL, uploadOnSignedURL } from "@/api/file";
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
import ProgressToast, { progressToast } from "@/components/Files/ProgressToast";
import { SOCKET_EVENTS } from "@/helper/constants/socket.events";
import PageHeading from "@/components/PageHeading";

export default function Files() {
  const [searchParams, setSearchParams] = useSearchParams();
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

  const onDrop = useCallback(async (acceptedFiles, fileRejections) => {
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

    console.log(file);
    if (!file) {
      console.log("No file selected");
      return;
    }



    // start tracking this upload in the toast store
    const toastId = progressToast.start(file.name, {
      type: file.type?.startsWith("image")
        ? "image"
        : file.type?.startsWith("video")
          ? "video"
          : "file",
    });

    try {

      const payload = {
        fileName: file.name,
        contentType: file.type,
        folderId: parentId ?? undefined,
        size: file.size,
      };
      const getSignedURLResponse = await getSignedURL(payload);
      const { url } = getSignedURLResponse.data;

      const uploadResponse = await uploadOnSignedURL(url, file, (percent) => {
        progressToast.update(toastId, percent);
      });

      if (uploadResponse.status === 200) {
        progressToast.success(toastId);
      }
    } catch (error) {
      progressToast.error(
        toastId,
        error?.response?.data?.message
        || error?.response?.data?.errors?.[0]?.msg
        || "File upload failed. Please try again."
      );
      console.error("File upload failed :", error);
    } finally {
      event.target.value = "";
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
  }, [currentPage]);

  const handleNavigationClick = (parentId, index) => {
    setParentId(parentId)
    setNavigationBar(prev => prev.slice(0, index + 1))
  }

  const getFiles = async (filters) => {
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
  }

  // useEffect(() => {
  //   const handleDocumentCreated = (event) => {
  //     console.log("Document uploaded event received:", event);
  //   }

  //   socket.on(SOCKET_EVENTS.DOCUMENT_UPLOADED, handleDocumentCreated);

  //   return () => {
  //     socket.off(SOCKET_EVENTS.DOCUMENT_UPLOADED, handleDocumentCreated);
  //   }
  // }, []);
  useEffect(() => {
    const refreshFilesData = async (event) => {
      console.log("🚀 ~ Files.jsx:174 ~ Document deleted event received:", event)
      await getFiles()
    }

    socket.on(SOCKET_EVENTS.DOCUMENT_TRASHED, refreshFilesData);
    socket.on(SOCKET_EVENTS.DOCUMENT_RESTORED, refreshFilesData);

    socket.on(SOCKET_EVENTS.FOLDER_TRASHED, refreshFilesData);
    socket.on(SOCKET_EVENTS.FOLDER_RESTORED, refreshFilesData);

    return () => {
      socket.off(SOCKET_EVENTS.DOCUMENT_TRASHED, refreshFilesData);
      socket.on(SOCKET_EVENTS.DOCUMENT_RESTORED, refreshFilesData);
      socket.off(SOCKET_EVENTS.FOLDER_TRASHED, refreshFilesData);
      socket.off(SOCKET_EVENTS.FOLDER_RESTORED, refreshFilesData);
    }
  }, []);

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
          {/* <div className="ml-auto">
            <FloatingActions
              fabClassName="h-10 w-auto px-4 rounded-lg bg-white border border-zinc-200  text-zinc-700  shadow-sm hover:bg-zinc-50 hover:border-zinc-300"
              mode="inline"
              direction="left"
              icon={
                <>
                  <Plus className="size-4" />
                  <span className="text-sm font-medium">Add</span>
                </>
              }
            >
              {canRestoreDocument && (
                <NavLink to="/trash">
                  <Button variant="outline">
                    <Trash2 className="size-4" />
                    Recycle Bin
                  </Button>
                </NavLink>
              )}

              <UploadButtons
                getFiles={getFiles}
                parentId={parentId}
                setNewFolderRow={setNewFolderRow}
              />
            </FloatingActions>
          </div> */}
        </div>

        {/* Old toolbar layout */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <BreadcrumbNavigation
            navigationBar={navigationBar}
            handleNavigationClick={handleNavigationClick}
          />

          <UploadButtons
            getFiles={getFiles}
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
      <ProgressToast position="-right" />
    </div>

  );
}