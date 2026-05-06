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
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const navItems = [
        { name: "Dashboard", icon: <LayoutDashboard className="size-4" />, path: "/dashboard" },
        { name: "Files", icon: <FileText className="size-4" />, path: "/files" },
        { name: "Upload", icon: <Upload className="size-4" />, path: "/upload_file" },
        { name: "Users", icon: <Users className="size-4" />, path: "/users" },
        { name: "Roles & Permissions", icon: <Lock className="size-4" />, path: "/roles" },
    ];

    const settingsSubItems = [
        { name: "Billing", icon: <CreditCard className="size-4" />, path: "/billing" },
        { name: "Organization", icon: <Building2 className="size-4" />, path: "/organization" },
        { name: "API Access", icon: <Key className="size-4" />, path: "/api-access" },
        { name: "Notifications", icon: <Bell className="size-4" />, path: "/notifications" },
        { name: "Danger Zone", icon: <AlertTriangle className="size-4" />, path: "/danger-zone" },
    ];

    return (
        <aside className="bg-neutral-50 border-zinc-200 border-t-0 border-r border-b-0 border-l-0 border-solid flex p-4 flex-col gap-6 w-60 h-screen">

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
                        className="font-medium rounded-lg text-[#71717b] text-sm leading-5 flex px-4 py-2.5 items-center gap-2 hover:bg-zinc-100/50 cursor-pointer"
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}

                <div className="flex flex-col mt-2">

                    <div className="flex px-4 py-2.5 items-center gap-2 font-medium text-zinc-900 text-sm leading-5 cursor-pointer">
                        <Settings className="size-4 text-[#71717b]" />
                        <span className="font-semibold">Settings</span>
                    </div>

                    <div className="flex pl-4 flex-col gap-0.5">
                        {settingsSubItems.map((subItem) => (
                            <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className="font-medium rounded-lg text-[#71717b] text-sm leading-5 flex px-4 py-2.5 items-center gap-2 hover:bg-zinc-100/50 cursor-pointer"
                            >
                                {subItem.icon}
                                {subItem.name}
                                <ChevronRight className="size-3 text-[#71717b] ml-auto" />
                            </NavLink>
                        ))}
                    </div>

                </div>

            </nav>
        </aside>
    );
};

export default Sidebar;