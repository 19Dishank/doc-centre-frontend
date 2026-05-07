import {
  Check,
  ChevronDown,
  Clock,
  FileText,
  Folder,
  FolderOpen,
  Image,
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

  console.log("file", file)

  return (
    <div>
      <div className="min-h-239 flex">
        <div className="flex flex-col flex-1">
          <main className="bg-zinc-100/40 p-8 flex-1">
            <div className="flex mb-6 flex-col gap-1">
              <h1 className="font-semibold text-2xl leading-8">Upload Files</h1>
              <p className="text-[#71717b] text-sm leading-5">
                Add files to your document system. Supported: PDF, DOCX, XLSX, PNG, MP4, ZIP.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-6">
                <div className="rounded-xl bg-white border-zinc-200 border-2 border-dashed p-12 gap-4">
                  <div className="text-center flex flex-col items-center gap-4">
                    <div className="size-16 rounded-full bg-[#2b7fff]/10 flex justify-center items-center">
                      <UploadCloud className="size-8 text-[#2b7fff]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-lg leading-7">{`Drag & drop files here`}</h3>
                      <p className="text-[#71717b] text-sm leading-5">or click to browse from your computer</p>
                    </div>
                    <label htmlFor="file-upload-input" className="relative">
                      <Button className="gap-2 cursor-pointer">
                        <FolderOpen className="size-4 cursor-pointer" />
                        Browse Files
                      </Button>
                      <input onChange={handleFileChange} id="file-upload-input" type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </label>
                    <p className="text-[#71717b] text-xs leading-4">
                      Max 200MB per file · PDF, DOCX, XLSX, PNG, MP4, ZIP
                    </p>
                  </div>
                </div>
                <Card className="p-0 gap-0">
                  <CardHeader className="border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid flex p-4 flex-row justify-between items-center gap-2">
                    <CardTitle className="font-semibold text-sm leading-5">Upload Queue (3 files)</CardTitle>
                    <button className="text-[#71717b] text-xs leading-4">Clear all</button>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-0">
                    <div className="border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid flex p-4 items-center gap-4">
                      <div className="size-10 rounded-lg bg-red-50 text-red-600 flex justify-center items-center">
                        <FileText className="size-5" />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm leading-5">Annual_Report_2024.pdf</span>
                          <span className="text-[#71717b] text-xs leading-4">4.2 MB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="flex-1 h-1.5" />
                          <span className="font-medium text-emerald-600 text-xs leading-4">100%</span>
                        </div>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 gap-1">
                        <Check className="size-3" />
                        Uploaded
                      </Badge>
                      <button className="text-[#71717b]">
                        <X className="size-4" />
                      </button>
                    </div>
                    <div className="border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid flex p-4 items-center gap-4">
                      <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex justify-center items-center">
                        <FileText className="size-5" />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm leading-5">Project_Brief.docx</span>
                          <span className="text-[#71717b] text-xs leading-4">1.1 MB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={67} className="flex-1 h-1.5" />
                          <span className="font-medium text-[#2b7fff] text-xs leading-4">67%</span>
                        </div>
                      </div>
                      <span className="font-medium text-[#2b7fff] text-xs leading-4">Uploading…</span>
                      <button className="text-[#71717b]">
                        <X className="size-4" />
                      </button>
                    </div>
                    <div className="flex p-4 items-center gap-4">
                      <div className="size-10 rounded-lg bg-violet-50 text-violet-600 flex justify-center items-center">
                        <Image className="size-5" />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm leading-5">hero_banner.png</span>
                          <span className="text-[#71717b] text-xs leading-4">890 KB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={0} className="flex-1 h-1.5" />
                          <span className="font-medium text-[#71717b] text-xs leading-4">0%</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <Clock className="size-3" />
                        Queued
                      </Badge>
                      <button className="text-[#71717b]">
                        <X className="size-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1">
                <Card className="p-6 gap-4">
                  <CardHeader className="p-0 gap-2">
                    <CardTitle className="font-semibold text-sm leading-5">Preview</CardTitle>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-4 w-full">
                    {file ? (
                      <PDFPreviewer file={file} />
                    ) : (
                      <div className="rounded-lg bg-zinc-100 flex justify-center items-center min-h-48">
                        <div className="flex flex-col items-center gap-2">
                          <div className="size-16 rounded-lg bg-red-100 text-red-600 flex justify-center items-center">
                            <FileText className="size-8" />
                          </div>
                          <span className="text-[#71717b] text-xs leading-4">PDF Preview</span>
                        </div>
                      </div>
                    )}
                    {file && (
                      <>
                        <div className="flex flex-col gap-2">
                          <span className="font-bold text-sm leading-5">{file.name}</span>
                          <div className="rounded-lg border-zinc-200 border border-solid flex p-4 flex-col gap-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[#71717b] text-xs leading-4">Type</span>
                              <span className="font-medium text-xs leading-4">{file.type}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center">
                              <span className="text-[#71717b] text-xs leading-4">Size</span>
                              <span className="font-medium text-xs leading-4">{formatSize(file.size)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center">
                              <span className="text-[#71717b] text-xs leading-4">Modified</span>
                              <span className="font-medium text-xs leading-4">{file.lastModifiedDate.toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-[#71717b] text-xs leading-4">Destination Folder</label>
                          <button className="rounded-lg bg-white text-sm leading-5 border-zinc-200 border border-solid flex px-3 py-2 justify-between items-center">
                            <span className="flex items-center gap-2">
                              <Folder className="size-4 text-[#71717b]" />
                              My Files / Projects
                            </span>
                            <ChevronDown className="size-4 text-[#71717b]" />
                          </button>
                        </div>
                      </>
                    )}
                  </CardContent>
                  {file && (
                    <CardFooter className="gap-2 bg-white p-0 pb-6 pt-4">
                      <Button className="gap-2 w-full p-2">
                        <Upload className="size-4" />
                        Start Upload
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
