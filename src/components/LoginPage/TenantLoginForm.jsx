import { ArrowRight, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser, validateEmailVerificationToken } from "@/api/auth";
import FormField from "../ui/form-field";
import { passwordRegex } from "@/constants";
import Loader from "../ui/loader";
import { setTokens } from "@/helper/tokens";
import { useAuthContext } from "@/contexts/AuthContext";

const TenantLoginForm = () => {

    const [searchParams] = useSearchParams();
    const emailVerifyToken = searchParams.get("t") || "";
    const { setIsAuthenticated } = useAuthContext();

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const validatePassword = (value) => {
        if (!value.trim()) return "Password is required";
        if (!passwordRegex.test(value)) {
            return "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
        }
        return "";
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
        setError(validatePassword(e.target.value));
    };

    const validateForm = () => {
        const newError = validatePassword(password);
        setError(newError);
        return !newError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        try {
            const res = await loginUser({ password, emailVerifyToken });
            console.log("Login Data :", res);
            setTokens(res.data.accessToken, res.data.refreshToken);
            setIsAuthenticated(true);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || "An error occurred while logging in");
        }
    };

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
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-xl flex px-12 flex-col w-full">
                <div className="flex mb-12 items-center gap-2">
                    <div className="size-9 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-semibold text-[#2b7fff] text-lg leading-7 tracking-tight">DocuCentral</span>
                </div>
                <div className="flex mb-8 flex-col gap-2">
                    <h1 className="font-bold text-zinc-900 tracking-tight" style={{ fontSize: "28px", lineHeight: "1.2" }}>
                        Welcome back
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">Sign in to your account to continue</p>
                </div>
                <div className="flex flex-col gap-4">
                    <FormField label="Password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" error={error} isPasswordField={true} />
                    <NavLink to="/forgot-password" className="text-xs text-[#2b7fff] self-end -mt-2">
                        Forgot password?
                    </NavLink>
                    <Button onClick={handleSubmit} className="cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11">
                        Sign In
                        <ArrowRight className="size-4 ml-1" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TenantLoginForm;