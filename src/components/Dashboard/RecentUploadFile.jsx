import { User } from "lucide-react";
import { useState } from "react";
import { getRegistryIcon } from "@/helper/getRegistryIcon";
import { formatSize } from "@/helper/formatSize";
import { formatTime } from "@/helper/formatTime";
import DocumentPreview from "../Files/DocumentPreview";
import { useAuthContext } from "@/contexts/AuthContext";
import { Skeleton } from "../ui/skeleton";
import UIAvatar from "../ui/ui-avatar";

const RecentUploadFile = ({ item, loading }) => {

    const [previewDocument, setPreviewDocument] = useState(false);
    const displayExtension = item?.originalFileName?.split(".").pop();
    const { user: { _id: userId } } = useAuthContext();

    const isMe = item.uploadedBy._id === userId;
    const ownerName = item.uploadedBy.firstName && item.uploadedBy.lastName
        ? `${item.uploadedBy.firstName} ${item.uploadedBy.lastName}`
        : item.uploadedBy.email;

    if (loading) return <div className="mb-4 last:mb-0 px-5 h-15"><Skeleton className="h-full w-full" /></div>;

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
                        ? (<UIAvatar firstName={item.uploadedBy.firstName} lastName={item.uploadedBy.lastName} userId={item.uploadedBy._id} />)
                        : <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                    }
                    <span className="hidden sm:inline-block text-zinc-500 text-xs w-35 lg:w-25 truncate">
                        {ownerName} {isMe && <span className="font-medium text-zinc-400"> (You)</span>}
                    </span>
                </div>
            </div>

            {previewDocument && (
                <DocumentPreview setIsOpen={setPreviewDocument} url={previewDocument} type={displayExtension} item={item} />
            )}
        </>
    )
}

export default RecentUploadFile;