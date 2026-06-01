import { useAuthContext } from "@/contexts/AuthContext";
import { usePermissions } from "@/hooks/usePermissions";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isRouteAccessible }) => {
  const { isAuthenticated } = useAuthContext();
  const { permissionCheck } = usePermissions();
  
  if (!!isRouteAccessible && !permissionCheck(isRouteAccessible)) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;