import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Folder,
  FolderInput,
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
  X,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Files() {
  return (
    <div className="bg-zinc-100/40 flex p-8 flex-col flex-1 gap-6" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="flex justify-between items-center">
        <div className="text-sm leading-5 flex items-center gap-2">
          <span className="cursor-pointer font-medium text-[#2b7fff]">My Files</span>
          <ChevronRight className="size-4 text-[#71717b]" />
          <span className="cursor-pointer font-medium text-[#2b7fff]">Projects</span>
          <ChevronRight className="size-4 text-[#71717b]" />
          <span className="font-semibold text-zinc-950">2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#2b7fff] text-blue-50 gap-1">
            <Plus className="size-4" />
            Upload
          </Button>
          <Button variant="outline" className="gap-1">
            <FolderPlus className="size-4" />
            New Folder
          </Button>
          <div className="rounded-lg bg-white border-zinc-200 border border-solid flex overflow-hidden">
            <Button variant="ghost" size="icon">
              <LayoutGrid className="size-4 text-[#71717b]" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-[#2b7fff]/10">
              <List className="size-4 text-[#2b7fff]" />
            </Button>
          </div>
          <Button variant="outline" size="icon">
            <MoreHorizontal className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="size-4 text-[#71717b] absolute left-3 top-2.5" />
          <Input placeholder="Search files…" className="bg-white pl-9" />
        </div>
        <Button variant="outline" className="gap-1">
          Type
          <ChevronDown className="size-3" />
        </Button>
        <Button variant="outline" className="gap-1">
          Date
          <ChevronDown className="size-3" />
        </Button>
        <Button variant="outline" className="gap-1">
          Sort by: Name
          <ChevronDown className="size-3" />
        </Button>
      </div>
      <Card className="p-0 gap-0 overflow-hidden">
        <div className="bg-[#2b7fff]/10 border-[#2b7fff]/20 border-t-0 border-r-0 border-b border-l-0 border-solid flex px-4 py-2 justify-between items-center">
          <div className="text-sm leading-5 flex items-center gap-4">
            <span className="font-medium text-[#2b7fff]">3 items selected</span>
            <Separator orientation="vertical" className="h-4" />
            <button className="text-[#2b7fff] flex items-center gap-1">
              <Download className="size-3.5" />
              Download
            </button>
            <button className="text-[#2b7fff] flex items-center gap-1">
              <FolderInput className="size-3.5" />
              Move
            </button>
            <button className="text-[#e7000b] flex items-center gap-1">
              <Trash2 className="size-3.5" />
              Delete
            </button>
          </div>
          <Button variant="ghost" size="icon" className="size-6">
            <X className="size-4" />
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-3 w-10">
                <Checkbox />
              </TableHead>
              <TableHead className="uppercase text-[#71717b] text-[11px] tracking-wider">Name</TableHead>
              <TableHead className="uppercase text-[#71717b] text-[11px] tracking-wider">Type</TableHead>
              <TableHead className="uppercase text-[#71717b] text-[11px] tracking-wider">Size</TableHead>
              <TableHead className="uppercase text-[#71717b] text-[11px] tracking-wider">Modified</TableHead>
              <TableHead className="uppercase text-[#71717b] text-[11px] tracking-wider">Owner</TableHead>
              <TableHead className="text-right uppercase text-[#71717b] text-[11px] tracking-wider pr-4">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-semibold flex items-center gap-2">
                <Folder className="size-4 fill-yellow-400 text-yellow-500" />
                Client Assets
              </TableCell>
              <TableCell className="text-[#71717b]">Folder</TableCell>
              <TableCell className="text-[#71717b]">—</TableCell>
              <TableCell className="text-[#71717b]">Mar 12, 2024</TableCell>
              <TableCell className="text-[#71717b]">Jane Doe</TableCell>
              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Share2 className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Pencil className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Trash2 className="size-3.5 text-[#71717b]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100/40">
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-semibold flex items-center gap-2">
                <Folder className="size-4 fill-yellow-400 text-yellow-500" />
                Marketing Campaigns
              </TableCell>
              <TableCell className="text-[#71717b]">Folder</TableCell>
              <TableCell className="text-[#71717b]">—</TableCell>
              <TableCell className="text-[#71717b]">Mar 10, 2024</TableCell>
              <TableCell className="text-[#71717b]">Mark Lee</TableCell>
              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Share2 className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Pencil className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Trash2 className="size-3.5 text-[#71717b]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-semibold flex items-center gap-2">
                <Folder className="size-4 fill-yellow-400 text-yellow-500" />
                Design Specs
              </TableCell>
              <TableCell className="text-[#71717b]">Folder</TableCell>
              <TableCell className="text-[#71717b]">—</TableCell>
              <TableCell className="text-[#71717b]">Mar 08, 2024</TableCell>
              <TableCell className="text-[#71717b]">Sara Kim</TableCell>
              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Share2 className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Pencil className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Trash2 className="size-3.5 text-[#71717b]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100/40">
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <FileText className="size-4 text-red-500" />
                Q1-Report.pdf
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-red-100 text-red-700">
                  PDF
                </Badge>
              </TableCell>
              <TableCell className="text-[#71717b]">2.4 MB</TableCell>
              <TableCell className="text-[#71717b]">Mar 14, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarFallback className="text-[10px]">JD</AvatarFallback>
                  </Avatar>
                  <span className="text-[#71717b]">Jane Doe</span>
                </div>
              </TableCell>
              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Share2 className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Pencil className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Trash2 className="size-3.5 text-[#71717b]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="relative">
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <FileText className="size-4 text-blue-500" />
                Proposal-Draft.docx
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  DOCX
                </Badge>
              </TableCell>
              <TableCell className="text-[#71717b]">486 KB</TableCell>
              <TableCell className="text-[#71717b]">Mar 13, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarFallback className="text-[10px]">ML</AvatarFallback>
                  </Avatar>
                  <span className="text-[#71717b]">Mark Lee</span>
                </div>
              </TableCell>
              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Share2 className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Pencil className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Trash2 className="size-3.5 text-[#71717b]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100/40">
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell colSpan={6}>
                <div className="flex py-1 items-center gap-3">
                  <Skeleton className="size-4 rounded-sm" />
                  <Skeleton className="w-48 h-3" />
                  <Skeleton className="w-16 h-3" />
                  <Skeleton className="w-20 h-3" />
                  <Skeleton className="w-24 h-3" />
                  <Skeleton className="w-28 h-3" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Image className="size-4 text-purple-500" />
                hero-banner.png
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  PNG
                </Badge>
              </TableCell>
              <TableCell className="text-[#71717b]">3.1 MB</TableCell>
              <TableCell className="text-[#71717b]">Mar 09, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarFallback className="text-[10px]">SK</AvatarFallback>
                  </Avatar>
                  <span className="text-[#71717b]">Sara Kim</span>
                </div>
              </TableCell>
              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Share2 className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Pencil className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Trash2 className="size-3.5 text-[#71717b]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100/40">
              <TableCell className="px-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Video className="size-4 text-orange-500" />
                demo-walkthrough.mp4
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  MP4
                </Badge>
              </TableCell>
              <TableCell className="text-[#71717b]">28.7 MB</TableCell>
              <TableCell className="text-[#71717b]">Mar 05, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarFallback className="text-[10px]">AR</AvatarFallback>
                  </Avatar>
                  <span className="text-[#71717b]">Alex R.</span>
                </div>
              </TableCell>
              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Share2 className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Download className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Pencil className="size-3.5 text-[#71717b]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7">
                    <Trash2 className="size-3.5 text-[#71717b]" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="border-zinc-200 border-t border-r-0 border-b-0 border-l-0 border-solid flex px-4 py-3 justify-between items-center">
          <span className="text-[#71717b] text-sm leading-5">Showing 1–8 of 34 files</span>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm">
              <ChevronLeft className="size-3.5" />
              Previous
            </Button>
            <Button variant="ghost" size="sm" className="size-8 bg-[#2b7fff] text-blue-50 p-0">
              1
            </Button>
            <Button variant="ghost" size="sm" className="size-8 p-0">
              2
            </Button>
            <Button variant="ghost" size="sm" className="size-8 p-0">
              3
            </Button>
            <Button variant="ghost" size="sm" className="size-8 p-0">
              4
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="size-3.5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
