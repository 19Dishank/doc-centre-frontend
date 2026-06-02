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

    return (
        <>
            {(!ownerName.includes("undefined"))
                ? (<img
                    className="size-7 rounded-full"
                    src={`https://ui-avatars.com/api/?name=${ownerName}&background=random`}
                    alt={`${ownerName}`}
                />)
                : <User className="size-6 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
            }
            <span className="max-w-40 truncate flex gap-1 items-baseline">
                <span>{ownerName.includes("undefined") ? ownerEmailId : ownerName}</span>
                {isMe && <span className="text-xs">(You)</span>}
            </span>
        </>
    )
}

export default OwnerNameCell;