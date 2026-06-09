import NotificationsDropdown from "@/components/NavBar/NotificationsDropdown";
import ProfileDropdown from "@/components/NavBar/ProfileDropdown";
import { Menu, Home, ChevronRight } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ setIsSidebarOpen }) => {
    const currPath = useLocation().pathname.slice(1).split("/");
    const [profileOpen, setProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const profileDropdownRef = useRef(null);
    const notificationsDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileDropdownRef.current &&
                !profileDropdownRef.current.contains(event.target)
            ) {
                setProfileOpen(false);
            }
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
        <header className="bg-white border-b border-zinc-200 flex px-4 md:px-8 justify-between items-center h-16 sticky top-0 z-30">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 -ml-2 lg:hidden text-zinc-600 hover:bg-zinc-100 rounded-md"
                >
                    <Menu className="size-5" />
                </button>

                <div className="text-sm hidden sm:flex items-center gap-2 overflow-hidden">
                    <Home className="size-4 text-[#71717b] shrink-0" />
                    <ChevronRight className="size-3 text-[#71717b] shrink-0" />
                    <div className="font-medium capitalize flex items-center gap-2 truncate">
                        {currPath[0] === "" ? (
                            <span>Home</span>
                        ) : (
                            currPath.map((segment, index) => (
                                <Fragment key={index}>
                                    {index !== 0 && (
                                        <ChevronRight className="size-3 text-[#71717b]" />
                                    )}
                                    <span className="truncate">
                                        {segment.replace(/-/g, " ")}
                                    </span>
                                </Fragment>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <NotificationsDropdown
                    notificationsDropdownRef={notificationsDropdownRef}
                    isNotificationsOpen={isNotificationsOpen}
                    setIsNotificationsOpen={setIsNotificationsOpen}
                    setProfileOpen={setProfileOpen}
                />

                <ProfileDropdown
                    profileDropdownRef={profileDropdownRef}
                    setProfileOpen={setProfileOpen}
                    setIsNotificationsOpen={setIsNotificationsOpen}
                    profileOpen={profileOpen}
                />
            </div>
        </header>
    );
};

export default Navbar;