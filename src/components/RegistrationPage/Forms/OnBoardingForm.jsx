import { createTenant, getSignedURLForLogoUpload, uploadLogoToS3 } from "@/api/auth";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { emailRegex, slugRegex } from "@/constants";
import { toastNotification } from "@/helper/toastNotification";
import { useState, useRef } from "react";
import { UploadCloud, X } from "lucide-react"; // Import Lucide icons

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
    const [selectedFile, setSelectedFile] = useState(null);
    const [errors, setErrors] = useState(initialData);
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef(null);

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
                if (!value) return "Organization logo is required";
                return "";

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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file type constraint (Optional but recommended)
        if (!file.type.startsWith("image/")) {
            setErrors((prev) => ({ ...prev, logo: "Please upload an image file" }));
            return;
        }

        setSelectedFile(file);

        // Generate temporary preview URL
        const previewUrl = URL.createObjectURL(file);

        setRegistrationData((prev) => ({
            ...prev,
            logo: previewUrl
        }));

        setErrors((prev) => ({
            ...prev,
            logo: ""
        }));
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        if (registrationData.logo.startsWith("blob:")) {
            URL.revokeObjectURL(registrationData.logo); // Clean up memory
        }
        setRegistrationData((prev) => ({ ...prev, logo: "" }));
        if (fileInputRef.current) fileInputRef.current.value = "";
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
            const preSignedUrlResponse = await getSignedURLForLogoUpload({
                "slug": registrationData.slug,
                "fileName": selectedFile.name,
                "contentType": selectedFile.type
            });
            const logoKey = preSignedUrlResponse.data.key;
            const uploadResponse = await uploadLogoToS3(preSignedUrlResponse.data.url, selectedFile);

            if(uploadResponse.status !== 200) {
                toastNotification("Failed to upload logo. Please try again.", "error");
                setLoading(false);
                return;
            }

            const res = await createTenant({ ...registrationData, logo: undefined, logoKey });
            console.log("Response Data:", res);

            toastNotification("Tenant created successfully! Please check your email to complete the onboarding process.", "success");

            if (registrationData.logo.startsWith("blob:")) URL.revokeObjectURL(registrationData.logo);
            setRegistrationData(initialData);
            setSelectedFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";

        } catch (error) {
            console.error("Error creating tenant:", error);
            toastNotification(error?.response?.data?.message || "An error occurred while creating the tenant. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-4">
                <FormField label="First Name" name="firstName" value={registrationData.firstName} onChange={handleChange} placeholder="Jane" error={errors.firstName} />
                <FormField label="Last Name" name="lastName" value={registrationData.lastName} onChange={handleChange} placeholder="Doe" error={errors.lastName} />
            </div>
            <FormField label="Work Email" name="email" value={registrationData.email} onChange={handleChange} placeholder="you@company.com" error={errors.email} />
            <FormField label="Organization Name" name="orgName" value={registrationData.orgName} onChange={handleChange} placeholder="Acme Corp" error={errors.orgName} />
            <FormField label="Organization Slogan" name="orgSlogan" value={registrationData.orgSlogan} onChange={handleChange} placeholder="Acme Corp" error={errors.orgSlogan} />
            <FormField label="Slug" name="slug" value={registrationData.slug} onChange={handleChange} placeholder="acme-corp" error={errors.slug} />

            {/* Logo Upload Section */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Organization Logo</label>

                {!registrationData.logo ? (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 cursor-pointer hover:bg-slate-50 transition gap-2"
                    >
                        <UploadCloud className="h-8 w-8 text-slate-400" />
                        <span className="text-sm font-medium text-slate-600">Click to upload logo</span>
                        <span className="text-xs text-slate-400">PNG, JPG, or SVG up to 5MB</span>
                    </div>
                ) : (
                    <div className="relative flex items-center justify-between border border-slate-200 rounded-lg p-3 bg-slate-50">
                        <div className="flex items-center gap-3">
                            <div className="h-16 w-16 rounded border bg-white flex items-center justify-center overflow-hidden">
                                <img
                                    src={registrationData.logo}
                                    alt="Logo preview"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-slate-700 truncate max-w-50">
                                    {selectedFile?.name || "Uploaded Image"}
                                </span>
                                <span className="text-xs text-slate-400">
                                    {(selectedFile?.size / 1024).toFixed(1)} KB
                                </span>
                            </div>
                        </div>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={handleRemoveFile}
                            className="h-8 w-8 rounded-full text-slate-500 hover:text-red-500 hover:bg-red-50"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                />

                {errors.logo && (
                    <p className="text-xs font-medium text-destructive mt-1">{errors.logo}</p>
                )}
            </div>

            <Button
                type="submit"
                className="mt-2 cursor-pointer h-11 font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full disabled:cursor-not-allowed"
                disabled={loading}
            >
                {loading ? "Creating Account..." : "Create Account"}
            </Button>
        </form>
    );
};

export default OnBoardingForm;