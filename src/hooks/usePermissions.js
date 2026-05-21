import { useAuthContext } from "@/contexts/AuthContext";

export function usePermissions() {
    const { permissions } = useAuthContext();
    console.log("Permissions in usePermissions hook: ", permissions);
    return {
        permissionCheck: (perm) => {
            if (Array.isArray(perm)) {
                return perm.every(p => permissions?.includes(p));
            }
            return permissions?.includes(perm);
        },
    };
}