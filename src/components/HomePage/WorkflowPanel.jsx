import { Share2, Users, Globe, KeyRound } from "lucide-react";

const items = [
    { icon: Share2, label: "Simple file sharing" },
    { icon: Users, label: "Real-time collaboration" },
    { icon: Globe, label: "Cross-platform access" },
    { icon: KeyRound, label: "API & SSO integration" },
];

const WorkflowPanel = () => {
    return (
        <div className="bg-[#1e3a8a] rounded-2xl p-8 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2 max-w-lg">
                <h3 className="font-bold text-2xl md:text-3xl tracking-tight text-white">
                    More than storage. It's your workflow, supercharged.
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                    DocCenter is a complete platform that helps your team work faster, stay organised, and collaborate without friction.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col gap-2.5 bg-white/5 border border-white/10 rounded-xl p-4">
                        <Icon className="size-4 text-blue-300" />
                        <span className="text-xs font-medium text-white leading-snug">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkflowPanel;