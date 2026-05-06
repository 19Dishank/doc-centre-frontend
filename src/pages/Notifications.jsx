import {
    Bell,
    CheckCircle2,
    Clock,
    Mail,
    Save,
} from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function Notifications() {
    return (
        <div>
            <div
                className="flex w-full"
                style={{ minHeight: "956px" }}
                data-id="36f6bd84-bc37-568b-a329-8fbc4c047a35"
            >
                <div
                    className="min-w-0 flex flex-col flex-1"
                    data-id="28dd816c-10c0-5c0f-8cb5-c2aba96e7173"
                >
                    <main
                        className="bg-zinc-100/60 p-8 flex-1 overflow-auto"
                        data-id="47ebd078-cc90-5162-ad15-42e7069d66af"
                    >
                        <div
                            className="max-w-4xl flex flex-col gap-6"
                            data-id="82a007a7-cb37-5e67-9c3e-3918734a9663"
                        >
                            <div
                                className="flex flex-col gap-1"
                                data-id="1a66dab3-a64d-5939-9797-e203fce2f1f6"
                            >
                                <h1
                                    className="font-semibold text-2xl leading-8 tracking-tight"
                                    data-id="b501c058-6eae-5d0a-828d-a000b9f808e3"
                                >
                                    Notifications
                                </h1>
                                <p
                                    className="text-[#71717b] text-sm leading-5"
                                    data-id="b4c82c99-4994-5c9d-b07b-ddbb263aa089"
                                >
                                    Control how and when you receive alerts and updates.
                                </p>
                            </div>
                            <Card
                                className="shadow-sm p-6 gap-4"
                                data-id="0faab9ed-b9d2-5b35-b699-9199fd6c7509"
                            >
                                <CardHeader
                                    className="p-0 gap-1"
                                    data-id="e1a3ba90-e467-59ae-8989-43509586db67"
                                >
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="b13a8a49-f6d5-50f6-98e0-1f6b38307812"
                                    >
                                        <Mail
                                            className="size-4 text-[#2b7fff]"
                                            data-id="53fd9aee-5769-5318-962e-d06650702ae5"
                                        />
                                        <CardTitle
                                            className="text-base leading-6"
                                            data-id="87bed9f1-68c4-59d6-a3cc-1b33474af37d"
                                        >
                                            Email Notifications
                                        </CardTitle>
                                    </div>
                                    <CardDescription
                                        className="text-xs leading-4"
                                        data-id="76def10c-3289-52c0-9ebb-f4510c6b46a9"
                                    >
                                        Manage which emails are sent to your inbox.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent
                                    className="flex p-0 flex-col gap-0"
                                    data-id="e5dbc128-a171-5588-8328-cb5409fb836f"
                                >
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="15be8d26-4740-5682-895c-617a4787d73e"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="50ba9a20-1fa0-56c7-b0ae-0afee931a077"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="759a6740-d2b5-5c32-ac88-31117ffc5aac"
                                            >
                                                Email on Upload
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="947d5b8e-742c-585a-92ea-86a428e34034"
                                            >
                                                Receive an email each time a new file is uploaded.
                                            </span>
                                        </div>
                                        <Switch
                                            checked={true}
                                            data-id="9dcb8b84-eb6f-5351-9be8-c6a430d170e3"
                                        />
                                    </div>
                                    <Separator data-id="a17bc9f6-f4d1-536b-abf8-2036ca49f350" />
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="168e93fa-fe0e-5e57-9ec4-1074af68f91d"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="a7ec0782-7572-591c-857f-811391766c88"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="c1ded0e3-b584-5d4c-af30-582819dcf6f2"
                                            >
                                                Weekly Usage Report
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="8a63bd0b-338e-5bf6-8316-acdaf6638876"
                                            >
                                                Get a summary of activity every Monday morning.
                                            </span>
                                        </div>
                                        <Switch
                                            checked={true}
                                            data-id="e96b331e-aa99-56c6-b38d-cea846f1c839"
                                        />
                                    </div>
                                    <Separator data-id="6f5fed11-e474-5fe2-b916-0ab4e550f62a" />
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="c3284621-4588-5e54-b2cd-d0752bbbbfe6"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="eab014f8-cea5-5991-9b3b-0ab7e1c2db91"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="2555c9c2-0afd-5ca2-aac8-56caf00be7d6"
                                            >
                                                Security Alerts
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="8cd4cf44-5927-5ab4-bb48-c7c0c1e2a127"
                                            >
                                                Notify on suspicious sign-ins or permission changes.
                                            </span>
                                        </div>
                                        <Switch
                                            checked={true}
                                            data-id="5fb2e276-f7a5-5a33-a853-8e024615eedb"
                                        />
                                    </div>
                                    <Separator data-id="27bc7519-1454-58e5-afdf-18ecc5fd19b9" />
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="7a4e8664-d9af-5dfd-8008-41f1c24c3e37"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="d180c4d1-5bae-5766-b9c2-6295d3d44a1f"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="1a9d3512-1ab1-5e5a-94ac-d473dc1c881f"
                                            >
                                                API Limit Warnings
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="71433c2c-fe70-56a3-b53f-d7d3c0f0fe40"
                                            >
                                                Warn when API usage approaches the monthly limit.
                                            </span>
                                        </div>
                                        <Switch data-id="ea1f7279-777c-5c4d-873f-4ed61f5dc8ca" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card
                                className="shadow-sm p-6 gap-4"
                                data-id="ae50830b-689d-5296-8434-cfc0c9e3c0d9"
                            >
                                <CardHeader
                                    className="p-0 gap-1"
                                    data-id="124c2a76-c451-53c2-857f-f554356d71c6"
                                >
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="bf7f0cc0-63c2-5019-b036-056c03f11114"
                                    >
                                        <Bell
                                            className="size-4 text-[#2b7fff]"
                                            data-id="0185e75d-3153-532e-9f1e-1f4a12a49893"
                                        />
                                        <CardTitle
                                            className="text-base leading-6"
                                            data-id="b46f910d-6d20-5dc1-a4e3-dc327efa5120"
                                        >
                                            In-App Notifications
                                        </CardTitle>
                                    </div>
                                    <CardDescription
                                        className="text-xs leading-4"
                                        data-id="e345cfc2-d793-5da7-af83-ea04241b0b05"
                                    >
                                        Choose what shows up inside DocuCentral.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent
                                    className="flex p-0 flex-col gap-0"
                                    data-id="80dca03f-74bd-568e-9e05-ca227dff31cb"
                                >
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="5de076b7-d360-5259-b12a-3eb7321ed6c0"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="833e08c6-c61a-58c0-87e9-2c2424626c18"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="991ea3ed-13de-576c-b95a-b46f85b00e02"
                                            >
                                                New File Comments
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="4086c19d-c2f0-5f0b-bd03-6587124dc91b"
                                            >
                                                Get notified when teammates comment on your files.
                                            </span>
                                        </div>
                                        <Switch
                                            checked={true}
                                            data-id="44191294-acd4-5809-9fbc-5fb3031e0aa0"
                                        />
                                    </div>
                                    <Separator data-id="05f223a5-e4b1-53ad-9050-a51281df0d32" />
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="33044786-b1d4-5c54-8d7f-36d55e48edcc"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="c511a1f7-705b-5184-a1ca-b8a0a8bd484d"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="2d3b5cf4-8299-5285-9bbc-36d2d5da0a45"
                                            >
                                                Role Changes
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="ec93f61e-ae60-51dd-970a-d9dbb73f7d64"
                                            >
                                                Alert me when my role or permissions are updated.
                                            </span>
                                        </div>
                                        <Switch
                                            checked={true}
                                            data-id="1d3e0a17-5ab0-5647-ae0f-7f1b5f165a06"
                                        />
                                    </div>
                                    <Separator data-id="19270ea6-0b8b-580d-93b6-f6d58934d9a7" />
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="42b242e6-f3bf-5701-b3d8-9ccabe0c75c3"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="c4828f11-5c39-5ec4-a702-0c3b8c933fba"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="48340a70-da76-5f78-80fe-8bfdbb4731ee"
                                            >
                                                Storage Warnings
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="b1601fe4-19ad-5607-91db-ddc56dc53205"
                                            >
                                                Notify when storage usage exceeds 80% of the limit.
                                            </span>
                                        </div>
                                        <Switch data-id="82652483-0277-596e-8452-d45bf792a1ac" />
                                    </div>
                                    <Separator data-id="bae79e9a-a1b2-553e-9bc1-fdf6e6424043" />
                                    <div
                                        className="flex py-4 justify-between items-center"
                                        data-id="0fcf9f99-f6ea-5b2d-bd41-a89c8a574e66"
                                    >
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="ae06cdb2-a33d-59ab-b824-4bb0509eb45c"
                                        >
                                            <Label
                                                className="font-semibold text-sm leading-5"
                                                data-id="0a9f5437-66ea-5db0-999b-12285f2e0590"
                                            >
                                                System Announcements
                                            </Label>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="bbb8303b-ed9c-559d-8353-94b703d1583d"
                                            >
                                                Hear about new features and scheduled maintenance.
                                            </span>
                                        </div>
                                        <Switch
                                            checked={true}
                                            data-id="5112ee09-58d2-57ea-8306-4d14362da1e6"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card
                                className="shadow-sm p-6 gap-4"
                                data-id="00d4a6ec-5ff7-5990-afd4-950f7d0ef353"
                            >
                                <CardHeader
                                    className="p-0 gap-1"
                                    data-id="2f9120f3-746b-5f1e-913a-225136354037"
                                >
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="eb68e738-1e7a-5940-8979-a574c0a5ca79"
                                    >
                                        <Clock
                                            className="size-4 text-[#2b7fff]"
                                            data-id="51a7ada6-3b44-58cb-9069-859851d9e8f5"
                                        />
                                        <CardTitle
                                            className="text-base leading-6"
                                            data-id="d9ef423f-5d29-5582-80f4-7aaaa824ad44"
                                        >
                                            Notification Digest
                                        </CardTitle>
                                    </div>
                                    <CardDescription
                                        className="text-xs leading-4"
                                        data-id="2b48f011-5afa-5532-b4ea-a61c0173552a"
                                    >
                                        Bundle notifications and pick where they are delivered.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent
                                    className="flex p-0 flex-col gap-4"
                                    data-id="075a7e73-e280-593b-958b-f4a0c4040738"
                                >
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="bbd1270a-789e-5022-9975-e5d11575d1af"
                                    >
                                        <Label
                                            className="font-semibold text-sm leading-5"
                                            data-id="6796ffe7-fe46-5943-8ee5-eda18da28dbf"
                                        >
                                            Digest Frequency
                                        </Label>
                                        <RadioGroup
                                            defaultValue="realtime"
                                            className="grid grid-cols-3 gap-2"
                                            data-id="2a0d691d-4d25-5125-96e1-615635e80f50"
                                        >
                                            <Label
                                                htmlFor="realtime"
                                                className="cursor-pointer rounded-lg bg-[#2b7fff]/5 border-[#2b7fff] border-1 border-solid flex p-3 items-center gap-2"
                                                data-id="4005e630-965c-54a1-880f-74677c20d4e8"
                                            >
                                                <RadioGroupItem
                                                    value="realtime"
                                                    id="realtime"
                                                    data-id="b7081d39-72e4-5366-b922-cef0b8a2cf7c"
                                                />
                                                <span
                                                    className="font-medium text-sm leading-5"
                                                    data-id="e5b68049-2d4a-5a7c-8288-081e15167855"
                                                >
                                                    Real-time
                                                </span>
                                            </Label>
                                            <Label
                                                htmlFor="daily"
                                                className="cursor-pointer rounded-lg border-zinc-200 border-1 border-solid flex p-3 items-center gap-2"
                                                data-id="cfa73e7e-32dc-58fd-aaa9-f02b04d329dc"
                                            >
                                                <RadioGroupItem
                                                    value="daily"
                                                    id="daily"
                                                    data-id="875921e3-15a0-5cbb-b2d0-799356698f4b"
                                                />
                                                <span
                                                    className="font-medium text-sm leading-5"
                                                    data-id="e697b145-d7ea-5364-a775-085977ca023c"
                                                >
                                                    Daily Summary
                                                </span>
                                            </Label>
                                            <Label
                                                htmlFor="weekly"
                                                className="cursor-pointer rounded-lg border-zinc-200 border-1 border-solid flex p-3 items-center gap-2"
                                                data-id="2b8fb740-1269-51e8-94fb-ec7c9319998e"
                                            >
                                                <RadioGroupItem
                                                    value="weekly"
                                                    id="weekly"
                                                    data-id="5c588ad9-80df-592b-b161-de145008ffea"
                                                />
                                                <span
                                                    className="font-medium text-sm leading-5"
                                                    data-id="bf3cf549-0975-5eae-82b8-581bcbac5ed4"
                                                >
                                                    Weekly Summary
                                                </span>
                                            </Label>
                                        </RadioGroup>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="c671fa38-63d1-5468-b937-e97df5eec2c6"
                                    >
                                        <Label
                                            htmlFor="notif-email"
                                            className="font-semibold text-sm leading-5"
                                            data-id="36aa8c03-f239-5d7e-9f73-0d7ffb20272c"
                                        >
                                            Notification Email
                                        </Label>
                                        <div
                                            className="flex items-center gap-2"
                                            data-id="5497df42-7a1f-5fc4-9bdc-8e8ded2212dd"
                                        >
                                            <Input
                                                id="notif-email"
                                                defaultValue="jane.doe@acmecorp.com"
                                                className="flex-1"
                                                data-id="74fb16e3-a253-5124-8893-5fcbc2545b2e"
                                            />
                                            <Badge
                                                className="bg-emerald-100 text-emerald-700 border-black/1 border-0 border-solid gap-1"
                                                data-id="54d16b28-3b52-590e-8118-88ca84410e4a"
                                            >
                                                <CheckCircle2
                                                    className="size-3"
                                                    data-id="5937bd87-524a-5b08-aeb7-437054fa2a89"
                                                />
                                                Verified
                                            </Badge>
                                        </div>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="2f104b21-a3df-5aab-9d6a-82f7fc580592"
                                        >
                                            All digest emails will be delivered to this address.
                                        </span>
                                    </div>
                                </CardContent>
                                <CardFooter
                                    className="p-0 justify-end gap-2"
                                    data-id="1caf9dd7-3134-56a1-9c29-884209974aef"
                                >
                                    <Button
                                        variant="ghost"
                                        data-id="ed42148a-39e5-56a9-a16a-ce75f111513d"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        className="bg-[#2b7fff] text-blue-50 gap-2"
                                        data-id="acc8ab88-39b4-5156-8772-ce5eb323c2c9"
                                    >
                                        <Save
                                            className="size-4"
                                            data-id="c7bc9218-c5ce-5567-b975-708a6dd8d064"
                                        />
                                        Save Preferences
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
