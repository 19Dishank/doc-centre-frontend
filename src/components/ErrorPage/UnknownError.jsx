import { AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UnknownError = ({ error }) => {
    return (
        <div className="bg-zinc-50 flex flex-col min-h-screen justify-center items-center p-4 text-center">
            <Card className="w-full max-w-md p-6 flex flex-col items-center gap-4 border-zinc-200 shadow-sm">
                <div className="p-3 bg-red-50 rounded-full text-red-600 shrink-0 animate-bounce">
                    <AlertOctagon className="size-6" />
                </div>
                <div className="space-y-1.5">
                    <h1 className="font-bold text-xl text-zinc-950">Something went wrong</h1>
                    <p className="text-zinc-600 text-sm font-mono bg-zinc-100 p-3 rounded-lg break-all max-h-40 overflow-y-auto">
                        {error?.message || "An unexpected system exception occurred."}
                    </p>
                </div>
                <Button onClick={() => window.location.reload()} className="bg-[#2b7fff] text-blue-50 w-full">
                    Reload Page
                </Button>
            </Card>
        </div>
    );
};

export default UnknownError;