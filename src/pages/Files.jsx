import {
  FolderPlus,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import FilesTableFormat from "@/components/Files/FilesTableView";
import { completeUpload, failedUpload, fetchFiles, getSignedURL, uploadOnSignedURL } from "@/api/file";
import { useEffect, useRef, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { toastNotification } from "@/helper/toastNotification";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { NavLink, useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { formatSize } from "@/helper/formatSize";
import BreadcrumbNavigation from "@/components/Files/BreadcrumbNavigation";
import FileNameCell from "@/components/Files/Cells/FileNameCell";
import OwnerNameCell from "@/components/Files/Cells/OwnerNameCell";
import ActionsCell from "@/components/Files/Cells/ActionsCell";

export default function Files() {

  const { permissionCheck } = usePermissions();

  const inputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [parentId, setParentId] = useState("");
  const [navigationBar, setNavigationBar] = useState([{ name: "My Files", parentId: "" }]);
  const [isUploading, setIsUploading] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [newFolderRow, setNewFolderRow] = useState(null);
  const [goBackRow, setGoBackRow] = useState({ isGoBackRow: false });
  const [renameMode, setRenameMode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGoBackRow({ isGoBackRow: !!parentId });
  }, [parentId]);

  console.log("Go Back Row:", goBackRow);

  const tableData = newFolderRow
    ? [newFolderRow, ...tableRows]
    : goBackRow.isGoBackRow
      ? [goBackRow, ...tableRows]
      : tableRows;

  const [filters, setFilters] = useState({
    q: searchParams.get("q") || "",
    sort: searchParams.get("sort") || "",
    type: searchParams.get("type") || "",
  });

  useEffect(() => {
    setSearchParams((prev) => {
      filters.q ? prev.set("q", filters.q) : prev.delete("q");
      filters.sort ? prev.set("sort", filters.sort) : prev.delete("sort");
      filters.type ? prev.set("type", filters.type) : prev.delete("type");
      return prev;
    })
  }, [filters]);

  const handleNavigationClick = (parentId, index) => {
    setParentId(parentId)
    setNavigationBar(prev => prev.slice(0, index + 1))
  }

  const onChangeFile = async (event) => {
    setIsUploading(true);
    try {
      const file = event.target.files?.[0];
      console.log("Selected file for upload:", file);
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
      const { url, documentId } = getSignedURLResponse.data;
      const uploadResponse = await uploadOnSignedURL(url, file);
      if (uploadResponse.status === 200) {
        const res = await completeUpload(documentId);
        console.log("Complete upload response :", res);
      } else {
        const res = await failedUpload(documentId);
        console.log("Failed upload response :", res);
      }
    } catch (error) {
      console.log("Error during file upload process:", error?.response);
      toastNotification(error?.response?.data?.message || "File upload failed. Please try again.", "error");
      console.error("File upload failed :", error);
    } finally {
      getFiles();
      event.target.value = "";
      setIsUploading(false);
    }
  };

  const getFiles = async () => {
    setLoading(true);
    try {
      const res = await fetchFiles(parentId, {
        ...filters,
        sort: undefined,
        [filters.sort.split("_")[0]]: filters.sort.split("_")[1]
      });
      setTableRows([...res.data.folder, ...res.data.docs]);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  }

  const prevParentIdRef = useRef(parentId);

  useEffect(() => {

    const isParentIdChanged = prevParentIdRef.current !== parentId;
    prevParentIdRef.current = parentId;

    if (isParentIdChanged) {
      getFiles();
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      getFiles();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [filters, parentId]);

  const columns = [
    {
      key: "name",
      header: "Name",
      width: "w-[30%]",
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
      width: "w-[10%]",
      render: (row) => <div className="uppercase">{row?.originalFileName?.split(".").pop() || "Folder"}</div>,
    },
    {
      key: "size",
      header: "Size",
      width: "w-[10%]",
      render: (row) => row?.size ? formatSize(row.size) : "—",
    },
    {
      key: "createdAt",
      header: "Uploaded At",
      width: "w-[10%]",
      render: (row) => row?.createdAt ? new Date(row.createdAt).toLocaleDateString() : "—",
    },
    {
      key: "owner",
      header: "Owner",
      width: "w-[15%]",
      cellClassName: "flex items-center gap-2",
      render: (row) => <OwnerNameCell row={row} />,
    },
    {
      key: "actions",
      header: "",
      width: "w-[20%]",
      align: "right",
      render: (row) => (
        <ActionsCell row={row} getFiles={getFiles} setRenameMode={setRenameMode} />
      ),
    },
  ];

  const sortOptions = [
    { label: "Name (A-Z)", value: "name_asc" },
    { label: "Name (Z-A)", value: "name_desc" },
    { label: "Uploaded (Newest)", value: "createdAt_desc" },
    { label: "Uploaded (Oldest)", value: "createdAt_asc" },
    { label: "Size (Largest)", value: "size_desc" },
    { label: "Size (Smallest)", value: "size_asc" },
  ];

  const typeOptions = [
    { label: "All Types", value: "all" },
    { label: "Folders", value: "folder" },
    { label: "Documents", value: "file" },
  ]

  const handleKeyDown = (event) => {
    event.stopPropagation();
    if (event.ctrlKey && event.altKey && event.code === "KeyU") {
      event.preventDefault();
      if (permissionCheck(PERMISSIONS.UPLOAD_DOCUMENT)) {
        document.getElementById("file-input")?.click();
      }
    }
    else if (event.ctrlKey && event.altKey && event.code === "KeyN") {
      event.preventDefault();
      if (permissionCheck(PERMISSIONS.UPLOAD_DOCUMENT)) {
        handleNewFolder();
      }
    }
  }

  const handleNewFolder = () => {
    setNewFolderRow({
      id: "new-folder",
      isNewFolder: true,
      name: "",
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleUpload = () => {
    if (!inputRef.current) return;
    inputRef.current?.click();
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-full p-1">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 pb-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl tracking-tight text-zinc-950">Files</h1>
          <p className="text-zinc-500 text-sm">Manage your files and folders.</p>
        </div>

        {permissionCheck(PERMISSIONS.RESTORE_DOCUMENT) && (
          <NavLink to="/trash" className="mt-auto">
            <Button variant="outline" className="cursor-pointer gap-2 text-zinc-700 hover:text-zinc-900">
              <Trash2 className="size-4 text-zinc-500" />
              Recycle Bin
            </Button>
          </NavLink>
        )}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">

        <BreadcrumbNavigation navigationBar={navigationBar} handleNavigationClick={handleNavigationClick} />

        {permissionCheck(PERMISSIONS.UPLOAD_DOCUMENT) && (
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
                    "Uploading..."
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
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="size-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            placeholder="Search files…"
            className="bg-white pl-9 w-full border-zinc-200 focus-visible:ring-blue-500"
            value={filters.q}
            onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:w-auto w-full">
          <Select name="type" value={filters.type} onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}>
            <SelectTrigger id="type-select" className="w-full sm:w-[130px] bg-white text-zinc-900 border-zinc-200">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent position="popper" className="z-50">
              <SelectGroup>
                <SelectLabel>Select Type</SelectLabel>
                {typeOptions.map((type) => (
                  <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select name="sort" value={filters.sort} onValueChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}>
            <SelectTrigger id="sort-select" className="w-full sm:w-[140px] bg-white text-zinc-900 border-zinc-200">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent position="popper" className="z-50">
              <SelectGroup>
                <SelectLabel>Select Option</SelectLabel>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            onClick={() => setFilters({ q: "", sort: "", type: "" })}
            className="col-span-2 sm:w-auto text-zinc-500 hover:text-zinc-900 disabled:opacity-50 disabled:pointer-events-none"
            disabled={!filters.q && !filters.sort && !filters.type}
          >
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        <DataTable
          columns={columns}
          data={tableData}
          loading={loading}
        />
      </div>
    </div>
  );
}