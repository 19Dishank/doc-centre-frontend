import { useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { toastNotification } from "@/helper/toastNotification";
import { Outlet, Navigate, useLocation, useSearchParams } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuthContext();
  const currentEmail = user?.email;
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const shouldRedirect =
    !loading &&
    isAuthenticated &&
    (
      (pathname !== "/login" && !pathname.startsWith("/connect")) ||
      (pathname === "/login" && (!email || email === currentEmail))
    );

  useEffect(() => {
    if (shouldRedirect) {
      toastNotification("You are already logged in.", "info");
    }
  }, [shouldRedirect]);

  if (shouldRedirect) {
    return <Navigate to="/dashboard" replace />;
  }

  return children ? children : <Outlet />;
};

export default PublicRoute;
