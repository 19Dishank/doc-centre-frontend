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

const ToastContent = ({ message, type, closeToast, toastProps }) => {
  const style = toastStyles[type];
  const Icon = style.icon;

  const [progress, setProgress] = useState(100);
  const isPaused = toastProps.isPaused; 

  const duration = toastProps.autoClose || AUTO_CLOSE;
  const timeLeft = useRef(duration);
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

        if (timeLeft.current <= 0) {
          cancelAnimationFrame(raf.current);
          closeToast();
          return;
        }
      }
      // Keep tracking time baseline accurately
      lastTick.current = Date.now();
      raf.current = requestAnimationFrame(tick);
    };

    lastTick.current = Date.now();
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [isPaused, duration, closeToast]);

  return (
    <div
      // FIX: Bind react-toastify's native hover listeners directly to your custom layout
      onMouseEnter={toastProps.onMouseEnter}
      onMouseLeave={toastProps.onMouseLeave}
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
      pauseOnHover: true, 
      draggable: true,
      className: "!bg-transparent !shadow-none !p-0 !min-h-0 !w-fit",
      bodyClassName: "!p-0",
    }
  );
};