import { BookOpen, CreditCard, FileStack, LayoutDashboard, Mail, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {

    const homePageLinks = [
        { icon: <LayoutDashboard className="size-4" />, label: "Dashboard" },
        { icon: <Sparkles className="size-4" />, label: "Features" },
        { icon: <CreditCard className="size-4" />, label: "Pricing" },
        { icon: <BookOpen className="size-4" />, label: "Docs" },
        { icon: <Mail className="size-4" />, label: "Contact" }
    ];

    return (
        <>
            <div className="bg-white border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid w-full">
                <div className="max-w-285 flex mx-auto px-8 justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                            <FileStack className="size-5 text-blue-50" />
                        </div>
                        <span className="font-semibold text-lg leading-7 tracking-tight">DocuCentral</span>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-row justify-center items-center gap-8">
                        {homePageLinks.map((link, index) => {
                            return (
                                <a key={index} className="font-medium text-[#71717B] text-sm flex pb-1 items-center gap-2">
                                    {link.icon}
                                    {link.label}
                                </a>
                            )
                        })}
                    </nav>

                    {/* Login Button */}
                    <NavLink to="/login">
                        <Button className="bg-[#2b7fff] text-blue-50 text-sm ">Sign in</Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;