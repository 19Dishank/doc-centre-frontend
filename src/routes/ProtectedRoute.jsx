import { useAuthContext } from "@/contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;