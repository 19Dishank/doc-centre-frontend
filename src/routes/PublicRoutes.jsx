import { useAuthContext } from "@/contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
};
export default PublicRoutes;