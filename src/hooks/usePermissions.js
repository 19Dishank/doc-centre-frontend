import { useAuthContext } from "@/contexts/AuthContext";
import { useCallback } from "react";

export function usePermissions() {

  const { permissions, user } = useAuthContext();
  const userRole = user?.role?.name;

  const checkPermission = useCallback(
    (requiredPermissions) => {

      if (Array.isArray(requiredPermissions)) {
        return requiredPermissions.every((p) =>
          permissions?.includes(p)
        );
      }

      return permissions?.includes(requiredPermissions);
    },
    [permissions]
  );

  const checkRole = useCallback(
    (role) => userRole === role,
    [userRole]
  );

  return {
    checkPermission,
    checkRole,
  };
}