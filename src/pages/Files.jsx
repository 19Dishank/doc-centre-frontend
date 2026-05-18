import {
  ChevronDown,
  ChevronRight,
  FolderPlus,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilesTableFormat from "@/components/Files/FilesTableView";

export default function Files() {

  const tableColumns = ["Name", "Type", "Size", "Modified", "Owner", "Actions"];
  const files = [
    { id: 1, name: "Client Assets", type: "Folder", size: null, modified: "Mar 12, 2024", owner: "Jane Doe" },
    { id: 2, name: "Marketing Campaigns", type: "Folder", size: null, modified: "Mar 10, 2024", owner: "Mark Lee" },
    { id: 3, name: "Design Specs", type: "Folder", size: null, modified: "Mar 08, 2024", owner: "Sara Kim" },
    { id: 4, name: "Q1-Report.pdf", type: "PDF", size: "2.4 MB", modified: "Mar 14, 2024", owner: "Jane Doe" },
    { id: 5, name: "Proposal-Draft.docx", type: "DOCX", size: "486 KB", modified: "Mar 13, 2024", owner: "Mark Lee" },
    { id: 6, name: "hero-banner.png", type: "PNG", size: "3.1 MB", modified: "Mar 09, 2024", owner: "Sara Kim" },
    { id: 7, name: "Product-Demo.mp4", type: "MP4", size: "42.3 MB", modified: "Mar 11, 2024", owner: "Rachel Park" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div className="text-sm leading-5 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 lg:pb-0 no-scrollbar">
          <span className="cursor-pointer font-medium text-[#2b7fff]">My Files</span>
          <ChevronRight className="size-4 text-[#71717b] shrink-0" />
          <span className="cursor-pointer font-medium text-[#2b7fff]">Projects</span>
          <ChevronRight className="size-4 text-[#71717b] shrink-0" />
          <span className="font-semibold text-zinc-950">2024</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
          <Button size="sm" className="bg-[#2b7fff] text-blue-50 gap-1 shrink-0">
            <Plus className="size-4" />
            Upload
          </Button>
          <Button size="sm" variant="outline" className="gap-1 shrink-0">
            <FolderPlus className="size-4" />
            <span className="hidden sm:inline">New Folder</span>
          </Button>
          {/* <div className="rounded-lg bg-white border-zinc-200 border border-solid flex shrink-0 p-px">
            <Button variant="ghost" size="sm" className={`px-2 ${!isTableView ? "text-[#2b7fff] bg-[#2b7fff]/10" : ""}`} onClick={() => setIsTableView(false)}>
              <LayoutGrid className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className={`px-2 ${isTableView ? "text-[#2b7fff] bg-[#2b7fff]/10" : ""}`} onClick={() => setIsTableView(true)}>
              <List className="size-4" />
            </Button>
          </div> */}
          <Button variant="outline" size="sm" className="shrink-0 px-2 lg:hidden">
            <MoreHorizontal className="size-4" />
          </Button>
        </div>
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

      <FilesTableFormat tableColumns={tableColumns} tableRows={files} />

    </div>
  );
}