import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";
import Dashboard from "./pages/Dashboard";
import BillingPage from "./pages/BillingPage";
import AppLayout from "./layouts/AppLayout";
import Files from "./pages/Files";
import UploadFile from "./pages/Upload";
import UsersList from "./pages/Users";
import Roles from "./pages/Roles";
import Organization from "./pages/Organization";
import ApiAccess from "./pages/ApiAccess";
import Notifications from "./pages/Notifications";
import DangerZone from "./pages/DangerZone";
import PublicRoutes from "./routes/PublicRoutes";
import ProtectedRoutes from "./routes/PrivateRoutes";
import HomePage from "./pages/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          element: <PublicRoutes />,
          children: [
            {
              path: "/",
              element: <HomePage />
            },
            {
              path: "/register",
              element: <RegistrationPage />
            },
            {
              path: "/login",
              element: <LoginPage />
            },
          ]
        },
        {
          element: <ProtectedRoutes />,
          children: [
            {
              element: <AppLayout />,
              children: [
                {
                  path: "/dashboard",
                  element: <Dashboard />
                },
                {
                  path: "/files",
                  element: <Files />
                },
                {
                  path: "/upload_file",
                  element: <UploadFile />
                },
                {
                  path: "/users",
                  element: <UsersList />
                },
                {
                  path: "/roles",
                  element: <Roles />
                },
                {
                  path: "/billing",
                  element: <BillingPage />
                },
                {
                  path: "/organization",
                  element: <Organization />
                },
                {
                  path: "/api-access",
                  element: <ApiAccess />
                },
                {
                  path: "/notifications",
                  element: <Notifications />
                },
                {
                  path: "/danger-zone",
                  element: <DangerZone />
                }
              ]
            },
          ]
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  );
};

export default App;