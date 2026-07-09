import Logo from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, RefreshCw, Mail } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Full-screen maintenance page. Self-contained — no routing/layout dependencies.
 *
 * Usage (in App.jsx, before any router/subdomain logic runs):
 *
 *   const IS_MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "true";
 *   ...
 *   if (IS_MAINTENANCE_MODE) {
 *     return <MaintenancePage />;
 *   }
 */
export default function MaintenancePage() {
    const [now, setNow] = useState(new Date());

    // ── prevent navigation while maintenance is active ──
    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        const handlePopState = () => {
            window.history.pushState(null, "", window.location.href);
        };
        window.addEventListener("popstate", handlePopState);

        const handleKeyDown = (e) => {
            const isBackspaceNav =
                e.key === "Backspace" &&
                !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
            const isAltArrowNav = e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight");
            const isCmdBracketNav = (e.metaKey || e.ctrlKey) && (e.key === "[" || e.key === "]");

            if (isBackspaceNav || isAltArrowNav || isCmdBracketNav) {
                e.preventDefault();
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = "";
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("popstate", handlePopState);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    // live "last checked" clock
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <main className="bg-zinc-50/50 flex flex-col min-h-screen max-h-screen overflow-y-hidden justify-center items-center p-4 sm:p-6 md:p-8">
            <div className="max-w-lg flex flex-col items-center gap-5 sm:gap-6 md:gap-8 w-full py-6">

                <div className="sm:hidden">
                    <Logo width={140} height={36} />
                </div>
                <div className="hidden sm:block">
                    <Logo width={170} height={44} />
                </div>

                <div className="relative flex flex-col items-center w-full select-none">
                    <div className="flex absolute inset-0 justify-center items-center pointer-events-none">
                        <div className="size-32 sm:size-44 md:size-56 blur-3xl rounded-full bg-[#2b7fff]/10" />
                    </div>

                    <div className="relative size-16 sm:size-20 md:size-24 flex justify-center items-center shrink-0">
                        <div className="rounded-full border-[#2b7fff] border-2 border-solid absolute inset-0 animate-pulse" />
                        <div className="rounded-full bg-[#2b7fff]/10 flex absolute inset-2 sm:inset-2.5 md:inset-3 justify-center items-center">
                            <Wrench className="size-6 sm:size-7 md:size-8 text-[#2b7fff]" />
                        </div>
                    </div>

                    <Badge variant="secondary" className="relative mt-4 px-3 py-1 gap-1.5 border border-zinc-200 bg-white max-w-full">
                        <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs text-zinc-700 tracking-wider text-center">
                            SCHEDULED MAINTENANCE
                        </span>
                    </Badge>
                </div>

                <div className="text-center flex flex-col items-center gap-2 sm:gap-3 w-full">
                    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-tight text-zinc-950 px-2 leading-snug">
                        We'll be right back
                    </h1>
                    <p className="max-w-xs sm:max-w-sm md:max-w-md text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                        DocCenter is currently undergoing scheduled maintenance to make things faster and more reliable.
                        We appreciate your patience — normal service will resume shortly.
                    </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 max-w-full">
                    <span className="relative flex size-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full size-2 bg-amber-500" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-zinc-500 truncate">
                        Checked at {now.toLocaleTimeString()}
                    </span>
                </div>

                <div className="flex items-center justify-center gap-2 w-full max-w-[220px] sm:max-w-xs px-4">
                    <Button
                        onClick={() => window.location.reload()}
                        className="bg-[#2b7fff] text-blue-50 gap-2 shadow-sm w-full sm:w-auto"
                    >
                        <RefreshCw className="size-4 shrink-0" />
                        Try again
                    </Button>
                </div>

                <a
                    href="mailto:support@doccenter.in"
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-600 transition-colors pt-1 break-all sm:break-normal"
                >
                    <Mail className="size-3.5 shrink-0" />
                    support@doccenter.in
                </a>

            </div>
        </main>
    );
}