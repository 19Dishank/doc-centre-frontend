import { User } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import UIAvatar from "@/components/ui/ui-avatar";

const UserNameCell = ({ row: currentUser }) => {

  const { user: { _id: userId } } = useAuthContext();
  const displayName = currentUser.firstName && currentUser.lastName ? `${currentUser.firstName} ${currentUser.lastName}` : currentUser.email;

  return (
    <div className="flex items-center gap-3">
      {(currentUser.firstName && currentUser.lastName)
        ? <UIAvatar fullName={displayName} userId={currentUser._id} />
        : <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
      }
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-sm leading-5 truncate">
          {displayName}  {currentUser._id === userId && <span className="font-medium text-zinc-500"> (You)</span>}
        </span>
        <span className="text-[#71717b] text-xs leading-4 truncate sm:block">{currentUser.email}</span>
      </div>
    </div>
  )
}

export default UserNameCell;