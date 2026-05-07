import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./PrivateRoutes";
import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Files from "@/pages/Files";
import UploadFile from "@/pages/Upload";
import UsersList from "@/pages/Users";
import Roles from "@/pages/Roles";
import BillingPage from "@/pages/BillingPage";
import Organization from "@/pages/Organization";
import ApiAccess from "@/pages/ApiAccess";
import Notifications from "@/pages/Notifications";
import DangerZone from "@/pages/DangerZone";

export const tenantRouter = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        children: [
            {
                element: <ProtectedRoutes />,
                children: [
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
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);