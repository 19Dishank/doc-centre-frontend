import {
  FolderPlus,
  Plus,
  Search,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilesTableFormat from "@/components/Files/FilesTableView";
import { completeUpload, failedUpload, fetchFiles, getSignedURL, uploadOnSignedURL } from "@/api/file";
import { useEffect, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { toastNotification } from "@/helper/toastNotification";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Files() {

  const { permissionCheck } = usePermissions();

  const [parentId, setParentId] = useState("");
  const [navigationBar, setNavigationBar] = useState([{ name: "My Files", parentId: "" }]);
  const [createNewFolder, setCreateNewFolder] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    q: "",
    sort: "",
    type: ""
  })

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

  useEffect(() => {

    const delayDebounceFn = setTimeout(() => {
      getFiles();
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [filters])

  useEffect(() => {
    getFiles();
  }, [parentId]);

  const tableColumns = ["Name", "Type", "Size", "Uploaded At", "Owner", "Actions"];

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

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div className="text-sm leading-5 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 lg:pb-0 no-scrollbar">
          {navigationBar.map((item, index) => {
            return (
              <span key={item.parentId} className="flex items-center gap-2" onClick={() => handleNavigationClick(item.parentId, index)}>
                <span className="cursor-pointer font-medium text-[#2b7fff] last:font-semibold last:text-zinc-950">{item.name}</span>
                {index < navigationBar.length - 1 && <ChevronRight className="size-4 text-[#71717b]" />}
              </span>
            )
          })}
        </div>

        {permissionCheck(PERMISSIONS.UPLOAD_DOCUMENT) && (
          <div className="flex items-center gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
            <Button size="sm" className="bg-[#2b7fff] text-blue-50" disabled={isUploading} variant="default">
              <label htmlFor="file-input" className="cursor-pointer gap-1 flex items-center">
                {isUploading ? "Uploading..." : <><Plus className="size-4" /> Upload</>}
                <input id="file-input" type="file" className="hidden" onChange={onChangeFile} />
              </label>
            </Button>
            <Button size="sm" variant="outline" className="gap-1 shrink-0" onClick={() => setCreateNewFolder(true)}>
              <FolderPlus className="size-4" />
              <span className="hidden sm:inline">New Folder</span>
            </Button>
          </div>
        )}

      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="size-4 text-[#71717b] absolute left-3 top-1/2 -translate-y-1/2" />
          <Input placeholder="Search files…" className="bg-white pl-9 w-full" value={filters.q} onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))} />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Select name="type" value={filters.type} onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}>
            <SelectTrigger id="type-select" className="w-full h-10 bg-white text-zinc-900">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent position="popper" className="z-1000">
              <SelectGroup>
                <SelectLabel>Select Type</SelectLabel>
                {typeOptions.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select name="sort" value={filters.sort} onValueChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}>
            <SelectTrigger id="sort-select" className="w-full h-10 bg-white text-zinc-900">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent position="popper" className="z-1000">
              <SelectGroup>
                <SelectLabel>Select Option</SelectLabel>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <FilesTableFormat
        parentId={parentId}
        createNewFolder={createNewFolder}
        setCreateNewFolder={setCreateNewFolder}
        setParentId={setParentId}
        tableColumns={tableColumns}
        tableRows={tableRows}
        loading={loading}
        setNavigationBar={setNavigationBar}
        getFiles={getFiles}
      />

    </div>
  );
}