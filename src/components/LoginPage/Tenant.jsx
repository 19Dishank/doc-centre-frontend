import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateEmailVerificationToken } from "@/api/auth";
import Loader from "../ui/loader";
import TenantLoginForm from "./Forms/TenantLoginForm";
import FormContainer from "../ui/form-container";

const Tenant = () => {

    const [searchParams] = useSearchParams();
    const emailVerifyToken = searchParams.get("t") || "";
    const [loading, setLoading] = useState(false);

    const verifyToken = async () => {
        setLoading(true);
        try {
            const res = await validateEmailVerificationToken(emailVerifyToken);
            console.log("Token Validation Data:", res);
        } catch (error) {
            console.log("Error : ", error)
            window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app") + `/login`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        verifyToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!emailVerifyToken) {
        window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app") + `/login`);
    };

    if (loading) return <Loader />;

    return (
        <FormContainer
            heading="Welcome back"
            subheading="Sign in to your account to continue"
        >
            <TenantLoginForm emailVerifyToken={emailVerifyToken} />
        </FormContainer>
    );
};

export default Tenant;