import { useState } from "react";
import { MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { resendVerificationEmail } from "@/api/auth";
import { toastNotification } from "@/helper/toastNotification";
// Assuming you have a resend function in your auth api

const ResendLink = () => {

    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const handleResend = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await resendVerificationEmail(token);
            toastNotification("Verification email resent successfully! Please check your inbox.", "success");
            setIsSent(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white flex p-12 flex-col justify-center items-center flex-1">
            <div className="max-w-md flex flex-col gap-8 w-full">
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
                            We've sent a new password setup link.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResendLink;