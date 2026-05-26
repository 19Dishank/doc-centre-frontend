import { Pencil, Trash2, User, } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { PERMISSIONS } from "@/helper/permissions"
import { usePermissions } from "@/hooks/usePermissions"
import { formateTime } from "@/helper/formateTime"
import { useState } from "react"
import UserModal from "./UserModal"
import { useAuthContext } from "@/contexts/AuthContext"
import ConfirmationModal from "../ConfirmationModel"
import { toastNotification } from "@/helper/toastNotification"
import { deleteUser } from "@/api/user"

const UserDetails = ({ user : currentUser, fetchUsers }) => {

    const { permissionCheck } = usePermissions();
    const { user: { _id: userId } } = useAuthContext();

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const displayName = currentUser.firstName && currentUser.lastName ? `${currentUser.firstName} ${currentUser.lastName}` : currentUser.email;

    const getStyles = role => {
        switch (role) {
            case "Admin": return "bg-blue-100 text-blue-700 hover:bg-blue-100"
            case "Editor": return "bg-violet-100 text-violet-700 hover:bg-violet-100"
            case "Viewer": return "bg-gray-100 text-gray-700 hover:bg-gray-100"
            default: return ""
        }
    }

    const handleDelete = async () => {
        try {
            const res = await deleteUser(currentUser._id);
            if (res.success) {
                fetchUsers();
                setIsDeleting(false);
            }
        } catch (error) {
            console.log("Error deleting user: ", error);
            toastNotification(error?.response?.data?.message || "Failed to delete user", "error");
        }
    }

    return (
        <>
            <TableRow key={currentUser._id} className="hover:bg-zinc-50/50">
                <TableCell>
                    <div className="flex items-center gap-3">
                        {(currentUser.firstName && currentUser.lastName)
                            ? (<img
                                className="size-8 rounded-full shrink-0"
                                src={`https://ui-avatars.com/api/?name=${currentUser.firstName} ${currentUser.lastName}&background=random`}
                                alt={`${currentUser.firstName} ${currentUser.lastName}`}
                            />)
                            : <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                        }
                        <div className="flex flex-col min-w-0">
                            <span className="font-medium text-sm leading-5 truncate">
                                {displayName}  {currentUser._id === userId && <span className="font-medium text-zinc-500"> (You)</span>}
                            </span>
                            <span className="text-[#71717b] text-xs leading-4 truncate sm:block">{currentUser.email}</span>
                        </div>
                    </div>
                </TableCell>

                <TableCell>
                    <Badge className={`font-medium rounded-full ${getStyles(currentUser.role.name)}`}>
                        {currentUser.role.name}
                    </Badge>
                </TableCell>

                {/* <TableCell className="sm:table-cell">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500" />
                        <span className="text-sm leading-5">{currentUser.status}</span>
                    </div>
                </TableCell> */}

                <TableCell className="text-[#71717b] text-xs leading-4 lg:table-cell whitespace-nowrap">
                    {formateTime(currentUser.lastActivateAt)}
                </TableCell>

                <TableCell>
                    {currentUser._id !== userId && (
                        <div className="flex justify-end items-center gap-1">
                            {permissionCheck(PERMISSIONS.UPDATE_USER) && (
                                <Button onClick={() => setIsEditing(true)} variant="ghost" size="icon" className="size-8">
                                    <Pencil className="size-4 text-zinc-500" />
                                </Button>
                            )}
                            {permissionCheck(PERMISSIONS.DELETE_USER) && (
                                <Button
                                    onClick={() => setIsDeleting(true)}
                                    variant="ghost"
                                    size="icon"
                                    className="size-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            )}
                        </div>
                    )}
                </TableCell>
            </TableRow>


            {isEditing && (
                <UserModal setIsOpen={setIsEditing} user={currentUser} fetchUsers={fetchUsers} />
            )}

            {isDeleting && (
                <ConfirmationModal
                    heading="Delete User"
                    subheading={`Are you sure you want to delete ${displayName}'s account? This action cannot be undone.`}
                    onConfirm={handleDelete}
                    onCancel={() => setIsDeleting(false)}
                    type="danger"
                />
            )}
        </>
    );
};

export default UserDetails;