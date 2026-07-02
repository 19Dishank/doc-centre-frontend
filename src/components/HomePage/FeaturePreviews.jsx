import { Check, Copy, Users } from "lucide-react";

const fileRows = [
    { name: "Contract.pdf", size: "1.2 MB" },
    { name: "Brand-Assets", size: "24.0 MB" },
    { name: "IMG_2026.jpg", size: "3.5 MB" },
    { name: "Presentation.key", size: "8.1 MB" },
];

export const FileListPreview = () => (
    <div className="flex flex-col gap-1.5">
        {fileRows.map((f) => (
            <div key={f.name} className="flex items-center justify-between bg-white rounded-lg border border-zinc-100 px-3 py-2">
                <span className="text-xs font-medium text-zinc-700 truncate">{f.name}</span>
                <span className="text-[10px] text-zinc-400 shrink-0">{f.size}</span>
            </div>
        ))}
    </div>
);

export const SharePreview = () => (
    <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
                {["#2b7fff", "#f59e0b", "#10b981"].map((c) => (
                    <div key={c} className="size-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                ))}
            </div>
            <span className="text-xs text-zinc-500">3 people have access</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg border border-zinc-100 px-3 py-2">
            <Users className="size-3.5 text-zinc-400 shrink-0" />
            <span className="text-xs text-zinc-500 flex-1 truncate">emma@company.com</span>
            <span className="text-[10px] font-medium text-[#2b7fff]">Can edit</span>
        </div>
        <button className="w-full bg-[#2b7fff] text-white text-xs font-semibold rounded-lg py-2 flex items-center justify-center gap-1.5">
            <Copy className="size-3.5" /> Create link
        </button>
    </div>
);

const permissions = ["Role-based access", "Granular permissions", "Encrypted storage", "Recycle bin & restore"];

export const SecurityPreview = () => (
    <div className="flex flex-col gap-2">
        {permissions.map((p) => (
            <div key={p} className="flex items-center gap-2 bg-white rounded-lg border border-zinc-100 px-3 py-2">
                <Check className="size-3.5 text-emerald-500 shrink-0" strokeWidth={2.5} />
                <span className="text-xs text-zinc-600">{p}</span>
            </div>
        ))}
    </div>
);