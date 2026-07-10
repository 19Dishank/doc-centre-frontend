import { useAuthContext } from "@/contexts/AuthContext";
import UIAvatar from "../ui/ui-avatar";
import { LogOut, User } from "lucide-react";
import { Button } from "../ui/button";
import { logoutUser } from "@/api/auth";
import { useEffect, useRef, useState } from "react";

const ProfileDropdown = () => {

    const [profileOpen, setProfileOpen] = useState(false);
    const profileDropdownRef = useRef(null);
    const { user } = useAuthContext();

    const handleLogout = async () => {
        await logoutUser();
        window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app") + `/login`);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileDropdownRef.current &&
                !profileDropdownRef.current.contains(event.target)
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={profileDropdownRef}>
            <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="cursor-pointer"
            >
                {(user?.firstName && user?.lastName) ? (
                    <UIAvatar firstName={user.firstName} lastName={user.lastName} userId={user._id} />
                ) : (
                    <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                )}
            </div>

            {profileOpen && (
                <div className="absolute right-0 mt-2 w-72 max-w-[90vw] p-1 bg-white border border-zinc-200 rounded-lg shadow-xl z-50 overflow-hidden transform origin-top-right animate-in fade-in slide-in-from-top-2 duration-150">

                    <div className="px-3 py-2.5 border-b border-zinc-100 flex gap-2 items-start">
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-zinc-900 truncate" title={`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}>
                                {user?.firstName} {user?.lastName}
                            </p>
                            <p className="text-xs text-zinc-500 truncate mt-0.5" title={user?.email}>
                                {user?.email}
                            </p>
                        </div>
                        {user?.role?.name && (
                            <span className="inline-flex items-center shrink-0 whitespace-nowrap h-fit px-2 py-0.5 rounded-md text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                {user.role.name}
                            </span>
                        )}
                    </div>

                    <Button
                        variant="ghost"
                        className="cursor-pointer w-full justify-start text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
                        onClick={handleLogout}
                    >
                        <LogOut className="mr-2 size-4" />
                        Logout
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;