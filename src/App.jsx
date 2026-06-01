import Loader from "./components/ui/loader";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { getSubdomain } from "./helper/getSubdomain";
import { platformRoutes } from "./routes/platformRoutes";
import { Suspense } from "react";
import ErrorPage from "./pages/ErrorPage";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import PublicRoute from "./routes/PublicRoute";
import AppLayout from "./layouts/AppLayout/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { protectedRoutes, publicRoutes } from "./routes/tenantRoutes";
import { useAuthContext } from "./contexts/AuthContext";

export default function App() {

  const { loading } = useAuthContext();

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

  console.log("Platform Router:", platformRouter);

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
            [
              {
                path: "/",
                element: <Navigate to="/dashboard" replace />,
              },
              ...protectedRoutes
                .map(({ path, element, isRouteAccessible }) => ({
                  path,
                  element: loading ? <Loader styles={"min-h-screen"} /> : <ProtectedRoute isRouteAccessible={isRouteAccessible}>{element}</ProtectedRoute>,
                }))
            ]
        },
      ],
    },
  ]);

  const subdomain = getSubdomain();
  const isPlatform = subdomain === "app" || subdomain === null;
  const router = isPlatform ? platformRouter : tenantRouter;

  return (
    <Suspense fallback={<Loader styles={"min-h-screen"} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}