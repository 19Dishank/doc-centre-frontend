import {
    ActivityIcon,   
    Bell,
    BookOpen,
    Building2,
    CreditCard,
    FileText,
    Key,
    LayoutDashboard,
    Lock,
    Search,
    Shield,
    Trash2,
    User,
    Users,
} from "lucide-react";
import { useMemo, useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { usePermissions } from "@/hooks/usePermissions";
import { PERMISSIONS } from "@/helper/permissions";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const { checkPermission, checkRole } = usePermissions();

    const canViewDocument = useMemo(() => checkPermission(PERMISSIONS.VIEW_DOCUMENT), [checkPermission]);
    const canViewUsers = useMemo(() => checkPermission(PERMISSIONS.VIEW_USER), [checkPermission]);
    const canViewRoles = useMemo(() => checkPermission(PERMISSIONS.VIEW_ROLE), [checkPermission]);
    const canViewOrganizationSettings = useMemo(() => checkRole("Admin"), [checkRole]);
    const canViewBillingSection = useMemo(() => checkRole("Admin"), [checkRole]);

    const navItems = [
        { name: "Dashboard", icon: <LayoutDashboard className="size-4" />, path: "/dashboard" },
        canViewDocument && { name: "Files", icon: <FileText className="size-4" />, path: "/files" },
        canViewDocument && { name: "Recycle Bin", icon: <Trash2 className="size-4" />, path: "/trash" },
        canViewUsers && { name: "Users", icon: <Users className="size-4" />, path: "/users" },
        canViewRoles && { name: "Roles & Permissions", icon: <Lock className="size-4" />, path: "/roles" },
    ].filter(Boolean);

    const apiAccessSubItems = [
        { name: "API Keys", icon: <Key className="size-4" />, path: "/credentials/api-keys" },
        { name: "Activity Log", icon: <ActivityIcon className="size-4" />, path: "/credentials/activity-log" },
        { name: "IP Whitelisting", icon: <Shield className="size-4" />, path: "/credentials/ip-whitelisting" },
        { name: "Documentation", icon: <BookOpen className="size-4" />, path: "/credentials/documentation" },
    ].filter(Boolean);

    const settingsSubItems = [
        { name: "User Settings", icon: <User className="size-4" />, path: "/settings/user" },
        canViewOrganizationSettings && { name: "Organization Settings", icon: <Building2 className="size-4" />, path: "/settings/organization" },
        canViewBillingSection && { name: "Billing & Pricing", icon: <CreditCard className="size-4" />, path: "/settings/billing" },
        { name: "Notifications", icon: <Bell className="size-4" />, path: "/settings/notifications" },
    ].filter(Boolean);

    const allActions = useMemo(() => ([...navItems, ...apiAccessSubItems, ...settingsSubItems]), [navItems, apiAccessSubItems, settingsSubItems]);

    const filteredActions = useMemo(() => {
        return allActions.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, allActions]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            } else if (e.key === "Escape") {
                setIsOpen(false);
                inputRef.current?.blur();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const isMac = typeof window !== "undefined" && navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;

    return (
        <div ref={containerRef} className="relative">
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="size-4 text-zinc-400" />
                </div>
                <Input
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-40 sm:w-64 h-9 pl-9 pr-12 text-sm text-zinc-900 placeholder-zinc-400 bg-zinc-50 border border-zinc-200 rounded-lg focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:ring-offset-0 focus:bg-white transition-all duration-150"
                    onFocus={() => setIsOpen(true)}
                />

                {!isOpen && !searchQuery && (
                    <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-3 pointer-events-none">
                        <kbd className="inline-flex items-center gap-0.5 h-5 select-none rounded border border-zinc-200 bg-zinc-100 px-1.5 font-sans text-[10px] font-medium text-zinc-400 opacity-100">
                            <span>{isMac ? "⌘" : "Ctrl"}</span>K
                        </kbd>
                    </div>
                )}
            </div>

            {isOpen && (
                <div className="fixed sm:absolute top-16 sm:top-full left-4 right-4 sm:left-auto sm:right-0 mt-1 w-auto sm:w-64 md:w-80 max-h-72 overflow-y-auto bg-white border border-zinc-200 rounded-lg shadow-lg z-50 p-1.5 transform origin-top-right duration-150 no-scrollbar">
                    <div className="px-2 py-1.5 text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                        Quick Actions
                    </div>

                    {filteredActions.length > 0 ? (
                        <div className="space-y-0.5">
                            {filteredActions.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    onClick={() => { setIsOpen(false); setSearchQuery(""); }}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors cursor-pointer ${isActive
                                            ? "bg-zinc-100 text-zinc-900 font-medium"
                                            : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                                        }`
                                    }
                                >
                                    <span className="text-zinc-400 shrink-0">
                                        {item.icon}
                                    </span>
                                    <span className="truncate">{item.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    ) : (
                        <div className="py-6 text-center text-sm text-zinc-400">
                            No results found for "{searchQuery}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;