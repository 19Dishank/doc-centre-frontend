import { Cloud, FolderOpen, Trash2, Users, Copy } from "lucide-react";

const files = [
    { name: "Documents", color: "#2b7fff" },
    { name: "Designs", color: "#f59e0b" },
    { name: "Project.pdf", color: "#ef4444" },
    { name: "IMG_1293.png", color: "#8b5cf6" },
    { name: "Presentation.key", color: "#10b981" },
];

const HeroMockup = () => {
    return (
        <div className="relative h-95 sm:h-110 lg:h-115 w-full">
            <div className="absolute left-0 sm:left-4 top-4 w-45 bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/60 p-4 -rotate-2 z-10">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-zinc-800 mb-3">
                    <FolderOpen className="size-3.5 text-[#2b7fff]" />
                    All Files
                </div>
                <div className="flex flex-col gap-2">
                    {files.map((f) => (
                        <div key={f.name} className="flex items-center gap-2 text-[11px] text-zinc-600">
                            <span className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: f.color }} />
                            <span className="truncate">{f.name}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100">
                    <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                        <div className="h-full w-3/5 bg-[#2b7fff] rounded-full" />
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-1 block">4.1 GB / 5 GB used</span>
                </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-47.5 sm:size-52.5 bg-[#2b7fff] rounded-[2.2rem] shadow-2xl shadow-blue-500/30 flex items-center justify-center rotate-2 z-20">
                <Cloud className="size-16 text-white" strokeWidth={1.5} />
            </div>

            <div className="absolute right-0 sm:right-4 bottom-4 w-47.5 bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/60 p-4 rotate-2 z-30">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-zinc-800 mb-2">
                    <Users className="size-3.5 text-[#2b7fff]" />
                    Sharing
                </div>
                <div className="flex -space-x-1.5 mb-2.5">
                    {["#f97316", "#10b981", "#8b5cf6"].map((c) => (
                        <div key={c} className="size-5 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                    ))}
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-100 rounded-lg px-2 py-1.5 text-[10px] text-zinc-400 mb-2">
                    <span className="truncate flex-1">DocCenter.in/docs/q4-report</span>
                    <Copy className="size-3 shrink-0 text-zinc-400" />
                </div>
                <button className="w-full bg-[#2b7fff] text-white text-[11px] font-semibold rounded-lg py-1.5">
                    Copy link
                </button>
            </div>

            <div className="hidden sm:flex absolute left-6 bottom-0 size-9 rounded-xl bg-white border border-zinc-200 shadow-lg items-center justify-center z-30">
                <Trash2 className="size-4 text-zinc-400" />
            </div>
        </div>
    );
};

export default HeroMockup;