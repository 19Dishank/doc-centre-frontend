import { Outlet, Navigate } from "react-router-dom";
const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
};
export default PublicRoutes;