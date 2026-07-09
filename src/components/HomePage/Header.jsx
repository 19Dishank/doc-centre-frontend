import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../ui/logo";

const navItems = ["Features", "Pricing", "Docs"];

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                <Logo width={170} height={36} onClick={() => navigate("/")} />

                <nav className="hidden md:flex items-center gap-9">
                    {navItems.map((item) => (
                        <NavLink
                            key={item}
                            to={item === "Docs" ? "/docs" : `/#${item.toLowerCase()}`}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-[#2b7fff] ${isActive && item === "Docs" ? "text-[#2b7fff]" : "text-zinc-600"}`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-5">
                    <NavLink
                        to="/login"
                        className="text-sm font-medium text-zinc-600 hover:text-[#2b7fff] transition-colors hidden sm:inline-block"
                    >
                        Sign in
                    </NavLink>
                    <NavLink to="/onboarding">
                        <Button className="cursor-pointer bg-[#2b7fff]/90 backdrop-blur-sm hover:bg-[#2b7fff] text-white text-sm px-5 h-9 rounded-full font-medium shadow-[0_2px_10px_-2px_rgba(43,127,255,0.5)] border border-white/20">
                            Get Started
                        </Button>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;