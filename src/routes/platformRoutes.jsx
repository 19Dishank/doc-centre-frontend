/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const OnBoardingPage = lazy(() => import("@/pages/OnBoardingPage"));
const UserInvite = lazy(() => import("@/pages/UserInvite"));

export const platformRoutes = [
    {
        path: "/",
        element: <HomePage />,
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
        path: "/users/invite",
        element: <UserInvite />,
    }
]
