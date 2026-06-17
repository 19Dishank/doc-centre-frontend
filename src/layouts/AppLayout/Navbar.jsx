import NotificationsDropdown from "@/components/NavBar/NotificationsDropdown";
import ProfileDropdown from "@/components/NavBar/ProfileDropdown";
import SearchBar from "@/components/NavBar/SearchBar";
import { Menu, Home, ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ setIsSidebarOpen }) => {

    const currPath = useLocation().pathname.slice(1).split("/");

    return (
        <header className="bg-white border-b border-zinc-200 flex px-4 md:px-6 justify-between items-center h-16 sticky top-0 z-30 gap-4">
            <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 -ml-2 lg:hidden text-zinc-600 hover:bg-zinc-100 rounded-md shrink-0"
                >
                    <Menu className="size-5" />
                </button>

                <div className="text-sm hidden sm:flex items-center gap-2 min-w-0 overflow-hidden">
                    <Home className="size-4 text-[#71717b] shrink-0" />
                    <ChevronRight className="size-3 text-[#71717b] shrink-0" />
                    <div className="font-medium capitalize flex items-center gap-2 truncate text-zinc-700">
                        {currPath[0] === "" ? (
                            <span>Home</span>
                        ) : (
                            currPath.map((segment, index) => (
                                <Fragment key={index}>
                                    {index !== 0 && (
                                        <ChevronRight className="size-3 text-[#71717b] shrink-0" />
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

            <div className="flex items-center gap-2 md:gap-4 flex-1 sm:flex-initial justify-end min-w-0">
                <SearchBar />
                <div className="flex items-center gap-2 shrink-0">
                    <NotificationsDropdown />
                    <ProfileDropdown />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

