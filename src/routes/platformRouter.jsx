import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import OnBoardingPage from "@/pages/OnBoardingPage";

export const platformRouter = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        children: [
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
        ],
    },
]);