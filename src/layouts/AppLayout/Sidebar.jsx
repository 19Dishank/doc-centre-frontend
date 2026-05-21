import Logo from "@/components/ui/logo";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import {
    AlertTriangle, Bell, Building2, CreditCard,
    FileText, Key, LayoutDashboard, Lock, Settings, User, Users
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const { permissionCheck } = usePermissions();

    const navItems = [
        { name: "Dashboard", icon: <LayoutDashboard className="size-4" />, path: "/dashboard", },
        permissionCheck(PERMISSIONS.VIEW_DOCUMENT) && { name: "Files", icon: <FileText className="size-4" />, path: "/files" },
        permissionCheck(PERMISSIONS.VIEW_USER) && { name: "Users", icon: <Users className="size-4" />, path: "/users", },
        permissionCheck(PERMISSIONS.VIEW_ROLE) && { name: "Roles & Permissions", icon: <Lock className="size-4" />, path: "/roles" },
    ].filter(Boolean);

    const settingsSubItems = [
        { name: "User", icon: <User className="size-4" />, path: "/settings/user" },
        { name: "Organization", icon: <Building2 className="size-4" />, path: "/settings/organization" },
        { name: "Billing", icon: <CreditCard className="size-4" />, path: "/settings/billing" },
        { name: "Notifications", icon: <Bell className="size-4" />, path: "/settings/notifications" },
        { name: "API Access", icon: <Key className="size-4" />, path: "/settings/api-access" },
        { name: "Danger Zone", icon: <AlertTriangle className="size-4" />, path: "/settings/danger-zone" },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-neutral-50 border-r border-zinc-200 
                transition-transform duration-300 ease-in-out transform
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0 lg:static lg:inset-0
            `}>
                <div className="flex p-4 flex-col gap-6 h-full">

                    <Logo width={180} />

                    <nav className="flex flex-col gap-1 overflow-y-auto">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                                className={({ isActive }) => `
                                    font-medium rounded-lg text-sm flex px-4 py-2.5 items-center gap-2 
                                    transition-colors ${isActive ? 'bg-zinc-100 text-[#18181b]' : 'text-[#71717b] hover:bg-zinc-100/50'}
                                `}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </NavLink>
                        ))}

                        <div className="flex flex-col">
                            <div
                                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                className="flex px-4 py-2.5 text-[#71717b] items-center gap-2 font-medium text-sm cursor-pointer hover:bg-zinc-100/50 rounded-lg"
                            >
                                <Settings className="size-4" />
                                <span>Settings</span>
                            </div>
                            {isSettingsOpen && (
                                <div className="flex pl-4 flex-col gap-0.5 mt-1">
                                    {settingsSubItems.map((subItem) => (
                                        <NavLink
                                            key={subItem.path}
                                            to={subItem.path}
                                            onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                                            className={({ isActive }) => `
                                                font-medium rounded-lg text-sm flex px-4 py-2.5 items-center gap-2 
                                                ${isActive ? 'bg-zinc-100 text-[#18181b]' : 'text-[#71717b] hover:bg-zinc-100/50'}
                                            `}
                                        >
                                            {subItem.icon}
                                            <span className="truncate">{subItem.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;