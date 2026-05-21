import { useAuthContext } from "@/contexts/AuthContext";
import { toastNotification } from "@/helper/toastNotification";
import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {

  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      toastNotification("You are already logged in. Redirecting to dashboard...", "info");
    }
  }, []);

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return children ? children : <Outlet />;
};
export default PublicRoute;