import { Card, CardContent } from "../ui/card";

const Stats = () => {
    const stats = [
        { label: "Active teams", value: "12K+" },
        { label: "Documents managed", value: "2.4M" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "SOC 2 Type II certified", value: "Yes" },
    ];

    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
                <Card 
                    key={index} 
                    className="p-6 md:p-8 border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                    <CardContent className="flex p-0 flex-col gap-1 md:gap-2">
                        <span className="font-bold text-[#2b7fff] text-2xl md:text-3xl lg:text-4xl tracking-tight">
                            {stat.value}
                        </span>
                        <span className="text-zinc-500 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider">
                            {stat.label}
                        </span>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
};

export default Stats;