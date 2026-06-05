import { useAuthContext } from "@/contexts/AuthContext";
import { usePermissions } from "@/hooks/usePermissions";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isRouteAccessible }) => {

  const { isAuthenticated } = useAuthContext();
  const { checkPermission, checkRole } = usePermissions();
  const { permissions, role } = isRouteAccessible || {};

  if (!!permissions && !checkPermission(permissions)) return <Navigate to="/dashboard" replace />;
  if (!!role && !checkRole(role) ) return <Navigate to="/dashboard" replace />;

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return children ? children : <Outlet />;
};
export default ProtectedRoute;