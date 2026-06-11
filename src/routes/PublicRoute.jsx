import { useAuthContext } from "@/contexts/AuthContext";
import { Outlet, Navigate, useLocation, useSearchParams } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  if (isAuthenticated) {
    if(location.pathname === "/login" && !email) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children ? children : <Outlet />;
};
export default PublicRoute;