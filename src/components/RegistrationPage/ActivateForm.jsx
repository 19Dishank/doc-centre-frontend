import { Eye, EyeOff, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { setPassword, validateSecureToken } from "@/api/auth";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../ui/loader";

const ActivateForm = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [tokenStatus, setTokenStatus] = useState("validating");

    const initialData = {
        password: "",
        confirmPassword: "",
    };

    const [onBoardingData, setOnBoardingData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateField = (name, value) => {

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        switch (name) {
            case "password":
                if (!value.trim()) return "Password is required";
                if (!passwordRegex.test(value)) {
                    return "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
                }
                return "";

            case "confirmPassword":
                if (!value.trim()) return "Please confirm your password";
                if (value !== onBoardingData.password) {
                    return "Passwords do not match";
                }
                return "";

            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setOnBoardingData((prev) => ({
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

        Object.keys(onBoardingData).forEach((key) => {
            newErrors[key] = validateField(key, onBoardingData[key]);
        });

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        try {
            const res = await setPassword({ ...onBoardingData, token });
            console.log("OnBoarding Data:", res);
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    const validateToken = async () => {
        try {
            const res = await validateSecureToken(token);
            setTokenStatus(res.data.status);
        } catch (error) {
            console.log("Error : ", error);
            setTokenStatus("invalid");
        }
    };

    console.log("status...................", tokenStatus)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        validateToken();
    }, []);

    if (tokenStatus === "validating") return <Loader />

    if (tokenStatus === "invalid") return <Navigate to="/onboarding" replace />

    if (tokenStatus === "expired") {
        return (
            <div className="bg-white flex p-12 flex-col justify-center items-center flex-1">
                <div className="max-w-sm flex flex-col items-center text-center gap-6 w-full">

                    {/* Expiration Icon (Warning/Clock) */}
                    <div className="h-16 w-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">
                            Link expired
                        </h1>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            For your security, this onboarding link has expired. Don't worry, you can easily request a new one.
                        </p>
                    </div>

                    {/* Action Button */}
                    <button
                        // onClick={handleResendLink} // Add your resend logic here
                        className="mt-2 w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors focus:ring-4 focus:ring-blue-100 outline-none"
                    >
                        Resend link
                    </button>

                </div>
            </div>
        );
    }

    if (tokenStatus === "valid") {
        return (
            <div className="min-h-screen bg-white flex p-12 flex-col justify-center items-center flex-1">
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

                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="password"
                                className="font-medium uppercase text-zinc-950 tracking-wider"
                                style={{
                                    fontSize: "11px",
                                    lineHeight: "16px",
                                    letterSpacing: "0.06em",
                                }}>
                                Password <p className="text-red-500">*</p>
                            </Label>
                            <div className="relative">
                                <Input
                                    name="password"
                                    value={onBoardingData.password}
                                    onChange={handleChange}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Choose a strong password"
                                    className="rounded-lg border border-zinc-200 border-solid h-10"
                                />
                                <button
                                    type="button"
                                    className="top-1/2 -translate-y-1/2 text-[#71717b] absolute right-3"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </button>
                            </div>
                            {errors.password && (<p className="text-red-500 text-xs"> * {errors.password}</p>)}

                        </div>
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="org"
                                className="font-medium uppercase text-zinc-950 tracking-wider"
                                style={{
                                    fontSize: "11px",
                                    lineHeight: "16px",
                                    letterSpacing: "0.06em",
                                }}>
                                Confirm Password <p className="text-red-500">*</p>
                            </Label>
                            <div className="relative">
                                <Input
                                    name="confirmPassword"
                                    value={onBoardingData.confirmPassword}
                                    onChange={handleChange}
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    className="rounded-lg border-zinc-200 border border-solid h-10"
                                />
                                <button
                                    type="button"
                                    className="top-1/2 -translate-y-1/2 text-[#71717b] absolute right-3"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </button>
                            </div>
                            {errors.confirmPassword && (<p className="text-red-500 text-xs"> * {errors.confirmPassword}</p>)}
                        </div>
                    </div>

                    <Button onClick={handleSubmit} className=" cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full" style={{ height: "44px" }}>
                        Set Password
                    </Button>
                </div>
            </div>
        );
    }
};

export default ActivateForm;