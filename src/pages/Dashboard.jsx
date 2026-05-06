import {
    Activity,
    ArrowRight,
    Check,
    Database,
    FileSpreadsheet,
    FileStack,
    FileText,
    FileVideo,
    Image,
    MoreHorizontal,
    TrendingUp,
    X,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export default function Dashboard() {
    return (
        <div>
            <div
                className="bg-white text-zinc-950 flex w-full h-fit h-fit min-h-screen overflow-visible"
                data-id="ddc44dcd-976c-5d60-b638-0092e54c1849"
            >
                <div
                    className="flex flex-col flex-1"
                    data-id="b108831c-fe47-5e65-8100-c72ce592e50e"
                >
                    <main
                        className="bg-zinc-100/30 flex p-8 flex-col flex-1 gap-6 overflow-hidden"
                        data-id="7da0c577-bbcb-554f-9d62-050e6c05abc7"
                    >
                        <div
                            className="flex flex-col gap-1"
                            data-id="9a8c4a33-2110-54d3-b4d0-1029b46bd4bd"
                        >
                            <h1
                                className="font-semibold text-2xl leading-8 tracking-tight"
                                data-id="bc5df576-8103-5c4d-b9a4-296005d3742f"
                            >
                                Dashboard
                            </h1>
                            <p
                                className="text-[#71717b] text-sm leading-5"
                                data-id="0672fe89-ad26-5de3-81ab-e185f12d555e"
                            >
                                Welcome back, James. Here's what's happening.
                            </p>
                        </div>
                        <div
                            className="grid grid-cols-3 gap-4"
                            data-id="f9b2357e-79b1-5ef0-acad-8e5be2ae9132"
                        >
                            <Card
                                className="p-6 gap-4"
                                data-id="fb5ddd64-d0b3-530c-98f8-1530189bc526"
                            >
                                <CardHeader
                                    className="p-0 flex-row justify-between items-start gap-2"
                                    data-id="a6e7eec8-8ad0-5526-82b0-701c360a9013"
                                >
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="22f75956-cc6b-5305-88ca-66ca6213d041"
                                    >
                                        <div
                                            className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                                            data-id="3567d300-5407-5faa-918d-705bbd484f0b"
                                        >
                                            <FileStack
                                                className="size-5 text-[#2b7fff]"
                                                data-id="74f149eb-d298-5abd-8d86-d7c2fc4a814c"
                                            />
                                        </div>
                                        <span
                                            className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide"
                                            data-id="2d47a56e-9f44-5e18-b462-413553c3c939"
                                        >
                                            Total Files
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent
                                    className="p-0 gap-2"
                                    data-id="61451cd0-96ee-52ff-82d4-3ff8043a7e32"
                                >
                                    <div
                                        className="font-bold text-3xl leading-9"
                                        data-id="66ece526-113c-570b-a03a-d100793c6fb2"
                                    >
                                        3,842
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className="bg-emerald-100 text-emerald-700 gap-1"
                                        data-id="042713c9-7ca2-5a5a-86c3-2bfbfd8b68bb"
                                    >
                                        <TrendingUp
                                            className="size-3"
                                            data-id="2a77381c-c10c-5ca7-8add-84ae4970ebc6"
                                        />
                                        +12 this week
                                    </Badge>
                                </CardContent>
                            </Card>
                            <Card
                                className="p-6 gap-4"
                                data-id="dac99dc2-5319-5429-9847-ad647c26bcb2"
                            >
                                <CardHeader
                                    className="p-0 gap-2"
                                    data-id="1d08975e-d855-5ddf-b236-56f816e3d3c3"
                                >
                                    <div
                                        className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                                        data-id="9112cbb5-4a33-5c0c-a172-c7f9e36a98c3"
                                    >
                                        <Database
                                            className="size-5 text-[#2b7fff]"
                                            data-id="80a217fd-24d8-5822-8716-eb56b914d2a1"
                                        />
                                    </div>
                                    <span
                                        className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide"
                                        data-id="bdb44db6-8a11-58ba-9cd5-bcc02f77058d"
                                    >
                                        Storage Used
                                    </span>
                                </CardHeader>
                                <CardContent
                                    className="p-0 gap-2"
                                    data-id="14f47176-69f4-5f1b-914a-da799f83a1a0"
                                >
                                    <div
                                        className="font-bold text-3xl leading-9"
                                        data-id="1d2c0fb3-01b3-5148-abd4-19d2a3eedd1f"
                                    >
                                        128.4
                                        <span
                                            className="font-medium text-[#71717b] text-lg leading-7"
                                            data-id="d617c1b0-6821-55da-a61c-982f1de88df2"
                                        >
                                            / 500 GB
                                        </span>
                                    </div>
                                    <div
                                        className="rounded-full bg-zinc-100 w-full h-1.5 overflow-hidden"
                                        data-id="a76a2bff-8852-5e33-a77b-02dc60ca4330"
                                    >
                                        <div
                                            className="rounded-full bg-[#2b7fff] h-full"
                                            style={{ width: "26%" }}
                                            data-id="76596016-693c-5003-9664-ffd5bf21f6b4"
                                        />
                                    </div>
                                    <span
                                        className="text-[#71717b] text-xs leading-4"
                                        data-id="5cda8c17-893e-53ea-8251-c6d93a6b8696"
                                    >
                                        26% of total capacity
                                    </span>
                                </CardContent>
                            </Card>
                            <Card
                                className="p-6 gap-4"
                                data-id="32e2662a-6004-5bea-936a-519eb9e103cd"
                            >
                                <CardHeader
                                    className="p-0 gap-2"
                                    data-id="e3bd89ef-ae03-5cef-aa25-77e9e55153af"
                                >
                                    <div
                                        className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                                        data-id="51ab978b-e148-57c7-bba8-39973f512499"
                                    >
                                        <Activity
                                            className="size-5 text-[#2b7fff]"
                                            data-id="0a7c85e0-ceb3-541b-928c-c87606fad202"
                                        />
                                    </div>
                                    <span
                                        className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide"
                                        data-id="b11e0c23-2216-540f-b0ec-317fa6c0173c"
                                    >
                                        API Requests (30d)
                                    </span>
                                </CardHeader>
                                <CardContent
                                    className="p-0 gap-2"
                                    data-id="2c14378e-15b0-52de-90d6-ce29a4472e78"
                                >
                                    <div
                                        className="font-bold text-3xl leading-9"
                                        data-id="62a180c8-0654-5a77-a37a-58a2911a61a0"
                                    >
                                        1.2M
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className="bg-emerald-100 text-emerald-700 gap-1"
                                        data-id="32e9b33a-e49f-5961-a7fb-f7eac8187d06"
                                    >
                                        <TrendingUp
                                            className="size-3"
                                            data-id="f6239076-57fc-50f5-9f1d-75cdbe8545d5"
                                        />
                                        +8.3% vs last month
                                    </Badge>
                                </CardContent>
                            </Card>
                        </div>
                        <Card
                            className="p-6 gap-4"
                            data-id="d30af4e2-aacf-5cc5-8e33-11e1a8e0c3e5"
                        >
                            <CardHeader
                                className="p-0 flex-row justify-between items-center gap-2"
                                data-id="401fc86c-9c52-52f4-8b94-96a93f2ad142"
                            >
                                <div
                                    className="flex flex-col gap-1"
                                    data-id="424e4d15-a698-5df5-bfaa-d5badfccc3ae"
                                >
                                    <h2
                                        className="font-semibold text-base leading-6"
                                        data-id="4bbc282a-a42b-5a8b-9c57-d8ed578f9de8"
                                    >
                                        Usage Over Time
                                    </h2>
                                    <p
                                        className="text-[#71717b] text-xs leading-4"
                                        data-id="392f5dbb-5fb8-53e5-861a-3cd2150835d8"
                                    >
                                        API requests and storage trends over the last 30 days
                                    </p>
                                </div>
                                <div
                                    className="flex items-center gap-4"
                                    data-id="02cf7f31-4c3e-5cde-a3a7-a67e453f84ef"
                                >
                                    <div
                                        className="text-xs leading-4 flex items-center gap-2"
                                        data-id="0ffc8ec4-ccaa-5b08-969d-ab3c1f33589d"
                                    >
                                        <span
                                            className="size-2 rounded-full bg-[#2b7fff]"
                                            data-id="78dc4342-1f71-5da3-b8b4-8461cd4294b6"
                                        />
                                        <span
                                            className="text-[#71717b]"
                                            data-id="d450cc59-881c-5148-98b8-8fe4fac44cae"
                                        >
                                            API Requests
                                        </span>
                                    </div>
                                    <div
                                        className="text-xs leading-4 flex items-center gap-2"
                                        data-id="6f608a4e-a9a9-5454-a19f-7c5f1a718f6b"
                                    >
                                        <span
                                            className="size-2 rounded-full"
                                            style={{ backgroundColor: "oklch(0.6 0.118 184.704)" }}
                                            data-id="462e6c7c-12bd-5b0b-b7f1-6f0454ee0a45"
                                        />
                                        <span
                                            className="text-[#71717b]"
                                            data-id="5a2e3801-8c06-5630-a352-5e62e757b2c9"
                                        >
                                            Storage
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent
                                className="p-0"
                                data-id="99562af4-0273-518a-ba55-1db686ad8c56"
                            >
                                <ChartContainer
                                    config={{
                                        api: { label: "API", color: "oklch(0.623 0.214 259.815)" },
                                        storage: {
                                            label: "Storage",
                                            color: "oklch(0.6 0.118 184.704)",
                                        },
                                    }}
                                    className="w-full h-45"
                                    data-id="fad4edd9-ff82-5c5c-b1b4-091375f72363"
                                >
                                    <LineChart
                                        data={[
                                            { day: "Day 1", api: 32, storage: 88 },
                                            { day: "Day 5", api: 45, storage: 95 },
                                            { day: "Day 10", api: 38, storage: 101 },
                                            { day: "Day 15", api: 62, storage: 108 },
                                            { day: "Day 20", api: 55, storage: 115 },
                                            { day: "Day 25", api: 78, storage: 122 },
                                            { day: "Day 30", api: 92, storage: 128 },
                                        ]}
                                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                                        data-id="0d895851-1762-549a-9244-c735015afdc0"
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="oklch(0.92 0.004 286.32)"
                                            vertical={false}
                                            data-id="33f93298-18c4-5509-a857-cfd8eb7465ed"
                                        />
                                        <XAxis
                                            dataKey="day"
                                            tick={{
                                                fontSize: 11,
                                                fill: "oklch(0.552 0.016 285.938)",
                                            }}
                                            axisLine={false}
                                            tickLine={false}
                                            data-id="12323dbe-8931-52df-9a5a-0bc66047690d"
                                        />
                                        <YAxis
                                            tick={{
                                                fontSize: 11,
                                                fill: "oklch(0.552 0.016 285.938)",
                                            }}
                                            axisLine={false}
                                            tickLine={false}
                                            data-id="0ddb6788-fa39-5bac-a922-4fc673d427d3"
                                        />
                                        <ChartTooltip data-id="be9c57b7-49c3-5a2e-8f09-c92daa826a5e" />
                                        <Line
                                            type="monotone"
                                            dataKey="api"
                                            stroke="oklch(0.623 0.214 259.815)"
                                            strokeWidth={2}
                                            dot={false}
                                            data-id="17762a0c-7064-5dbf-9bc9-0192ff9720fc"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="storage"
                                            stroke="oklch(0.6 0.118 184.704)"
                                            strokeWidth={2}
                                            dot={false}
                                            data-id="ae8a3f57-8e6b-5a8c-b8b4-4dad1dfdf746"
                                        />
                                    </LineChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                        <Card
                            className="p-6 gap-4"
                            data-id="da49b9dd-1ef8-5ae0-8ecd-eb41018713b6"
                        >
                            <CardHeader
                                className="p-0 flex-row justify-between items-center gap-2"
                                data-id="63fd7c0b-5668-5ddd-8376-06be34c3b97e"
                            >
                                <h2
                                    className="font-semibold text-base leading-6"
                                    data-id="3e1b91be-5869-5db0-87a9-c4113d732995"
                                >
                                    Recent Uploads
                                </h2>
                                <a
                                    className="font-medium text-[#2b7fff] text-sm leading-5 flex items-center gap-1"
                                    data-id="ea91c06d-5c6d-5c58-8879-642bf91f1b56"
                                >
                                    View all
                                    <ArrowRight
                                        className="size-3"
                                        data-id="ec72e890-65b5-5a59-962d-97c68a290c3e"
                                    />
                                </a>
                            </CardHeader>
                            <CardContent
                                className="divide-y divide-border flex p-0 flex-col gap-0"
                                data-id="e68d8535-5261-5e96-b50c-078fd759b6a2"
                            >
                                <div
                                    className="flex py-3 items-center gap-4"
                                    data-id="d467858c-a49e-5420-b6cb-6ed1bdebb014"
                                >
                                    <div
                                        className="size-9 rounded-lg bg-red-50 flex justify-center items-center"
                                        data-id="1a584ac1-5bde-5bfb-8a90-dd8b2c0dd9b1"
                                    >
                                        <FileText
                                            className="size-4 text-red-600"
                                            data-id="f4ecbf0b-f5ef-55ca-8e78-95db2ba6877a"
                                        />
                                    </div>
                                    <div
                                        className="flex flex-col flex-1 gap-0.5"
                                        data-id="122a8525-716f-55f8-ab01-bb9ef870d666"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="49b5fb04-c9be-5231-ac9e-335349bc5191"
                                        >
                                            Q4-Financial-Report.pdf
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="2e10915a-f3ae-52fe-8cf1-fa33a6bffc20"
                                        >
                                            2.4 MB · Uploaded 2 hours ago
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="f7c9453f-6938-5525-8afd-2eea5023eea6"
                                    >
                                        <Avatar
                                            className="size-6"
                                            data-id="27e293fa-2396-54c6-a0cf-916a726900fb"
                                        >
                                            <AvatarFallback
                                                className="bg-zinc-100 text-[10px]"
                                                data-id="faf3bf56-0249-531b-9e78-f71e943bb113"
                                            >
                                                SM
                                            </AvatarFallback>
                                        </Avatar>
                                        <span
                                            className="text-[#71717b] text-xs leading-4 w-24"
                                            data-id="d20f9d7e-c588-5a71-b807-3b1939cd31c0"
                                        >
                                            Sarah Miller
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="379c2d15-5555-5c57-a8bc-0409851fe9d6"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="64d5c1f9-9c99-58aa-8548-0a946c5ab9b7"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="flex py-3 items-center gap-4"
                                    data-id="e7df51e1-ea68-5ca6-ae18-7a3543bcab55"
                                >
                                    <div
                                        className="size-9 rounded-lg bg-blue-50 flex justify-center items-center"
                                        data-id="bffc619b-191f-5577-b04d-7edf119c13fc"
                                    >
                                        <FileText
                                            className="size-4 text-blue-600"
                                            data-id="8fc301af-210a-5c97-9d5b-69d41aa0c95e"
                                        />
                                    </div>
                                    <div
                                        className="flex flex-col flex-1 gap-0.5"
                                        data-id="856bc529-729b-5e44-8895-8efade0b319a"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="44795354-7f57-5b64-90e2-cebf2084a299"
                                        >
                                            Project-Proposal-v3.docx
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="22b7da5a-d1db-5833-8c84-13a92eeec509"
                                        >
                                            847 KB · Uploaded 5 hours ago
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="663fa418-d23e-59da-b9f4-09076973fee2"
                                    >
                                        <Avatar
                                            className="size-6"
                                            data-id="6cdde847-c828-59b0-a366-9603b2c0aa15"
                                        >
                                            <AvatarFallback
                                                className="bg-zinc-100 text-[10px]"
                                                data-id="9d73e697-abba-528c-949e-eb9317317d0b"
                                            >
                                                MK
                                            </AvatarFallback>
                                        </Avatar>
                                        <span
                                            className="text-[#71717b] text-xs leading-4 w-24"
                                            data-id="52f99a37-16b6-52cb-bd3c-973b01efc7e4"
                                        >
                                            Mike Kim
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="fb6305bd-f4c3-53bb-8c0d-9beb0d4982da"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="2a54b8bb-07d6-56ed-b4b4-a3c2ddd66015"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="flex py-3 items-center gap-4"
                                    data-id="2589cc0e-9d55-5ddd-b182-5623f96c0ffb"
                                >
                                    <div
                                        className="size-9 rounded-lg bg-emerald-50 flex justify-center items-center"
                                        data-id="e248a22f-6e0a-5168-801d-d28869f178f7"
                                    >
                                        <Image
                                            className="size-4 text-emerald-600"
                                            data-id="d1489182-3696-53e9-a863-75316cff61b7"
                                        />
                                    </div>
                                    <div
                                        className="flex flex-col flex-1 gap-0.5"
                                        data-id="1dc86a55-5e56-5c08-9698-4497ecf9df2b"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="d46b40a2-657b-5dd4-ac2d-24f6b014e9d3"
                                        >
                                            brand-assets-2025.png
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="9820bcf0-4318-5261-aa8b-f54772e84479"
                                        >
                                            5.1 MB · Uploaded yesterday
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="2b0e702e-c83d-5f1f-afeb-dfc7f7fccc10"
                                    >
                                        <Avatar
                                            className="size-6"
                                            data-id="119762ab-ec6f-54e2-94f6-a00edd794717"
                                        >
                                            <AvatarFallback
                                                className="bg-zinc-100 text-[10px]"
                                                data-id="ce20df56-a78e-5727-9fdd-69274aa96587"
                                            >
                                                JD
                                            </AvatarFallback>
                                        </Avatar>
                                        <span
                                            className="text-[#71717b] text-xs leading-4 w-24"
                                            data-id="d7a66105-0fc0-5973-a158-0e6c0fe0698c"
                                        >
                                            James Doe
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="649bf611-ab33-5993-b317-acfa6a382920"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="dfee0193-0dd8-5bcd-848e-598458769758"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="flex py-3 items-center gap-4"
                                    data-id="ab6c69e1-c556-5fa1-bdbe-da9f90ce89ed"
                                >
                                    <div
                                        className="size-9 rounded-lg bg-amber-50 flex justify-center items-center"
                                        data-id="c5951327-152a-5113-9398-4872bddde6fb"
                                    >
                                        <FileSpreadsheet
                                            className="size-4 text-amber-600"
                                            data-id="795ca15a-3d5e-5d31-89c9-5a66ccb2af1a"
                                        />
                                    </div>
                                    <div
                                        className="flex flex-col flex-1 gap-0.5"
                                        data-id="71c76f62-fad2-5289-bc55-ae6b888ba5bc"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="568b7afd-ecb4-552d-a383-465fa0398c0b"
                                        >
                                            customer-data-export.xlsx
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="3cc3f57c-4870-5a4a-b3e3-3c06b1059e40"
                                        >
                                            1.8 MB · Uploaded 2 days ago
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="20bb1f54-5fb2-530d-8cf2-6ec7224b3f4e"
                                    >
                                        <Avatar
                                            className="size-6"
                                            data-id="ea76f9a8-fbec-5eaf-8dce-3f0a4756f7ec"
                                        >
                                            <AvatarFallback
                                                className="bg-zinc-100 text-[10px]"
                                                data-id="cc15a159-1bd8-5687-a934-50fcd9c9c776"
                                            >
                                                AL
                                            </AvatarFallback>
                                        </Avatar>
                                        <span
                                            className="text-[#71717b] text-xs leading-4 w-24"
                                            data-id="6fe6b089-dbc3-5fac-8d6e-ddfa6f7695d7"
                                        >
                                            Alex Lopez
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="df25525f-edd2-5939-88f6-f5c4d1583184"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="1d1737bc-6435-5cb1-81e2-bf615d4b84e9"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="flex py-3 items-center gap-4"
                                    data-id="27843fe5-6d1e-5167-a692-7cd02d1068e9"
                                >
                                    <div
                                        className="size-9 rounded-lg bg-purple-50 flex justify-center items-center"
                                        data-id="7432268f-8aa5-50eb-9e92-e84b312eab95"
                                    >
                                        <FileVideo
                                            className="size-4 text-purple-600"
                                            data-id="ed52e9bd-1818-5e05-bfb4-62ccd86e9049"
                                        />
                                    </div>
                                    <div
                                        className="flex flex-col flex-1 gap-0.5"
                                        data-id="f2fcaf7b-c145-5971-acb2-ea99cd793b48"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="40e10050-f402-5ca4-a138-27f33da339a7"
                                        >
                                            product-demo-final.mp4
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="f2358605-9be2-5b14-a454-a1ad524dddbe"
                                        >
                                            42.3 MB · Uploaded 3 days ago
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="c9616f1b-e685-5f0c-89ee-336084bdac1a"
                                    >
                                        <Avatar
                                            className="size-6"
                                            data-id="2aed4882-d11b-546d-bbbb-88d375a976b3"
                                        >
                                            <AvatarFallback
                                                className="bg-zinc-100 text-[10px]"
                                                data-id="8eb49b13-6c3c-5cec-9c94-89773ee51410"
                                            >
                                                RP
                                            </AvatarFallback>
                                        </Avatar>
                                        <span
                                            className="text-[#71717b] text-xs leading-4 w-24"
                                            data-id="854c29d3-13f0-5ed1-9fa8-b1b50804cb6f"
                                        >
                                            Rachel Park
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="79f60ece-0051-5150-a33a-c9f47be074ba"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="0bcebb0e-0589-59e1-a013-1ac4a4bdc934"
                                        />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </main>
                </div>
                <div
                    className="fixed shadow-lg rounded-lg bg-emerald-50 border-emerald-200 border-1 border-solid flex right-6 bottom-6 p-4 items-center gap-2"
                    data-id="59ceaf70-cea1-5055-be0c-eb93e02c0b86"
                >
                    <div
                        className="size-8 rounded-full bg-emerald-500 flex justify-center items-center"
                        data-id="80842d35-004c-53cc-87fa-b8b1b45c4971"
                    >
                        <Check
                            className="size-4 text-white"
                            data-id="0b7a6667-7e69-55f5-ba22-3b434812d780"
                        />
                    </div>
                    <div
                        className="flex flex-col gap-0.5"
                        data-id="547b9014-cb46-58b3-a72a-271813c04e1e"
                    >
                        <span
                            className="font-medium text-emerald-900 text-sm leading-5"
                            data-id="205b106b-ae81-5334-a8f6-a89aab643f6c"
                        >
                            File uploaded successfully
                        </span>
                        <span
                            className="text-emerald-700 text-xs leading-4"
                            data-id="3eb1c5d4-3b21-5b84-a665-15a95070b519"
                        >
                            Your file is now available in the library
                        </span>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-emerald-700 ml-4"
                        data-id="bd27993f-63c3-55b9-ae11-3783da1d2b92"
                    >
                        <X
                            className="size-4"
                            data-id="ec67a6fa-e61d-5039-a818-f8326d3e3cbd"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
}
