import { Check, X } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = () => {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-4 shadow-sm min-w-[360px]">
            <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check size={24} strokeWidth={3} />
                </div>

                {/* Text */}
                <div>
                    <h3 className="text-lg font-semibold text-emerald-900">
                        File uploaded successfully
                    </h3>
                    <p className="text-sm text-emerald-700">
                        Your file is now available in the library
                    </p>
                </div>
            </div>

            {/* Close */}
            <button className="text-emerald-700 hover:text-emerald-900">
                <X size={20} />
            </button>
        </div>
    );
};

export default CustomToast;