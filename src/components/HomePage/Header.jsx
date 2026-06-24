import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../ui/logo";

const Header = () => {

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                <Logo width={180} height={40}/>

                <div className="flex items-center gap-6">
                    <NavLink 
                        to="/docs" 
                        className={({ isActive }) => 
                            `text-sm font-medium transition-colors hover:text-[#2b7fff] ${
                                isActive ? "text-[#2b7fff]" : "text-zinc-600"
                            }`
                        }
                    >
                        Docs
                    </NavLink>
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