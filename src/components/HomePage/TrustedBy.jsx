import { Aperture, Boxes, Cloud, Compass, Hexagon, Triangle } from "lucide-react";

const TrustedBy = () => {
    const companies = [
        { name: "Hexform", icon: <Hexagon className="size-4" /> },
        { name: "Trilogy", icon: <Triangle className="size-4" /> },
        { name: "Boxworks", icon: <Boxes className="size-4" /> },
        { name: "Cloudly", icon: <Cloud className="size-4" /> },
        { name: "Aperture", icon: <Aperture className="size-4" /> },
        { name: "Northstar", icon: <Compass className="size-4" /> },
    ];

    return (
        <section className="flex flex-col items-center gap-5 py-2">
            <span className="uppercase text-zinc-400 text-[10px] tracking-[0.25em] font-semibold">
                Trusted by leading teams worldwide
            </span>
            <div className="w-full border-t border-b border-zinc-100 py-5 flex flex-wrap justify-center lg:justify-between items-center gap-x-10 gap-y-5">
                {companies.map((company) => (
                    <div
                        key={company.name}
                        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-700 transition-colors duration-300 grayscale hover:grayscale-0"
                    >
                        {company.icon}
                        <span className="font-semibold text-sm tracking-tight">{company.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustedBy;