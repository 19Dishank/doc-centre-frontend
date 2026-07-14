import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WifiOff, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Full-screen "you're offline" page. Self-contained — no routing/layout dependencies.
 *
 * Detects connectivity via the browser's online/offline events and
 * navigator.onLine, and auto-reloads the app the moment the connection
 * comes back — so the user doesn't even need to click "Try again".
 *
 * Usage — render conditionally wherever you want this to gate the app, e.g.:
 *
 *   const [isOnline, setIsOnline] = useState(navigator.onLine);
 *   useEffect(() => {
 *     const goOnline = () => setIsOnline(true);
 *     const goOffline = () => setIsOnline(false);
 *     window.addEventListener("online", goOnline);
 *     window.addEventListener("offline", goOffline);
 *     return () => {
 *       window.removeEventListener("online", goOnline);
 *       window.removeEventListener("offline", goOffline);
 *     };
 *   }, []);
 *
 *   if (!isOnline) return <OfflinePage />;
 */
export default function OfflinePage() {
    const [isRetrying, setIsRetrying] = useState(false);

    // auto-reload the instant the browser reports connectivity is back
    useEffect(() => {
        const handleOnline = () => window.location.reload();
        window.addEventListener("online", handleOnline);
        return () => window.removeEventListener("online", handleOnline);
    }, []);

    const handleRetry = () => {
        setIsRetrying(true);
        // small delay so the spin animation is actually visible before reload
        setTimeout(() => window.location.reload(), 400);
    };

    return (
        <main className="bg-zinc-50/50 flex flex-col min-h-screen justify-center items-center p-4 sm:p-6 md:p-8">
            <div className="max-w-md flex flex-col items-center gap-6 md:gap-8 w-full">

                <div className="relative flex flex-col items-center w-full select-none">
                    <div className="flex absolute inset-0 justify-center items-center pointer-events-none">
                        <div className="size-40 sm:size-56 blur-3xl rounded-full bg-[#2b7fff]/10" />
                    </div>

                    <div className="relative size-20 sm:size-24 flex justify-center items-center shrink-0">
                        <div className="rounded-full border-[#2b7fff] border-2 border-solid absolute inset-0 animate-pulse" />
                        <div className="rounded-full bg-[#2b7fff]/10 flex absolute inset-2.5 sm:inset-3 justify-center items-center">
                            <WifiOff className="size-7 sm:size-8 text-[#2b7fff]" />
                        </div>
                    </div>

                    <Badge variant="secondary" className="relative mt-4 px-3 py-1 gap-1.5 border border-zinc-200 bg-white">
                        <span className="size-1.5 rounded-full bg-red-600" />
                        <span className="font-mono text-[10px] sm:text-xs text-zinc-700 tracking-wider">
                            NO INTERNET CONNECTION
                        </span>
                    </Badge>
                </div>

                <div className="text-center flex flex-col items-center gap-3">
                    <h1 className="font-bold text-2xl sm:text-3xl tracking-tight text-zinc-950 px-2">
                        You're offline
                    </h1>
                    <p className="max-w-md text-zinc-600 text-sm sm:text-base leading-relaxed px-4">
                        We can't reach DocCenter right now. Check your Wi-Fi or mobile data — this page will
                        reload automatically the moment you're back online.
                    </p>
                </div>

                <Button
                    onClick={handleRetry}
                    disabled={isRetrying}
                    className="bg-[#2b7fff] text-blue-50 gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <RefreshCw className={`size-4 ${isRetrying ? "animate-spin" : ""}`} />
                    {isRetrying ? "Checking..." : "Try again"}
                </Button>
            </div>
        </main>
    );
}