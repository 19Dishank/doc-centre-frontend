import { useState } from "react";
import { FileStack, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormField from "../ui/form-field";
// Assuming you have a resend function in your auth api

const ResendLink = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleResend = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        setLoading(true);
        try {
            // Replace with your actual API call
            // await resendVerificationEmail(email);
            setIsSent(true);
        } catch (err) {
            setError("Failed to send link. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white flex p-12 flex-col justify-center items-center flex-1">
            <div className="max-w-xl flex flex-col gap-8 w-full">
                
                {/* Branding - Matching image_ade227.jpg */}
                <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-bold text-[#2b7fff] text-lg leading-7 tracking-tight">
                        DocuCentral
                    </span>
                </div>

                {!isSent ? (
                    <>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-zinc-950 text-[30px] leading-9 tracking-tight">
                                Link Expired
                            </h1>
                            <p className="text-[#71717b] text-sm leading-6">
                                The security token has expired. Enter your email to receive a new password setup link.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <FormField 
                                label="Work Email" 
                                name="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="you@company.com" 
                                error={error} 
                            />
                        </div>

                        <Button 
                            onClick={handleResend} 
                            disabled={loading}
                            className="cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full h-11"
                        >
                            {loading ? "Sending..." : "Resend Setup Link"}
                        </Button>
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                        <div className="size-16 rounded-full bg-green-50 flex justify-center items-center mb-2">
                            <MailCheck className="size-8 text-green-600" />
                        </div>
                        <h2 className="font-bold text-zinc-950 text-2xl tracking-tight">Check your inbox</h2>
                        <p className="text-[#71717b] text-sm max-w-sm">
                            We've sent a new password setup link to <span className="font-medium text-zinc-900">{email}</span>.
                        </p>
                        <Button 
                            variant="link" 
                            onClick={() => setIsSent(false)}
                            className="text-[#2b7fff] font-semibold"
                        >
                            Didn't get the email? Try again
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResendLink;