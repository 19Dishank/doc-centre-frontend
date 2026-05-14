import { FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { resetPassword } from "@/api/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import FormField from "../ui/form-field";
import { passwordRegex } from "@/constants";

const PasswordInput = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { email, token } = location?.state || "";

    console.log("Location : ", location)

    const initialData = {
        password: "",
        confirmPassword: "",
    };

    const [resetPasswordData, setResetPasswordData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

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
                if (value !== resetPasswordData.password) {
                    return "Passwords do not match";
                }
                return "";

            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setResetPasswordData((prev) => ({
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

        Object.keys(resetPasswordData).forEach((key) => {
            newErrors[key] = validateField(key, resetPasswordData[key]);
        });

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        try {
            const res = await resetPassword({ ...resetPasswordData, email, token });
            console.log("Reset Password Data:", res);
            navigate("/forgot-password/success");
        } catch (error) {
            console.error(error);
        }
    };

    if (!email) return <Navigate to="/forgot-password" replace />;

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
                    <FormField label="Password" name="password" value={resetPasswordData.password} onChange={handleChange} placeholder="Enter your password" error={errors.password} isPasswordField={true} />
                    <FormField label="Confirm Password" name="confirmPassword" value={resetPasswordData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" error={errors.confirmPassword} isPasswordField={true} />
                </div>

                <Button onClick={handleSubmit} className=" cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full" style={{ height: "44px" }}>
                    Set Password
                </Button>
            </div>
        </div>
    );
}

export default PasswordInput;