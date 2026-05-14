import { toast } from "react-toastify";
import { Check, X, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const toastStyles = {
  success: {
    container: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-500",
    message: "text-emerald-800",
    close: "text-emerald-600 hover:bg-emerald-100",
    progress: "bg-emerald-400",
    icon: Check,
  },
  error: {
    container: "bg-red-50 border-red-200",
    iconBg: "bg-red-500",
    message: "text-red-800",
    close: "text-red-600 hover:bg-red-100",
    progress: "bg-red-400",
    icon: AlertCircle,
  },
  warning: {
    container: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-500",
    message: "text-yellow-800",
    close: "text-yellow-600 hover:bg-yellow-100",
    progress: "bg-yellow-400",
    icon: AlertTriangle,
  },
  info: {
    container: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-500",
    message: "text-blue-800",
    close: "text-blue-600 hover:bg-blue-100",
    progress: "bg-blue-400",
    icon: Info,
  },
};

const AUTO_CLOSE = 4000;

// eslint-disable-next-line react-refresh/only-export-components
const ToastContent = ({ message, type, closeToast, toastProps }) => {
  const style = toastStyles[type];
  const Icon = style.icon;

  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  const duration = toastProps.autoClose;
  const timeLeft = useRef(duration);
  // eslint-disable-next-line react-hooks/purity
  const lastTick = useRef(Date.now());
  const raf = useRef(null);

  useEffect(() => {
    const tick = () => {
      if (!isPaused) {
        const now = Date.now();
        const delta = now - lastTick.current;
        timeLeft.current = Math.max(0, timeLeft.current - delta);

        const percent = (timeLeft.current / duration) * 100;
        setProgress(percent);

        // If time is up, the parent toastify usually handles it, 
        // but we can ensure it closes here if needed.
        if (timeLeft.current <= 0) {
          cancelAnimationFrame(raf.current);
          return;
        }
      }

      lastTick.current = Date.now();
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [isPaused, duration]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        lastTick.current = Date.now(); // Reset tick baseline so it doesn't "jump"
        setIsPaused(false);
      }}
      className={`rounded-xl border shadow-sm overflow-hidden flex flex-col min-w-[300px] max-w-[380px] ${style.container}`}
    >
      <div className="flex items-center gap-3 px-3.5 py-3">
        <div className={`size-7 rounded-lg flex items-center justify-center text-white shrink-0 ${style.iconBg}`}>
          <Icon className="size-3.5" strokeWidth={2.5} />
        </div>

        <span className={`text-[13px] leading-snug flex-1 font-medium ${style.message}`}>
          {message}
        </span>

        <button
          onClick={closeToast}
          className={`size-6 flex items-center justify-center rounded-md transition-colors shrink-0 ${style.close}`}
        >
          <X className="size-3.5" />
        </button>
      </div>

      <div className="h-[3px] w-full bg-black/5">
        <div
          className={`h-full transition-none ${style.progress}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export const toastNotification = (message, type = "success") => {
  toast(
    ({ closeToast, toastProps }) => (
      <ToastContent
        message={message}
        type={type}
        closeToast={closeToast}
        toastProps={toastProps}
      />
    ),
    {
      position: "top-right",
      autoClose: AUTO_CLOSE,
      hideProgressBar: true,
      closeButton: false,
      pauseOnHover: true, // This allows the internal Toastify timer to pause
      draggable: true,
      className: "!bg-transparent !shadow-none !p-0 !min-h-0 !w-fit",
      bodyClassName: "!p-0",
    }
  );
};