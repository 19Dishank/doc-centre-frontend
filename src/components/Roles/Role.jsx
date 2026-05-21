import { MoreHorizontal, Shield, Edit2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { deleteRole } from "@/api/role";
import { toastNotification } from "@/helper/toastNotification";
import ConfirmationModal from "../ConfirmationModel";
import NewRoleModel from "./NewRoleModel";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";

const Role = ({ currentRoleId, handleRoleChange, role, getAvailableRoles }) => {

    const { permissionCheck } = usePermissions();
    const [isOpen, setIsOpen] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const [showEditModel, setShowEditModel] = useState(false);
    const isActive = currentRoleId === role._id;

    const canUpdateRole = permissionCheck(PERMISSIONS.UPDATE_ROLE);
    const canDeleteRole = permissionCheck(PERMISSIONS.DELETE_ROLE);
    const displayOptions = canUpdateRole || canDeleteRole;

    const handleOptionClick = (e) => {
        e.stopPropagation();
        setIsOpen(prev => !prev);
    };

    const handleDeleteRole = async () => {
        console.log("Deleting role:", role._id);
        setShowModel(true);
        try {
            await deleteRole(role._id);
            await getAvailableRoles();
            toastNotification("Role permanently deleted.", "success");
        } catch (error) {
            console.error(error);
            toastNotification("Could not delete role.", "error");
        } finally {
            setShowModel(false);
        }
    };

    return (
        <>
            <div className="relative group">
                <div
                    className={`
                        flex p-3.5 items-center gap-3 cursor-pointer rounded-lg transition-all duration-200
                        border-l-3
                        ${isActive
                            ? 'bg-blue-50/70 border-blue-600 shadow-sm'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                    onClick={() => handleRoleChange(role._id)}
                >
                    <div className={`
                        size-9 rounded-lg flex justify-center items-center transition-colors
                        ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}
                    `}>
                        <Shield className="size-4 stroke-[2.2]" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm truncate ${isActive ? 'text-blue-900' : 'text-slate-800'}`}>
                            {role.name}
                        </div>
                        <div className="text-slate-400 text-xs mt-0.5 font-medium">
                            {role.totalUsers ?? role.members ?? 0} members
                        </div>
                    </div>

                    {displayOptions && (
                        <Button
                            onClick={handleOptionClick}
                            variant="ghost"
                            size="icon"
                            className={`size-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 ${isOpen ? 'bg-slate-100 text-slate-700' : ''}`}
                        >
                            <MoreHorizontal className="size-4" />
                        </Button>
                    )}
                </div>

                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 cursor-default"
                            onClick={() => setIsOpen(false)}
                        />

                        {displayOptions && (
                            <div className="absolute right-2 top-12 w-44 rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                                {canUpdateRole && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); setShowEditModel(true); }}
                                        className="flex w-full items-center font-medium rounded-lg px-2.5 py-2 text-xs text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                                    >
                                        <Edit2 className="mr-2 size-3.5 text-slate-400" />
                                        Edit Role
                                    </button>
                                )}
                                {canUpdateRole && canDeleteRole && <div className="my-1 border-t border-slate-100" />}
                                {canDeleteRole && (
                                    <button
                                        onClick={() => { setIsOpen(false); setShowModel(true); }}
                                        className="flex w-full items-center font-medium rounded-lg px-2.5 py-2 text-xs text-red-600 transition-colors hover:bg-red-50"
                                    >
                                        <Trash2 className="mr-2 size-3.5 text-red-400" />
                                        Delete Role
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>

            {showModel && (
                <ConfirmationModal
                    heading="Delete Role"
                    subheading={`Are you sure you want to delete the "${role.name}" role? This action cannot be undone.`}
                    onConfirm={handleDeleteRole}
                    onCancel={() => setShowModel(false)}
                    type="danger"
                />
            )}

            {showEditModel && (
                <NewRoleModel
                    setIsOpen={setShowEditModel}
                    getAvailableRoles={getAvailableRoles}
                    currentRole={role}
                />
            )}
        </>
    );
};

export default Role;