import Logo from "@/components/ui/logo";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import {
    ActivityIcon,
    Bell,
    Building2,
    CreditCard,
    FileText,
    Key,
    KeyRound,
    LayoutDashboard,
    Lock,
    Settings,
    User,
    Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const { checkPermission, checkRole } = usePermissions();

    const [openMenus, setOpenMenus] = useState({
        apiAccess: location.pathname.startsWith("/credentials"),
        settings: location.pathname.startsWith("/settings"),
    });

    const canViewDocument = useMemo(() => checkPermission(PERMISSIONS.VIEW_DOCUMENT), [checkPermission]);
    const canViewUsers = useMemo(() => checkPermission(PERMISSIONS.VIEW_USER), [checkPermission]);
    const canViewRoles = useMemo(() => checkPermission(PERMISSIONS.VIEW_ROLE), [checkPermission]);
    const canViewOrganizationSettings = useMemo(() => checkRole("Admin"), [checkRole]);
    const canViewBillingSection = useMemo(() => checkRole("Admin"), [checkRole]);

    const navItems = [
        {
            name: "Dashboard",
            icon: <LayoutDashboard className="size-4" />,
            path: "/dashboard",
        },
        canViewDocument && {
            name: "Files",
            icon: <FileText className="size-4" />,
            path: "/files",
        },
        canViewUsers && {
            name: "Users",
            icon: <Users className="size-4" />,
            path: "/users",
        },
        canViewRoles && {
            name: "Roles & Permissions",
            icon: <Lock className="size-4" />,
            path: "/roles",
        },
    ].filter(Boolean);

    const apiAccessSubItems = [
        {
            name: "API Keys",
            icon: <Key className="size-4" />,
            path: "/credentials/api-keys",
        },
        {
            name: "Activity Log",
            icon: <ActivityIcon className="size-4" />,
            path: "/credentials/activity-log",
        },
    ].filter(Boolean);

    const settingsSubItems = [
        {
            name: "User",
            icon: <User className="size-4" />,
            path: "/settings/user",
        },
        canViewOrganizationSettings && {
            name: "Organization",
            icon: <Building2 className="size-4" />,
            path: "/settings/organization",
        },
        canViewBillingSection && {
            name: "Billing",
            icon: <CreditCard className="size-4" />,
            path: "/settings/billing",
        },
        {
            name: "Notifications",
            icon: <Bell className="size-4" />,
            path: "/settings/notifications",
        },
        // {
        //     name: "Danger Zone",
        //     icon: <AlertTriangle className="size-4" />,
        //     path: "/settings/danger-zone",
        //     styles: "hover:bg-red-50! hover:text-red-700",
        // },
    ].filter(Boolean);

    const sideBarItems = [
        ...navItems,
        {
            id: "apiAccess",
            name: "API Access",
            icon: <KeyRound className="size-4" />,
            isOpen: openMenus.apiAccess,
            subItems: apiAccessSubItems,
        },
        {
            id: "settings",
            name: "Settings",
            icon: <Settings className="size-4" />,
            isOpen: openMenus.settings,
            subItems: settingsSubItems,
        },
    ];

    const handleClick = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    const handleNavClick = () => {
        if (window.innerWidth < 1024) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

            <aside
                className={`
                    fixed inset-y-0 left-0 z-50 w-64 bg-neutral-50 border-r border-zinc-200
                    transition-transform duration-300 ease-in-out transform
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0 lg:static lg:inset-0
                `}
            >
                <div className="flex p-4 flex-col gap-5 h-full">
                    <NavLink to="/">
                        <Logo width={180} />
                    </NavLink>
                    <nav className="flex flex-col gap-1 overflow-y-auto">
                        {sideBarItems.map((item) =>
                            !item.subItems ? (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={({ isActive }) =>
                                        `
                                        font-medium rounded-lg text-sm flex px-4 py-2.5 items-center gap-2
                                        transition-colors
                                        ${isActive
                                            ? "bg-zinc-100 text-[#18181b]"
                                            : "text-[#71717b] hover:bg-zinc-100/50"
                                        }
                                    `
                                    }
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </NavLink>
                            ) : (
                                <div key={item.id} className="flex flex-col">
                                    <div
                                        onClick={() => handleClick(item.id)}
                                        className="flex px-4 py-2.5 text-[#71717b] items-center gap-2 font-medium text-sm cursor-pointer hover:bg-zinc-100/50 rounded-lg"
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </div>
                                    {item.isOpen && (
                                        <div className="flex pl-4 flex-col gap-0.5 mt-1">
                                            {item.subItems.map((subItem) => (
                                                <NavLink
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    onClick={handleNavClick}
                                                    className={({ isActive }) =>
                                                        `font-medium rounded-lg text-sm flex px-4 py-2.5 items-center gap-2
                                                        ${isActive
                                                            ? "bg-zinc-100 text-[#18181b]"
                                                            : "text-[#71717b] hover:bg-zinc-100/50"}`
                                                    }
                                                >
                                                    {subItem.icon}
                                                    <span className="truncate">
                                                        {subItem.name}
                                                    </span>
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;