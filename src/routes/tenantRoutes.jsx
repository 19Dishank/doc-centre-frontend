/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { PERMISSIONS } from "@/helper/permissions";
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Files = lazy(() => import("@/pages/Files"));
const UsersList = lazy(() => import("@/pages/Users"));
const Roles = lazy(() => import("@/pages/Roles"));
// const Roles = lazy(() => import("@/pages/RolesTableView"));
const BillingPage = lazy(() => import("@/pages/BillingPage"));
const Organization = lazy(() => import("@/pages/Organization"));
const ApiAccess = lazy(() => import("@/pages/ApiAccess"));
const Notifications = lazy(() => import("@/pages/Notifications"));
const DangerZone = lazy(() => import("@/pages/DangerZone"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const EmailInput = lazy(() => import("@/components/ForgotPasswordPage/EmailInput"));
const OTPInput = lazy(() => import("@/components/ForgotPasswordPage/OTPInput"));
const PasswordInput = lazy(() => import("@/components/ForgotPasswordPage/PasswordInput"));
const SuccessPage = lazy(() => import("@/pages/SuccessPage"));
const UserSettings = lazy(() => import("@/pages/UserSettings"));

export const publicRoutes = [
    {
        path: "/login",
        element: <LoginPage />,
    },
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
        isRouteAccessible: PERMISSIONS.VIEW_DOCUMENT,
    },
    {
        path: "/users",
        element: <UsersList />,
        isRouteAccessible: PERMISSIONS.VIEW_USER,
    },
    {
        path: "/roles",
        element: <Roles />,
        // element: <RolesTableView />,
        isRouteAccessible: PERMISSIONS.VIEW_ROLE,
    },
    {
        path: "/settings/billing",
        element: <BillingPage />,
    },
    {
        path: "/settings/organization",
        element: <Organization />,
    },
    {
        path: "/settings/user",
        element: <UserSettings />,
    },
    {
        path: "/settings/api-access",
        element: <ApiAccess />,
    },
    {
        path: "/settings/notifications",
        element: <Notifications />,
    },
    {
        path: "/settings/danger-zone",
        element: <DangerZone />,
    },
]

