import {
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Pencil,
    Plus,
    Search,
    Trash2,
    X,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function UsersList() {
    return (
        <div>
            <div
                className="flex flex-col flex-1 h-239 overflow-hidden"
                data-id="5443891e-e436-537c-a468-fe8f8a0df274"
            >
                <main
                    className="relative bg-zinc-100/40 p-8 flex-1 overflow-auto"
                    data-id="10e673f6-b93d-5f04-b1c6-2a8fff711013"
                >
                    <div
                        className="flex flex-col gap-6"
                        data-id="3e64d5c1-a498-59e3-9fe7-1d40ac24d2bf"
                    >
                        <div
                            className="flex flex-col gap-1"
                            data-id="5c949cf2-8a5b-5597-8fc6-0bf6cfb67678"
                        >
                            <h1
                                className="font-semibold text-2xl leading-8"
                                data-id="0af51f8b-006e-5ede-9c2c-dcb32b8e2813"
                            >
                                Users
                            </h1>
                            <p
                                className="text-[#71717b] text-sm leading-5"
                                data-id="f0688ee5-3c58-5338-bf7b-f0f8ac12d69b"
                            >
                                Manage team members and their access levels.
                            </p>
                        </div>
                        <div
                            className="flex justify-between items-center gap-4"
                            data-id="c23f126f-77a5-5ae9-9216-12c5a21ec99f"
                        >
                            <div
                                className="flex items-center gap-2"
                                data-id="42cbff24-35aa-5e38-b939-75c961e98296"
                            >
                                <div
                                    className="relative w-70"
                                    data-id="5df3f26c-5e2e-5881-b582-059cc7869a30"
                                >
                                    <Search
                                        className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3"
                                        data-id="d4f0847c-e51c-5dad-bc43-0c361ce89413"
                                    />
                                    <Input
                                        placeholder="Search users…"
                                        className="bg-white pl-9"
                                        data-id="d10d5897-10f1-515d-bede-7cf6e057de84"
                                    />
                                </div>
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                    data-id="62236d70-e563-5695-a557-696e0ce89de0"
                                >
                                    Role
                                    <ChevronDown
                                        className="size-4"
                                        data-id="5073149d-3023-51e4-8548-1c592363af11"
                                    />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                    data-id="cb5bae10-2be7-5aec-a064-dc8899a01b60"
                                >
                                    Status
                                    <ChevronDown
                                        className="size-4"
                                        data-id="bcef8668-e3b8-5e20-a006-daaf79ca5cf5"
                                    />
                                </Button>
                            </div>
                            <Button
                                className="font-semibold bg-[#2b7fff] text-blue-50 gap-2"
                                data-id="bb2f8e05-72e8-5e19-b114-82c811e93ac8"
                            >
                                <Plus
                                    className="size-4"
                                    data-id="ad57111b-67df-550d-b5f4-ccff4fe0c2c0"
                                />
                                Invite User
                            </Button>
                        </div>
                        <Card
                            className="p-0 gap-0 overflow-hidden"
                            data-id="eaac2781-26d6-5be4-bf47-0e685f7ec91e"
                        >
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] font-medium uppercase bg-zinc-100/30 text-[#71717b] text-[11px] tracking-wide border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="5410cc41-6bc0-59ea-8e8a-d008f4f35e2e"
                            >
                                <Checkbox data-id="dc6527ba-6393-53c6-91ec-38c587bb043f" />
                                <span data-id="39783700-cb7c-510a-8db1-c2cbb8a96a23">
                                    User
                                </span>
                                <span data-id="071056c8-95ff-58b1-b982-4713d51001bf">
                                    Role
                                </span>
                                <span data-id="7036b979-ac56-56f6-bbd1-76b44219e575">
                                    Status
                                </span>
                                <span data-id="97fecb17-70ad-5050-aab5-7179b28f2433">
                                    Last Active
                                </span>
                                <span
                                    className="text-right"
                                    data-id="a3d93caf-b6ca-580f-94a2-e55cbaf0df9b"
                                >
                                    Actions
                                </span>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="ddf01efb-2a95-5c26-b9cc-fa2a0c7f077c"
                            >
                                <Checkbox data-id="b4c8707a-4e86-502d-9c03-27aa60639b8a" />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="fe518217-8587-5b80-ba0c-12448f473684"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="dbd4863e-033b-5ee8-bc23-d8057db7af61"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-blue-100 text-blue-700 text-xs leading-4"
                                            data-id="f97ebafe-be23-508c-875c-c688d2fdd38c"
                                        >
                                            AM
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="c8da5cd1-90fb-57e9-9e2d-8b246f4fe1fb"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="11bec790-9132-5af0-a1ae-1fe7a85f9ba3"
                                        >
                                            Alex Morgan
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="57449a07-1d01-59f6-9256-803001fb3b8b"
                                        >
                                            alex.morgan@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="fad7a9f1-4459-5ea5-ab1d-b009167ccc4c">
                                    <Badge
                                        className="font-medium rounded-full bg-blue-100 text-blue-700"
                                        data-id="9d01687a-a9a2-5147-bdbe-33e786c9e09c"
                                    >
                                        Admin
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="e747d6ff-57fb-57df-8606-e59c7c118b5b"
                                >
                                    <span
                                        className="size-2 rounded-full bg-green-500"
                                        data-id="3ed95d72-cf1c-5798-aad8-9419557a2a48"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="6af30788-1545-593a-a968-8b3173c9295e"
                                    >
                                        Active
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="317f9e62-b46d-5a68-a861-7328d21a9585"
                                >
                                    2 min ago
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="957f4f6f-a775-58c3-8eaa-8faffdaec417"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="3f4b147a-5eba-5744-8bc5-8d98dc174f0f"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="ed6550fd-b8c8-59c2-a2ee-9c34818b72df"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="8071c5a7-cbb3-5d64-9744-ca043b5a7304"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="d21ffc09-2e5f-5274-b4f8-19c308837f5d"
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] bg-blue-50 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="11e07b16-e297-5c8e-bfa7-e743d7feb583"
                            >
                                <Checkbox
                                    checked={true}
                                    data-id="b0b91bfe-54a9-55d4-a2e2-d438137d70df"
                                />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="3fffb969-a816-581c-b64a-7d55df12e989"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="c74d9502-61bc-5efb-848b-f5f89644cbc0"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-purple-100 text-purple-700 text-xs leading-4"
                                            data-id="ccb4f762-a037-53a6-b882-85b163755de8"
                                        >
                                            SK
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="2d7d46a7-a65b-5606-8ab5-b538cb5e0d9f"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="cf094d1b-2556-55f1-b538-955d9a2f6e2c"
                                        >
                                            Sarah Kim
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="dac32344-1c1d-5a98-9754-1aab72c3b992"
                                        >
                                            sarah.kim@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="e701d71f-3e0d-58a1-8db0-b37b99dbce0d">
                                    <Badge
                                        className="font-medium rounded-full bg-purple-100 text-purple-700"
                                        data-id="09de8298-a8e5-5a75-bfe5-284c9e0a55f7"
                                    >
                                        Editor
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="286b685a-2d8f-5e23-a954-d62c79571d92"
                                >
                                    <span
                                        className="size-2 rounded-full bg-green-500"
                                        data-id="9b103b14-8450-59db-9c06-25d632cc230b"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="6a2dc9c4-ab5c-5e3a-b13a-c23bd0fd3d82"
                                    >
                                        Active
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="f7c00af2-b5a4-54ee-8ef5-d0269ad4a5e4"
                                >
                                    15 min ago
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="dc10d42d-560c-5302-8826-7990dde52753"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="d2d4aef8-12b3-585f-a9d0-f77445f5b930"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="6cec9ba6-22cb-5ec7-9c0b-cc73739f46d6"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="4bfea963-3d9c-5394-bd86-15580024e737"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="090ba483-ac69-5fd4-ae4f-ae321712c6a6"
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="a2f51353-4b1f-531f-b77b-094994f9271b"
                            >
                                <Checkbox data-id="1f509612-cc25-5d1a-8785-8af3ef32d571" />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="31fa4fcb-8c2e-5a34-aef3-968c04292927"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="b696729f-fc32-502e-a581-9ea608c76a50"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-amber-100 text-amber-700 text-xs leading-4"
                                            data-id="e4227dc4-6565-5690-a591-6eb0cad9f69a"
                                        >
                                            JR
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="e1b29523-2ff7-598e-9866-06d84eef69ac"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="05d88a5b-6cc4-5caa-9afb-b184c5bf817d"
                                        >
                                            Jamal Rodriguez
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="9a77b0c4-0c1c-52d3-838d-9ae994b5761b"
                                        >
                                            jamal.r@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="17c6e54e-2bc3-5ed4-815f-6287b0125b7a">
                                    <Badge
                                        className="font-medium rounded-full bg-zinc-100 text-zinc-700"
                                        data-id="92985825-1844-5dc2-b42d-ab075c23b5a1"
                                    >
                                        Viewer
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="51dd1273-353e-5b1a-b194-345016565439"
                                >
                                    <span
                                        className="size-2 rounded-full bg-zinc-400"
                                        data-id="a736f737-5789-5127-942a-b7293e839fa9"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="f86221e8-233c-5052-8b79-2dc063902d4a"
                                    >
                                        Inactive
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="af117a47-9229-5c18-b410-47cfeb0c9d67"
                                >
                                    3 days ago
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="c6eed72d-df35-5600-91a4-8e54979568c9"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="fc19b950-e8a1-51d5-aaac-56f42d44a1fc"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="38129039-2b02-5ea1-b417-01245114b1d3"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="79899974-a6e0-53a1-acb3-207d67170258"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="1755e57a-cb17-5dfe-bd68-6deda9e06746"
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="f1e46a0e-4c3e-5245-afa9-2faca5fe9981"
                            >
                                <Checkbox data-id="0c1da5c0-7613-560c-984c-0f14d7d1a6c0" />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="9338a01f-c3d3-51d0-819a-3eaa505c175d"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="d00ffda7-fe8e-5d8a-8b18-139b581fdd9b"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-rose-100 text-rose-700 text-xs leading-4"
                                            data-id="ada2a4b1-c777-5592-b924-5b9a557c576d"
                                        >
                                            EP
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="49a7a32c-7ecc-5670-8b70-02b5a2428c87"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="53a4edfe-552d-5888-910f-cd7c5a782e5e"
                                        >
                                            Emily Park
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="9135d157-5d6c-5bca-8826-e238eba220e6"
                                        >
                                            emily.park@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="d4c7d447-8d44-56ec-b35c-aed7d0b7893b">
                                    <Badge
                                        className="font-medium rounded-full bg-purple-100 text-purple-700"
                                        data-id="d28acc7b-8e8f-5062-88d5-f39c7fe215b9"
                                    >
                                        Editor
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="8d6b1124-82a7-5229-a4bc-1fbbe15e483b"
                                >
                                    <span
                                        className="size-2 rounded-full bg-yellow-500"
                                        data-id="b6747716-37d0-5fa5-9472-8d01b12a5aa8"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="94ab2512-68cb-5934-bb96-0506a2d0c579"
                                    >
                                        Pending
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="40af7a4d-a8c1-501c-b0bb-569249750e2b"
                                >
                                    —
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="061651f5-27f9-5cb5-a853-1087f78b5b61"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="d03c71df-caa5-59ac-a4d0-2ebfb5709b51"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="262665a1-21fc-50d4-b12d-2386250e09ff"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="3cf9b0b0-55f8-5613-a2e5-bebc358ae5a9"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="541f848d-5e3c-518e-a61c-6dadf3a7f00c"
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="84e5495e-d1e4-55a1-b136-27a1893ed106"
                            >
                                <Checkbox data-id="06a0f410-92c0-53de-af8d-a2caa506cb32" />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="3d41a63b-1df4-50bd-9545-47bd9616c492"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="518d93fb-1e79-52a8-9848-3329ca772a07"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-teal-100 text-teal-700 text-xs leading-4"
                                            data-id="fd19bb43-56fd-5f0d-897e-68c82fd32bb8"
                                        >
                                            DN
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="d819f08b-6991-5eca-8e14-3cc87500dfa2"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="aad71b86-6892-55ae-a234-35d05c9a5368"
                                        >
                                            David Nguyen
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="25679656-96dd-5829-b7cd-c3016b9e3c28"
                                        >
                                            d.nguyen@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="2c20d54e-28e9-55a2-bd92-a2fd8e2507f4">
                                    <Badge
                                        className="font-medium rounded-full bg-blue-100 text-blue-700"
                                        data-id="09072cc4-2801-51d9-afdf-0b84443f3b35"
                                    >
                                        Admin
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="269b4b3b-f776-5335-80fd-ae19bcecaf25"
                                >
                                    <span
                                        className="size-2 rounded-full bg-green-500"
                                        data-id="972fcd60-1927-566a-b721-fdc8942c1ed6"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="f217af1e-91e7-5c67-8ae4-b2eb16ab5c41"
                                    >
                                        Active
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="d4c543a3-4b2f-586d-a7e5-032b5b51a5ed"
                                >
                                    1 hour ago
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="86fbe46a-3ecc-5024-9a57-e0024c32cdc1"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="ef8bcccc-13d9-5877-be39-8f5dab5f8000"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="b31306c2-6872-5f30-b038-70d3d0ce48a3"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="0916c236-4c86-5bde-a6b9-e30b637a479b"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="2a46bb08-05f3-5097-856d-99a1d7894af9"
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="a8ec9c94-e118-5854-a951-ab7e6f7c25bd"
                            >
                                <Checkbox data-id="ab44399d-9133-500b-ad90-edb04ca29b51" />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="d981b7e2-22f5-55c5-9a2c-d1ca3972fbcf"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="b3c33cce-0c8c-5afa-a8ec-61fbd6dcd731"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-indigo-100 text-indigo-700 text-xs leading-4"
                                            data-id="df26597f-6a48-5256-8906-2f198e4dd7ba"
                                        >
                                            LT
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="08f1f865-4a19-5a66-b0c4-7b6cbf61d666"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="1ae520d3-6e82-5c85-85f8-6b24ff424b9a"
                                        >
                                            Lara Thompson
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="050e30c3-1aad-510b-8b9d-0b86e1bbeb65"
                                        >
                                            lara.t@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="13673a82-37b5-5447-afc4-cbd5a9f660b7">
                                    <Badge
                                        className="font-medium rounded-full bg-zinc-100 text-zinc-700"
                                        data-id="192d58ec-a366-5fc6-847e-ba92c9e1862e"
                                    >
                                        Viewer
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="eeb38c5b-ea49-596a-9179-1c1bdc87d18c"
                                >
                                    <span
                                        className="size-2 rounded-full bg-green-500"
                                        data-id="48c64785-a3f7-59b6-b198-3a2d004c36b5"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="0d27d247-f374-56b1-b450-8920d06f72d1"
                                    >
                                        Active
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="dd297865-86ec-5e3b-9f9a-9a776959c8a8"
                                >
                                    28 min ago
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="2668ef9b-e074-555c-aae4-d490d40f8592"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="baf67a7c-db90-5457-9f28-14364ffb48fa"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="fb12485a-bef7-5933-b26d-e979513717d4"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="7b7a3563-c288-52aa-97f1-2de846f89a42"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="26a30947-f787-5fc3-9e41-648985cb1496"
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-4 py-3 items-center"
                                data-id="00b91032-28c8-5e0a-babb-28d513916c7d"
                            >
                                <Checkbox data-id="066e630a-dd85-5ae0-9842-4204d3237e07" />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="d9e247cb-bd00-5f41-abc5-3ebe95fa43be"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="c55d8e4f-e201-5950-ac24-f75daded7225"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-orange-100 text-orange-700 text-xs leading-4"
                                            data-id="a1d33fb6-fb26-50b4-bdae-4c68ba863316"
                                        >
                                            MO
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="20033511-9483-5838-9d21-7a3428292763"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="08d6a49c-1b14-52c7-bdff-888936188269"
                                        >
                                            Marcus Owens
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="26f59355-50c5-52ed-acd9-9e52ba1e6b25"
                                        >
                                            marcus.o@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="c75e659a-f15f-53bc-bb1d-13774d4c93fd">
                                    <Badge
                                        className="font-medium rounded-full bg-purple-100 text-purple-700"
                                        data-id="88576917-3fc7-5f50-b930-8c08f4936bb0"
                                    >
                                        Editor
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="ad9a9311-c189-5b01-bc22-35b25c6f7598"
                                >
                                    <span
                                        className="size-2 rounded-full bg-zinc-400"
                                        data-id="3e20db71-61b7-5ddf-af6b-6af830dee250"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="42fc2530-31ca-5371-a30a-3ecbe427a794"
                                    >
                                        Inactive
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="61dad855-1556-5674-8a28-6af58af5a2a2"
                                >
                                    2 weeks ago
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="ccf3929a-f8cb-561a-af57-d3627563f1a3"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="b45131d6-5ac6-58d4-9b91-47bf666b15d5"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="7ac42c66-dff1-5b0b-8af6-b7428817c112"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="928d4168-dd11-5817-917a-d70b3880f136"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="77111dfa-5a1e-5212-a491-1e2e79eafad5"
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] px-4 py-3 items-center"
                                data-id="0d05ac63-3966-5cb3-b8ec-5ecf18933912"
                            >
                                <Checkbox data-id="4f06f171-6ac4-51cb-a6ee-4aee187bd1e6" />
                                <div
                                    className="flex items-center gap-3"
                                    data-id="6e07bcc9-22db-5c22-8a22-c880349bc718"
                                >
                                    <Avatar
                                        className="size-9"
                                        data-id="b14e57db-b7a1-5c26-ab69-8adba8140d1d"
                                    >
                                        <AvatarFallback
                                            className="font-semibold bg-pink-100 text-pink-700 text-xs leading-4"
                                            data-id="0edfdff7-18f4-51de-aa70-2c05dc82e13f"
                                        >
                                            RC
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className="flex flex-col"
                                        data-id="0e23ac89-c8bb-5240-87d7-2fd58295401e"
                                    >
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="9603806e-33f4-5ec0-b338-5c76fe491295"
                                        >
                                            Riya Chowdhury
                                        </span>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="e28cb4fc-f419-570d-b40c-342023d2721b"
                                        >
                                            riya.c@company.com
                                        </span>
                                    </div>
                                </div>
                                <div data-id="8e49b4a8-ce50-5859-bc28-67f1c6c42d98">
                                    <Badge
                                        className="font-medium rounded-full bg-zinc-100 text-zinc-700"
                                        data-id="d25ca052-3535-5113-8722-fd51ec61d4dd"
                                    >
                                        Viewer
                                    </Badge>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-id="63e9a10c-c690-5871-a339-241d206323da"
                                >
                                    <span
                                        className="size-2 rounded-full bg-yellow-500"
                                        data-id="f1f179d2-c5f3-5a07-860d-91b9ba37e0d8"
                                    />
                                    <span
                                        className="text-sm leading-5"
                                        data-id="b4a70b00-2c9c-58bc-bb1f-d153cf42cce8"
                                    >
                                        Pending
                                    </span>
                                </div>
                                <span
                                    className="text-[#71717b] text-xs leading-4"
                                    data-id="41c58cf4-e3cf-58dd-894a-acd3d49d587b"
                                >
                                    —
                                </span>
                                <div
                                    className="flex justify-end items-center gap-1"
                                    data-id="df4f24c3-f245-5522-9dc7-8a6ca99dba1f"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="8d12e4f6-ecb3-5ec3-a28e-9f24c87a9167"
                                    >
                                        <Pencil
                                            className="size-4"
                                            data-id="f1ae262e-e14c-5854-9e65-ff08ca8492d0"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-8"
                                        data-id="024ae571-9271-5974-a633-af6dc5cb47f0"
                                    >
                                        <Trash2
                                            className="size-4"
                                            data-id="7df554b0-b445-56c3-abeb-8766a211720e"
                                        />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        <div
                            className="flex justify-between items-center"
                            data-id="e7f00b88-4358-5aaf-aaba-7b4ca05fb39e"
                        >
                            <span
                                className="text-[#71717b] text-sm leading-5"
                                data-id="c8512f0f-8467-5fb4-9bca-121946285fad"
                            >
                                Showing 1–8 of 24 users
                            </span>
                            <div
                                className="flex items-center gap-1"
                                data-id="3c335911-77ff-5f54-b504-04ccb4e1ded0"
                            >
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="size-8"
                                    data-id="53eee33b-fc2a-5fe1-bbe6-a2c6af4d28ad"
                                >
                                    <ChevronLeft
                                        className="size-4"
                                        data-id="3e9af02b-1389-5186-bc43-8f59d57612a6"
                                    />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="size-8 bg-[#2b7fff] text-blue-50 border-[#2b7fff] border-0 border-solid"
                                    data-id="0c18b741-deef-5dc1-84f6-4ed873e91cab"
                                >
                                    1
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="size-8"
                                    data-id="7fa744c4-1951-562c-8bdd-b49a66d7d528"
                                >
                                    2
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="size-8"
                                    data-id="95c96610-1a22-51a7-8ea0-72d09e3fb075"
                                >
                                    3
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="size-8"
                                    data-id="41bc78e0-8cc2-5866-bba6-847dad21de60"
                                >
                                    <ChevronRight
                                        className="size-4"
                                        data-id="6d3f428d-f6ca-5dc6-a047-beb5a51589d9"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-zinc-950/40 flex absolute inset-0 justify-center items-center"
                        data-id="6cf3801c-d05e-5632-8574-5a5daa703779"
                    >
                        <Card
                            className="shadow-2xl p-6 gap-4 w-120"
                            data-id="7cae6e58-e430-5f47-92b7-c52ba8460d8c"
                        >
                            <CardHeader
                                className="p-0 flex-row justify-between items-start gap-1"
                                data-id="1ac98367-a841-57dd-839e-d58782ade491"
                            >
                                <div
                                    className="flex flex-col gap-1"
                                    data-id="670ab3a8-46fd-5973-b602-ee2022329d89"
                                >
                                    <CardTitle
                                        className="font-semibold text-lg leading-7"
                                        data-id="eebf1709-1c96-58e3-9710-2ef1c0092440"
                                    >
                                        Invite New User
                                    </CardTitle>
                                    <CardDescription
                                        className="text-sm leading-5"
                                        data-id="066f866b-e095-5dd2-9ec9-3bbdbe9e2897"
                                    >
                                        Send an invitation to join your workspace.
                                    </CardDescription>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="size-8 -mr-1 -mt-1"
                                    data-id="d0a6949d-30cb-5cd1-a59c-4b89d9fef53b"
                                >
                                    <X
                                        className="size-4"
                                        data-id="af00d044-48e6-5c95-803f-2de611492441"
                                    />
                                </Button>
                            </CardHeader>
                            <CardContent
                                className="flex p-0 flex-col gap-4"
                                data-id="259584d8-ea60-5632-8fd4-089b60783882"
                            >
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="a2063b98-ee00-5c9f-8de2-81cce81405a6"
                                >
                                    <Label
                                        className="font-medium text-sm leading-5"
                                        data-id="427787db-1c00-5199-8736-fb311d59836e"
                                    >
                                        Email address
                                    </Label>
                                    <Input
                                        placeholder="Enter email address"
                                        data-id="6f20177d-4fc7-5eb0-a380-caa518a80866"
                                    />
                                </div>
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="38770375-4b2b-5554-8298-94be4e37891c"
                                >
                                    <Label
                                        className="font-medium text-sm leading-5"
                                        data-id="63d72725-dd3e-5870-9d08-a2e21b76690c"
                                    >
                                        Role
                                    </Label>
                                    <Button
                                        variant="outline"
                                        className="font-normal justify-between"
                                        data-id="0cc7ac23-552c-58bf-a401-9d428f974a43"
                                    >
                                        Editor
                                        <ChevronDown
                                            className="size-4 text-[#71717b]"
                                            data-id="739eda31-d77d-5ccf-8bee-73904b72c506"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="29602c79-a19f-50dc-9f02-342475088be4"
                                >
                                    <Label
                                        className="font-medium text-sm leading-5"
                                        data-id="122d7795-1478-5d5c-b6a5-0bf8212ae344"
                                    >
                                        Message
                                        <span
                                            className="font-normal text-[#71717b]"
                                            data-id="2560f8e5-44ef-520d-8642-df3bbd3327bd"
                                        >
                                            (optional)
                                        </span>
                                    </Label>
                                    <Textarea
                                        placeholder="Add a personal note to your invitation…"
                                        rows={3}
                                        data-id="d6d75c81-3c26-56dd-8682-137bebd04522"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter
                                className="p-0 justify-end gap-2"
                                data-id="328b2480-bbaf-50b1-879b-2bc5935df4f5"
                            >
                                <Button
                                    variant="outline"
                                    data-id="91c6fd93-ae1a-531a-be6a-17fc2a8209ef"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className="font-semibold bg-[#2b7fff] text-blue-50"
                                    data-id="5484380e-5d52-52d6-8a0e-01751a0954c3"
                                >
                                    Send Invite
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div
                        className="shadow-lg min-w-[300px] rounded-lg bg-white border-green-200 border-1 border-solid flex absolute right-6 bottom-6 p-4 items-center gap-3"
                        data-id="60310faa-88f6-53f5-9499-42f04429f119"
                    >
                        <div
                            className="size-8 rounded-full bg-green-100 flex justify-center items-center"
                            data-id="77a728c5-a1a8-5c87-80d5-ab617353a4d8"
                        >
                            <Check
                                className="size-4 text-green-600"
                                data-id="97e7c8be-3ee7-5059-b769-6db239453a2c"
                            />
                        </div>
                        <div
                            className="flex flex-col"
                            data-id="6b1ee0b5-d3b3-5ba2-91cd-835899a608a0"
                        >
                            <span
                                className="font-medium text-sm leading-5"
                                data-id="29fc8451-32d2-5603-9924-5ae4d5b7552c"
                            >
                                Success
                            </span>
                            <span
                                className="text-[#71717b] text-xs leading-4"
                                data-id="2830312d-9bfd-5baa-943d-55b412db435e"
                            >
                                User invitation sent successfully
                            </span>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-7 ml-auto"
                            data-id="412705c6-1cf8-5c61-aa0d-d8962cb371a3"
                        >
                            <X
                                className="size-3"
                                data-id="af37bb1e-d68c-5dd3-bb8a-22d08a08f6f2"
                            />
                        </Button>
                    </div>
                </main>
            </div>
        </div>
    );
}
