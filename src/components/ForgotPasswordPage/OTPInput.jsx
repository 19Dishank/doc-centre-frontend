import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { resendOTP, verifyOTP } from "@/api/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const OTPInput = () => {

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timeLeft, setTimeLeft] = useState(120); // 120 seconds = 2 minutes
    const [canResend, setCanResend] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);

    const inputRefs = useRef([]);
    const location = useLocation();
    const { email } = location?.state || "";

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value !== "" && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleSubmit = async () => {
        setIsVerifying(true);
        try {
            const res = await verifyOTP({ email, otp: otp.join("") });
            if (res.success) {
                navigate(`/forgot-password/reset`, { state: { email, token: res.data.resetPasswordToken } });
            };
        } catch (error) {
            setError(error.response?.data?.message || "Error verifying OTP. Please try again.");
            if (error.response?.data?.message === "Too many incorrect OTP attempts. Please resend Otp") {
                setCanResend(true);
                setTimeLeft(0);
            }
            console.log("Error verifying otp", error)
        } finally {
            setIsVerifying(false);
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    useEffect(() => {
        if (timeLeft <= 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCanResend(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // Format time to MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleResend = async () => {
        try {
            setCanResend(false);
            const res = await resendOTP({ email });
            if (res.success) {
                setError("");
                setTimeLeft(120);
                setOtp(new Array(6).fill(""));
            }
        } catch (error) {
            console.log(error.response?.data?.message || "Error resending OTP. Please try again.");
        }
    };

    if (!email) return <Navigate to="/forgot-password" />;

    return (
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-xl flex px-12 flex-col w-full">

                <div className="flex mb-8 flex-col gap-2">
                    <h1 className="font-bold text-zinc-900 tracking-tight" style={{ fontSize: "28px", lineHeight: "1.2" }}>
                        Enter OTP to Reset Password
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">
                        Enter the 6-digit code sent to your email address.{" "}
                        <button
                            onClick={() => navigate("/forgot-password")}
                            className="text-[#2b7fff] font-medium hover:underline focus:outline-none transition-colors cursor-pointer"
                        >
                            Change Email
                        </button>
                    </p>
                </div>

                <div className="flex flex-col gap-8 mb-6">
                    <div className="flex gap-3 sm:gap-4">
                        {otp.map((data, index) => (
                            <Input
                                key={index}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={data}
                                ref={(ref) => (inputRefs.current[index] = ref)}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-14 h-14 sm:w-16 sm:h-16 text-center text-xl font-semibold rounded-lg bg-white border-zinc-200 border focus:border-[#2b7fff] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            />
                        ))}
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="flex items-center justify-between mb-8">
                    <p className="text-sm text-zinc-500">
                        {timeLeft > 0 ? (
                            <span>Time remaining: <span className="font-medium text-zinc-900">{formatTime(timeLeft)}</span></span>
                        ) : (
                            <span className="text-red-500 font-medium">OTP expired</span>
                        )}
                    </p>
                    <button
                        onClick={handleResend}
                        disabled={!canResend}
                        className={`text-sm font-semibold transition-colors ${canResend ? "text-[#2b7fff] hover:text-blue-700 cursor-pointer" : "text-zinc-300 cursor-not-allowed"}`}
                    >
                        Resend OTP
                    </button>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isVerifying || otp.some(v => v === "") || timeLeft <= 0}
                    className="w-full py-3 px-4 bg-[#2b7fff] text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all mb-4"
                >
                    {isVerifying ? "Verifying..." : "Verify OTP"}
                </button>
            </div>
        </div>
    );
};

export default OTPInput;