import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { deleteUser } from "@/api/user";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import UserModel from "@/components/Users/UserModel";
import { useAuthContext } from "@/contexts/AuthContext";
import ConfirmationModal from "@/components/ConfirmationModel";
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

    return (
        <>
            {(currentUser._id !== userId && currentUser?.role?.name !== "Admin") && (
                <div className="flex justify-end items-center gap-1">
                    {canUpdateUser && (
                        <Button onClick={() => setIsEditing(true)} variant="ghost" size="icon" className="size-8 cursor-pointer">
                            <Pencil className="size-4 text-zinc-500" />
                        </Button>
                    )}
                    {canDeleteUser && (
                        <Button
                            onClick={() => setIsDeleting(true)}
                            variant="ghost"
                            size="icon"
                            className="size-8 cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                            <Trash2 className="size-4" />
                        </Button>
                    )}
                </div>
            )}

            {isEditing && (
                <UserModel setIsOpen={setIsEditing} user={currentUser} fetchUsers={fetchUsers} roles={roles} />
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