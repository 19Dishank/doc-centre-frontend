import { FileStack, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // or your preferred routing library

const PasswordResetSuccessPage = () => {
    return (
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-xl flex px-12 flex-col w-full">
                {/* Logo Section */}
                <div className="flex mb-12 items-center gap-2">
                    <div className="size-9 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-semibold text-[#2b7fff] text-lg leading-7 tracking-tight">
                        DocuCentral
                    </span>
                </div>

                {/* Content Section */}
                <div className="flex mb-8 flex-col gap-2">
                    {/* Success Icon */}
                    <div className="mb-2">
                        <CheckCircle2 className="size-10 text-emerald-500" />
                    </div>
                    
                    <h1 className="font-bold text-zinc-900 tracking-tight" style={{ fontSize: "28px", lineHeight: "1.2" }}>
                        Password updated
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">
                        Your password has been successfully reset. You can now use your new password to sign in to your account.
                    </p>
                </div>

                {/* Action Section */}
                <div className="flex flex-col gap-4">
                    <Link to="/login" className="w-full">
                        <button className="flex items-center justify-center cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full h-11 hover:bg-blue-600 transition-colors">
                            Back to login
                            <ArrowRight className="size-4 ml-2" />
                        </button>
                    </Link>
                </div>

                {/* Support Footer */}
                <div className="text-sm leading-5 flex mt-8 justify-center items-center gap-1">
                    <span className="text-[#71717b]">Having trouble?</span>
                    <a href="mailto:support@docucentral.com" className="font-medium text-[#2b7fff] hover:underline">
                        Contact support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetSuccessPage;