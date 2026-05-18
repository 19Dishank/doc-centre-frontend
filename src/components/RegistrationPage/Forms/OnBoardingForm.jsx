import { createTenant } from "@/api/auth";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { emailRegex, slugRegex } from "@/constants";
import { toastNotification } from "@/helper/toastNotification";
import { useState } from "react";

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
                if (value.length < 2 || value.length > 50) return "First name must be between 2 and 50 characters";
                return "";

            case "lastName":
                if (!value.trim()) return "Last name is required";
                if (value.length < 2 || value.length > 50) return "Last name must be between 2 and 50 characters";
                return "";

            case "email":
                if (!value.trim()) return "Email is required";
                if (!emailRegex.test(value)) return "Please provide a valid email";
                return "";

            case "orgName":
                if (!value.trim()) return "Organization name is required";
                if (value.length < 2 || value.length > 100) return "Organization name must be between 2 and 100 characters";
                return "";

            case "orgSlogan":
                if (!value.trim()) return "Organization slogan is required";
                if (value.length > 200) return "Organization slogan cannot exceed 200 characters";
                return "";

            case "slug":
                if (!value.trim()) return "Tenant slug is required";
                if (value.length < 3 || value.length > 50) return "Slug must be between 3 and 50 characters";
                if (!slugRegex.test(value)) return "Slug can only contain lowercase letters, numbers, and hyphens";
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
        <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <FormField label="First Name" name="firstName" value={registrationData.firstName} onChange={handleChange} placeholder="Jane" error={errors.firstName} />
                <FormField label="Last Name" name="lastName" value={registrationData.lastName} onChange={handleChange} placeholder="Doe" error={errors.lastName} />
            </div>
            <FormField label="Work Email" name="email" value={registrationData.email} onChange={handleChange} placeholder="you@company.com" error={errors.email} />
            <FormField label="Organization Name" name="orgName" value={registrationData.orgName} onChange={handleChange} placeholder="Acme Corp" error={errors.orgName} />
            <FormField label="Organization Slogan" name="orgSlogan" value={registrationData.orgSlogan} onChange={handleChange} placeholder="Acme Corp" error={errors.orgSlogan} />
            <FormField label="Slug" name="slug" value={registrationData.slug} onChange={handleChange} placeholder="acme-corp" error={errors.slug} />
            <Button
                onClick={handleSubmit}
                className="mt-2 cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full disabled:cursor-not-allowed"
                style={{ height: "44px" }}
                disabled={loading}
            >
                {loading ? "Creating Account..." : "Create Account"}
            </Button>
        </form>
    );
};

export default OnBoardingForm;