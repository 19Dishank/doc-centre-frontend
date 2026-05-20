import { FileText, Lock, Save, Settings, Shield, ShieldAlert, Trash2, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { usePermissionsCatalog } from "@/contexts/PermissionsCatalogContext";
import { useEffect, useState } from "react";
import { deleteRole, updateRolePermissions } from "@/api/role";
import { toastNotification } from "@/helper/toastNotification";
import ConfirmationModal from "../ConfirmationModel";

const Permissions = ({ currentRoleId, currentRole, getAvailableRoles }) => {

    const { permissionsCatalog } = usePermissionsCatalog();
    const [permissions, setPermissions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPermissions(currentRole?.permissions || [])
    }, [currentRole])

    const getModuleIcon = (moduleName) => {
        switch (moduleName) {
            case "User":
                return <Users className="size-4 text-[#2b7fff]" />;
            case "Document":
                return <FileText className="size-4 text-[#2b7fff]" />;
            case "Settings":
                return <Settings className="size-4 text-[#71717b]" />;
            case "Role":
                return <Lock className="size-4 text-[#2b7fff]" />;
            default:
                return <FileText className="size-4 text-[#2b7fff]" />;
        }
    };

    const handlePermissionChange = (permissionId, checked) => {
        setPermissions((prev) => {
            if (checked) {
                return [...prev, permissionId];
            }
            return prev.filter((perm) => perm !== permissionId);
        });
    }

    const permArray = permissions || [];
    const roleArray = currentRole?.permissions || [];

    const hasChanges = permArray.length !== roleArray.length ||
        (() => {
            const roleSet = new Set(roleArray);
            return !permArray.every(p => roleSet.has(p));
        })();


    const updatePermissions = async () => {
        try {
            await updateRolePermissions(currentRoleId, permissions);
            getAvailableRoles();
            toastNotification("Permissions updated successfully!", "success");
        } catch (error) {
            toastNotification("Error updating permissions!", "error");
            console.error("Error updating permissions:", error);
        }
    }

    const handleDeleteRole = async () => {
        try {
            await deleteRole(currentRoleId);
            getAvailableRoles();
            setIsOpen(false);
            toastNotification("Role deleted successfully!", "success");
        } catch (error) {
            toastNotification("Error deleting role!", "error");
            console.error("Error deleting role:", error);
        }
    }

    return (
        <>
            {!currentRoleId ? (
                <div className="flex flex-col items-center justify-center w-full h-64 border border-dashed rounded-xl border-zinc-200 bg-zinc-50/50 p-6 text-center transition-all">
                    {/* Icon Container */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 mb-4">
                        <ShieldAlert className="w-6 h-6" />
                    </div>

                    {/* Typography */}
                    <h3 className="text-sm font-semibold text-zinc-700 mb-1">
                        No Role Selected
                    </h3>
                    <p className="text-xs text-zinc-500 max-w-xs leading-normal">
                        Select a role from the left panel to view and manage its permissions.
                    </p>
                </div>
            ) : (
                <Card className="p-6 flex-1 gap-4">
                    <CardHeader className="p-0 gap-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                                    <Shield className="size-5 text-[#2b7fff]" />
                                </div>
                                <span className="font-semibold text-lg leading-7">{currentRole?.name || 'Admin'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    onClick={() => setIsOpen(true)}
                                    variant="outline"
                                    size="sm"
                                    className="text-[#e7000b] border-[#e7000b] border-0 border-solid h-8 cursor-pointer">
                                    <Trash2 className="size-3" />
                                    Delete Role
                                </Button>
                            </div>
                        </div>
                        <p className="italic text-[#71717b] text-sm leading-5">
                            {currentRole?.description || 'Full access to all system features and settings.'}
                        </p>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-base leading-6">Permissions</span>
                            <span className="text-[#71717b] text-xs leading-4">16 of 16 enabled</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {permissionsCatalog.map((category) => {
                                return (
                                    <div className="rounded-lg border-zinc-200 border border-solid flex p-4 flex-col gap-2">
                                        <div className="flex mb-1 items-center gap-2">
                                            {getModuleIcon(category.module)}
                                            <span className="font-semibold text-sm leading-5">{category.module}</span>
                                        </div>
                                        {category.permissions.map(({ permissionId, name }) => (
                                            <div className="flex items-center gap-2" key={permissionId}>
                                                <Checkbox
                                                    onCheckedChange={(checked) => handlePermissionChange(permissionId, checked)}
                                                    checked={permissions?.includes(permissionId)}
                                                    className="disabled:cursor-not-allowed"
                                                    id={permissionId}
                                                />
                                                <label htmlFor={permissionId} className="text-sm leading-5">
                                                    {name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                    <CardFooter className="px-0 gap-2 bg-white">
                        <Button disabled={!hasChanges} onClick={updatePermissions} className="bg-[#2b7fff] text-blue-50 w-fit ml-auto">
                            <Save className="size-4" />
                            Save Changes
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {isOpen && (
                <ConfirmationModal
                    heading="Delete Role"
                    subheading="Are you sure you want to delete this role? This action cannot be undone."
                    onConfirm={handleDeleteRole}
                    onCancel={() => setIsOpen(false)}
                    type="danger"
                />
            )}
        </>
    );
};

export default Permissions;