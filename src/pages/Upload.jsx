import {
  Check,
  ChevronDown,
  FileText,
  Folder,
  FolderOpen,
  Upload,
  UploadCloud,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import PDFPreviewer from "@/components/ui/pdf-viewer";
import { useState } from "react";
import { formatSize } from "@/helper/formatSize";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8">Upload Files</h1>
        <p className="text-zinc-500 text-sm leading-5">
          Add files to your system. Supported: PDF, DOCX, XLSX, PNG, MP4, ZIP.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        
        <div className="flex-1 flex flex-col gap-6">
          {/* Dropzone */}
          <div className="rounded-xl bg-white border-zinc-200 border-2 border-dashed p-8 md:p-12 transition-colors hover:border-blue-400">
            <div className="text-center flex flex-col items-center gap-4">
              <div className="size-14 md:size-16 rounded-full bg-[#2b7fff]/10 flex justify-center items-center">
                <UploadCloud className="size-7 md:size-8 text-[#2b7fff]" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base md:text-lg">{`Drag & drop files here`}</h3>
                <p className="text-zinc-500 text-sm">or click to browse from your computer</p>
              </div>
              <label htmlFor="file-upload-input" className="relative">
                <Button className="gap-2 cursor-pointer shadow-sm">
                  <FolderOpen className="size-4" />
                  Browse Files
                </Button>
                <input 
                  onChange={handleFileChange} 
                  id="file-upload-input" 
                  type="file" 
                  className="absolute inset-0 opacity-0 cursor-pointer" 
                />
              </label>
              <p className="text-zinc-400 text-xs hidden sm:block">
                Max 200MB per file · PDF, DOCX, XLSX, PNG, MP4, ZIP
              </p>
            </div>
          </div>

          {/* Queue Card */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row justify-between items-center px-4 py-3 border-b">
              <CardTitle className="text-sm font-semibold">Upload Queue (3 files)</CardTitle>
              <button className="text-zinc-500 text-xs hover:text-zinc-800 transition-colors">Clear all</button>
            </CardHeader>
            <CardContent className="p-0 divide-y">
              {/* Queue Item 1 */}
              <div className="p-4 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-red-50 text-red-600 flex shrink-0 justify-center items-center">
                  <FileText className="size-5" />
                </div>
                <div className="flex flex-col flex-1 min-w-0 gap-1">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-medium text-sm truncate">Annual_Report_2024.pdf</span>
                    <span className="text-zinc-400 text-xs shrink-0">4.2 MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="flex-1 h-1.5" />
                    <span className="text-emerald-600 text-[10px] font-bold">100%</span>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 gap-1 hidden sm:flex shrink-0">
                  <Check className="size-3" /> Uploaded
                </Badge>
                <button className="text-zinc-400 hover:text-zinc-600 shrink-0">
                  <X className="size-4" />
                </button>
              </div>

              {/* Queue Item 2 (Uploading) */}
              <div className="p-4 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex shrink-0 justify-center items-center">
                  <FileText className="size-5" />
                </div>
                <div className="flex flex-col flex-1 min-w-0 gap-1">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-medium text-sm truncate">Project_Brief.docx</span>
                    <span className="text-zinc-400 text-xs shrink-0">1.1 MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={67} className="flex-1 h-1.5" />
                    <span className="text-blue-600 text-[10px] font-bold">67%</span>
                  </div>
                </div>
                <span className="text-blue-600 text-xs font-medium hidden sm:block shrink-0">Uploading…</span>
                <button className="text-zinc-400 hover:text-zinc-600 shrink-0">
                  <X className="size-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Section: Preview (Stays sticky on desktop) */}
        <div className="flex-1">
          <div className="xl:sticky xl:top-6">
            <Card className="shadow-sm">
              <CardHeader className="px-6 py-4 border-b">
                <CardTitle className="text-sm font-semibold">Preview</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6">
                {file ? (
                  <>
                    <div className="w-full overflow-hidden rounded-lg border">
                      <PDFPreviewer file={file} />
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="font-bold text-sm break-all">{file.name}</span>
                      <div className="rounded-lg border bg-zinc-50/50 p-4 flex flex-col gap-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-500">Type</span>
                          <span className="font-medium uppercase">{file.type.split('/')[1] || 'File'}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-500">Size</span>
                          <span className="font-medium">{formatSize(file.size)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-500">Modified</span>
                          <span className="font-medium">{new Date(file.lastModified).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-zinc-500 text-xs">Destination Folder</label>
                      <button className="w-full rounded-lg bg-white border p-2 text-sm flex justify-between items-center hover:bg-zinc-50">
                        <span className="flex items-center gap-2 truncate">
                          <Folder className="size-4 text-zinc-400 shrink-0" />
                          <span className="truncate">My Files / Projects</span>
                        </span>
                        <ChevronDown className="size-4 text-zinc-400 shrink-0" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="rounded-lg bg-zinc-50 border-2 border-dashed flex justify-center items-center py-12">
                    <div className="flex flex-col items-center gap-3">
                      <div className="size-12 rounded-lg bg-zinc-200 text-zinc-400 flex justify-center items-center">
                        <FileText className="size-6" />
                      </div>
                      <span className="text-zinc-400 text-xs">No file selected for preview</span>
                    </div>
                  </div>
                )}
              </CardContent>
              {file && (
                <CardFooter className="px-6 pb-6">
                  <Button className="w-full gap-2 py-6 text-base font-semibold">
                    <Upload className="size-5" />
                    Start Upload
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}