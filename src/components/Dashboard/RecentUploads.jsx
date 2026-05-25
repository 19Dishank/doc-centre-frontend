import {
    ArrowRight,
    FileSpreadsheet,
    FileText,
    FileVideo,
    Image,
    MoreHorizontal,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const RecentUploads = () => {
    const recentUploads = [
        { id: 1, fileName: "Q4-Financial-Report.pdf", fileType: "pdf", fileSize: "2.4 MB", uploadTime: "2 hours ago", uploader: "Sarah Miller", uploaderInitials: "SM" },
        { id: 2, fileName: "Project-Proposal-v3.docx", fileType: "docx", fileSize: "847 KB", uploadTime: "5 hours ago", uploader: "Mike Kim", uploaderInitials: "MK" },
        { id: 3, fileName: "brand-assets-2025.png", fileType: "png", fileSize: "5.1 MB", uploadTime: "yesterday", uploader: "James Doe", uploaderInitials: "JD" },
        { id: 4, fileName: "customer-data-export.xlsx", fileType: "xlsx", fileSize: "1.8 MB", uploadTime: "2 days ago", uploader: "Alex Lopez", uploaderInitials: "AL" },
        { id: 5, fileName: "product-demo-final.mp4", fileType: "mp4", fileSize: "42.3 MB", uploadTime: "3 days ago", uploader: "Rachel Park", uploaderInitials: "RP" },
    ];

    const getFileIcon = (fileType) => {
        const iconClass = "size-4";
        switch (fileType) {
            case "pdf": return <FileText className={`${iconClass} text-red-600`} />;
            case "docx": return <FileText className={`${iconClass} text-blue-600`} />;
            case "xlsx": return <FileSpreadsheet className={`${iconClass} text-amber-600`} />;
            case "png": return <Image className={`${iconClass} text-emerald-600`} />;
            case "mp4": return <FileVideo className={`${iconClass} text-purple-600`} />;
            default: return <FileText className={`${iconClass} text-gray-600`} />;
        }
    };

    return (
        <Card className="flex flex-col h-full pt-0">
            <CardHeader className="p-5 flex-row justify-between items-center border-b">
                <h2 className="font-semibold text-base">Recent Uploads</h2>
                <a href="#" className="font-medium text-[#2b7fff] text-sm flex items-center gap-1 hover:underline">
                    View all
                    <ArrowRight className="size-3" />
                </a>
            </CardHeader>

            <CardContent className="p-0">
                <div className="divide-y divide-zinc-100">
                    {recentUploads.map((upload) => (
                        <div key={upload.id} className="flex px-5 py-4 items-center gap-4 hover:bg-zinc-50/50 transition-colors">
                            {/* File Icon */}
                            <div className="size-10 shrink-0 rounded-lg bg-slate-50 flex justify-center items-center border border-zinc-100">
                                {getFileIcon(upload.fileType)}
                            </div>

                            {/* File Info */}
                            <div className="flex flex-col flex-1 min-w-0">
                                <span className="font-medium text-sm text-zinc-950 truncate">
                                    {upload.fileName}
                                </span>
                                <span className="text-zinc-500 text-xs truncate">
                                    {upload.fileSize} <span className="mx-1">•</span> {upload.uploadTime}
                                </span>
                            </div>

                            {/* Uploader - Name hidden on mobile to save space */}
                            <div className="flex items-center gap-2 shrink-0">
                                <Avatar className="size-7 border border-white shadow-sm">
                                    <AvatarFallback className="bg-zinc-100 text-zinc-600 text-[10px] font-bold">
                                        {upload.uploaderInitials}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="hidden sm:inline-block text-zinc-500 text-xs w-24 truncate">
                                    {upload.uploader}
                                </span>
                            </div>

                            {/* Actions */}
                            <Button variant="ghost" size="icon" className="size-8 shrink-0 text-zinc-400 hover:text-zinc-950">
                                <MoreHorizontal className="size-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default RecentUploads;