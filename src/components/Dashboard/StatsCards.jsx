import { ActivityIcon, Database, FileStack, Info, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { formatSize } from "@/helper/formatSize";
import { Skeleton } from "../ui/skeleton";

const StatsCards = ({ stats, loading }) => {

    const statsData = [
        {
            title: "Total Files",
            icon: <FileStack className="size-5 text-[#2b7fff]" />,
            value: stats?.storageDetails?.totalFiles?.toLocaleString() || "0",
            tooltip: "Deleted files are not included in this count.",
            badge: `${stats?.docsAddedThisWeek?.toLocaleString() || 0} upload${stats?.docsAddedThisWeek === 1 ? '' : 's'} in last 7 days`,
        },
        {
            title: "Storage Used",
            icon: <Database className="size-5 text-[#2b7fff]" />,
            storageLimit: formatSize(stats?.planDetails?.storageLimit || 0),
            storageUsed: formatSize(stats?.storageDetails?.storageUsed || 0),
            percentageUsed: `${(((stats?.storageDetails?.storageUsed || 0) / (stats?.planDetails?.storageLimit || 1)) * 100).toFixed(1)}%`,
            tooltip: "Recycle bin files are also included in this count.",
        },
        {
            title: "API Requests (30d)",
            icon: <ActivityIcon className="size-5 text-[#2b7fff]" />,
            value: stats?.apiAnalytics?.totalRequests?.toLocaleString() || "0",
            badge: stats?.apiAnalytics?.totalRequests > 0 ? "+8.3% vs last month" : "No requests this month",
            badgeType: stats?.apiAnalytics?.totalRequests > 0 ? "success" : "neutral",
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {loading ? <Skeleton className="h-36 lg:h-40" /> : <FilesData stats={statsData[0]} />}
            {loading ? <Skeleton className="h-36 lg:h-40" /> : <StorageData stats={statsData[1]} />}
            {loading ? <Skeleton className="h-36 lg:h-40" /> : <APIData stats={statsData[2]} />}
        </div>
    );
};

export default StatsCards;

const FilesData = ({ stats }) => {
    const { title, icon, value, tooltip, badge } = stats;

    return (
        <Card className="p-6 flex flex-col gap-4">
            <CardHeader className="p-0 flex-row justify-between items-start gap-2">
                <div className="flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                        {icon}
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                            {title}
                        </span>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="size-3 text-[#a1a1aa] cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{tooltip}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-0 flex flex-col gap-2">
                <div className="font-bold text-2xl md:text-3xl leading-9">
                    {value}
                </div>

                <div className="flex">
                    <Badge
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-700 gap-1 hover:bg-emerald-100"
                    >
                        {badge}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}

const StorageData = ({ stats }) => {

    const { title, icon, storageUsed, storageLimit, percentageUsed, tooltip } = stats;

    const getBarColor = () => {
        const percentage = parseFloat(percentageUsed);
        if (percentage <= 70) return "bg-[#2b7fff]";
        if (percentage <= 90) return "bg-[#ff9c1f]";
        return "bg-[#ff4d4f]";
    }

    return (
        <Card className="p-6 flex flex-col gap-4">
            <CardHeader className="p-0 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                        {icon}
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                            {title}
                        </span>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="size-3 text-[#a1a1aa] cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{tooltip}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-2">
                <div className="font-bold text-2xl md:text-3xl leading-9">
                    {storageUsed}
                    <span className="font-medium text-[#71717b] text-base md:text-lg leading-7">/ {storageLimit}</span>
                </div>
                <div className="rounded-full border-zinc-200 border bg-zinc-100 w-full h-1.5 overflow-hidden mt-1">
                    <div className={`rounded-full ${getBarColor()} h-full transition-all duration-500`} style={{ width: `${percentageUsed}` }} />
                </div>
                <span className="text-[#71717b] text-xs leading-4">{percentageUsed} of total capacity</span>
            </CardContent>
        </Card>
    )
}

const APIData = ({ stats }) => {

    const { title, icon, value, badge, badgeType } = stats;

    const badgeStyles = badgeType === "success"
        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-100";

    return (
        <Card className="p-6 flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <CardHeader className="p-0 flex flex-col gap-2">
                <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                    {icon}
                </div>
                <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                    {title}
                </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-2">
                <div className="font-bold text-2xl md:text-3xl leading-9">{value}</div>
                {badge && (
                    <div className="flex">
                        <Badge variant="secondary" className={`${badgeStyles} gap-1`}>
                            {badgeType === "success" && <TrendingUp className="size-3" />}
                            {badge}
                        </Badge>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}