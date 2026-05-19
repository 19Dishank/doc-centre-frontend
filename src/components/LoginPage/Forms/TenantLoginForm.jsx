import { loginUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { passwordRegex } from "@/constants";
import { useAuthContext } from "@/contexts/AuthContext";
import { setTokens } from "@/helper/tokens";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const TenantLoginForm = ({ emailVerifyToken }) => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setIsAuthenticated } = useAuthContext();
    const navigate = useNavigate();

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

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormField label="Password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" error={error} isPasswordField={true} />
            <NavLink to="/forgot-password" className="text-xs text-[#2b7fff] self-end -mt-2">
                Forgot password?
            </NavLink>
            <Button type="submit" className="cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11">
                Sign In
                <ArrowRight className="size-4 ml-1" />
            </Button>
        </form>
    );
};

export default TenantLoginForm;