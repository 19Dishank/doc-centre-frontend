import { createTenant, getSignedURLForLogoUpload, uploadLogoToS3 } from "@/api/auth";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";

import { toastNotification } from "@/helper/toastNotification";
import { useState, useRef } from "react";
import FileUpload from "./FileUpload";
import { normalizeSlug, validateField } from "@/utils/formValidation";

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
    const [isSlugEdited, setIsSlugEdited] = useState(false);
    const [step, setStep] = useState(1);

    const fileInputRef = useRef(null);

    const validateStep1 = () => {
        const step1Fields = ["firstName", "lastName", "email"];
        const newErrors = {};
        step1Fields.forEach((key) => {
            newErrors[key] = validateField(key, registrationData[key]);
        });
        setErrors((prev) => ({ ...prev, ...newErrors }));
        return step1Fields.every((key) => newErrors[key] === "");
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (validateStep1()) {
            setStep(2);
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        setStep(1);
    };



    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "slug") {
            setIsSlugEdited(value.trim() !== "");
        }

        let generatedSlug = registrationData.slug;

        if (name === "orgName" && !isSlugEdited) {
            generatedSlug = value
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");
        }

        setRegistrationData((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "orgName" && !isSlugEdited && { slug: generatedSlug })
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
            ...(name === "orgName" && !isSlugEdited && {
                slug: validateField("slug", generatedSlug)
            })
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

    // eslint-disable-next-line no-unused-vars
    const createSlug = () => {
        if (isSlugEdited) return;
        const generatedSlug = registrationData.orgName
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        setRegistrationData((prev) => ({
            ...prev,
            slug: generatedSlug
        }));
        setErrors((prev) => ({
            ...prev,
            slug: validateField("slug", generatedSlug)
        }));
    }


    const handleSlugBlur = () => {
        const normalized = normalizeSlug(registrationData.slug);

        if (normalized !== registrationData.slug) {
            setRegistrationData((prev) => ({
                ...prev,
                slug: normalized,
            }));
            setErrors((prev) => ({
                ...prev,
                slug: validateField("slug", normalized),
            }));
        }
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

            if (uploadResponse.status !== 200) {
                toastNotification("Failed to upload logo. Please try again.", "error");
                setLoading(false);
                return;
            }

            const res = await createTenant({ ...registrationData, logo: undefined, logoKey });
            console.log("Response Data:", res);

            toastNotification("Organization created successfully! Please check your email to complete the onboarding process.", "success");

            if (registrationData.logo.startsWith("blob:")) URL.revokeObjectURL(registrationData.logo);
            setRegistrationData(initialData);
            setSelectedFile(null);
            setIsSlugEdited(false)
            setStep(1)
            if (fileInputRef.current) fileInputRef.current.value = "";

        } catch (error) {
            console.error("Error creating tenant:", error);
            // toastNotification(error?.response?.data?.message || "An error occurred while creating the tenant. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {/* Step Progress Indicator */}
            <div className="flex items-center justify-center mb-1.5 gap-5 select-none">
                <div className="flex items-center gap-2.5">
                    <div className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step === 1
                        ? "bg-[#2b7fff] text-white shadow-md shadow-blue-500/20 ring-4 ring-blue-100"
                        : "bg-emerald-100 text-emerald-700"
                        }`}>
                        {step > 1 ? (
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        ) : "1"}
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider leading-none mb-0.5">Step 1</span>
                        <span className={`text-xs font-bold leading-none ${step === 1 ? "text-zinc-800" : "text-zinc-500"}`}>Admin Info</span>
                    </div>
                </div>

                <div className="flex-1 h-px bg-zinc-200 mx-3 max-w-30" />

                <div className="flex items-center gap-2.5">
                    <div className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step === 2
                        ? "bg-[#2b7fff] text-white shadow-md shadow-blue-500/20 ring-4 ring-blue-100"
                        : "bg-zinc-100 text-zinc-500"
                        }`}>
                        2
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider leading-none mb-0.5">Step 2</span>
                        <span className={`text-xs font-bold leading-none ${step === 2 ? "text-zinc-800" : "text-zinc-500"}`}>Org Details</span>
                    </div>
                </div>
            </div>

            <div className="h-px bg-zinc-100 w-full mb-1" />

            {step === 1 ? (
                <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField label="First Name" name="firstName" value={registrationData.firstName} onChange={handleChange} placeholder="Jane" error={errors.firstName} />
                        <FormField label="Last Name" name="lastName" value={registrationData.lastName} onChange={handleChange} placeholder="Doe" error={errors.lastName} />
                    </div>
                    <FormField label="Work Email" name="email" value={registrationData.email} onChange={handleChange} placeholder="you@company.com" error={errors.email} />

                    <Button
                        type="button"
                        onClick={handleNext}
                        className="mt-1 cursor-pointer h-11 font-semibold text-sm rounded-xl bg-[#2b7fff] text-blue-50 w-full hover:bg-[#196ce6] shadow-lg shadow-blue-500/10 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                    >
                        Continue
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-right-4 duration-300">
                    <FormField label="Organization Name" name="orgName" value={registrationData.orgName} onChange={handleChange} placeholder="Acme Corp" error={errors.orgName} />

                    <FormField label="Organization Slogan" name="orgSlogan" value={registrationData.orgSlogan} onChange={handleChange} placeholder="Innovating the future" error={errors.orgSlogan} />

                    <div className="flex flex-col gap-1 relative">
                        <FormField label="Workspace URL / Slug" name="slug" value={registrationData.slug} onChange={handleChange} placeholder="acme-corp" error={errors.slug} onBlur={handleSlugBlur} />
                        {registrationData.slug && !errors.slug && (
                            <span className="text-xs text-zinc-400 mt-0.5 select-none pl-1">
                                Workspace URL: <strong className="text-zinc-600 font-semibold">{registrationData.slug}.doccenter.com</strong>
                            </span>
                        )}
                    </div>

                    <FileUpload errors={errors} setErrors={setErrors} selectedFile={selectedFile} setSelectedFile={setSelectedFile} setRegistrationData={setRegistrationData} registrationData={registrationData} fileInputRef={fileInputRef} />

                    <div className="flex items-center gap-3 mt-1">
                        <Button
                            type="button"
                            onClick={handleBack}
                            className="cursor-pointer h-11 font-semibold text-sm rounded-xl border border-zinc-200 text-zinc-600 bg-white hover:bg-zinc-50 w-1/3 active:scale-[0.99] transition-all"
                        >
                            Go Back
                        </Button>
                        <Button
                            type="submit"
                            className="cursor-pointer h-11 font-semibold text-sm rounded-xl bg-[#2b7fff] text-blue-50 w-2/3 hover:bg-[#196ce6] shadow-lg shadow-blue-500/10 active:scale-[0.99] transition-all disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Creating..." : "Create Workspace"}
                        </Button>
                    </div>
                </div>
            )}
        </form>
    );
};

export default OnBoardingForm;