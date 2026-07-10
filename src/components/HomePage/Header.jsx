import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../ui/logo";

// const navItems = [
//     "Features",
//     "Pricing",
//     "Docs"
// ];

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] w-full">
            <div className="max-w-360 mx-auto px-4 sm:px-8 flex justify-between items-center h-16">


                <button
                    onClick={() => navigate("/")}
                    className="cursor-pointer flex items-center shrink-0"
                >

                    <div className="[&>img]:w-32.5 [&>img]:h-auto sm:[&>img]:w-37.5 md:[&>img]:w-42.5">
                        <Logo width={170} height={36} />
                    </div>
                </button>

                {/* <nav className="hidden md:flex items-center gap-9">
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
            </nav> */}

                <div className="flex items-center gap-3">
                    <NavLink
                        to="/docs"
                        className={({ isActive }) =>
                            `text-sm font-medium px-4 h-9 rounded-full flex items-center transition-all duration-200 hidden sm:flex border ${isActive
                                ? "text-[#2b7fff] bg-[#2b7fff]/10 border-[#2b7fff]/20"
                                : "text-zinc-600 border-transparent hover:text-[#2b7fff] hover:bg-[#2b7fff]/5 hover:border-[#2b7fff]/10"
                            }`
                        }
                    >
                        Docs
                    </NavLink>

                    <NavLink
                        to="/login"
                        className="text-sm font-medium text-zinc-600 hover:text-[#2b7fff] transition-colors  sm:inline-block px-2"
                    >
                        Sign in
                    </NavLink>

                    <NavLink to="/onboarding">
                        <Button className="hidden sm:inline-flex cursor-pointer bg-[#2b7fff]/90 backdrop-blur-sm hover:bg-[#2b7fff] active:scale-95 text-white text-sm px-5 h-9 rounded-full font-medium shadow-[0_2px_10px_-2px_rgba(43,127,255,0.5)] border border-white/20 transition-all">
                            Get Started
                        </Button>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;