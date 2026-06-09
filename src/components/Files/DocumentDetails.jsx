import { formatSize } from "@/helper/formatSize";
import { Calendar, FileType, HardDrive, User } from "lucide-react";

const DocumentDetails = ({ item }) => {

    const displayName = item?.uploadedBy?.firstName && item?.uploadedBy?.lastName
        ? `${item.uploadedBy.firstName} ${item.uploadedBy.lastName}`
        : item?.uploadedBy?.email || "Unknown User";


    const documentDetails = [
        {
            label: "File Size",
            value: formatSize(item?.size) || "--",
            icon: <HardDrive className="size-4 text-muted-foreground mt-0.5 shrink-0" />,
        },
        {
            label: "Mime Type",
            value: item?.mimeType || "--",
            icon: <FileType className="size-4 text-muted-foreground mt-0.5 shrink-0" />,
        },
        {
            label: "Uploaded By",
            value: displayName,
            icon: <User className="size-4 text-muted-foreground mt-0.5 shrink-0" />,
        },
        {
            label: "Uploaded On",
            value: item?.createdAt ? new Date(item.createdAt).toLocaleDateString() : "--",
            icon: <Calendar className="size-4 text-muted-foreground mt-0.5 shrink-0" />,
        }
    ]

    return (
        <div className="absolute inset-y-0 right-0 z-20 w-72 border-l border-border bg-card shadow-2xl flex flex-col justify-between animate-in slide-in-from-right-5 duration-200 min-w-0 shrink-0 md:relative md:w-80 md:shadow-none md:flex">
            <div className="p-4 space-y-4 overflow-y-auto h-full">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    File Properties
                </h3>

                <div className="space-y-3 text-xs">
                    {documentDetails.map((detail) => (
                        <div className="flex items-start gap-2.5 min-w-0">
                            {detail.icon}
                            <div className="min-w-0 flex-1">
                                <div className="font-medium text-foreground">{detail.label}</div>
                                <div className="text-muted-foreground truncate">{detail.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DocumentDetails;