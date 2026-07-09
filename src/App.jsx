import Loader from "./components/ui/loader";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { getSubdomain } from "./helper/getSubdomain";
import { platformRoutes } from "./routes/platformRoutes";
import { Suspense, useMemo } from "react";
import ErrorPage from "./pages/ErrorPage";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import PublicRoute from "./routes/PublicRoute";
import AppLayout from "./layouts/AppLayout/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { protectedRoutes, publicRoutes } from "./routes/tenantRoutes";
import { useAuthContext } from "./contexts/AuthContext";
import MaintenancePage from "./pages/maintenance/MaintenancePage";


const IS_MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "true";

export default function App() {

  const { loading } = useAuthContext();

  const platformRouter = useMemo(() => (
    createBrowserRouter([
      {
        errorElement: <ErrorPage />,
        children:
          platformRoutes.map(({ path, element, layout }) => ({
            path,
            element: layout === "public" ? element : <AuthLayout>{element}</AuthLayout>,
          }))
      },
    ])
  ), []);

  const tenantRouter = useMemo(() => (
    createBrowserRouter([
      {
        errorElement: <ErrorPage />,
        children: [
          {
            element: <PublicRoute />,
            children: [
              {
                element: <AuthLayout />,
                children:
                  publicRoutes.map(({ path, element }) => ({
                    path,
                    element
                  }))
              }
            ]
          },
          {
            element: <AppLayout />,
            children:
              [
                {
                  path: "/",
                  element: <Navigate to="/dashboard" replace />,
                },
                ...protectedRoutes
                  .map(({ path, element, isRouteAccessible }) => ({
                    path,
                    element: <ProtectedRoute isRouteAccessible={isRouteAccessible}>{element}</ProtectedRoute>,
                  }))
              ]
          },
        ],
      },
    ])
  ), [loading]);

  if (IS_MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  const subdomain = getSubdomain();
  const isPlatform = subdomain === "app" || subdomain === null;
  const router = isPlatform ? platformRouter : tenantRouter;

  if (!isPlatform && window.location.hostname === import.meta.env.VITE_ROOT_DOMAIN) {
    window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app"));
    return null;
  }

  if (loading) return <Loader styles={"min-h-screen"} />

  return (
    <Suspense fallback={<Loader styles={"min-h-screen"} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}