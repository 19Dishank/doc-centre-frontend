import { Card, CardContent } from "../ui/card";

const Stats = () => {

    const stats = [
        { label: "Active teams", value: "12K+" },
        { label: "Documents managed", value: "2.4M" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "SOC 2 Type II certified", value: "Yes" },
    ];

    return (
        <section className="grid grid-cols-4 gap-6">
            {stats.map((stat, index) => {
                return (
                    <Card key={index} className="p-6 gap-2">
                        <CardContent className="flex p-0 flex-col gap-2">
                            <span className="font-bold text-[#2b7fff] text-3xl leading-9">{stat.value}</span>
                            <span className="text-[#71717b] text-xs leading-4">{stat.label}</span>
                        </CardContent>
                    </Card>
                )
            })}
        </section>
    );
};

export default Stats;