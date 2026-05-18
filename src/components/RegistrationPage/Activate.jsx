import { FileStack } from "lucide-react";
import { useEffect, useState } from "react";
import { validateMemberToken, validateSecureToken } from "@/api/auth";
import { Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../ui/loader";
import ResendLink from "./ResendLink";
import SetPasswordForm from "./Forms/SetPasswordForm";

const Activate = () => {

    const { pathname } = useLocation();
    const isOnboardingFlow = pathname === "/onboarding/activate";

    const navigate = useNavigate();
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
            navigate("/onboarding");
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
        <div className="bg-white flex p-12 flex-col justify-center items-center flex-1">
            <div className="max-w-xl flex flex-col gap-8 w-full">

                <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-bold text-[#2b7fff] text-lg leading-7 tracking-tight">DocuCentral</span>
                </div>

                <div className="flex flex-col gap-2">
                    <h1
                        className="font-bold text-zinc-950 tracking-tight"
                        style={{
                            fontSize: "30px",
                            lineHeight: "36px",
                            letterSpacing: "-0.02em",
                        }}>
                        Set Password
                    </h1>
                    <p className="text-[#71717b] text-sm leading-6">Choose a strong password for your account</p>
                </div>

                <SetPasswordForm isOnboardingFlow={isOnboardingFlow} token={token} />

            </div>
        </div>
    );
};

export default Activate;