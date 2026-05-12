import { ArrowRight, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { verifyUser } from "@/api/auth";

const PlatformLoginForm = () => {

    const initialData = {
        email: "",
    };

    const [loginData, setLoginData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    const validateField = (name, value) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        switch (name) {

            case "email":
                if (!value.trim()) return "Email is required";


                if (!emailRegex.test(value)) {
                    return "Please provide a valid email";
                }

                return "";

            case "password":
                if (!value.trim()) return "Password is required";
                if (!passwordRegex.test(value)) {
                    return "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
                }
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

        try {
            const res = await verifyUser(loginData);
            console.log("Verification Data:", res);
            window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", res.data.slug) + "/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-2xl flex px-12 flex-col w-full">
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
                <Button
                    variant="outline"
                    className="font-medium rounded-lg bg-white text-zinc-800 border-zinc-200 border border-solid gap-2 w-full h-11">
                    <img src="/images/GoogleLogo.svg" alt="Google Logo" className="size-5" />
                    Continue with Google
                </Button>
                <div className="flex my-6 items-center gap-4">
                    <Separator className="flex-1" />
                    <span className="whitespace-nowrap text-[#71717b] text-xs">or continue with email</span>
                    <Separator className="flex-1" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="font-medium text-zinc-800 text-sm leading-5">
                            Email Address <p className="text-red-500">*</p>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            name="email"
                            onChange={handleChange}
                            value={loginData.email}
                            className="rounded-lg bg-white border-zinc-200 border border-solid h-11"
                        />
                        {errors.email && (<p className="text-red-500 text-xs"> * {errors.email}</p>)}
                    </div>
                    <Button onClick={handleSubmit} className="cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11">
                        Sign In
                        <ArrowRight className="size-4 ml-1" />
                    </Button>
                </div>
                <div className="text-sm leading-5 flex mt-8 justify-center items-center gap-1">
                    <span className="text-[#71717b]">Need a workspace for your team?</span>
                    <NavLink to="/onboarding" className="font-medium text-[#2b7fff]">
                        Register your company
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PlatformLoginForm;