import { ActivityIcon, Database, FileStack, Info, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { formatSize } from "@/helper/formatSize";

const StatsCards = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-6 flex flex-col gap-4">
                <CardHeader className="p-0 flex-row justify-between items-start gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                            <FileStack className="size-5 text-[#2b7fff]" />
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                                Total Files
                            </span>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="size-3 text-[#a1a1aa] cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Deleted files are not included in this count.</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0 flex flex-col gap-2">
                    <div className="font-bold text-2xl md:text-3xl leading-9">
                        {stats?.storageDetails?.totalFiles?.toLocaleString() || "0"}
                    </div>

                    <div className="flex">
                        <Badge
                            variant="secondary"
                            className="bg-emerald-100 text-emerald-700 gap-1 hover:bg-emerald-100"
                        >
                            {stats.docsAddedThisWeek?.toLocaleString() || "0"} uploads in last 7 days
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="p-6 flex flex-col gap-4">
                <CardHeader className="p-0 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                            <Database className="size-5 text-[#2b7fff]" />
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                                Storage Used
                            </span>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="size-3 text-[#a1a1aa] cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Recycle bin files are also included in this count.</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-2">
                    <div className="font-bold text-2xl md:text-3xl leading-9">
                        {formatSize(stats?.storageDetails?.storageUsed)}
                        <span className="font-medium text-[#71717b] text-base md:text-lg leading-7">/ {formatSize(stats?.planDetails?.storageLimit)}</span>
                    </div>
                    <div className="rounded-full border-zinc-200 border bg-zinc-100 w-full h-1.5 overflow-hidden mt-1">
                        <div className="rounded-full bg-[#2b7fff] h-full transition-all duration-500" style={{ width: `${((stats?.storageDetails?.storageUsed / stats?.planDetails?.storageLimit) * 100).toFixed(1)}%` }} />
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">{((stats?.storageDetails?.storageUsed / stats?.planDetails?.storageLimit) * 100).toFixed(1)}% of total capacity</span>
                </CardContent>
            </Card>

            <Card className="p-6 flex flex-col gap-4 md:col-span-2 lg:col-span-1">
                <CardHeader className="p-0 flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                        <ActivityIcon className="size-5 text-[#2b7fff]" />
                    </div>
                    <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                        API Requests (30d)
                    </span>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-2">
                    <div className="font-bold text-2xl md:text-3xl leading-9">1.2M</div>
                    <div className="flex">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 gap-1 hover:bg-emerald-100">
                            <TrendingUp className="size-3" />
                            +8.3% vs last month
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default StatsCards;