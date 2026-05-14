import { ArrowRight, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormField from "../ui/form-field";
import { emailRegex } from "@/constants";
import { generateOTP } from "@/api/auth";
import { useNavigate } from "react-router-dom";

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
            await generateOTP({ email });
            navigate(`/forgot-password/verify`, { state: { email } });
        } catch (error) {
            console.log("Error : ", error)
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-xl flex px-12 flex-col w-full">
                <div className="flex mb-12 items-center gap-2">
                    <div className="size-9 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-semibold text-[#2b7fff] text-lg leading-7 tracking-tight">DocuCentral</span>
                </div>

                <div className="flex mb-8 flex-col gap-2">
                    <h1 className="font-bold text-zinc-900 tracking-tight" style={{ fontSize: "28px", lineHeight: "1.2" }}>
                        Forgot your password?
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">Enter your email address and we'll send OTP to your email</p>
                </div>
                <div className="flex flex-col gap-4">
                    <FormField label="Email Address" name="email" value={email} onChange={handleChange} placeholder="you@company.com" error={error} />
                    <Button onClick={handleSubmit} disabled={loading} className={`cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11 ${loading ? "opacity-70" : "hover:bg-[#2b7fff]/90"}`}>
                        {loading
                            ? <span>Sending...</span>
                            : (<><span>Send OTP</span> <ArrowRight className="size-4 ml-1" /></>)
                        }
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EmailInput;