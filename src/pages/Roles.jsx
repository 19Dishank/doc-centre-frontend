import {
    Code,
    Eye,
    FileText,
    Lock,
    MoreHorizontal,
    Pencil,
    Plus,
    Save,
    Settings,
    Shield,
    Trash2,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";

export default function Roles() {
    return (
        <div>
            <div
                className="flex flex-col flex-1"
                data-id="86d488ea-6039-59a1-a884-be046eddbdf5"
            >
                <main
                    className="bg-zinc-100 p-8 flex-1 overflow-hidden"
                    data-id="09f92bd9-929e-58ee-84f7-26a70fa71595"
                >
                    <div
                        className="flex mb-6 flex-col gap-1"
                        data-id="00ddc256-df4d-5ef7-9dc1-0f0e260c4df2"
                    >
                        <h1
                            className="font-semibold text-2xl leading-8"
                            data-id="470d5f6f-c723-54f5-9733-4cfee18e7597"
                        >{`Roles & Permissions`}</h1>
                        <p
                            className="text-[#71717b] text-sm leading-5"
                            data-id="341c1023-6fd1-5b64-930a-f0d299c73ae9"
                        >
                            Define what each role can access and perform within the system.
                        </p>
                    </div>
                    <div
                        className="flex gap-6"
                        data-id="daa9390c-7f11-5edf-a445-6061e29a028c"
                    >
                        <Card
                            className="shrink-0 p-0 gap-0 w-70"
                            data-id="d98bb86a-5694-51e2-9c0b-0a73a643046e"
                        >
                            <div
                                className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-4 justify-between items-center"
                                data-id="c131a0c3-919b-5a5d-990c-9dab74808a8f"
                            >
                                <span
                                    className="font-semibold text-sm leading-5"
                                    data-id="a94a5908-fe6b-5aaa-a22e-9c9c546622ad"
                                >
                                    Roles
                                </span>
                                <Button
                                    size="sm"
                                    className="bg-[#2b7fff] text-blue-50 text-xs leading-4 px-2 h-7"
                                    data-id="c0824370-beef-5946-a148-3d6e8bf676e6"
                                >
                                    <Plus
                                        className="size-3"
                                        data-id="524db887-cbff-59cd-993d-eacec4a50a7a"
                                    />
                                    New Role
                                </Button>
                            </div>
                            <div
                                className="flex flex-col"
                                data-id="0b8e0330-7d00-52c5-b22a-d2883337b2e3"
                            >
                                <div
                                    className="cursor-pointer bg-blue-50 border-[#2b7fff] border-t-0 border-r-0 border-b-0 border-l-2 border-solid flex p-4 items-center gap-3"
                                    data-id="9e228e55-eeb6-52fc-98a4-72b8a3581b46"
                                >
                                    <div
                                        className="size-8 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                                        data-id="6094009b-7cb6-564b-ab80-1a8682e44280"
                                    >
                                        <Shield
                                            className="size-4 text-[#2b7fff]"
                                            data-id="a87ac26c-5696-544b-9265-713866aab4c3"
                                        />
                                    </div>
                                    <div
                                        className="flex-1"
                                        data-id="19789f71-c623-56f8-b77f-8e44ec184a26"
                                    >
                                        <div
                                            className="font-medium text-sm leading-5"
                                            data-id="00ff3b48-8dce-52f0-ac48-d24dd7b5ed95"
                                        >
                                            Admin
                                        </div>
                                        <div
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="bd974838-6d0d-5efa-a4c3-34a468a81637"
                                        >
                                            5 members
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="6470f8b4-bbe8-583b-a718-7f46f25e5d93"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="cdbef92e-deed-5df7-8cc9-115979fd2035"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="border-transparent border-t-border cursor-pointer border-black/1 border-t-1 border-r-0 border-b-0 border-l-2 border-solid flex p-4 items-center gap-3"
                                    data-id="0b8a1f09-284e-597e-ae4e-9a50faaa0d6a"
                                >
                                    <div
                                        className="size-8 rounded-lg bg-purple-100 flex justify-center items-center"
                                        data-id="25888a35-9af5-5902-a7e8-c30fbc7ba776"
                                    >
                                        <Pencil
                                            className="size-4 text-purple-600"
                                            data-id="ec44bf5c-d295-5d5f-a284-51df8afe5c10"
                                        />
                                    </div>
                                    <div
                                        className="flex-1"
                                        data-id="69adc2c1-b182-5f6c-a6d4-542166ecbab7"
                                    >
                                        <div
                                            className="font-medium text-sm leading-5"
                                            data-id="9d8f1dfc-520c-57c8-ae90-66b93687ddbd"
                                        >
                                            Editor
                                        </div>
                                        <div
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="c36d6392-939f-5d4e-9dd0-8040e602d93b"
                                        >
                                            8 members
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="f8c954e1-35fa-568b-bea9-73adf5d4dfcc"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="fde3ed43-7a06-5844-bf9d-084e9e6d7332"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="border-transparent border-t-border cursor-pointer border-black/1 border-t-1 border-r-0 border-b-0 border-l-2 border-solid flex p-4 items-center gap-3"
                                    data-id="1fbc5719-ad95-5e4c-a8da-f2277b0adbe8"
                                >
                                    <div
                                        className="size-8 rounded-lg bg-zinc-100 flex justify-center items-center"
                                        data-id="15a129ee-3a0a-5627-b1c6-f7a87108ffe7"
                                    >
                                        <Eye
                                            className="size-4 text-[#71717b]"
                                            data-id="671e76b1-209b-578a-86fb-706144f2df72"
                                        />
                                    </div>
                                    <div
                                        className="flex-1"
                                        data-id="d411f97c-9f87-55c7-9d7a-4c57042a014f"
                                    >
                                        <div
                                            className="font-medium text-sm leading-5"
                                            data-id="052481f3-0dff-5282-a751-d91a8bcd0afb"
                                        >
                                            Viewer
                                        </div>
                                        <div
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="bb2872ef-0ba9-566b-bc25-05dde248b744"
                                        >
                                            14 members
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="40608a1a-e149-587f-b2ac-de46920339da"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="1601d8db-4c51-54a4-88da-7ad442c267ed"
                                        />
                                    </Button>
                                </div>
                                <div
                                    className="border-transparent border-t-border cursor-pointer border-black/1 border-t-1 border-r-0 border-b-0 border-l-2 border-solid flex p-4 items-center gap-3"
                                    data-id="cab75e5d-c878-5b3a-9a9d-c0a3519d4635"
                                >
                                    <div
                                        className="size-8 rounded-lg bg-teal-100 flex justify-center items-center"
                                        data-id="ac0c60f5-e4f1-5f59-b7e4-f2d00ab56a79"
                                    >
                                        <Code
                                            className="size-4 text-teal-600"
                                            data-id="b4d10a4d-2578-544b-97ed-5db1f7ed7d4d"
                                        />
                                    </div>
                                    <div
                                        className="flex-1"
                                        data-id="eeffd373-59f5-5ab2-81ed-06c4ff19810f"
                                    >
                                        <div
                                            className="font-medium text-sm leading-5"
                                            data-id="fa4003af-58bd-59a6-9c4a-2560ac0f0f9b"
                                        >
                                            API User
                                        </div>
                                        <div
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="620533da-1627-5a00-a5bb-b32cd4adbbc8"
                                        >
                                            3 members
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="8441379f-f073-58e3-9fe3-1aa700810d49"
                                    >
                                        <MoreHorizontal
                                            className="size-4"
                                            data-id="edec7646-08d5-5dc0-9b21-f8844e362f98"
                                        />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        <Card
                            className="p-6 flex-1 gap-4"
                            data-id="3b34b63f-3ebf-5780-a26b-319f825daec4"
                        >
                            <CardHeader
                                className="p-0 gap-2"
                                data-id="d61090ed-f320-569d-86ce-0c53fb0095bb"
                            >
                                <div
                                    className="flex justify-between items-center"
                                    data-id="f4034a02-79cc-5d18-8d4c-9442029d1203"
                                >
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="11a5cfd4-807c-597f-b48a-67f71d1df918"
                                    >
                                        <div
                                            className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                                            data-id="5d3032b7-3d9c-588d-87d2-9f89f1e96ae9"
                                        >
                                            <Shield
                                                className="size-5 text-[#2b7fff]"
                                                data-id="ecf09717-ab6b-5af7-9ccd-90b95819ff5b"
                                            />
                                        </div>
                                        <span
                                            className="font-semibold text-lg leading-7"
                                            data-id="59f74da2-8bb9-5ac7-aed5-0505448670d4"
                                        >
                                            Admin
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="512e5d15-3d7c-5bc2-90c6-4e9140cb42a0"
                                    >
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-[#2b7fff] border-[#2b7fff] border-0 border-solid h-8"
                                            data-id="6cc16290-23d8-584d-ae93-39b2ffdd5a21"
                                        >
                                            <Pencil
                                                className="size-3"
                                                data-id="f03fd9c7-4876-5021-b23c-39956bfd5181"
                                            />
                                            Edit Role
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-[#e7000b] border-[#e7000b] border-0 border-solid h-8"
                                            data-id="d1bb5851-0dff-52cf-8982-2c5d83cb5777"
                                        >
                                            <Trash2
                                                className="size-3"
                                                data-id="00917d01-b92d-5a25-8b48-58352c9733b1"
                                            />
                                            Delete Role
                                        </Button>
                                    </div>
                                </div>
                                <p
                                    className="italic text-[#71717b] text-sm leading-5"
                                    data-id="d03d7cfa-0474-5d03-959d-6ca57ee73b2b"
                                >
                                    Full access to all system features and settings.
                                </p>
                            </CardHeader>
                            <CardContent
                                className="flex p-0 flex-col gap-4"
                                data-id="1ef2c8ab-b451-5ca1-90ad-53260c094e49"
                            >
                                <div
                                    className="flex justify-between items-center"
                                    data-id="8ccb114a-999a-53a8-a3b7-8d36a9bd43f0"
                                >
                                    <span
                                        className="font-semibold text-base leading-6"
                                        data-id="ba7fbe0a-fed3-57fb-94cf-d688ce5fb8c9"
                                    >
                                        Permissions
                                    </span>
                                    <span
                                        className="text-[#71717b] text-xs leading-4"
                                        data-id="faf630d7-a557-5131-b836-21b6557a8627"
                                    >
                                        16 of 16 enabled
                                    </span>
                                </div>
                                <div
                                    className="grid grid-cols-2 gap-3"
                                    data-id="25b47a7a-1d9e-58b8-82a0-61bfddb31a3c"
                                >
                                    <div
                                        className="rounded-lg border-zinc-200 border-1 border-solid flex p-4 flex-col gap-2"
                                        data-id="146c2b63-5c84-5e7a-8564-27a64a3a5f2a"
                                    >
                                        <div
                                            className="flex mb-1 items-center gap-2"
                                            data-id="e60c0a0e-c171-5c32-bf9f-e7e049b01254"
                                        >
                                            <FileText
                                                className="size-4 text-[#2b7fff]"
                                                data-id="1f50e118-625c-51f7-b082-2595c8794f02"
                                            />
                                            <span
                                                className="font-semibold text-sm leading-5"
                                                data-id="2c865f61-818b-5208-bdfa-8b63130116ab"
                                            >
                                                Files
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="e2d6af77-82d0-58ff-a881-96677e104662"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="f1"
                                                data-id="24f1a221-b8a8-5d48-997c-a583ed120bd7"
                                            />
                                            <label
                                                htmlFor="f1"
                                                className="text-sm leading-5"
                                                data-id="506d68fe-4e91-5dfe-a515-60775d4029f0"
                                            >
                                                View Files
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="f78ba727-e227-5898-8e21-4c4b6e21e6e2"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="f2"
                                                data-id="9dcf2467-9d18-517e-ae7c-6186f6c64e7e"
                                            />
                                            <label
                                                htmlFor="f2"
                                                className="text-sm leading-5"
                                                data-id="81e992b3-ce2d-5909-a9eb-c8ff0c007073"
                                            >
                                                Upload Files
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="8b02a7ab-93dc-556b-84c6-8bd5c8df7a66"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="f3"
                                                data-id="8e1a30bc-87d5-50b4-b5b8-07e0513387b9"
                                            />
                                            <label
                                                htmlFor="f3"
                                                className="text-sm leading-5"
                                                data-id="b4fc5a11-3041-51da-b34e-cfd18d0ce53c"
                                            >
                                                Delete Files
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="cd149c48-6d83-5ef6-8e02-6dfb975aa7d0"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="f4"
                                                data-id="c31ad836-19c3-5388-b3cf-4f68598c3dfd"
                                            />
                                            <label
                                                htmlFor="f4"
                                                className="text-sm leading-5"
                                                data-id="0fc6f77d-1631-5f5b-8e0d-728129853233"
                                            >
                                                Rename Files
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="6ddccc9d-7859-5f0c-8a63-9d01eed03b71"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="f5"
                                                data-id="f4582f99-b612-5b2a-b8f1-384e719267f0"
                                            />
                                            <label
                                                htmlFor="f5"
                                                className="text-sm leading-5"
                                                data-id="24bd202f-c89e-541d-88be-17986abf46c5"
                                            >
                                                Download Files
                                            </label>
                                        </div>
                                    </div>
                                    <div
                                        className="rounded-lg border-zinc-200 border-1 border-solid flex p-4 flex-col gap-2"
                                        data-id="37a3212c-9bca-542d-a3f0-224463eeffb5"
                                    >
                                        <div
                                            className="flex mb-1 items-center gap-2"
                                            data-id="7942a09d-bda7-5c57-8b1b-7dbf7182af10"
                                        >
                                            <Users
                                                className="size-4 text-[#2b7fff]"
                                                data-id="80768bc8-d068-570e-a214-6af0833d39d8"
                                            />
                                            <span
                                                className="font-semibold text-sm leading-5"
                                                data-id="3d1df36d-eb8c-5ffa-a827-4befad5b09c7"
                                            >
                                                Users
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="221d9413-1ebe-57ed-980f-7fcc3c2218e2"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="u1"
                                                data-id="8dd2893f-af30-5713-93bd-8954822d3ace"
                                            />
                                            <label
                                                htmlFor="u1"
                                                className="text-sm leading-5"
                                                data-id="cc317e0c-d158-5d3b-a4c5-434ff7f18a32"
                                            >
                                                View Users
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="84594809-d33e-559d-ac7f-d8878dddf3c7"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="u2"
                                                data-id="d23f7f31-5e96-5c75-b7f0-abe68826cd11"
                                            />
                                            <label
                                                htmlFor="u2"
                                                className="text-sm leading-5"
                                                data-id="f23dba12-e58f-53de-9a6d-551aa481641c"
                                            >
                                                Invite Users
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="46eec183-9e3d-5ba5-8066-cbb6324697c7"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="u3"
                                                data-id="b6bd7c42-8b55-532e-a32f-8782e1fd0090"
                                            />
                                            <label
                                                htmlFor="u3"
                                                className="text-sm leading-5"
                                                data-id="c5f89fa8-ed18-5155-9490-7645eaa0e700"
                                            >
                                                Remove Users
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="6efb90a6-60c1-5f57-ae50-c6f6cddc5905"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="u4"
                                                data-id="21c7e265-1e27-5961-94c0-54f6a396d3f0"
                                            />
                                            <label
                                                htmlFor="u4"
                                                className="text-sm leading-5"
                                                data-id="7e29a31f-8e06-5e38-8646-331b1f3adaa1"
                                            >
                                                Assign Roles
                                            </label>
                                        </div>
                                    </div>
                                    <div
                                        className="rounded-lg border-zinc-200 border-1 border-solid flex p-4 flex-col gap-2"
                                        data-id="3638660f-4873-55a3-9f95-0d5efb0a6a7e"
                                    >
                                        <div
                                            className="flex mb-1 items-center gap-2"
                                            data-id="32340f05-0238-5ea5-ac59-e52981254b87"
                                        >
                                            <Settings
                                                className="size-4 text-[#71717b]"
                                                data-id="8f69aa13-9019-5aa3-bafd-3707cc47ca48"
                                            />
                                            <Skeleton
                                                className="w-16 h-4"
                                                data-id="5bad9bb0-d4ff-5366-a603-9b24f245d8e4"
                                            />
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="949d8c81-7531-5594-9fe5-97f045b02cad"
                                        >
                                            <Skeleton
                                                className="size-4 rounded-sm"
                                                data-id="fd972580-5c06-57a8-a6b0-57443eefe564"
                                            />
                                            <Skeleton
                                                className="w-28 h-4"
                                                data-id="67c5ebd4-b735-543e-9e35-dfccaa4efa2f"
                                            />
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="2acab441-13d7-51aa-9705-ae58f52187dd"
                                        >
                                            <Skeleton
                                                className="size-4 rounded-sm"
                                                data-id="fd0c637d-4d21-5ab2-b6b7-1eebdefd17ab"
                                            />
                                            <Skeleton
                                                className="w-36 h-4"
                                                data-id="9cb015cf-275d-5a1d-bff4-99831c5bb285"
                                            />
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="2386d835-34fe-5ed6-847c-f6a73b5a5eac"
                                        >
                                            <Skeleton
                                                className="size-4 rounded-sm"
                                                data-id="f0f39910-9f8c-52b3-ae0f-a8f1817f2a08"
                                            />
                                            <Skeleton
                                                className="w-32 h-4"
                                                data-id="dbce0d61-3209-5d64-91a9-1398ccc3b000"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="rounded-lg border-zinc-200 border-1 border-solid flex p-4 flex-col gap-2"
                                        data-id="381cc8b9-3629-51c7-a5a2-05fe164e2596"
                                    >
                                        <div
                                            className="flex mb-1 items-center gap-2"
                                            data-id="67a61a84-57fa-5fc5-86ba-9d46d0821eb8"
                                        >
                                            <Lock
                                                className="size-4 text-[#2b7fff]"
                                                data-id="ca3a8ee4-761e-56b2-97f0-881e0f545346"
                                            />
                                            <span
                                                className="font-semibold text-sm leading-5"
                                                data-id="c69f8b7c-8b09-528a-9d6c-2d9cf9563405"
                                            >
                                                Roles
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="7891fd64-d145-5b0b-add9-96f33039d4bf"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="r1"
                                                data-id="ae7ce59f-7957-52a3-8618-4e3dd5cad932"
                                            />
                                            <label
                                                htmlFor="r1"
                                                className="text-sm leading-5"
                                                data-id="3a967cb7-7c2a-55ef-9fe9-938b469778ba"
                                            >
                                                View Roles
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="18182c54-efd5-5e12-ac57-3d7176159a9d"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="r2"
                                                data-id="ec73b35c-e232-5620-9e25-29b0ccb17a7e"
                                            />
                                            <label
                                                htmlFor="r2"
                                                className="text-sm leading-5"
                                                data-id="f58f7d95-806c-5b86-9da0-475bc53adbfd"
                                            >
                                                Create Roles
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="b8618845-daaa-5cb3-b7cb-40fc7735f007"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="r3"
                                                data-id="766c5e23-980b-5bf9-a3d9-f6b3b3fd9682"
                                            />
                                            <label
                                                htmlFor="r3"
                                                className="text-sm leading-5"
                                                data-id="f1b9414c-517f-5156-a208-69636088367f"
                                            >
                                                Edit Roles
                                            </label>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="72ee78b1-84ae-5b98-b518-6e624d7fee6a"
                                        >
                                            <Checkbox
                                                defaultChecked={true}
                                                id="r4"
                                                data-id="26a09ba4-b285-5d6a-9a9c-866163d19f13"
                                            />
                                            <label
                                                htmlFor="r4"
                                                className="text-sm leading-5"
                                                data-id="01d6d682-d6ec-563b-b650-084a3f174327"
                                            >
                                                Delete Roles
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter
                                className="p-0 gap-2"
                                data-id="0d946bdc-4900-59ae-8ebe-a70072f5ea80"
                            >
                                <Button
                                    className="bg-[#2b7fff] text-blue-50 w-full"
                                    data-id="38493a63-ee89-5cfd-9fb7-1e65a472adb2"
                                >
                                    <Save
                                        className="size-4"
                                        data-id="fc7fa973-8af3-5d81-99e6-0fc662b85e31"
                                    />
                                    Save Changes
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}
