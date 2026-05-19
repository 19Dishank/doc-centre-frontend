import { useEffect, useState } from "react";
import { validateMemberToken, validateSecureToken } from "@/api/auth";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import Loader from "../ui/loader";
import ResendLink from "./ResendLink";
import SetPasswordForm from "./Forms/SetPasswordForm";
import FormContainer from "../ui/form-container";

const Activate = () => {

    const { pathname } = useLocation();
    const isOnboardingFlow = pathname === "/onboarding/activate";

    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [tokenStatus, setTokenStatus] = useState("validating");

    const validateToken = async () => {
        try {
            const res = isOnboardingFlow
                ? await validateSecureToken(token)
                : await validateMemberToken(token);
            console.log("Token validation response:", res);
            setTokenStatus(res.data.status);
        } catch (error) {
            console.error("Invalid or expired token:", error);
            // navigate("/onboarding");
            setTokenStatus("invalid");
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        validateToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (tokenStatus === "validating") return <Loader />;
    if (tokenStatus === "invalid") return <Navigate to="/onboarding" />;
    if (tokenStatus === "expired") return <ResendLink />;

    return (
        <FormContainer
            heading="Set Password"
            subheading="Choose a strong password for your account"
        >
            <SetPasswordForm isOnboardingFlow={isOnboardingFlow} token={token} />
        </FormContainer>
    );
};

export default Activate;