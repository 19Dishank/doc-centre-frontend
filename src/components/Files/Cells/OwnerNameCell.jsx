import UIAvatar from "@/components/ui/ui-avatar";
import { useAuthContext } from "@/contexts/AuthContext";
import { User } from "lucide-react";

const OwnerNameCell = ({ row }) => {

    const { user: { _id: userId } } = useAuthContext();
    const isFolder = !row.originalFileName;
    const isMe = isFolder
        ? row.createdBy?._id === userId
        : row.uploadedBy?._id === userId;
    const ownerName = isFolder
        ? `${row.createdBy?.firstName} ${row.createdBy?.lastName}`
        : `${row.uploadedBy?.firstName} ${row.uploadedBy?.lastName}`;
    const ownerEmailId = isFolder ? row.createdBy?.email : row.uploadedBy?.email;

    if(!ownerEmailId) return <span className="flex items-center">—</span>;

    return (
        <div className="flex items-center gap-2 py-1">
            {(!ownerName.includes("undefined"))
                ? <UIAvatar fullName={ownerName} userId={row.createdBy?._id || row.uploadedBy?._id} />
                : <User className="size-8 rounded-full shrink-0 p-1.5 bg-[#2b7fff] text-white text-xs" />
            }
            <span className="max-w-40 truncate flex gap-1 items-baseline">
                <span className="truncate">{ownerName.includes("undefined") ? ownerEmailId : ownerName}</span>
                {isMe && <span className="text-xs">(You)</span>}
            </span>
        </div>
    )
}

export default OwnerNameCell;