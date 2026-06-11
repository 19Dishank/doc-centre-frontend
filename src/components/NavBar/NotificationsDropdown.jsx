import { AlertCircle, Bell, CheckCircle2, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { formatTime } from "@/helper/formatTime";
import { socket } from "@/helper/socketService";
import { fetchNotifications } from "@/api/notifications";

const NotificationsDropdown = ({ notificationsDropdownRef, isNotificationsOpen, setIsNotificationsOpen, setProfileOpen }) => {

    const [notifications, setNotifications] = useState([]);

    const hasUnread = notifications?.some(n => n.isRead === false);

    const getNotifications = async () => {
        try {
            const res = await fetchNotifications();
            setNotifications(res.data.notifications);
        } catch (error) {
            console.log("Error fetching notifications:", error);
        }
    };

    useEffect(() => {

        // eslint-disable-next-line react-hooks/set-state-in-effect
        getNotifications();

        const handleReceiveNotification = (message) => {
            const newNotification = message;
            setNotifications((prev) => [newNotification, ...prev]);
        };

        socket.on("notification:received", handleReceiveNotification);

        return () => {
            socket.off("notification:received", handleReceiveNotification);
        };
    }, []);

    const getNotificationIcon = (type) => {
        switch (type) {
            case "success":
                return <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />;
            case "error":
                return <AlertCircle className="size-4 text-red-500 shrink-0 mt-0.5" />;
            default:
                return <Info className="size-4 text-blue-500 shrink-0 mt-0.5" />;
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notificationsDropdownRef.current &&
                !notificationsDropdownRef.current.contains(event.target)
            ) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="relative" ref={notificationsDropdownRef}>
                <Button
                    variant="ghost"
                    size="icon"
                    className="size-9 cursor-pointer relative"
                    onClick={() => {
                        setIsNotificationsOpen(!isNotificationsOpen);
                        setProfileOpen(false);
                    }}
                >
                    <Bell className="size-4" />
                    {hasUnread && (
                        <span className="size-2 rounded-full bg-[#e7000b] absolute right-2 top-2 border-2 border-white" />
                    )}
                </Button>


                {isNotificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white border border-zinc-200 rounded-xl shadow-xl z-50 overflow-hidden transform origin-top-right animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                            <h3 className="font-semibold text-sm text-zinc-900">Notifications</h3>
                            <span className="text-xs text-zinc-500 bg-zinc-200/60 px-2 py-0.5 rounded-full font-medium">
                                {notifications?.filter(n => n.isRead === false).length} New
                            </span>
                        </div>

                        <div className="divide-y divide-zinc-100 max-h-80 overflow-y-auto">
                            {notifications?.length === 0 ? (
                                <div className="p-4 text-center text-sm text-zinc-500 py-20">
                                    No notifications yet.
                                </div>
                            ) : notifications?.map((n) => (
                                <div
                                    key={n._id}
                                    className={`p-4 flex gap-3 transition-colors hover:bg-zinc-50/80 cursor-pointer ${n.isRead === false ? "bg-blue-50/20" : ""}`}
                                >
                                    {getNotificationIcon(n.type)}
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className={`text-xs font-medium text-zinc-900 ${n.isRead === false ? "font-semibold" : ""}`}>
                                                {n.title}
                                            </p>
                                            <span className="text-[10px] text-zinc-400 shrink-0">{formatTime(n.createdAt, "Just Now")}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-normal line-clamp-2">
                                            {n.message}
                                        </p>
                                    </div>
                                    {n.isRead === false && (
                                        <div className="size-1.5 rounded-full bg-blue-500 shrink-0 self-center" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="p-2 border-t border-zinc-100 text-center bg-zinc-50/50">
                            <button className="text-xs font-medium text-zinc-600 hover:text-zinc-900 w-full py-1.5 rounded-md hover:bg-zinc-100 transition-colors">
                                Mark all as read
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default NotificationsDropdown;