import { ArrowRight, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getRegistryIcon } from "@/helper/getRegistryIcon";
import { formatSize } from "@/helper/formatSize";
import { formatTime } from "@/helper/formatTime";
import DocumentPreview from "../Files/DocumentPreview";

const RecentUploads = ({ recentUploads }) => {
    return (
        <>
            <Card className="flex flex-col h-full pt-0">
                <CardHeader className="p-5 flex-row justify-between items-center border-b">
                    <h2 className="font-semibold text-base">Recent Uploads</h2>
                    <NavLink to="/files" className="font-medium text-[#2b7fff] text-sm flex items-center gap-1 hover:underline">
                        View all
                        <ArrowRight className="size-3" />
                    </NavLink>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="divide-y divide-zinc-100">
                        {recentUploads.length === 0
                            ? <div className="p-5 text-center text-zinc-500">No uploads found.</div>
                            : recentUploads.map((item) => (
                                <RecentUploadFile key={item._id} item={item} />
                            ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default RecentUploads;

const RecentUploadFile = ({ item }) => {

    const [previewDocument, setPreviewDocument] = useState(false);

    const displayExtension = item?.originalFileName?.split(".").pop();

    return (
        <>
            <div key={item._id} className="flex px-5 py-4 items-center gap-4 hover:bg-zinc-50/50 transition-colors">
                <div className="size-10 shrink-0 rounded-lg bg-slate-50 flex justify-center items-center border border-zinc-100">
                    {getRegistryIcon({ originalFileName: item.originalFileName })}
                </div>

                <div className="flex flex-col flex-1 min-w-0 hover:underline cursor-pointer" onClick={() => setPreviewDocument(true)}>
                    <span className="font-medium text-sm text-zinc-950 truncate">
                        {item.originalFileName}
                    </span>
                    <span className="text-zinc-500 text-xs truncate">
                        {formatSize(item.size)} <span className="mx-1">•</span> {formatTime(item.createdAt, "Just now")}
                    </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    {(item.uploadedBy.firstName && item.uploadedBy.lastName)
                        ? (<img
                            className="size-8 rounded-full shrink-0"
                            src={`https://ui-avatars.com/api/?name=${item.uploadedBy.firstName} ${item.uploadedBy.lastName}&background=random`}
                            alt={`${item.uploadedBy.firstName} ${item.uploadedBy.lastName}`}
                        />)
                        : <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                    }
                    <span className="hidden sm:inline-block text-zinc-500 text-xs w-24 truncate">
                        {item.uploadedBy.firstName + " " + item.uploadedBy.lastName || item.uploadedBy.email}
                    </span>
                </div>
            </div>

            {previewDocument && (
                <DocumentPreview setIsOpen={setPreviewDocument} url={previewDocument} type={displayExtension} item={item} />
            )}
        </>
    )
}