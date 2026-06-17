import { completeOnboarding, setPassword } from "@/api/auth";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { passwordRegex } from "@/constants";
import { toastNotification } from "@/helper/toastNotification";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SetPasswordForm = ({ isOnboardingFlow, token }) => {

    const initialData = {
        password: "",
        confirmPassword: "",
    };

    const [setPasswordData, setSetPasswordData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateField = (name, value) => {

        switch (name) {
            case "password":
                if (!value.trim()) return "Password is required";
                if (!passwordRegex.test(value)) return "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
                return "";

            case "confirmPassword":
                if (!value.trim()) return "Please confirm your password";
                if (value !== setPasswordData.password) return "Passwords do not match";
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

        setLoading(true);
        try {
            isOnboardingFlow
                ? await completeOnboarding({ ...setPasswordData, token })
                : await setPassword({ ...setPasswordData, token });
            navigate(
                isOnboardingFlow ? "/onboarding/success" : "/users/invite/success",
                {
                    state: {
                        heading: "Password Set",
                        subheading: "Your password has been set successfully. You can now use your new credentials to sign in.",
                        fallbackLink: "/login"
                    }
                }
            );
        } catch (error) {
            console.error(error);
            toastNotification(error.response?.data?.message || "An error occurred. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    const style = useMemo(() => ({ height: "44px" }), []);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormField label="Password" name="password" value={setPasswordData.password} onChange={handleChange} placeholder="Enter your password" error={errors.password} isPasswordField={true} />
            <FormField label="Confirm Password" name="confirmPassword" value={setPasswordData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" error={errors.confirmPassword} isPasswordField={true} />
            <Button type="submit" className="mt-2 cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full" style={style} disabled={loading}>
                {loading ? "Setting Password..." : "Set Password"}
            </Button>
        </form>
    );
};

export default SetPasswordForm;