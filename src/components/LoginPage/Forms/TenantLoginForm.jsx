import { loginUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { useAuthContext } from "@/contexts/AuthContext";
import { toastNotification } from "@/helper/toastNotification";
import { setTokens } from "@/helper/tokens";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

const TenantLoginForm = () => {

    const { setIsAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email") || "";

    const [loginData, setLoginData] = useState({ email: email, password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const validateField = (name, value) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (name) {

            case "email":
                if (!value.trim()) return "Email is required";
                if (!emailRegex.test(value)) return "Please provide a valid email";
                return "";

            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prev) => ({
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

        Object.keys(loginData).forEach((key) => {
            newErrors[key] = validateField(key, loginData[key]);
        });

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        setLoading(true);
        const res = await loginUser(loginData);
        if (res.success) {
            setTokens(res.data.accessToken, res.data.refreshToken);
            navigate("/dashboard");
            setIsAuthenticated(true);
        } else {
            toastNotification(res?.data?.message || "Login failed. Please try again.", "error");
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormField label="Email Id" name="email" value={loginData.email} onChange={handleChange} placeholder="Enter your email" error={errors.email} disabled={!!email} />
            <FormField label="Password" name="password" value={loginData.password} onChange={handleChange} placeholder="Enter your password" error={errors.password} isPasswordField={true} />
            <NavLink to="/forgot-password" className="text-xs text-[#2b7fff] self-end -mt-2">
                Forgot password?
            </NavLink>
            <Button type="submit" className="cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
                <ArrowRight className="size-4 ml-1" />
            </Button>
        </form>
    );
};

export default TenantLoginForm;