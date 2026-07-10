import { Users } from "lucide-react";

// const stats = [
//     { value: "12K+", label: "Active teams" },
//     { value: "2.4M+", label: "Documents stored" },
//     { value: "99.99%", label: "Uptime SLA" },
//     { value: "40+", label: "Countries" },
// ];

const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
];

const Stats = () => {
    return (
        <section className="flex flex-col items-center gap-10 text-center py-4">
            <div className="flex flex-col items-center gap-3">
                <h2 className="font-bold text-3xl md:text-4xl tracking-tight text-zinc-950 max-w-xl">
                    Join a smarter way to work in the cloud
                </h2>
                <p className="max-w-lg text-zinc-500 text-base">
                    Whether you're a freelancer or part of a global team, DocCenter keeps you organized.
                </p>
            </div>

            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-2xl">
                {stats.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                        <span className="font-bold text-[#2b7fff] text-3xl md:text-4xl tracking-tight">{s.value}</span>
                        <span className="text-zinc-500 text-xs sm:text-sm">{s.label}</span>
                    </div>
                ))}
            </div> */}

            <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                    {avatars.map((src) => (
                        <img key={src} src={src} alt="" className="size-11 rounded-full border-2 border-white object-cover shadow-sm" />
                    ))}
                </div>
                <div className="size-11 rounded-full bg-blue-50 border-2 border-white shadow-sm flex items-center justify-center">
                    <Users className="size-4 text-[#2b7fff]" />
                </div>
            </div>
        </section>
    );
};

export default Stats;