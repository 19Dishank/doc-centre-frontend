import {
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Folder,
  FolderPlus,
  Image,
  LayoutGrid,
  List,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Share2,
  Trash2,
  Video,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PaginationBar from "@/components/ui/pagination-bar";
import { useState } from "react";

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

  const rowsPerPage = 5;
  const [tableRows, setTableRows] = useState(files.slice(0, rowsPerPage));

  const getRegistryIcons = (type) => {
    const iconClass = "size-4 shrink-0";
    switch (type) {
      case "Folder": return <Folder className={`${iconClass} fill-yellow-400 text-yellow-500`} />;
      case "PDF": return <FileText className={`${iconClass} text-red-500`} />;
      case "DOCX": return <FileText className={`${iconClass} text-blue-500`} />;
      case "PNG": return <Image className={`${iconClass} text-green-500`} />;
      case "MP4": return <Video className={`${iconClass} text-purple-500`} />;
      default: return <FileText className={`${iconClass} text-gray-500`} />;
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      {/* 1. Header & Breadcrumbs */}
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
          <div className="rounded-lg bg-white border-zinc-200 border border-solid flex shrink-0">
            <Button variant="ghost" size="sm" className="px-2">
              <LayoutGrid className="size-4 text-[#71717b]" />
            </Button>
            <Button variant="ghost" size="sm" className="px-2 bg-[#2b7fff]/10">
              <List className="size-4 text-[#2b7fff]" />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="shrink-0 px-2 lg:hidden">
            <MoreHorizontal className="size-4" />
          </Button>
        </div>
      </div>

      {/* 2. Filter Bar */}
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

      {/* 3. Responsive Table */}
      <Card className="p-0 overflow-hidden border-zinc-200">
        <div className="overflow-x-auto w-full">
          <Table className="min-w-200 lg:min-w-full">
            <TableHeader className="bg-zinc-50/50">
              <TableRow>
                {tableColumns.map((column) => (
                  <TableHead 
                    key={column} 
                    className={`text-[#71717b] text-[11px] uppercase tracking-wider font-bold h-10 first:pl-4 
                    ${column === "Actions" ? "text-right pr-4" : ""}
                    ${column === "Type" || column === "Size" ? "hidden md:table-cell" : ""}
                    `}
                  >
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableRows.map((row, index) => (
                <TableRow key={index} className="hover:bg-zinc-50/50 transition-colors">
                  <TableCell className="first:pl-4">
                    <div className="flex items-center gap-3 min-w-0">
                      {getRegistryIcons(row.type)}
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-zinc-950 truncate">{row.name}</span>
                        {/* Show small info on mobile that usually takes up columns */}
                        <span className="text-[10px] text-zinc-400 md:hidden flex gap-1 items-center">
                          {row.type} • {row.size || "Folder"}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#71717b] text-sm hidden md:table-cell">{row.type}</TableCell>
                  <TableCell className="text-[#71717b] text-sm hidden md:table-cell">{row?.size || "—"}</TableCell>
                  <TableCell className="text-[#71717b] text-sm whitespace-nowrap">{row?.modified}</TableCell>
                  <TableCell className="text-[#71717b] text-sm hidden lg:table-cell">{row.owner}</TableCell>
                  <TableCell className="text-right pr-4">
                    <div className="flex justify-end items-center gap-0.5">
                      {/* Only show primary action on mobile, rest in a menu if needed */}
                      <Button variant="ghost" size="icon" className="size-8 hidden sm:inline-flex cursor-pointer">
                        <Share2 className="size-3.5 text-[#71717b]" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8 cursor-pointer">
                        <Download className="size-3.5 text-[#71717b]" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8 hidden lg:inline-flex cursor-pointer">
                        <Pencil className="size-3.5 text-[#71717b]" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8 text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer">
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="mt-auto">
        <PaginationBar initialData={files} setTableRows={setTableRows} rowsPerPage={5} />
      </div>
    </div>
  );
}