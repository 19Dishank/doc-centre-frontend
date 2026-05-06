import { ActivityIcon, Database, FileStack, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

const StatsCards = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Card className="p-6 gap-4">
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
                <CardContent className="p-0 gap-2">
                    <div className="font-bold text-3xl leading-9">3,842</div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 gap-1">
                        <TrendingUp className="size-3" />
                        +12 this week
                    </Badge>
                </CardContent>
            </Card>
            <Card className="p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                    <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                        <Database className="size-5 text-[#2b7fff]" />
                    </div>
                    <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                        Storage Used
                    </span>
                </CardHeader>
                <CardContent className="p-0 gap-2">
                    <div className="font-bold text-3xl leading-9">
                        128.4
                        <span className="font-medium text-[#71717b] text-lg leading-7">/ 500 GB</span>
                    </div>
                    <div className="rounded-full bg-zinc-100 w-full h-1.5 overflow-hidden">
                        <div className="rounded-full bg-[#2b7fff] h-full" style={{ width: "26%" }} />
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">26% of total capacity</span>
                </CardContent>
            </Card>
            <Card className="p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                    <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                        <ActivityIcon className="size-5 text-[#2b7fff]" />
                    </div>
                    <span className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                        API Requests (30d)
                    </span>
                </CardHeader>
                <CardContent className="p-0 gap-2">
                    <div className="font-bold text-3xl leading-9">1.2M</div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 gap-1">
                        <TrendingUp className="size-3" />
                        +8.3% vs last month
                    </Badge>
                </CardContent>
            </Card>
        </div>
    );
};

export default StatsCards;