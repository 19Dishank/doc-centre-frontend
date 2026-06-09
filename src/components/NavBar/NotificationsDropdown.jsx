import { AlertCircle, Bell, CheckCircle2, Info } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { formatTime } from "@/helper/formatTime";

const STATIC_NOTIFICATIONS = [
    {
        id: 1,
        title: "Project update",
        description: "Your report for Q2 has been approved by the admin.",
        time: 1780896857165,
        type: "success",
        unread: true,
    },
    {
        id: 2,
        title: "Server Alert",
        description: "High memory usage detected on production server cluster.",
        time: 1780894827165,
        type: "error",
        unread: true,
    },
    {
        id: 3,
        title: "Security Update",
        description: "Please update your password before the end of this month.",
        time: 1780893851165,
        type: "info",
        unread: false,
    },
    {
        id: 4,
        title: "New Comment",
        description: "Sarah left a comment on your API documentation draft.",
        time: 1780892400000,
        type: "info",
        unread: true,
    },
    {
        id: 5,
        title: "Deployment Failure",
        description: "Build #402 failed during the production environment sync.",
        time: 1780891200000,
        type: "error",
        unread: true,
    },
    {
        id: 6,
        title: "Billing Invoice",
        description: "Your monthly subscription payment was processed successfully.",
        time: 1780887600000,
        type: "success",
        unread: false,
    },
    {
        id: 7,
        title: "System Warning",
        description: "API rate limit is approaching 85% of your current plan capacity.",
        time: 1780884000000,
        type: "warning",
        unread: true,
    },
    {
        id: 8,
        title: "Team Invitation",
        description: "Alex invited you to collaborate on the 'Mobile App' repository.",
        time: 1780876800000,
        type: "info",
        unread: false,
    },
];


const NotificationsDropdown = ({ notificationsDropdownRef, isNotificationsOpen, setIsNotificationsOpen, setProfileOpen }) => {

    const hasUnread = STATIC_NOTIFICATIONS.some(n => n.unread);

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
                                {STATIC_NOTIFICATIONS.filter(n => n.unread).length} New
                            </span>
                        </div>

                        <div className="divide-y divide-zinc-100 max-h-80 overflow-y-auto">
                            {STATIC_NOTIFICATIONS.map((n) => (
                                <div
                                    key={n.id}
                                    className={`p-4 flex gap-3 transition-colors hover:bg-zinc-50/80 cursor-pointer ${n.unread ? "bg-blue-50/20" : ""}`}
                                >
                                    {getNotificationIcon(n.type)}
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className={`text-xs font-medium text-zinc-900 ${n.unread ? "font-semibold" : ""}`}>
                                                {n.title}
                                            </p>
                                            <span className="text-[10px] text-zinc-400 shrink-0">{formatTime(n.time, "Just Now")}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-normal line-clamp-2">
                                            {n.description}
                                        </p>
                                    </div>
                                    {n.unread && (
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