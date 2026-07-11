import { verifyUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { emailRegex } from "@/constants";
// import { toastNotification } from "@/helper/toastNotification";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const PlatformLoginForm = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (value) => {
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value)) {
            return "Please provide a valid email";
        }
        return "";
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError(validateEmail(e.target.value));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateEmail(email) === "";

        if (!isValid) return;

        setLoading(true);
        try {
            const res = await verifyUser({ email });
                        window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", res.data.slug) + `/login?email=${email}`);
        } catch (error) {
            console.error("", error);
            // toastNotification(error?.response?.data?.message || "An error occurred while verifying the email. Please try again.", "error");
            // toastNotification(error?.response?.data?.message || error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormField label="Email Address" name="email" value={email} onChange={handleChange} placeholder="you@company.com" error={error} />
            <Button type="submit" className="cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
                <ArrowRight className="size-4 ml-1" />
            </Button>
        </form>
    );
};

export default PlatformLoginForm;