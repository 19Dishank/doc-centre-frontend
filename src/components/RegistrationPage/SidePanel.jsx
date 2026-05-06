import { FileCheck2, FileStack, FileText, Folder, Image, Shield, Users, Zap } from "lucide-react";

const SidePanel = () => {
    return (
        <div
            className="relative text-white flex p-12 flex-col justify-between overflow-hidden"
            style={{
                width: "480px",
                background:
                    "linear-gradient(160deg, oklch(0.42 0.19 264) 0%, oklch(0.52 0.22 262) 55%, oklch(0.46 0.20 268) 100%)",
            }}>

            <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-white/15 flex justify-center items-center">
                    <FileStack className="size-5 text-white" />
                </div>
                <span className="font-bold text-lg leading-7 tracking-tight">DocuCentral</span>
            </div>
            
            <div className="flex flex-col items-center gap-8">
                <div className="relative flex justify-center items-center" style={{ width: "320px", height: "240px" }}>
                    <div className="grid grid-cols-4 grid-rows-3 opacity-20 absolute inset-0 gap-4">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className="rounded-lg border-white border border-solid" />
                        ))}
                    </div>
                    <div className="size-16 backdrop-blur rounded-xl bg-white/20 border-white/30 border border-solid flex absolute left-8 top-2 justify-center items-center">
                        <FileText className="size-7 text-white" />
                    </div>
                    <div className="size-20 shadow-xl rounded-xl bg-white flex absolute right-6 top-12 justify-center items-center">
                        <Folder className="size-9" style={{ color: "oklch(0.52 0.22 262)" }} />
                    </div>
                    <div className="size-20 shadow-xl rounded-xl bg-white flex absolute left-4 bottom-4 justify-center items-center">
                        <FileCheck2 className="size-9" style={{ color: "oklch(0.52 0.22 262)" }} />
                    </div>
                    <div className="size-16 backdrop-blur rounded-xl bg-white/20 border-white/30 border border-solid flex absolute right-12 bottom-10 justify-center items-center">
                        <Image className="size-7 text-white" />
                    </div>
                    <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 shadow-2xl rounded-2xl bg-white flex absolute justify-center items-center">
                        <FileStack className="size-11" style={{ color: "oklch(0.52 0.22 262)" }} />
                    </div>
                </div>
                <div className="max-w-md text-center flex flex-col gap-2">
                    <h2
                        className="font-bold text-white tracking-tight"
                        style={{
                            fontSize: "30px",
                            lineHeight: "36px",
                            letterSpacing: "-0.02em",
                        }}>
                        Get started for free
                    </h2>
                    <p className="text-sm leading-6" style={{ color: "oklch(0.86 0.06 254)" }}>
                        Join thousands of teams managing documents smarter
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="size-9 shrink-0 rounded-lg bg-white/15 flex justify-center items-center">
                        <Shield className="size-4 text-white" />
                    </div>
                    <span className="text-sm leading-5" style={{ color: "oklch(0.9 0.04 254)" }}>
                        Enterprise-grade security
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="size-9 shrink-0 rounded-lg bg-white/15 flex justify-center items-center">
                        <Zap className="size-4 text-white" />
                    </div>
                    <span className="text-sm leading-5" style={{ color: "oklch(0.9 0.04 254)" }}>
                        Instant file access
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="size-9 shrink-0 rounded-lg bg-white/15 flex justify-center items-center">
                        <Users className="size-4 text-white" />
                    </div>
                    <span className="text-sm leading-5" style={{ color: "oklch(0.9 0.04 254)" }}>
                        Team collaboration
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;