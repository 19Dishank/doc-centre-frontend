import Loader from "./components/ui/loader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getSubdomain } from "./helper/getSubdomain";
import { platformRoutes } from "./routes/platformRoutes";
import { Suspense } from "react";
import ErrorPage from "./pages/ErrorPage";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import { usePermissions } from "./hooks/usePermissions";
import PublicRoute from "./routes/PublicRoute";
import AppLayout from "./layouts/AppLayout/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { protectedRoutes, publicRoutes } from "./routes/tenantRoutes";
import { useAuthContext } from "./contexts/AuthContext";

export default function App() {

  const { loading } = useAuthContext();
  const { permissionCheck } = usePermissions();

  const platformRouter = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children:
        platformRoutes.map(({ path, element }) => ({
          path,
          element: path === "/" ? element : <AuthLayout>{element}</AuthLayout>,
        }))
    },
  ]);

  const tenantRouter = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          element: <AuthLayout />,
          children:
            publicRoutes.map(({ path, element }) => ({
              path,
              element: <PublicRoute>{element}</PublicRoute>,
            }))
        },
        {
          element: <AppLayout />,
          children:
            protectedRoutes
              .filter(({ isRouteAccessible }) => {
                if (isRouteAccessible === undefined) return true;
                return permissionCheck(isRouteAccessible)
              }).map(({ path, element }) => ({
                path,
                element: <ProtectedRoute>{element}</ProtectedRoute>,
              }))
        },
      ],
    },
  ]);

  const subdomain = getSubdomain();
  const isPlatform = subdomain === "app" || subdomain === null;
  const router = isPlatform ? platformRouter : tenantRouter;

  if (loading) return <Loader styles={"min-h-screen"} />;

  return (
    <Suspense fallback={<Loader styles={"min-h-screen"} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}