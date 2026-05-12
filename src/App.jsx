import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/ui/loader";
// import LoginPage from "./pages/LoginPage";
// import ErrorPage from "./pages/ErrorPage";
// import Dashboard from "./pages/Dashboard";
// import BillingPage from "./pages/BillingPage";
// import AppLayout from "./layouts/AppLayout";
// import Files from "./pages/Files";
// import UploadFile from "./pages/Upload";
// import UsersList from "./pages/Users";
// import Roles from "./pages/Roles";
// import Organization from "./pages/Organization";
// import ApiAccess from "./pages/ApiAccess";
// import Notifications from "./pages/Notifications";
// import DangerZone from "./pages/DangerZone";
// import HomePage from "./pages/HomePage";
// import OnBoardingPage from "./pages/OnBoardingPage";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const BillingPage = lazy(() => import("./pages/BillingPage"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const Files = lazy(() => import("./pages/Files"));
const UploadFile = lazy(() => import("./pages/Upload"));
const UsersList = lazy(() => import("./pages/Users"));
const Roles = lazy(() => import("./pages/Roles"));
const Organization = lazy(() => import("./pages/Organization"));
const ApiAccess = lazy(() => import("./pages/ApiAccess"));
const Notifications = lazy(() => import("./pages/Notifications"));
const DangerZone = lazy(() => import("./pages/DangerZone"));
const HomePage = lazy(() => import("./pages/HomePage"));
const OnBoardingPage = lazy(() => import("./pages/OnBoardingPage"));

const App = () => {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        // Public Pages
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/onboarding",
          element: <OnBoardingPage />,
        },
        {
          path: "/onboarding/activate",
          element: <OnBoardingPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <OnBoardingPage />,
        },

        // App Layout Routes
        {
          element: <AppLayout />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/files",
              element: <Files />,
            },
            {
              path: "/upload",
              element: <UploadFile />,
            },
            {
              path: "/users",
              element: <UsersList />,
            },
            {
              path: "/roles",
              element: <Roles />,
            },
            {
              path: "/settings",
              children: [
                {
                  path: "billing",
                  element: <BillingPage />,
                },
                {
                  path: "organization",
                  element: <Organization />,
                },
                {
                  path: "api-access",
                  element: <ApiAccess />,
                },
                {
                  path: "notifications",
                  element: <Notifications />,
                },
                {
                  path: "danger-zone",
                  element: <DangerZone />,
                },
              ]
            }
          ],
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;