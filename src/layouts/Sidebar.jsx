import {
    AlertTriangle,
    Bell,
    Building2,
    ChevronRight,
    CreditCard,
    FileStack,
    FileText,
    Key,
    LayoutDashboard,
    Lock,
    Settings,
    Upload,
    Users,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {

    const currPath = useLocation().pathname
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Dashboard", icon: <LayoutDashboard className="size-4" />, path: "/dashboard" },
        { name: "Files", icon: <FileText className="size-4" />, path: "/files" },
        { name: "Upload", icon: <Upload className="size-4" />, path: "/upload" },
        { name: "Users", icon: <Users className="size-4" />, path: "/users" },
        { name: "Roles & Permissions", icon: <Lock className="size-4" />, path: "/roles" },
    ];

    const settingsSubItems = [
        { name: "Billing", icon: <CreditCard className="size-4" />, path: "/settings/billing" },
        { name: "Organization", icon: <Building2 className="size-4" />, path: "/settings/organization" },
        { name: "API Access", icon: <Key className="size-4" />, path: "/settings/api-access" },
        { name: "Notifications", icon: <Bell className="size-4" />, path: "/settings/notifications" },
        { name: "Danger Zone", icon: <AlertTriangle className="size-4" />, path: "/settings/danger-zone" },
    ];

    return (
        <aside className="bg-neutral-50 border-zinc-200 border-t-0 border-r border-b-0 border-l-0 border-solid flex p-4 flex-col gap-6 w-60 min-h-screen">
            <div className="flex px-2 py-1 items-center gap-2">
                <div className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                    <FileStack className="size-4 text-blue-50" />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-zinc-950 text-sm leading-5"> DocuCentral </span>
                    <span className="text-[#71717b] text-xs leading-4">Acme Corp</span>
                </div>
            </div>
            <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={`font-medium rounded-lg text-sm leading-5 flex px-4 py-2.5 items-center gap-2 hover:bg-zinc-100/50 cursor-pointer ${currPath === item.path ? 'bg-zinc-100 text-[#18181b]' : 'text-[#71717b]'}`}>
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}
                <div className="flex flex-col">
                    <div onClick={() => setIsOpen(!isOpen)} className={`flex px-4 py-2.5 text-[#71717b] items-center gap-2 font-medium text-sm leading-5 cursor-pointer`}>
                        <Settings className="size-4" />
                        <span className="text-sm leading-5">Settings</span>
                    </div>
                    {isOpen && <div className="flex pl-4 flex-col gap-0.5">
                        {settingsSubItems.map((subItem) => (
                            <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className={`font-medium rounded-lg text-sm leading-5 flex px-4 py-2.5 items-center gap-2 hover:bg-zinc-100/50 cursor-pointer ${currPath === subItem.path ? 'bg-zinc-100 text-[#18181b]' : 'text-[#71717b]'}`}>
                                {subItem.icon}
                                {subItem.name}
                                <ChevronRight className="size-3 text-[#71717b] ml-auto" />
                            </NavLink>
                        ))}
                    </div>}
                </div>
            </nav>
        </aside>
    );
};
export default Sidebar;
