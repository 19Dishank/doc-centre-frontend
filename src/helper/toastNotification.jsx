import { toast } from "react-toastify";
import {
  Check,
  X,
  AlertCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

const toastStyles = {
  success: {
    container: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-500",
    title: "text-emerald-900",
    message: "text-emerald-700",
    close: "text-emerald-700",
    icon: Check,
  },

  error: {
    container: "bg-red-50 border-red-200",
    iconBg: "bg-red-500",
    title: "text-red-900",
    message: "text-red-700",
    close: "text-red-700",
    icon: AlertCircle,
  },

  warning: {
    container: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-500",
    title: "text-yellow-900",
    message: "text-yellow-700",
    close: "text-yellow-700",
    icon: AlertTriangle,
  },

  info: {
    container: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-500",
    title: "text-blue-900",
    message: "text-blue-700",
    close: "text-blue-700",
    icon: Info,
  },
};

export const toastNotification = (type = "success", message) => {
  const style = toastStyles[type];
  const Icon = style.icon;

  toast(
    ({ closeToast }) => (
      <div
        className={`
          shadow-lg rounded-lg border flex items-center gap-3
          px-4 py-3 min-w-[320px] max-w-105
          ${style.container}
        `}
      >
        <div
          className={`
            size-8 rounded-full flex justify-center items-center
            text-white shrink-0
            ${style.iconBg}
          `}
        >
          <Icon className="size-4" />
        </div>

        <div className="flex flex-col gap-0.5 flex-1">
          {message && (
            <span
              className={`text-xs leading-4 ${style.message}`}
            >
              {message}
            </span>
          )}
        </div>

        <button
          onClick={closeToast}
          className={`
            size-7 flex items-center justify-center
            rounded-md hover:bg-black/5 transition
            ${style.close}
          `}
        >
          <X className="size-4" />
        </button>
      </div>
    ),
    {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,

      className: `
        !bg-transparent
        !shadow-none
        !p-0
        !min-h-0
        !w-fit
      `,

      bodyClassName: "!p-0",
    }
  );
};