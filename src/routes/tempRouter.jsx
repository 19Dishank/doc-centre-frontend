/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import HomePage from "@/pages/HomePage";
import OnBoardingPage from "@/pages/OnBoardingPage";
import UserInvite from "@/pages/UserInvite";
// import ErrorPage from "@/pages/ErrorPage";
// import AppLayout from "@/layouts/AppLayout";
// import Dashboard from "@/pages/Dashboard";
// import Files from "@/pages/Files";
// import UploadFile from "@/pages/Upload";
// import UsersList from "@/pages/Users";
// import Roles from "@/pages/Roles";
// import BillingPage from "@/pages/BillingPage";
// import Organization from "@/pages/Organization";
// import ApiAccess from "@/pages/ApiAccess";
// import Notifications from "@/pages/Notifications";
// import DangerZone from "@/pages/DangerZone";
// import LoginPage from "@/pages/LoginPage";
// import ForgotPasswordPage from "@/pages/ForgotPasswordPage";

const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
const AppLayout = lazy(() => import("@/layouts/AppLayout/AppLayout"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Files = lazy(() => import("@/pages/Files"));
const UploadFile = lazy(() => import("@/pages/Upload"));
const UsersList = lazy(() => import("@/pages/Users"));
const Roles = lazy(() => import("@/pages/Roles"));
const BillingPage = lazy(() => import("@/pages/BillingPage"));
const Organization = lazy(() => import("@/pages/Organization"));
const ApiAccess = lazy(() => import("@/pages/ApiAccess"));
const Notifications = lazy(() => import("@/pages/Notifications"));
const DangerZone = lazy(() => import("@/pages/DangerZone"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const EmailInput = lazy(() => import("@/components/ForgotPasswordPage/EmailInput"));
const OTPInput = lazy(() => import("@/components/ForgotPasswordPage/OTPInput"));
const PasswordInput = lazy(() => import("@/components/ForgotPasswordPage/PasswordInput"));
const PasswordResetSuccessPage = lazy(() => import("@/components/ForgotPasswordPage/SuccessPage"));
const UserSettings = lazy(() => import("@/pages/UserSettings"));

export const tempRouter = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        children: [
            {
                element: <PublicRoutes />,
                children: [
                    {
                        path: "/",
                        element: <HomePage />,
                    },
                    {
                        element: <AuthLayout />,
                        children: [
                            {
                                path: "/login",
                                element: <LoginPage />,
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
                                path: "/users/invite",
                                element: <UserInvite />,
                            },
                            {
                                path: "/forgot-password",
                                children: [
                                    { path: "", element: <EmailInput /> },
                                    { path: "verify", element: <OTPInput /> },
                                    { path: "reset", element: <PasswordInput /> },
                                    { path: "success", element: <PasswordResetSuccessPage /> },
                                ]
                            },
                        ]
                    }
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
                                        path: "user",
                                        element: <UserSettings />,
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
                    }
                ]
            },
        ],
    },
]);