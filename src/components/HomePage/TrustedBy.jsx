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
        <section className="flex py-4 flex-col items-center gap-2">
            <span className="uppercase text-[#71717b] text-xs leading-4 tracking-widest">Trusted by leading teams</span>
            <div className="opacity-60 flex px-12 pt-2 justify-between items-center w-full">
                {companies.map((company) => (
                    <div key={company.name} className="text-zinc-950 flex items-center gap-2">
                        {company.icon}
                        <span className="font-semibold">{company.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustedBy;