import { FileStack } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                <div className="flex items-center gap-2 relative z-50">
                    <div className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center shadow-sm">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">DocuCentral</span>
                </div>

                <div className="flex items-center gap-4">
                    <NavLink to="/login">
                        <Button className="bg-[#2b7fff] hover:bg-[#2b7fff]/90 text-blue-50 text-sm px-5">
                            Sign in
                        </Button>
                    </NavLink>
                </div>
            </div>

        </header>
    );
};

export default Header;