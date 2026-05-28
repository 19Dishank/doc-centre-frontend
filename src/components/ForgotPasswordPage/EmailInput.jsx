import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormField from "../ui/form-field";
import { emailRegex } from "@/constants";
import { generateOTP } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import FormContainer from "../ui/form-container";

const EmailInput = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

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
            const res = await generateOTP({ email });
            localStorage.setItem("otp_expiry", res.data.expiryTime);
            navigate(`/forgot-password/verify`, { state: { email } });
        } catch (error) {
            console.log("Error : ", error)
        } finally {
            setLoading(false);
        }

    };

    return (
        <FormContainer
            heading="Trouble signing in?"
            subheading="Enter your email and we'll send you a OTP to reset your password."
            linkHelperText="Remember your password?"
            linkText="Sign in"
            linkUrl="/login"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormField label="Email Address" name="email" value={email} onChange={handleChange} placeholder="you@company.com" error={error} />
                <Button type="submit" disabled={loading || !email} className={`cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11 ${loading ? "opacity-70" : "hover:bg-[#2b7fff]/90"}`}>
                    {loading
                        ? <span>Sending...</span>
                        : (<><span>Send OTP</span> <ArrowRight className="size-4 ml-1" /></>)
                    }
                </Button>
            </form>
        </FormContainer>
    );
};

export default EmailInput;