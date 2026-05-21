import {
  ChevronDown,
  FolderPlus,
  Plus,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilesTableFormat from "@/components/Files/FilesTableView";
import { fetchFiles, upload } from "@/api/file";
import { useEffect, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";

export default function Files() {

  const { permissionCheck } = usePermissions();

  const [parentId, setParentId] = useState("");
  const [navigationBar, setNavigationBar] = useState([{ name: "My Files", parentId: "" }]);
  const [createNewFolder, setCreateNewFolder] = useState(false);

  const handleNavigationClick = (parentId, index) => {
    setParentId(parentId)
    setNavigationBar(prev => prev.slice(0, index + 1))
  }

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    await upload({ file, parentId });
    getFiles();
  };

  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFiles = async () => {
    try {
      setLoading(true);
      const res = await fetchFiles(parentId);
      console.log("Files fetched successfully:", res);
      setTableRows(res.data.docs);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentId]);

  console.log(tableRows);

  const tableColumns = ["Name", "Type", "Size", "Modified", "Owner", "Actions"];

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div className="text-sm leading-5 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 lg:pb-0 no-scrollbar">
          {/* <span className="cursor-pointer font-medium text-[#2b7fff]">My Files</span> */}
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
            <Button size="sm" className="bg-[#2b7fff] text-blue-50">
              <label htmlFor="file-input" className="cursor-pointer gap-1 flex items-center">
                <Plus className="size-4" />
                Upload
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
          <Input placeholder="Search files…" className="bg-white pl-9 w-full" />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Button variant="outline" size="sm" className="gap-1 shrink-0">
            <Filter className="size-3.5" />
            <span className="hidden sm:inline">Type</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 shrink-0">
            Date
            <ChevronDown className="size-3" />
          </Button>
          <Button variant="outline" size="sm" className="gap-1 shrink-0 whitespace-nowrap">
            Sort: Name
            <ChevronDown className="size-3" />
          </Button>
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