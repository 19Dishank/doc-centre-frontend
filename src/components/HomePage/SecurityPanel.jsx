import { ShieldCheck, RotateCcw, Fingerprint, Lock } from "lucide-react";

const items = [
    { icon: Lock, label: "End-to-end encrypted" },
    { icon: RotateCcw, label: "Version history & recovery" },
    { icon: Fingerprint, label: "Two-factor authentication" },
    { icon: ShieldCheck, label: "Automatic backups" },
];

const badges = ["GDPR", "SOC 2", "ISO 27001"];

const SecurityPanel = () => {
    return (
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between">
            <div className="flex flex-col gap-3 max-w-xs">
                <h3 className="font-bold text-xl text-zinc-950">Enterprise-grade security you can trust</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                    We protect your data with the same standards trusted by top companies around the world.
                </p>
                <div className="flex gap-2 mt-2">
                    {badges.map((b) => (
                        <span key={b} className="text-[10px] font-semibold text-zinc-500 bg-zinc-50 border border-zinc-200 rounded-full px-2.5 py-1">
                            {b}
                        </span>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:min-w-70">
                {items.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 bg-zinc-50 border border-zinc-100 rounded-xl px-3 py-3">
                        <Icon className="size-4 text-[#2b7fff] shrink-0" />
                        <span className="text-xs font-medium text-zinc-700 leading-snug">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecurityPanel;