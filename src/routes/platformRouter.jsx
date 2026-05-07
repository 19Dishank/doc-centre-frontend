import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import HomePage from "@/pages/HomePage";
import RegistrationPage from "@/pages/RegistrationPage";
import LoginPage from "@/pages/LoginPage";

export const platformRouter = createBrowserRouter([
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
                        path: "/register",
                        element: <RegistrationPage />,
                    },
                    {
                        path: "/onboarding/activate",
                        element: <RegistrationPage />,
                    },
                    {
                        path: "/login",
                        element: <LoginPage />,
                    },
                ],
            },
        ],
    },
]);