import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMemo, useState } from "react";
import { deleteUser } from "@/api/user";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import UserModal from "@/components/Users/UserModal";
import { useAuthContext } from "@/contexts/AuthContext";
import ConfirmationModal from "@/components/ConfirmationModal";
import { toastNotification } from "@/helper/toastNotification";

const ActionsCell = ({ row: currentUser, fetchUsers, roles, setCurrentPage, currentPageItems }) => {
    const { checkPermission } = usePermissions();
    const { user: { _id: userId } } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deletingUser, setDeletingUser] = useState(null);
    const displayName = currentUser.firstName && currentUser.lastName ? `${currentUser.firstName} ${currentUser.lastName}` : currentUser.email;

    const handleDelete = async () => {
        setDeletingUser(true);
        try {
            const res = await deleteUser(currentUser._id);
            if (res.success) {
                fetchUsers();
                setIsDeleting(false);
                if (currentPageItems === 1) {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                }
            }
        } catch (error) {
            console.log("Error deleting user: ", error);
            toastNotification(error?.response?.data?.message || "Failed to delete user", "error");
        } finally {
            setDeletingUser(false);
        }
    }

    const canUpdateUser = useMemo(() => checkPermission(PERMISSIONS.UPDATE_USER), [checkPermission]);
    const canDeleteUser = useMemo(() => checkPermission(PERMISSIONS.DELETE_USER), [checkPermission]);

    // Row-level guard: don't show actions for yourself or for Admins
    const showActions = currentUser._id !== userId && currentUser?.role?.name !== "Admin";

    const actions = [
        {
            key: "edit",
            show: canUpdateUser,
            label: "Edit",
            icon: Pencil,
            onClick: () => setIsEditing(true),
        },
        {
            key: "delete",
            show: canDeleteUser,
            label: "Delete",
            icon: Trash2,
            onClick: () => setIsDeleting(true),
            danger: true,
        },
    ].filter((action) => action.show);

    return (
        <>
            {showActions && actions.length > 0 && (
                <>
                    {/* Desktop / tablet: full icon row */}
                    <div className="hidden sm:flex justify-end items-center gap-1">
                        {actions.map(({ key, label, icon: Icon, onClick, danger }) => (
                            <Button
                                key={key}
                                onClick={onClick}
                                variant="ghost"
                                size="icon"
                                title={label}
                                className={`size-8 cursor-pointer ${danger ? "text-red-500 hover:text-red-600 hover:bg-red-50" : "text-zinc-500"
                                    }`}
                            >
                                <Icon className="size-4" />
                            </Button>
                        ))}
                    </div>

                    {/* Mobile: single 3-dot trigger, labeled items inside */}
                    <div className="flex sm:hidden justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="size-8 cursor-pointer">
                                    <MoreVertical className="size-4 text-zinc-500" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-36">
                                {actions.map(({ key, label, icon: Icon, onClick, danger }) => (
                                    <DropdownMenuItem
                                        key={key}
                                        onClick={onClick}
                                        className={`cursor-pointer gap-2 ${danger ? "text-red-500 focus:text-red-600 focus:bg-red-50" : ""
                                            }`}
                                    >
                                        <Icon className="size-3.5" />
                                        <span>{label}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </>
            )}

            {isEditing && (
                <UserModal setIsOpen={setIsEditing} user={currentUser} fetchUsers={fetchUsers} roles={roles} />
            )}

            {isDeleting && (
                <ConfirmationModal
                    heading="Delete User"
                    subheading={`Are you sure you want to delete ${displayName}'s account? This action cannot be undone.`}
                    onConfirm={handleDelete}
                    onCancel={() => setIsDeleting(false)}
                    type="danger"
                    loading={deletingUser}
                    confirmText="Yes, delete it"
                    loadingText="Deleting..."
                />
            )}
        </>
    )
}

export default ActionsCell;