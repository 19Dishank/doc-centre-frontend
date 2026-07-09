import { createPortal } from "react-dom";
import { X, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { formatSize } from "@/helper/formatSize";
import { getRegistryIcon } from "@/helper/getRegistryIcon";

const FileInfoModal = ({ item, setIsOpen }) => {

    if (!item) return null;

    const isFolder = !item.originalFileName;

    const handleClose = () => setIsOpen(false);


    const formatDate = (value) => {
        if (!value) return "—";
        return new Date(value).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };


    const uploader = item.uploadedBy || item.createdBy;
    const uploaderName = uploader ? `${uploader.firstName || ""} ${uploader.lastName || ""}`.trim() : null;

    const rows = [
        { label: "Type", value: isFolder ? "Folder" : (item.mimeType || "—") },
        { label: "Size", value: item.size != null ? formatSize(item.size) : "—" },
        { label: isFolder ? "Created by" : "Uploaded by", value: uploaderName || "—", sub: uploader?.email },
        { label: "Created", value: formatDate(item.createdAt) },
        { label: "Last modified", value: formatDate(item.updatedAt) },
        ...(item.deletedAt ? [{ label: "Deleted At", value: formatDate(item.deletedAt) }] : []),
        // { label: "Status", value: item.uploadStatus || (isFolder ? "—" : "—") },
    ];

    return createPortal(
        <div
            className="bg-zinc-950/40 flex fixed inset-0 justify-center items-center z-888 backdrop-blur p-4"
            onClick={handleClose}
        >
            <Card
                className="w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150 border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10 rounded-2xl p-0 gap-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-5 sm:p-6 flex flex-col gap-4 w-full">

                    {/* header */}
                    <CardHeader className="p-0 flex flex-row justify-between items-start gap-3">
                        <div className="flex gap-3 items-start min-w-0">
                            <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 shrink-0 flex items-center justify-center">
                                {getRegistryIcon(item)}
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <CardTitle
                                    className="font-semibold text-sm sm:text-base text-zinc-950 wrap-break-word"
                                    title={item.originalFileName || item.name}
                                >
                                    {item.originalFileName || item.name}
                                </CardTitle>
                                <span className="text-[11px] sm:text-xs text-zinc-400">
                                    {isFolder ? "Folder details" : "File details"}
                                </span>
                            </div>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 -mr-1 -mt-1 hover:bg-zinc-100 rounded-full shrink-0 cursor-pointer"
                            onClick={handleClose}
                        >
                            <X className="size-4 text-zinc-500" />
                        </Button>
                    </CardHeader>

                    {/* details list */}
                    <CardContent className="p-0">
                        <dl className="flex flex-col divide-y divide-zinc-100 border-y border-zinc-100">
                            {rows.map((row) => (
                                <div key={row.label} className="flex justify-between items-start gap-4 py-2.5">
                                    <dt className="text-xs sm:text-sm text-zinc-500 shrink-0">{row.label}</dt>
                                    <dd className="text-xs sm:text-sm font-medium text-zinc-800 text-right min-w-0 wrap-break-word">
                                        {row.value}
                                        {row.sub && (
                                            <span className="block text-[11px] font-normal text-zinc-400 mt-0.5">
                                                {row.sub}
                                            </span>
                                        )}
                                    </dd>
                                </div>
                            ))}

                        </dl>
                    </CardContent>
                </div>
            </Card>
        </div>,
        document.body
    );
};

export default FileInfoModal;