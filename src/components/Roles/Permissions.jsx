import { FileText, Lock, Save, Settings, Shield, ShieldAlert, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useEffect, useState, useMemo } from "react";
import { updateRolePermissions } from "@/api/role";
import { toastNotification } from "@/helper/toastNotification";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { useAuthContext } from "@/contexts/AuthContext";
import { useCatalogContext } from "@/contexts/CatalogContext";

const Permissions = ({ currentRoleId, currentRole, getAvailableRoles }) => {
    const { permissionsCatalog = [] } = useCatalogContext();
    const [permissions, setPermissions] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const { checkPermission } = usePermissions();
    const { user } = useAuthContext();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPermissions(currentRole?.permissions || []);
    }, [currentRole]);

    const totalCatalogPermissionsCount = useMemo(() => {
        return permissionsCatalog.reduce((acc, cat) => acc + cat.permissions.length, 0);
    }, [permissionsCatalog]);

    const getModuleIcon = (moduleName) => {
        const iconClasses = "size-4 text-blue-600";
        switch (moduleName) {
            case "User": return <Users className={iconClasses} />;
            case "Document": return <FileText className={iconClasses} />;
            case "Settings": return <Settings className="size-4 text-zinc-500" />;
            case "Role": return <Lock className={iconClasses} />;
            default: return <FileText className={iconClasses} />;
        }
    };

    const handlePermissionChange = (permissionId, checked, module, name) => {
        if (!name.startsWith("View")) {
            const viewPermissionId = permissionsCatalog
                .find(cat => cat.module === module)
                ?.permissions.find(perm => perm.name.startsWith("View"))?.permissionId;
            if (checked && viewPermissionId && !permissions.includes(viewPermissionId)) {
                setPermissions((prev) => [...prev, viewPermissionId]);
            }
        } else {
            if (!checked) {
                const relatedPermissions = permissionsCatalog
                    .find(cat => cat.module === module)
                    ?.permissions.filter(perm => perm.name !== name)
                    .map(perm => perm.permissionId) || [];
                setPermissions((prev) => prev.filter((perm) => !relatedPermissions.includes(perm)));
            }
        }

        setPermissions((prev) =>
            checked ? [...prev, permissionId] : prev.filter((perm) => perm !== permissionId)
        );
    };

    const hasChanges = useMemo(() => {
        const roleArray = currentRole?.permissions || [];
        if (permissions.length !== roleArray.length) return true;
        const roleSet = new Set(roleArray);
        return !permissions.every(p => roleSet.has(p));
    }, [permissions, currentRole]);

    const updatePermissions = async () => {
        try {
            setIsSaving(true);
            await updateRolePermissions(currentRoleId, permissions);
            await getAvailableRoles();
            toastNotification("Permissions saved successfully!", "success");
        } catch (error) {
            toastNotification(error?.response?.data?.message || "Failed to update profile permissions.", "error");
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

    const handelSelectAllChange = (module) => {
        const category = permissionsCatalog.find(cat => cat.module === module);
        if (!category) return;
        const categoryPermissionIds = category.permissions.map(perm => perm.permissionId);
        const allSelected = categoryPermissionIds.every(id => permissions.includes(id));
        if (allSelected) {
            setPermissions((prev) => prev.filter(perm => !categoryPermissionIds.includes(perm)));
        } else {
            setPermissions((prev) => {
                const newPermissions = [...prev];
                categoryPermissionIds.forEach(id => {
                    if (!newPermissions.includes(id)) {
                        newPermissions.push(id);
                    }
                });
                return newPermissions;
            });
        }
    };

    const handleReset = () => {
        setPermissions(currentRole?.permissions || []);
    };

    const canAssignPermissions = useMemo(() => checkPermission(PERMISSIONS.ASSIGN_PERMISSION), [checkPermission]);

    return (
        <>
            {!currentRoleId ? (
                <div className="w-full h-full min-h-87.5 flex flex-col justify-center items-center text-center p-6 border-2 border-dashed border-zinc-200 overflow-hidden rounded-xl bg-white">
                    <div className="flex items-center justify-center size-12 rounded-2xl bg-amber-50 text-amber-700 mb-4 shadow-sm shrink-0">
                        <ShieldAlert className="size-6 stroke-2" />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-1">No Role Selected</h3>
                    <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                        Select a security profile role from the left panel to modify granular app capability grants.
                    </p>
                </div>
            ) : (
                <div className="w-full flex flex-col border border-zinc-200 bg-white shadow-sm overflow-hidden rounded-xl min-h-0 h-full mb-10">

                    <div className="px-4 py-4 sm:px-5 flex border-b border-zinc-200 shrink-0">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full min-w-0">
                            <div className="flex gap-3 items-center min-w-0">
                                <div className="size-10 rounded-xl bg-blue-600 text-white flex justify-center items-center shadow-md shadow-blue-100 shrink-0">
                                    <Shield className="size-5 stroke-[2.2]" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="font-bold text-base sm:text-xl text-zinc-950 tracking-tight truncate leading-none">
                                        {currentRole?.name} Permissions
                                    </h2>
                                    <p className="text-xs text-zinc-500 mt-1.5 max-w-xl font-medium truncate">
                                        {currentRole?.description || "Configure access controls for this profile structure."}
                                    </p>
                                </div>
                            </div>
                            <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 shadow-sm whitespace-nowrap shrink-0 self-start sm:self-center">
                                {permissions.length} of {totalCatalogPermissionsCount} flags active
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 sm:p-5 custom-scrollbar min-h-0 bg-zinc-50/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {permissionsCatalog.map((category) => (
                                <div
                                    key={category.module}
                                    className="rounded-xl border border-zinc-200 bg-white p-4 flex flex-col gap-3 shadow-sm hover:border-zinc-300 transition-colors"
                                >
                                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-100 mb-1">
                                        <div className="p-1.5 bg-blue-50 rounded-lg shrink-0">
                                            {getModuleIcon(category.module)}
                                        </div>
                                        <span className="font-bold text-sm text-zinc-900 tracking-wide">
                                            {category.module} Management
                                        </span>
                                        <div className="ml-auto flex items-center gap-1.5">
                                            <Checkbox
                                                id={"select_all_" + category.module}
                                                className="cursor-pointer size-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 shrink-0"
                                                disabled={(!canAssignPermissions || currentRoleId === user.role._id)}
                                                checked={category.permissions.every(perm => permissions?.includes(perm.permissionId))}
                                                onCheckedChange={() => handelSelectAllChange(category.module) }
                                            />
                                            <label
                                                htmlFor={"select_all_" + category.module}
                                                className="text-xs font-medium text-zinc-600 cursor-pointer select-none flex-1 hover:text-zinc-900 transition-colors line-clamp-1"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Select All
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {category.permissions.map(({ permissionId, name }) => (
                                            <div
                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
                                                key={permissionId}
                                                onClick={() => {
                                                    if (canAssignPermissions) {
                                                        const isChecked = permissions?.includes(permissionId);
                                                        handlePermissionChange(permissionId, !isChecked, category.module, name);
                                                    }
                                                }}
                                            >
                                                <Checkbox
                                                    disabled={(!canAssignPermissions || currentRoleId === user.role._id)}
                                                    onCheckedChange={(checked) => handlePermissionChange(permissionId, checked, category.module, name)}
                                                    checked={permissions?.includes(permissionId)}
                                                    className="cursor-pointer size-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 shrink-0"
                                                    id={permissionId}
                                                    onClick={(e) => e.stopPropagation()} // Stop triggering dual click events
                                                />
                                                <label
                                                    htmlFor={permissionId}
                                                    className="text-xs font-medium text-zinc-600 cursor-pointer select-none flex-1 hover:text-zinc-900 transition-colors line-clamp-1"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {(canAssignPermissions && currentRoleId !== user.role._id) && (
                        <div className="p-4 border-t border-zinc-200 flex flex-col-reverse sm:flex-row justify-end bg-zinc-50/50 shrink-0 gap-2">
                            {hasChanges && (
                                <Button
                                    variant="outline"
                                    onClick={handleReset}
                                    className="w-full sm:w-auto text-xs h-10 sm:h-9 cursor-pointer"
                                >
                                    Reset
                                </Button>
                            )}
                            <Button
                                disabled={!hasChanges || isSaving}
                                onClick={updatePermissions}
                                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 h-10 sm:h-9 gap-1.5 shadow-sm rounded-lg transition-all w-full sm:w-auto"
                            >
                                <Save className="size-3.5" />
                                {isSaving ? "Saving Config..." : "Save Changes"}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Permissions;