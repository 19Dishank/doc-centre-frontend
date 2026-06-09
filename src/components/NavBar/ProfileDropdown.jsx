import { useAuthContext } from "@/contexts/AuthContext";
import UIAvatar from "../ui/ui-avatar";
import { LogOut, User } from "lucide-react";
import { Button } from "../ui/button";
import { logoutUser } from "@/api/auth";

const ProfileDropdown = ({ profileDropdownRef, setProfileOpen, setIsNotificationsOpen, profileOpen }) => {

    const { user } = useAuthContext();

    return (
        <div className="relative" ref={profileDropdownRef}>
            <div
                onClick={() => {
                    setProfileOpen(!profileOpen);
                    setIsNotificationsOpen(false); // Close notifications if open
                }}
                className="cursor-pointer"
            >
                {(user?.firstName && user?.lastName) ? (
                    <UIAvatar firstName={user.firstName} lastName={user.lastName} userId={user._id} />
                ) : (
                    <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                )}
            </div>

            {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 p-1 bg-white border border-zinc-200 rounded-lg shadow-xl z-50 overflow-hidden transform origin-top-right animate-in fade-in slide-in-from-top-2 duration-150">
                    <Button
                        variant="ghost"
                        className="cursor-pointer w-full justify-start text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
                        onClick={logoutUser}
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