import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const UsageChart = () => {

    const data = [
        { day: "Day 1", api: 32, storage: 88 },
        { day: "Day 5", api: 45, storage: 95 },
        { day: "Day 10", api: 38, storage: 101 },
        { day: "Day 15", api: 62, storage: 108 },
        { day: "Day 20", api: 55, storage: 115 },
        { day: "Day 25", api: 78, storage: 122 },
        { day: "Day 30", api: 92, storage: 128 },
    ]
   
    return (
        <Card className="p-6 gap-4">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-base leading-6">Usage Over Time</h2>
                    <p className="text-[#71717b] text-xs leading-4">
                        API requests and storage trends over the last 30 days
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-xs leading-4 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#2b7fff]" />
                        <span className="text-[#71717b]">API Requests</span>
                    </div>
                    <div className="text-xs leading-4 flex items-center gap-2">
                        <span className="size-2 rounded-full" style={{ backgroundColor: "oklch(0.6 0.118 184.704)" }} />
                        <span className="text-[#71717b]">Storage</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <ChartContainer
                    config={{
                        api: { label: "API", color: "oklch(0.623 0.214 259.815)" },
                        storage: {
                            label: "Storage",
                            color: "oklch(0.6 0.118 184.704)",
                        },
                    }}
                    className="w-full h-45">
                    <LineChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.004 286.32)" vertical={false} />
                        <XAxis
                            dataKey="day"
                            tick={{
                                fontSize: 11,
                                fill: "oklch(0.552 0.016 285.938)",
                            }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{
                                fontSize: 11,
                                fill: "oklch(0.552 0.016 285.938)",
                            }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <ChartTooltip />
                        <Line
                            type="monotone"
                            dataKey="api"
                            stroke="oklch(0.623 0.214 259.815)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="storage"
                            stroke="oklch(0.6 0.118 184.704)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default UsageChart;