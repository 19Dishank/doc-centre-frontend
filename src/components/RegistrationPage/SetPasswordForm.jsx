import { FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { completeOnboarding, setPassword, validateMemberToken, validateSecureToken } from "@/api/auth";
import { Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import FormField from "../ui/form-field";
import { passwordRegex } from "@/constants";
import Loader from "../ui/loader";
import ResendLink from "./ResendLink";

const SetPasswordForm = () => {

    const { pathname } = useLocation();
    const isOnboardingFlow = pathname === "/onboarding/activate";

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const initialData = {
        password: "",
        confirmPassword: "",
    };

    const [setPasswordData, setSetPasswordData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    const [tokenStatus, setTokenStatus] = useState("validating");

    const validateField = (name, value) => {

        switch (name) {
            case "password":
                if (!value.trim()) return "Password is required";
                if (!passwordRegex.test(value)) {
                    return "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
                }
                return "";

            case "confirmPassword":
                if (!value.trim()) return "Please confirm your password";
                if (value !== setPasswordData.password) {
                    return "Passwords do not match";
                }
                return "";

            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSetPasswordData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        Object.keys(setPasswordData).forEach((key) => {
            newErrors[key] = validateField(key, setPasswordData[key]);
        });

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        try {
            isOnboardingFlow
                ? await completeOnboarding({ ...setPasswordData, token })
                : await setPassword({ ...setPasswordData, token });
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

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

                <div className="flex flex-col gap-4">
                    <FormField label="Password" name="password" value={setPasswordData.password} onChange={handleChange} placeholder="Enter your password" error={errors.password} isPasswordField={true} />
                    <FormField label="Confirm Password" name="confirmPassword" value={setPasswordData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" error={errors.confirmPassword} isPasswordField={true} />
                </div>

                <Button onClick={handleSubmit} className=" cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full" style={{ height: "44px" }}>
                    Set Password
                </Button>
            </div>
        </div>
    );
};

export default SetPasswordForm;