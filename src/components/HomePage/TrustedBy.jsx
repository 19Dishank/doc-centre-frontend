import { Aperture, Boxes, Cloud, Compass, Hexagon, Triangle } from "lucide-react";

const TrustedBy = () => {
    const companies = [
        { name: "Hexform", icon: <Hexagon className="size-5" /> },
        { name: "Trilogy", icon: <Triangle className="size-5" /> },
        { name: "Boxworks", icon: <Boxes className="size-5" /> },
        { name: "Cloudly", icon: <Cloud className="size-5" /> },
        { name: "Aperture", icon: <Aperture className="size-5" /> },
        { name: "Northstar", icon: <Compass className="size-5" /> },
    ];

    return (
        <section className="flex flex-col items-center gap-6 py-4">
            <span className="uppercase text-zinc-500 text-[10px] sm:text-xs leading-4 tracking-[0.2em] font-medium">
                Trusted by leading teams
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:justify-between w-full opacity-60">
                {companies.map((company) => (
                    <div 
                        key={company.name} 
                        className="text-zinc-950 flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        {company.icon}
                        <span className="font-semibold text-sm md:text-base">{company.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustedBy;