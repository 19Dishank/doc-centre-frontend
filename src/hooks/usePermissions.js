import { useAuthContext } from "@/contexts/AuthContext";

export function usePermissions() {

    const { permissions, user } = useAuthContext();
    const userRole = user?.role?.name;

    return {
        permissionCheck: (obj) => {
            if (obj.permissions) {
                if (Array.isArray(obj.permissions)) {
                    return obj.permissions.every(p => permissions?.includes(p));
                }
                return permissions?.includes(obj.permissions);
            }
            if (obj.role) {
                console.log("Checking role for .................................................................:", userRole === obj.role);
                return userRole === obj.role;
            }
            return false;
        },
    };
}