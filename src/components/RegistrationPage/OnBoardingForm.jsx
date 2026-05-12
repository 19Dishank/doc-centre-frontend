import { FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { createTenant } from "@/api/auth";

const OnBoardingForm = () => {

    const initialData = {
        firstName: "",
        lastName: "",
        email: "",
        orgName: "",
        orgSlogan: "",
        slug: "",
        logo: ""
    };

    const [registrationData, setRegistrationData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    const validateField = (name, value) => {

        const slugRegex = /^[a-z0-9-]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (name) {
            case "firstName":
                if (!value.trim()) return "First name is required";
                if (value.length < 2 || value.length > 50) {
                    return "First name must be between 2 and 50 characters";
                }
                return "";

            case "lastName":
                if (!value.trim()) return "Last name is required";
                if (value.length < 2 || value.length > 50) {
                    return "Last name must be between 2 and 50 characters";
                }
                return "";

            case "email":
                if (!value.trim()) return "Email is required";


                if (!emailRegex.test(value)) {
                    return "Please provide a valid email";
                }

                return "";

            case "orgName":
                if (!value.trim()) return "Organization name is required";
                
                if (value.length < 2 || value.length > 100) {
                    return "Organization name must be between 2 and 100 characters";
                }
                
                return "";
                
                case "orgSlogan":
                if (!value.trim()) return "Organization slogan is required";
                if (value.length > 200) {
                    return "Organization slogan cannot exceed 200 characters";
                }

                return "";

            case "slug":
                if (!value.trim()) return "Tenant slug is required";

                if (value.length < 3 || value.length > 50) {
                    return "Slug must be between 3 and 50 characters";
                }


                if (!slugRegex.test(value)) {
                    return "Slug can only contain lowercase letters, numbers, and hyphens";
                }

                return "";

            case "logo":
                if (!value) return "";

                try {
                    new URL(value);
                    return "";
                } catch {
                    return "Logo must be a valid URL";
                }

            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegistrationData((prev) => ({
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

        Object.keys(registrationData).forEach((key) => {
            newErrors[key] = validateField(key, registrationData[key]);
        });

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        try {
            const res = await createTenant(registrationData);
            console.log("Response Data:", res);
        } catch (error) {
            console.error("Error creating tenant:", error);
        }
    };

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
                        Create your account
                    </h1>
                    <p className="text-[#71717b] text-sm leading-6">Start your 14-day free trial. No credit card required.</p>
                </div>

                <Button variant="outline" className="font-medium rounded-lg border-zinc-200 border border-solid gap-2 w-full h-11">
                    <img src="/images/GoogleLogo.svg" alt="Google Logo" className="size-5" />
                    Sign up with Google
                </Button>

                <div className="flex items-center gap-4">
                    <div className="bg-zinc-200 flex-1 h-px" />
                    <span className="uppercase text-[#71717b] text-xs leading-4 tracking-wider">or sign up with email</span>
                    <div className="bg-zinc-200 flex-1 h-px" />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="firstName"
                                className="font-medium uppercase text-zinc-950 tracking-wider"
                                style={{
                                    fontSize: "11px",
                                    lineHeight: "16px",
                                    letterSpacing: "0.06em",
                                }}>
                                First Name <p className="text-red-500">*</p>
                            </Label>
                            <Input
                                onChange={handleChange}
                                name="firstName"
                                value={registrationData.firstName}
                                id="firstName"
                                placeholder="Jane"
                                className="rounded-lg border border-zinc-200 border-solid h-10"
                            />
                            {errors.firstName && (<p className="text-red-500 text-xs"> * {errors.firstName}</p>)}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="lastName"
                                className="font-medium uppercase text-zinc-950 tracking-wider"
                                style={{
                                    fontSize: "11px",
                                    lineHeight: "16px",
                                    letterSpacing: "0.06em",
                                }}>
                                Last Name <p className="text-red-500">*</p> 
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                value={registrationData.lastName}
                                placeholder="Doe"
                                className="rounded-lg border border-zinc-200 border-solid h-10"
                            />
                            {errors.lastName && (<p className="text-red-500 text-xs"> * {errors.lastName}</p>)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="email"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Work Email <p className="text-red-500">*</p>
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={registrationData.email}
                            type="email"
                            placeholder="you@company.com"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
                        />
                        {errors.email && (<p className="text-red-500 text-xs"> * {errors.email}</p>)}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="orgName"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Organization Name <p className="text-red-500">*</p>
                        </Label>
                        <Input
                            id="orgName"
                            name="orgName"
                            onChange={handleChange}
                            value={registrationData.orgName}
                            placeholder="Acme Corp"
                            className="rounded-lg border-zinc-200 border border-solid h-10"
                        />
                        {errors.orgName && (<p className="text-red-500 text-xs"> * {errors.orgName}</p>)}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="orgSlogan"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Organization Slogan <p className="text-red-500">*</p>
                        </Label>
                        <Input
                            id="orgSlogan"
                            name="orgSlogan"
                            onChange={handleChange}
                            value={registrationData.orgSlogan}
                            placeholder="Acme Corp"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
                        />
                        {errors.orgSlogan && (<p className="text-red-500 text-xs"> * {errors.orgSlogan}</p>)}
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
                            Slug <p className="text-red-500">*</p>
                        </Label>
                        <div className="rounded-md bg-white border-zinc-200 border border-solid flex h-10 overflow-hidden">
                            <input
                                id="slug"
                                name="slug"
                                onChange={handleChange}
                                value={registrationData.slug}
                                className="bg-transparent outline-none text-sm leading-5 px-3 flex-1"
                            />
                            <span className="bg-zinc-100 text-[#71717b] text-sm leading-5 border-zinc-200 border-t-0 border-r flex-1 border-b-0 border-l-0 border-solid flex px-3 items-center">
                                .cdms.com
                            </span>
                        </div>
                        {errors.slug && (<p className="text-red-500 text-xs"> * {errors.slug}</p>)}
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="org"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Upload Organization Logo <p className="text-red-500">*</p>
                        </Label>
                        <Input
                            id="org"
                            placeholder="Acme Corp"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
                        />
                    </div> */}
                </div>

                <Button onClick={handleSubmit} className=" cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full" style={{ height: "44px" }}>
                    Create Account
                </Button>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#71717b] text-sm leading-5">
                        Already have an account? {" "}
                        <NavLink to="/login" className="font-medium text-[#2b7fff]"> Sign in</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OnBoardingForm;