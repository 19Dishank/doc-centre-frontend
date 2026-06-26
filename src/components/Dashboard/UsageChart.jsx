import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { formatSize } from "@/helper/formatSize";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

const UsageChart = ({ stats, loading }) => {

    const usageData = stats?.apiAnalytics?.requestsOverTime

    // const data = [
    //     { day: "Day 1", api: 32, storage: 88 },
    //     { day: "Day 5", api: 45, storage: 95 },
    //     { day: "Day 10", api: 38, storage: 101 },
    //     { day: "Day 15", api: 62, storage: 108 },
    //     { day: "Day 20", api: 55, storage: 115 },
    //     { day: "Day 25", api: 78, storage: 122 },
    //     { day: "Day 30", api: 92, storage: 128 },
    // ]

    return (
        <Card className="p-4 md:p-6 flex flex-col gap-4">
            <CardHeader className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-base leading-6">Usage Over Time</h2>
                    <p className="text-zinc-500 text-xs leading-4">
                        API requests and storage trends (Last 30 days)
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <div className="text-xs leading-4 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#2b7fff]" />
                        <span className="text-zinc-500">API Requests</span>
                    </div>
                    <div className="text-xs leading-4 flex items-center gap-2">
                        <span className="size-2 rounded-full" style={{ backgroundColor: "oklch(0.6 0.118 184.704)" }} />
                        <span className="text-zinc-500">Storage</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-0">
                <div className="w-full h-62.5 md:h-87.5">
                    {loading ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <span className="text-zinc-500 text-sm">Loading chart...</span>
                        </div>
                    ) : (
                        <ChartContainer
                            config={{
                                api: { label: "API", color: "oklch(0.623 0.214 259.815)" },
                                storage: {
                                    label: "Storage",
                                    color: "oklch(0.6 0.118 184.704)",
                                },
                            }}
                            className="w-full h-full"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={usageData}
                                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="oklch(0.92 0.004 286.32)"
                                        vertical={false}
                                    />
                                    <XAxis
                                        dataKey="day"
                                        tick={{
                                            fontSize: 11,
                                            fill: "oklch(0.552 0.016 285.938)",
                                        }}
                                        axisLine={false}
                                        tickLine={false}
                                        dy={10} // Padding for the labels
                                    />
                                    <YAxis
                                        tick={{
                                            fontSize: 11,
                                            fill: "oklch(0.552 0.016 285.938)",
                                        }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <ChartTooltip
                                        formatter={(value, name) => {
                                            if (name === "requests") return [`${value}`, "API Requests"];
                                            if (name === "storageUsed") return [formatSize(value), "Storage"];
                                            return [value, name];
                                        }}
                                        cursor={false} />
                                    <Line
                                        type="monotone"
                                        dataKey="requests"
                                        stroke="oklch(0.623 0.214 259.815)"
                                        strokeWidth={2.5}
                                        dot={false}
                                        activeDot={{ r: 4, strokeWidth: 0 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="storageUsed"
                                        stroke="oklch(0.6 0.118 184.704)"
                                        strokeWidth={2.5}
                                        dot={false}
                                        activeDot={{ r: 4, strokeWidth: 0 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default UsageChart;