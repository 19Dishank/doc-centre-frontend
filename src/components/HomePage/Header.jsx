import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Header = () => {
    const { theme } = useTheme();

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 w-full transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                <Logo width={180} height={40} mode={theme} />

                <div className="flex items-center gap-6">
                    <NavLink 
                        to="/docs" 
                        className={({ isActive }) => 
                            `text-sm font-medium transition-colors hover:text-[#2b7fff] dark:hover:text-white ${
                                isActive ? "text-[#2b7fff]" : "text-zinc-600 dark:text-zinc-300"
                            }`
                        }
                    >
                        Docs
                    </NavLink>
                    <ThemeToggle />
                    <NavLink to="/login">
                        <Button className="cursor-pointer bg-[#2b7fff] hover:bg-[#2b7fff]/90 text-blue-50 text-sm px-5">
                            Sign in
                        </Button>
                    </NavLink>
                </div>
            </div>

        </header>
    );
};

export default Header;