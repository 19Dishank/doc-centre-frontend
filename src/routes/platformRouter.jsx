/* eslint-disable react-refresh/only-export-components */
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const OnBoardingPage = lazy(() => import("@/pages/OnBoardingPage"));

export const platformRouter = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
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
                ]
            },
        ],
    },
]);