import { markNotificationAsRead } from "@/api/notifications";
import { formatTime } from "@/helper/formatTime";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { useEffect, useRef } from "react";

const Notification = ({ notification }) => {

    const itemRef = useRef(null);

    const getNotificationIcon = (type) => {
        switch (type) {
            case "SUCCESS":
                return <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />;
            case "ALERT":
                return <AlertCircle className="size-4 text-red-500 shrink-0 mt-0.5" />;
            default:
                return <Info className="size-4 text-blue-500 shrink-0 mt-0.5" />;
        }
    };


    const handleMarkAsRead = async () => {
        if (notification.isRead) return;

        try {
            await markNotificationAsRead(notification._id);
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    }

    useEffect(() => {
        if (notification.isRead) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    handleMarkAsRead();
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.9 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={itemRef}
            key={notification._id}
            className={`p-4 flex gap-3 transition-colors hover:bg-zinc-50/80 cursor-pointer ${!notification.isRead ? "bg-blue-50/20" : ""}`}
        >
            {getNotificationIcon(notification.type)}
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                    <p className={`text-xs font-medium text-zinc-900 ${!notification.isRead ? "font-semibold" : ""}`}>
                        {notification.title}
                    </p>
                    <span className="text-[10px] text-zinc-400 shrink-0">{formatTime(notification.createdAt, "Just Now")}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal line-clamp-2">
                    {notification.message}
                </p>
            </div>
            {!notification.isRead && (
                <div className="size-1.5 rounded-full bg-blue-500 shrink-0 self-center" />
            )}
        </div>
    );
};

export default Notification;