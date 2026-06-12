import { useAuthContext } from "@/contexts/AuthContext";
import { toastNotification } from "@/helper/toastNotification";
import { Outlet, Navigate, useLocation, useSearchParams } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthContext();
  const currentEmail = user?.email;
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const shouldRedirect = isAuthenticated && location.pathname === "/login" && email === currentEmail;

  if (shouldRedirect) {
    toastNotification("You are already logged in.", "info");
    return <Navigate to="/dashboard" replace />;
  }

  return children ? children : <Outlet />;
};
export default PublicRoute;