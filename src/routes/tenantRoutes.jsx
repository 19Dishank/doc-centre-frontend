/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { PERMISSIONS } from "@/helper/permissions";
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Files = lazy(() => import("@/pages/Files"));
const UsersList = lazy(() => import("@/pages/Users"));
const Roles = lazy(() => import("@/pages/Roles"));
const BillingPage = lazy(() => import("@/pages/settings/BillingPage"));
const Organization = lazy(() => import("@/pages/settings/Organization"));
const NotificationsSetting = lazy(() => import("@/pages/settings/NotificationsSetting"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
// const ConsentScreen = lazy(() => import("@/pages/ConsentScreen"));
const EmailInput = lazy(() => import("@/components/ForgotPasswordPage/EmailInput"));
const OTPInput = lazy(() => import("@/components/ForgotPasswordPage/OTPInput"));
const PasswordInput = lazy(() => import("@/components/ForgotPasswordPage/PasswordInput"));
const SuccessPage = lazy(() => import("@/pages/SuccessPage"));
const UserSettings = lazy(() => import("@/pages/settings/UserSettings"));
const APIKeysPage = lazy(() => import("@/pages/credentials/APIKeysPage"));
const RecycleBin = lazy(() => import("@/pages/RecycleBin"));

export const publicRoutes = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    // {
    //     path: "/connect",
    //     element: <LoginPage />,
    // },
    // {
    //     path: "/connect/authorize",
    //     element: <ConsentScreen />,
    // },
    {
        path: "/forgot-password",
        element: <EmailInput />,
    },
    {
        path: "/forgot-password/verify",
        element: <OTPInput />
    },
    {
        path: "/forgot-password/reset",
        element: <PasswordInput />
    },
    {
        path: "/forgot-password/success",
        element: <SuccessPage />
    }
]

export const protectedRoutes = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/files",
        element: <Files />,
        isRouteAccessible: {
            permissions: PERMISSIONS.VIEW_DOCUMENT
        },
    },
    {
        path: "/trash",
        element: <RecycleBin />,
        isRouteAccessible: {
            permissions: PERMISSIONS.RESTORE_DOCUMENT
        },
    },
    {
        path: "/users",
        element: <UsersList />,
        isRouteAccessible: {
            permissions: PERMISSIONS.VIEW_USER
        },
    },
    {
        path: "/roles",
        element: <Roles />,
        isRouteAccessible: {
            permissions: PERMISSIONS.VIEW_ROLE
        },
    },
    {
        path: "/credentials/api-keys",
        element: <APIKeysPage />,
    },
    {
        path: "/settings/billing",
        element: <BillingPage />,
        isRouteAccessible: {
            role: "Admin"
        },
    },
    {
        path: "/settings/organization",
        element: <Organization />,
        isRouteAccessible: {
            role: "Admin"
        },
    },
    {
        path: "/settings/user",
        element: <UserSettings />,
    },
    {
        path: "/settings/notifications",
        element: <NotificationsSetting />,
    },
    // {
    //     path: "/settings/danger-zone",
    //     element: <DangerZone />,
    // },
]

