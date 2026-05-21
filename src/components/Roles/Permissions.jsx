import { FileText, Lock, Save, Settings, Shield, ShieldAlert, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { usePermissionsCatalog } from "@/contexts/PermissionsCatalogContext";
import { useEffect, useState, useMemo } from "react";
import { updateRolePermissions } from "@/api/role";
import { toastNotification } from "@/helper/toastNotification";

const Permissions = ({ currentRoleId, currentRole, getAvailableRoles }) => {
    const { permissionsCatalog = [] } = usePermissionsCatalog();
    const [permissions, setPermissions] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

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
            case "Settings": return <Settings className="size-4 text-slate-500" />;
            case "Role": return <Lock className={iconClasses} />;
            default: return <FileText className={iconClasses} />;
        }
    };

    const handlePermissionChange = (permissionId, checked, module, name) => {

        if (!name.startsWith("View")) {
            const viewPermissionId = permissionsCatalog
                .find(cat => cat.module === module)
                ?.permissions.find(perm => perm.name.startsWith("View"))?.permissionId;
            console.log("Found with viewPermissionId", viewPermissionId)
            if (checked && viewPermissionId && !permissions.includes(viewPermissionId)) {
                setPermissions((prev) => [...prev, viewPermissionId]);
            } else if (!checked && viewPermissionId) {
                setPermissions((prev) => prev.filter((perm) => perm !== viewPermissionId));
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

    console.log("currentRole", currentRole)

    return (
        <>
            {!currentRoleId ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full border-2 border-dashed rounded-2xl border-slate-200 bg-slate-50/50 p-8 text-center min-h-87.5">
                    <div className="flex items-center justify-center size-12 rounded-2xl bg-amber-50 text-amber-600 mb-4 shadow-sm">
                        <ShieldAlert className="size-6 stroke-2" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1">No Role Selected</h3>
                    <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                        Select a security profile role from the left panel to modify granular app capability grants.
                    </p>
                </div>
            ) : (
                <div className="flex-1 h-full flex flex-col border border-slate-200 bg-white shadow-sm overflow-hidden rounded-xl min-h-0">
                    <div className="px-5 py-4 flex border-b border-slate-200 shrink-0 gap-0">
                        <div className="flex gap-4">
                            <div className="flex gap-3">
                                <div className="size-10 rounded-xl bg-blue-600 text-white flex justify-center items-center shadow-md shadow-blue-200">
                                    <Shield className="size-5 stroke-[2.2]" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg text-slate-900 tracking-tight leading-none">
                                        {currentRole?.name} Permissions
                                    </h2>
                                    <p className="text-xs text-slate-500 mt-1 max-w-xl font-medium leading-relaxed">
                                        {currentRole?.description || "Configure access controls for this profile structure."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar min-h-0">
                        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200 shrink-0">
                            <span className="font-bold text-xs uppercase tracking-wider text-slate-700">
                                System Feature Control Logs
                            </span>
                            <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 shadow-sm">
                                {permissions.length} of {totalCatalogPermissionsCount} flags active
                            </span>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            {permissionsCatalog.map((category) => (
                                <div
                                    key={category.module}
                                    className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-3 shadow-sm hover:border-slate-300 transition-colors"
                                >
                                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100 mb-1">
                                        <div className="p-1.5 bg-blue-50 rounded-lg">
                                            {getModuleIcon(category.module)}
                                        </div>
                                        <span className="font-bold text-sm text-slate-800 tracking-wide">
                                            {category.module} Management
                                        </span>
                                    </div>

                                    <div className="space-y-2.5">
                                        {category.permissions.map(({ permissionId, name }) => (
                                            <div
                                                className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-slate-50/80 transition-colors"
                                                key={permissionId}
                                            >
                                                <Checkbox
                                                    onCheckedChange={(checked) => handlePermissionChange(permissionId, checked, category.module, name)}
                                                    checked={permissions?.includes(permissionId)}
                                                    className="size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                                    id={permissionId}
                                                />
                                                <label
                                                    htmlFor={permissionId}
                                                    className="text-xs font-medium text-slate-600 cursor-pointer select-none flex-1 hover:text-slate-900 transition-colors"
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

                    <div className="p-4 border-t border-slate-200 justify-end bg-slate-50/50 shrink-0">
                        <Button
                            disabled={!hasChanges || isSaving}
                            onClick={updatePermissions}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 h-9 gap-1.5 shadow-sm rounded-lg transition-all"
                        >
                            <Save className="size-3.5" />
                            {isSaving ? "Saving Config..." : "Save Changes"}
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Permissions;