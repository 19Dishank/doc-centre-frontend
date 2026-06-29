import { ArrowLeft, FileSearch, LayoutDashboard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";

const Error404 = () => {

    const navigate = useNavigate();
    const { isAuthenticated } = useAuthContext();

    return (
        <main className="bg-zinc-50/50 dark:bg-zinc-950 flex flex-col min-h-screen justify-center items-center p-4 sm:p-6 md:p-8">
            <div className="max-w-3xl flex flex-col items-center gap-6 md:gap-8 w-full">

                <div className="relative flex flex-col items-center w-full select-none">
                    <div className="flex absolute inset-0 justify-center items-center pointer-events-none">
                        <div className="size-48 sm:size-72 blur-3xl rounded-full bg-[#2b7fff]/10" />
                    </div>

                    <div className="relative flex items-center justify-center gap-2 sm:gap-4 w-full">
                        <span className="leading-none font-extrabold text-zinc-950 dark:text-zinc-50 text-[90px] sm:text-[130px] md:text-[160px] tracking-tighter">
                            4
                        </span>

                        <div className="relative size-24 sm:size-32 md:size-36 flex justify-center items-center shrink-0">
                            <div className="rounded-full border-[#2b7fff] border-2 border-solid absolute inset-0 animate-pulse" />
                            <div className="rounded-full bg-[#2b7fff]/10 flex absolute inset-2.5 sm:inset-4 justify-center items-center">
                                <FileSearch className="size-8 sm:size-10 md:size-12 text-[#2b7fff]" />
                            </div>
                        </div>

                        <span className="leading-none font-extrabold text-zinc-950 dark:text-zinc-50 text-[90px] sm:text-[130px] md:text-[160px] tracking-tighter">
                            4
                        </span>
                    </div>

                    <Badge variant="secondary" className="relative mt-4 px-3 py-1 gap-1.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                        <span className="size-1.5 rounded-full bg-red-600" />
                        <span className="font-mono text-[10px] sm:text-xs text-zinc-700 dark:text-zinc-300 tracking-wider">
                            ERROR 404 — PAGE NOT FOUND
                        </span>
                    </Badge>
                </div>

                <div className="text-center flex flex-col items-center gap-3">
                    <h1 className="font-bold text-2xl sm:text-3xl tracking-tight text-zinc-950 dark:text-zinc-50 px-2">
                        We couldn't find that page
                    </h1>
                    <p className="max-w-md text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed px-4">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-2 w-full max-w-xs sm:max-w-none px-4">
                    <Button
                        onClick={() => navigate(-1)}
                        variant="outline"
                        className="gap-2 text-zinc-700 dark:text-zinc-300"
                    >
                        <ArrowLeft className="size-4" />
                        Go back
                    </Button>
                    <Button
                        onClick={() => navigate(isAuthenticated ? "/dashboard" : "/")}
                        className="bg-[#2b7fff] hover:bg-blue-600 text-blue-50 gap-2 shadow-sm"
                    >
                        <LayoutDashboard className="size-4" />
                        {isAuthenticated ? "Back to Dashboard" : "Back to Homepage"}
                    </Button>
                </div>

            </div>
        </main>
    );
};

export default Error404;