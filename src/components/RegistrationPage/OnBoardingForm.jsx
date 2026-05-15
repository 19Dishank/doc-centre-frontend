import { FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { createTenant } from "@/api/auth";
import FormField from "../ui/form-field";
import { emailRegex, slugRegex } from "@/constants";
import { toastNotification } from "@/helper/toastNotification";

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
    const [loading, setLoading] = useState(false);

    const validateField = (name, value) => {

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

        setLoading(true);
        try {
            console.log(registrationData)
            const res = await createTenant(registrationData);
            console.log("Response Data:", res);
            toastNotification("Tenant created successfully! Please check your email to complete the onboarding process.", "success");
            setRegistrationData(initialData);
        } catch (error) {
            console.error("Error creating tenant:", error);
            toastNotification(error?.response?.data?.message || "An error occurred while creating the tenant. Please try again.", "error");
        } finally {
            setLoading(false);
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

                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField label="First Name" name="firstName" value={registrationData.firstName} onChange={handleChange} placeholder="Jane" error={errors.firstName} />
                        <FormField label="Last Name" name="lastName" value={registrationData.lastName} onChange={handleChange} placeholder="Doe" error={errors.lastName} />
                    </div>
                    <FormField label="Work Email" name="email" value={registrationData.email} onChange={handleChange} placeholder="you@company.com" error={errors.email} />
                    <FormField label="Organization Name" name="orgName" value={registrationData.orgName} onChange={handleChange} placeholder="Acme Corp" error={errors.orgName} />
                    <FormField label="Organization Slogan" name="orgSlogan" value={registrationData.orgSlogan} onChange={handleChange} placeholder="Acme Corp" error={errors.orgSlogan} />
                    <FormField label="Slug" name="slug" value={registrationData.slug} onChange={handleChange} placeholder="acme-corp" error={errors.slug} />
                </div>

                <Button
                    onClick={handleSubmit}
                    className=" cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full disabled:cursor-not-allowed"
                    style={{ height: "44px" }}
                    disabled={loading}
                >
                    {loading ? "Creating Account..." : "Create Account"}
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