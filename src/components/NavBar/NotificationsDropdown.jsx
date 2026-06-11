import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { socket } from "@/helper/socketService";
import { fetchNotifications } from "@/api/notifications";
import Notification from "./Notification";

const NotificationsDropdown = ({ notificationsDropdownRef, isNotificationsOpen, setIsNotificationsOpen, setProfileOpen }) => {

    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(null);

    const getNotifications = async () => {
        try {
            const res = await fetchNotifications();
            setNotifications(res.data.notification);
            setUnreadCount(res.data.unreadCount);
        } catch (error) {
            console.log("Error fetching notifications:", error);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getNotifications();
    }, []);

    useEffect(() => {

        const handleReceiveNotification = (message) => {
            console.log("Received new notification via socket:", message);
            setNotifications((prev) => [...prev, message]);
        };

        const handleNotificationRead = ({ notificationId }) => {
            setNotifications(prev =>
                prev.map(n => n._id === notificationId ? { ...n, isRead: true } : n)
            );
        };

        const handleUnreadCountUpdate = (message) => {
            console.log("Unread count updated via socket:", message.count);
            setUnreadCount(message.count);
        }

        socket.on("notification:received", handleReceiveNotification);
        socket.on("notification:read", handleNotificationRead);
        socket.on("notification:unread-count", handleUnreadCountUpdate);

        return () => {
            socket.off("notification:received", handleReceiveNotification);
            socket.off("notification:read", handleNotificationRead);
            socket.off("notification:unread-count", handleUnreadCountUpdate);
        };
    }, [notifications]);

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
                    className="size-9 cursor-pointer relative flex items-center justify-center"
                    onClick={() => {
                        setIsNotificationsOpen(!isNotificationsOpen);
                        setProfileOpen(false);
                    }}
                >
                    <Bell className="size-5 text-gray-700" />

                    {unreadCount > 0 && (
                        <span className="absolute top-0.5 left-4 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#e7000b] px-1 text-[9px] font-medium leading-none text-white ring-2 ring-white">
                            {unreadCount > 9 ? "9+" : unreadCount}
                        </span>
                    )}
                </Button>


                {isNotificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white border border-zinc-200 rounded-xl shadow-xl z-50 overflow-hidden transform origin-top-right animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                            <h3 className="font-semibold text-sm text-zinc-900">Notifications</h3>
                            <span className="text-xs text-zinc-500 bg-zinc-200/60 px-2 py-0.5 rounded-full font-medium">
                                {unreadCount} Unread
                            </span>
                        </div>

                        <div className="divide-y divide-zinc-100 max-h-80 overflow-y-auto">
                            {notifications?.length === 0 ? (
                                <div className="p-4 text-center text-sm text-zinc-500 py-20">
                                    No notifications yet.
                                </div>
                            ) : notifications?.map((n) => (
                                <Notification notification={n} getNotifications={getNotifications} />
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