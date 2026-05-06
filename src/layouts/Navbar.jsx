import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronRight, Home, LogOut } from "lucide-react";
import { Fragment, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const currPath = useLocation().pathname.slice(1).split("/");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="bg-white border-b border-zinc-200 flex px-8 justify-between items-center h-15">
      
      <div className="text-sm flex items-center gap-2">
        <Home className="size-4 text-[#71717b]" />
        <ChevronRight className="size-3 text-[#71717b]" />
        <div className="font-medium capitalize flex items-center gap-2">
          {currPath.map((segment, index) => (
            <Fragment key={index}>
              {index !== 0 && (
                <ChevronRight className="size-3 text-[#71717b]" />
              )}
              <span>{segment}</span>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <div className="relative">
          <Button variant="ghost" size="icon" className="size-9">
            <Bell className="size-4" />
          </Button>
          <span className="size-2 rounded-full bg-[#e7000b] absolute right-1.5 top-1.5" />
        </div>

        <div className="relative" ref={dropdownRef}>
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            <Avatar className="size-9">
              <AvatarFallback className="font-medium bg-[#2b7fff] text-blue-50 text-xs">
                JD
              </AvatarFallback>
            </Avatar>
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md p-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-sm hover:bg-red-50 hover:text-red-500 cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut /> Logout
              </Button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;