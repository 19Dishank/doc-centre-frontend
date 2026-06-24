/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const OnBoardingPage = lazy(() => import("@/pages/OnBoardingPage"));
const UserInvite = lazy(() => import("@/pages/UserInvite"));
const SuccessPage = lazy(() => import("@/pages/SuccessPage"));
const DocsPage = lazy(() => import("@/pages/DocsPage"));

export const platformRoutes = [
    {
        path: "/",
        layout: "public",
        element: <HomePage />,
    },
    {
        path: "/docs",
        layout: "public",
        element: <DocsPage />,
    },
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
        path: "/onboarding/success",
        element: <SuccessPage />,
    },
    {
        path: "/users/invite",
        element: <UserInvite />,
    },
    {
        path: "/users/invite/success",
        element: <SuccessPage />,
    },
    {
        path: "/shared/:id",
        layout: "public",
        element: <HomePage />,
    },
]
