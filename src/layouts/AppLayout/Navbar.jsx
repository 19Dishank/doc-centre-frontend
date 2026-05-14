import { fetchMe, logoutUser, refreshAccessToken } from "@/api/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, Home, ChevronRight, Bell, LogOut } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ setIsSidebarOpen }) => {
    const currPath = useLocation().pathname.slice(1).split("/");
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    return (
        <header className="bg-white border-b border-zinc-200 flex px-4 md:px-8 justify-between items-center h-16 sticky top-0 z-30">
            <div className="flex items-center gap-3">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 -ml-2 lg:hidden text-zinc-600 hover:bg-zinc-100 rounded-md"
                >
                    <Menu className="size-5" />
                </button>

                {/* Breadcrumbs - Hidden on very small screens if path is long */}
                <div className="text-sm hidden sm:flex items-center gap-2 overflow-hidden">
                    <Home className="size-4 text-[#71717b] shrink-0" />
                    <ChevronRight className="size-3 text-[#71717b] shrink-0" />
                    <div className="font-medium capitalize flex items-center gap-2 truncate">
                        {currPath[0] === "" ? <span>Home</span> : currPath.map((segment, index) => (
                            <Fragment key={index}>
                                {index !== 0 && <ChevronRight className="size-3 text-[#71717b]" />}
                                <span className="truncate">{segment.replace(/-/g, ' ')}</span>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                {/* Hide secondary action on mobile */}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={fetchMe}
                    className="hidden md:flex"
                >
                    Fetch Me
                </Button>

                <div className="relative">
                    <Button variant="ghost" size="icon" className="size-9">
                        <Bell className="size-4" />
                    </Button>
                    <span className="size-2 rounded-full bg-[#e7000b] absolute right-2 top-2 border-2 border-white" />
                </div>

                <div className="relative" ref={dropdownRef}>
                    <div onClick={() => setOpen(!open)} className="cursor-pointer">
                        <Avatar className="size-9">
                            <AvatarFallback className="font-medium bg-[#2b7fff] text-blue-50 text-xs">JD</AvatarFallback>
                        </Avatar>
                    </div>

                    {open && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-lg shadow-xl p-1 animate-in fade-in zoom-in duration-100">
                            <div className="px-3 py-2 border-b md:hidden mb-1">
                                <p className="text-xs font-semibold text-zinc-500 uppercase">Actions</p>
                                <button onClick={refreshAccessToken} className="text-sm text-blue-600 mt-1">Refresh Token</button>
                            </div>
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
                                onClick={logoutUser}
                            >
                                <LogOut className="mr-2 size-4" /> Logout
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;