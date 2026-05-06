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
        {
            id: 1,
            fileName: "Q4-Financial-Report.pdf",
            fileType: "pdf",
            fileSize: "2.4 MB",
            uploadTime: "2 hours ago",
            uploader: "Sarah Miller",
            uploaderInitials: "SM",
        },
        {
            id: 2,
            fileName: "Project-Proposal-v3.docx",
            fileType: "docx",
            fileSize: "847 KB",
            uploadTime: "5 hours ago",
            uploader: "Mike Kim",
            uploaderInitials: "MK",
        },
        {
            id: 3,
            fileName: "brand-assets-2025.png",
            fileType: "png",
            fileSize: "5.1 MB",
            uploadTime: "yesterday",
            uploader: "James Doe",
            uploaderInitials: "JD",
        },
        {
            id: 4,
            fileName: "customer-data-export.xlsx",
            fileType: "xlsx",
            fileSize: "1.8 MB",
            uploadTime: "2 days ago",
            uploader: "Alex Lopez",
            uploaderInitials: "AL",
        },
        {
            id: 5,
            fileName: "product-demo-final.mp4",
            fileType: "mp4",
            fileSize: "42.3 MB",
            uploadTime: "3 days ago",
            uploader: "Rachel Park",
            uploaderInitials: "RP",
        },
    ];

    const getFileIcon = (fileType) => {
        switch (fileType) {
            case "pdf":
                return <FileText className="size-4 text-red-600" />;
            case "docx":
                return <FileText className="size-4 text-blue-600" />;
            case "xlsx":
                return <FileSpreadsheet className="size-4 text-amber-600" />;
            case "png":
                return <Image className="size-4 text-emerald-600" />;
            case "mp4":
                return <FileVideo className="size-4 text-purple-600" />;
            default:
                return <FileText className="size-4 text-gray-600" />;
        }
    };

    return (
        <Card className="p-6 gap-4">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2">
                <h2 className="font-semibold text-base leading-6">Recent Uploads</h2>
                <a className="font-medium text-[#2b7fff] text-sm leading-5 flex items-center gap-1">
                    View all
                    <ArrowRight className="size-3" />
                </a>
            </CardHeader>

            <CardContent className="divide-y divide-border flex p-0 flex-col gap-0">
                {recentUploads.map((upload) => {
                    return (
                        <div className="flex py-3 items-center gap-4">
                            <div className="size-9 rounded-lg bg-slate-50 flex justify-center items-center">
                                {getFileIcon(upload.fileType)}
                            </div>
                            <div className="flex flex-col flex-1 gap-0.5">
                                <span className="font-medium text-sm leading-5">{upload.fileName}</span>
                                <span className="text-[#71717b] text-xs leading-4">{upload.fileSize} · Uploaded {upload.uploadTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar className="size-6">
                                    <AvatarFallback className="bg-zinc-100 text-[10px]">{upload.uploaderInitials}</AvatarFallback>
                                </Avatar>
                                <span className="text-[#71717b] text-xs leading-4 w-24">{upload.uploader}</span>
                            </div>
                            <Button variant="ghost" size="icon" className="size-8">
                                <MoreHorizontal className="size-4" />
                            </Button>
                        </div>
                    )
                })}
            </CardContent>
        </Card>
    );
};

export default RecentUploads;