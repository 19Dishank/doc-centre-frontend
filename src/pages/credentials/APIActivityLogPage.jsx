import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import PageHeading from "@/components/PageHeading";
import { useState } from "react";
import { fetchActivityLogs } from "@/api/api";
import { DataTable } from "@/components/DataTable";

const APIActivityLogPage = () => {

    const [activityLogs, setActivityLogs] = useState([
        { endpoint: "/v1/files/upload", method: "POST", status: "200", badge: "bg-emerald-100 text-emerald-700", timestamp: "2024-03-14 14:32:08", latency: "142ms" },
        { endpoint: "/v1/users/me", method: "GET", status: "200", badge: "bg-emerald-100 text-emerald-700", timestamp: "2024-03-14 14:30:51", latency: "38ms" },
        { endpoint: "/v1/files/list", method: "GET", status: "200", badge: "bg-emerald-100 text-emerald-700", timestamp: "2024-03-14 14:28:19", latency: "94ms" },
        { endpoint: "/v1/auth/token", method: "POST", status: "401", badge: "bg-red-100 text-red-700", timestamp: "2024-03-14 14:25:02", latency: "21ms" },
        { endpoint: "/v1/files/share", method: "POST", status: "200", badge: "bg-emerald-100 text-emerald-700", timestamp: "2024-03-14 14:21:47", latency: "186ms" }
    ]);

    const [stats, setStats] = useState({
        requestsMade: 892341,
        allowedQuota: 10000000,
    });

    const usedQuotaPercentage = ((stats?.requestsMade / stats?.allowedQuota) * 100).toFixed(1);
    const remainingQuota = stats?.allowedQuota - stats?.requestsMade;
    const remainingQuotaPercentage = ((remainingQuota / stats?.allowedQuota) * 100).toFixed(1);

    const [loading, setLoading] = useState(true);

    const getActivityLogs = async () => {
        setLoading(true);
        try {
            const res = await fetchActivityLogs();
            setActivityLogs(res.data.logs);
            setStats(res.data.stats);
        } catch (error) {
            console.error("Error fetching activity logs:", error);
        } finally {
            setLoading(false);
        }
    };

    useState(() => {
        getActivityLogs();
    }, []);

    const columns = [
        {
            key: "endpoint",
            header: "Endpoint",
            width: "w-[25%]",
            cellClassName: "font-mono text-xs text-zinc-900 truncate max-w-45 sm:max-w-none",
            render: (row) => row.endpoint,
        },
        {
            key: "method",
            header: "Method",
            width: "w-[10%]",
            render: (row) => (
                <Badge variant={row.method === "GET" ? "secondary" : "default"} className={`font-mono text-[11px] ${row.method === "POST" ? "bg-[#2b7fff]/10 text-[#2b7fff] hover:bg-[#2b7fff]/10" : ""}`}>
                    {row.method}
                </Badge>
            ),
        },
        {
            key: "status",
            header: "Status",
            width: "w-[10%]",
            render: (row) => <Badge className={`font-mono text-[10px] pointer-events-none ${row.badge}`}>{row.status}</Badge>,
        },
        {
            key: "timestamp",
            header: "Timestamp",
            width: "w-[30%]",
            cellClassName: "text-zinc-500 text-xs whitespace-nowrap hidden sm:table-cell",
            render: (row) => row.timestamp,
        },
        {
            key: "latency",
            header: "Latency",
            width: "w-[10%]",
            align: "right",
            cellClassName: "text-right text-xs text-zinc-600 font-medium whitespace-nowrap",
            render: (row) => row.latency,
        },
    ];

    const formatNumber = (value) => new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(value ?? 0);

    const downloadCSV = () => {
        const headers = ["Endpoint", "Method", "Status", "Timestamp", "Latency"];

        const rows = activityLogs.map(log => [log.endpoint, log.method, log.status, log.timestamp, log.latency].join(","));

        const csvContent = [headers.join(","), ...rows].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "api_activity_log.csv");
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col gap-6">

            <div className="flex justify-between items-end">
                <PageHeading
                    heading="API Activity Log"
                    subheading="Review recent API requests, monitor usage patterns, and identify potential issues with your API integrations."
                />
                <Button onClick={downloadCSV} variant="outline" className="gap-2 w-full sm:w-auto h-9 cursor-pointer">
                    <Download className="size-4" /> Download CSV
                </Button>
            </div>

            <div className="flex p-0 flex-col gap-6">
                {/* Metrics Stack Grid: Collapses to single cards sequentially */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="shadow-none bg-zinc-100/40 p-4 flex flex-col gap-2">
                        <span className="text-zinc-500 text-xs">Requests Made</span>
                        <div className="flex justify-between items-center gap-2">
                            <span className="font-semibold text-xl sm:text-2xl tracking-tight">{formatNumber(stats?.requestsMade)}</span>
                            <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] pointer-events-none">+12%</Badge>
                        </div>
                    </Card>

                    <Card className="shadow-none bg-zinc-100/40 p-4 flex flex-col gap-2">
                        <span className="text-zinc-500 text-xs">Rate Limit</span>
                        <div className="flex justify-between items-center gap-2">
                            <span className="font-semibold text-xl sm:text-2xl tracking-tight">
                                {formatNumber(stats?.allowedQuota)}<span className="font-normal text-zinc-500 text-xs sm:text-sm ml-1">req/mo</span>
                            </span>
                            <Badge variant="secondary" className="pointer-events-none">Pro</Badge>
                        </div>
                    </Card>

                    <Card className="shadow-none bg-zinc-100/40 p-4 flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
                        <span className="text-zinc-500 text-xs">Remaining Quota</span>
                        <div className="flex justify-between items-center gap-2">
                            <span className="font-semibold text-xl sm:text-2xl tracking-tight">{formatNumber(remainingQuota)}</span>
                            <Badge className="bg-emerald-100 text-emerald-700 pointer-events-none">{remainingQuotaPercentage}%</Badge>
                        </div>
                    </Card>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                        <Label className="text-zinc-950">Monthly Usage</Label>
                        <span className="text-zinc-500">{usedQuotaPercentage}%</span>
                    </div>
                    <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                        <div className="rounded-full bg-[#2b7fff] h-full transition-all duration-300" style={{ width: `${usedQuotaPercentage}%` }} />
                    </div>
                    <span className="text-zinc-500 text-xs">{formatNumber(stats?.requestsMade)} / {formatNumber(stats?.allowedQuota)} requests</span>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-sm text-zinc-950">Request Log</h3>
                        <span className="text-zinc-500 text-xs">Last 5 requests</span>
                    </div>

                    <div className="rounded-lg border border-zinc-200 overflow-hidden">
                        <div className="overflow-x-auto w-full">
                            <DataTable
                                columns={columns}
                                data={activityLogs}
                                loading={loading}
                                noDataMessage="No activity logs found"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default APIActivityLogPage;