import { ActivityIcon, Database, FileStack, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

const StatsCards = () => {
    return (
        /* 
           - grid-cols-1: Stacked on mobile
           - md:grid-cols-2: 2 columns on tablets
           - lg:grid-cols-3: 3 columns on desktop
        */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* Total Files Card */}
            <Card className="p-6 flex flex-col gap-4">
                <CardHeader className="p-0 flex-row justify-between items-start gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                            <FileStack className="size-5 text-[#2b7fff]" />
                        </div>
                        <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                            Total Files
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-2">
                    <div className="font-bold text-2xl md:text-3xl leading-9">3,842</div>
                    <div className="flex">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 gap-1 hover:bg-emerald-100">
                            <TrendingUp className="size-3" />
                            +12 this week
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Storage Used Card */}
            <Card className="p-6 flex flex-col gap-4">
                <CardHeader className="p-0 flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                        <Database className="size-5 text-[#2b7fff]" />
                    </div>
                    <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                        Storage Used
                    </span>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-2">
                    <div className="font-bold text-2xl md:text-3xl leading-9">
                        128.4
                        <span className="font-medium text-[#71717b] text-base md:text-lg leading-7">/ 500 GB</span>
                    </div>
                    <div className="rounded-full bg-zinc-100 w-full h-1.5 overflow-hidden mt-1">
                        <div className="rounded-full bg-[#2b7fff] h-full transition-all duration-500" style={{ width: "26%" }} />
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">26% of total capacity</span>
                </CardContent>
            </Card>

            {/* API Requests Card */}
            {/* md:col-span-2 ensures that if there's an odd number on tablet, the last card spans the width, or stays lg:col-span-1 for desktop */}
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