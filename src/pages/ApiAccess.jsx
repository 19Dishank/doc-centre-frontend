import {
    Activity,
    AlertTriangle,
    ArrowUpRight,
    BarChart2,
    BookOpen,
    Copy,
    Download,
    Eye,
    FileCode,
    FileText,
    LifeBuoy,
    MessageCircle,
    Package,
    Plus,
    RefreshCw,
    Shield,
    Trash2,
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
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function ApiAccess() {
    return (
        <div
            className="flex w-full h-fit"
            data-id="551fb17b-578f-589a-adfe-559d3cada5e4"
        >
            <div
                className="flex flex-col flex-1"
                data-id="b58d8b73-ef21-5958-8d69-b5f8d573eb43"
            >
                <main
                    className="bg-zinc-100/50 px-8 pt-8 pb-12 flex-1"
                    data-id="5c23688b-d154-556b-b3f4-1d4bda9e51d5"
                >
                    <div
                        className="max-w-5xl flex flex-col gap-6"
                        data-id="4871032f-a2ea-5761-b5a9-18a2805fe5ba"
                    >
                        <div
                            className="flex flex-col gap-1"
                            data-id="edbdb82a-2271-52f3-9768-f1867e76740e"
                        >
                            <h1
                                className="font-semibold text-2xl leading-8 tracking-tight"
                                data-id="c92f1b91-bdaa-534c-9c78-188ba119d0df"
                            >
                                API Access
                            </h1>
                            <p
                                className="text-[#71717b] text-sm leading-5"
                                data-id="07224280-c35a-59f9-8166-95d8c9714356"
                            >
                                Manage your API keys and monitor usage.
                            </p>
                        </div>
                        <Card
                            className="p-6 gap-4"
                            data-id="7b544545-c52d-54d9-be61-c7529ca728c8"
                        >
                            <CardHeader
                                className="p-0 gap-1"
                                data-id="31f00501-18e9-589e-b31b-29303fda8816"
                            >
                                <CardTitle
                                    className="text-base leading-6"
                                    data-id="4ab33613-20ea-53ad-a4d6-571753bd37d0"
                                >
                                    API Key
                                </CardTitle>
                                <CardDescription
                                    className="text-sm leading-5"
                                    data-id="33aab645-ca76-52de-a705-636c6fbea8be"
                                >
                                    Use this key to authenticate API requests.
                                </CardDescription>
                            </CardHeader>
                            <CardContent
                                className="flex p-0 flex-col gap-4"
                                data-id="d9978fa1-5a42-5e25-b443-391ff87f8cab"
                            >
                                <div
                                    className="rounded-lg bg-amber-50 border-amber-200 border-1 border-solid flex p-3 items-start gap-2"
                                    data-id="5efd05c0-248e-5966-9c6a-f9e161937bdd"
                                >
                                    <AlertTriangle
                                        className="size-4 shrink-0 text-amber-600 mt-0.5"
                                        data-id="1137557b-c031-59c7-8069-3031beaad88a"
                                    />
                                    <p
                                        className="text-amber-900 text-sm leading-5"
                                        data-id="5c9362fe-61de-5a8d-b8ca-9faa0c8aff64"
                                    >
                                        Keep your API key secret. Never expose it in client-side
                                        code or public repositories.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="3ea78eb5-1047-506a-af66-cc9b169015c0"
                                >
                                    <Label
                                        className="font-medium text-sm leading-5"
                                        data-id="1769d095-a793-51ae-980b-1ebfebe9c08b"
                                    >
                                        API Key
                                    </Label>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="3c6f9f56-35ad-5a08-8d49-a6216626549b"
                                    >
                                        <Input
                                            value="••••••••••••••••••••••••••••sk_live_a3f9"
                                            readOnly={true}
                                            className="font-mono text-sm leading-5 flex-1"
                                            data-id="629a392f-7cd0-5bfa-b372-8e9eb9d6aa08"
                                        />
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="shrink-0"
                                            data-id="463fb83a-9bcf-5a6b-875c-7535a80ec9c5"
                                        >
                                            <Copy
                                                className="size-4 text-[#2b7fff]"
                                                data-id="9328a9c0-6dfc-5851-b948-0a1d2618cf8b"
                                            />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="shrink-0 gap-2"
                                            data-id="4410741a-7a6c-5fe3-8f7a-7b8d47dc3ec7"
                                        >
                                            <Eye
                                                className="size-4"
                                                data-id="4aca6151-72f6-5ca4-bebe-14ded703a531"
                                            />
                                            Reveal
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="shrink-0 text-[#e7000b] gap-2"
                                            data-id="8219fd56-4d9b-5cab-84ce-80a6efef32d6"
                                        >
                                            <RefreshCw
                                                className="size-4"
                                                data-id="101c8f1d-d5cc-5c1a-815c-c02f39305333"
                                            />
                                            Regenerate API Key
                                        </Button>
                                    </div>
                                    <p
                                        className="text-[#71717b] text-xs leading-4"
                                        data-id="1b7dcf55-cd8c-5ed8-b568-cd9ff0ebac60"
                                    >
                                        Regenerating will invalidate your current key
                                        immediately.
                                    </p>
                                </div>
                                <Separator data-id="ff2bf313-137e-5ea1-bd43-b896ae4b0dca" />
                                <div
                                    className="grid grid-cols-2 gap-6"
                                    data-id="d280ed94-1de5-504a-8430-19375b3cf16e"
                                >
                                    <div
                                        className="flex flex-col gap-1"
                                        data-id="7629d02e-1cf5-5b09-abb3-e5648e57d7e6"
                                    >
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="509cc73c-25c6-508a-abcc-3977cc5f8a79"
                                        >
                                            Created
                                        </span>
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="ce910670-4e51-5c2d-b45f-09f28312e92c"
                                        >
                                            Mar 5, 2024
                                        </span>
                                    </div>
                                    <div
                                        className="flex flex-col gap-1"
                                        data-id="0d1dc092-d5d2-5027-8e63-89003f29ffa7"
                                    >
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="021dd87d-9696-5fc4-a617-04b9147b7f0a"
                                        >
                                            Last used
                                        </span>
                                        <span
                                            className="font-medium text-sm leading-5"
                                            data-id="463042a6-a2f8-5a7f-a218-a2024fabe08d"
                                        >
                                            2 hours ago
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            className="p-6 gap-6"
                            data-id="c3f01145-2d54-59bf-a3f1-bb2e69ec63bf"
                        >
                            <CardHeader
                                className="p-0 gap-1"
                                data-id="e4a685ff-1407-5a91-9e8c-8b62ede139a0"
                            >
                                <div
                                    className="flex items-center gap-2"
                                    data-id="d01bc5f7-74d3-5852-80ba-cc3471092a6e"
                                >
                                    <BarChart2
                                        className="size-4 text-[#2b7fff]"
                                        data-id="77fd1ddf-0fca-569e-a6fa-2504030ebc31"
                                    />
                                    <CardTitle
                                        className="text-base leading-6"
                                        data-id="87691fdc-36f2-520f-9f04-0f2d0d3e9212"
                                    >
                                        Usage This Month
                                    </CardTitle>
                                </div>
                                <CardDescription
                                    className="text-sm leading-5"
                                    data-id="99685e59-abcd-5e81-bfa1-27ccb45a21b8"
                                >
                                    Track your API usage and remaining quota.
                                </CardDescription>
                            </CardHeader>
                            <CardContent
                                className="flex p-0 flex-col gap-6"
                                data-id="63f8b8c9-2fa2-508b-9a6e-d1f00fecc752"
                            >
                                <div
                                    className="grid grid-cols-3 gap-4"
                                    data-id="032d8617-df09-5808-a5d1-b509eed4673f"
                                >
                                    <Card
                                        className="shadow-none bg-zinc-100/40 p-4 gap-2"
                                        data-id="bfea9be2-3987-527e-afaa-26c0d617a428"
                                    >
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="68133b4a-fac7-5738-8911-79e2dc1fe3f7"
                                        >
                                            Requests Made
                                        </span>
                                        <div
                                            className="flex justify-between items-center"
                                            data-id="2cfefcac-bd19-55e5-8ad7-b31372a32f87"
                                        >
                                            <span
                                                className="font-semibold text-2xl leading-8"
                                                data-id="298c27f9-ba89-596d-afd5-34b1736f5784"
                                            >
                                                892,341
                                            </span>
                                            <Badge
                                                className="bg-[#2b7fff]/10 text-[#2b7fff]"
                                                data-id="880636b0-1b1d-5e5d-b898-6b3e203090ac"
                                            >
                                                +12%
                                            </Badge>
                                        </div>
                                    </Card>
                                    <Card
                                        className="shadow-none bg-zinc-100/40 p-4 gap-2"
                                        data-id="c4a55ec1-44e5-5c7b-894e-0df2b39912f0"
                                    >
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="dd18957e-05fd-582b-94c4-e477f66bcf1c"
                                        >
                                            Rate Limit
                                        </span>
                                        <div
                                            className="flex justify-between items-center"
                                            data-id="1f3384e7-1f45-5607-a09e-76092c7b8b11"
                                        >
                                            <span
                                                className="font-semibold text-2xl leading-8"
                                                data-id="a54fa1f5-aac6-5282-aa85-19db8c2e26fd"
                                            >
                                                10,000
                                                <span
                                                    className="font-normal text-[#71717b] text-sm leading-5"
                                                    data-id="283c5232-b3a4-5eed-b205-b436b948acbc"
                                                >
                                                    req/mo
                                                </span>
                                            </span>
                                            <Badge
                                                variant="secondary"
                                                data-id="2a645cf2-e4ce-5abc-a65f-27caa0716a54"
                                            >
                                                Pro Plan
                                            </Badge>
                                        </div>
                                    </Card>
                                    <Card
                                        className="shadow-none bg-zinc-100/40 p-4 gap-2"
                                        data-id="106d8d1a-c201-59d6-b29c-c5bf5453266d"
                                    >
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="3c49f2ec-994c-5a3d-a036-0da67f01cbed"
                                        >
                                            Remaining Quota
                                        </span>
                                        <div
                                            className="flex justify-between items-center"
                                            data-id="23c30e1d-d2ef-5fbc-9340-3342132f17ca"
                                        >
                                            <span
                                                className="font-semibold text-2xl leading-8"
                                                data-id="0dd179ee-662b-578d-94cf-8fd2943e63ec"
                                            >
                                                9,107,659
                                            </span>
                                            <Badge
                                                className="bg-emerald-100 text-emerald-700"
                                                data-id="3e9941e8-2b90-57c4-8b54-21883ae6955e"
                                            >
                                                91.1%
                                            </Badge>
                                        </div>
                                    </Card>
                                </div>
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="e7d21aa5-28a4-511b-9567-ae03f5b18c0b"
                                >
                                    <div
                                        className="flex justify-between items-center"
                                        data-id="e01c725c-5e50-52af-85c8-861dce65cc14"
                                    >
                                        <Label
                                            className="font-medium text-sm leading-5"
                                            data-id="116e08e3-7712-5ef6-9d99-e20c5d678b11"
                                        >
                                            Monthly Usage
                                        </Label>
                                        <span
                                            className="font-medium text-[#71717b] text-sm leading-5"
                                            data-id="4247163c-82d0-5a39-9eac-23b1f544e551"
                                        >
                                            8.9%
                                        </span>
                                    </div>
                                    <div
                                        className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden"
                                        data-id="11e10cf8-a3db-5a87-8c87-805267ce5112"
                                    >
                                        <div
                                            className="rounded-full bg-[#2b7fff] h-full"
                                            style={{ width: "8.9%" }}
                                            data-id="48ca017f-5ace-5584-86ea-28d9ac8bd2bb"
                                        />
                                    </div>
                                    <span
                                        className="text-[#71717b] text-xs leading-4"
                                        data-id="0d30d286-87f8-560e-9672-408f8a053889"
                                    >
                                        892K / 10M requests
                                    </span>
                                </div>
                                <div
                                    className="flex flex-col gap-3"
                                    data-id="76f625bd-44af-5328-b659-652a523e7630"
                                >
                                    <div
                                        className="flex justify-between items-center"
                                        data-id="a453221d-2128-517b-bc25-2656a2803037"
                                    >
                                        <h3
                                            className="font-semibold text-sm leading-5"
                                            data-id="45d3556b-7b64-53d1-a7e8-bf6b40b87a06"
                                        >
                                            Request Log
                                        </h3>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="53c4a98b-2c94-52ac-99ab-55f49d1d537e"
                                        >
                                            Last 5 requests
                                        </span>
                                    </div>
                                    <div
                                        className="rounded-lg border-zinc-200 border-1 border-solid overflow-hidden"
                                        data-id="e3e118df-0603-5844-90b7-5b2e89e9df07"
                                    >
                                        <Table data-id="d49010df-931a-566b-9bb2-fc2a22d694c8">
                                            <TableHeader data-id="b85d8a50-8991-542d-abbb-8ca503732081">
                                                <TableRow
                                                    className="bg-zinc-100/40"
                                                    data-id="a826f05d-703f-58eb-a0f0-c7e87ecb001c"
                                                >
                                                    <TableHead
                                                        className="text-xs leading-4"
                                                        data-id="10ca1eab-d097-5d69-badd-14811e492199"
                                                    >
                                                        Endpoint
                                                    </TableHead>
                                                    <TableHead
                                                        className="text-xs leading-4"
                                                        data-id="95af84a7-d2b1-58c1-9e7f-fb3da5bd5cbd"
                                                    >
                                                        Method
                                                    </TableHead>
                                                    <TableHead
                                                        className="text-xs leading-4"
                                                        data-id="755c4ec0-d8d0-5ec0-a3ec-4f53970d1e94"
                                                    >
                                                        Status
                                                    </TableHead>
                                                    <TableHead
                                                        className="text-xs leading-4"
                                                        data-id="5769456b-3caf-562a-9375-39dae6e819e9"
                                                    >
                                                        Timestamp
                                                    </TableHead>
                                                    <TableHead
                                                        className="text-right text-xs leading-4"
                                                        data-id="8a0868e0-bd85-50f9-a407-a716dd3ec407"
                                                    >
                                                        Latency
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody data-id="4ab52bc1-288e-51be-be79-6f5bb01da2f9">
                                                <TableRow data-id="abbd3e84-8247-56cf-9e9b-25afde3c5f3e">
                                                    <TableCell
                                                        className="font-mono text-xs leading-4"
                                                        data-id="32586b11-b33c-59c4-9ef0-b3f00ff7838b"
                                                    >
                                                        /v1/files/upload
                                                    </TableCell>
                                                    <TableCell data-id="712be2e7-7201-57d4-8efe-2d7fb3c2d9fb">
                                                        <Badge
                                                            className="font-mono bg-[#2b7fff]/10 text-[#2b7fff] text-xs leading-4"
                                                            data-id="724f428b-6dfe-5119-ac52-96f37108aba4"
                                                        >
                                                            POST
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell data-id="0d265292-1792-5b57-a97e-0fb98b9138ce">
                                                        <Badge
                                                            className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4"
                                                            data-id="51a8ac06-d734-56dc-8990-2d05c4b95cfe"
                                                        >
                                                            200
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="3ed0c091-2f3a-5e9c-b9d6-af4089947b14"
                                                    >
                                                        2024-03-14 14:32:08
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-right text-xs leading-4"
                                                        data-id="daa42c94-0466-568b-a855-89d1caf2cb07"
                                                    >
                                                        142ms
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow data-id="ea086f16-80b1-50b0-bce1-a14fc1e20e86">
                                                    <TableCell
                                                        className="font-mono text-xs leading-4"
                                                        data-id="5e84e37c-3e81-5622-abbd-b90fd16a728e"
                                                    >
                                                        /v1/users/me
                                                    </TableCell>
                                                    <TableCell data-id="48219fa5-57ab-599d-95bf-6a360c105f91">
                                                        <Badge
                                                            variant="secondary"
                                                            className="font-mono text-xs leading-4"
                                                            data-id="f97e18e8-5533-5a26-8efb-90abdba31116"
                                                        >
                                                            GET
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell data-id="402ec3d9-9c03-5331-a0bb-49c81b8825e5">
                                                        <Badge
                                                            className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4"
                                                            data-id="d25d2d20-68d0-535c-80bd-6061615a87a6"
                                                        >
                                                            200
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="24f88dec-39ed-5fbd-a537-a970fd43d3d1"
                                                    >
                                                        2024-03-14 14:30:51
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-right text-xs leading-4"
                                                        data-id="b13d85ff-05db-573e-862d-ad2a4efc27d0"
                                                    >
                                                        38ms
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow data-id="4acf4334-5d38-5fd7-8739-16d00ea27286">
                                                    <TableCell
                                                        className="font-mono text-xs leading-4"
                                                        data-id="1edc0a2e-8fc5-5c08-beff-4455f9e25585"
                                                    >
                                                        /v1/files/list
                                                    </TableCell>
                                                    <TableCell data-id="bcd51853-2534-5d36-b084-54034227358e">
                                                        <Badge
                                                            variant="secondary"
                                                            className="font-mono text-xs leading-4"
                                                            data-id="889c9a2f-e956-5391-85b8-2813e4fd8ab3"
                                                        >
                                                            GET
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell data-id="e94c0c56-90a1-5845-bd79-9bdc896b9630">
                                                        <Badge
                                                            className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4"
                                                            data-id="77fc7d4b-5d87-5c18-a2cf-e297afadedc8"
                                                        >
                                                            200
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="d0d3ac97-4365-5690-8ddf-e491ecee1e00"
                                                    >
                                                        2024-03-14 14:28:19
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-right text-xs leading-4"
                                                        data-id="0b28b146-a034-5e00-b805-57d09d06b155"
                                                    >
                                                        94ms
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow data-id="8e3a9e45-8293-5f10-9cfa-c62f3ef17217">
                                                    <TableCell
                                                        className="font-mono text-xs leading-4"
                                                        data-id="7c4ebd93-6b3c-5575-8c17-4437a6109b6f"
                                                    >
                                                        /v1/auth/token
                                                    </TableCell>
                                                    <TableCell data-id="e5e9919f-78f8-5e9d-ba59-4edb3c54b145">
                                                        <Badge
                                                            className="font-mono bg-[#2b7fff]/10 text-[#2b7fff] text-xs leading-4"
                                                            data-id="4412673a-f6e5-5491-a5df-35f92b65f99d"
                                                        >
                                                            POST
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell data-id="6aaa13f7-1ee4-52d5-bbac-cdf072e1fcfa">
                                                        <Badge
                                                            className="font-mono bg-red-100 text-red-700 text-xs leading-4"
                                                            data-id="6d5dae84-ec1c-5fc2-85ca-95cb7a55cc43"
                                                        >
                                                            401
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="c3d9c891-bca4-5eaf-a8e6-9f2fd3b8a832"
                                                    >
                                                        2024-03-14 14:25:02
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-right text-xs leading-4"
                                                        data-id="65f4e917-5f23-55a4-925c-4d40e53b6aec"
                                                    >
                                                        21ms
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow data-id="7fd3c899-4452-51af-b0ae-783efb770c76">
                                                    <TableCell
                                                        className="font-mono text-xs leading-4"
                                                        data-id="1db0bf0f-60a7-5476-b00c-89cefc21e2cb"
                                                    >
                                                        /v1/files/share
                                                    </TableCell>
                                                    <TableCell data-id="4fd604c9-937a-53ad-96d9-7f16de76d4f7">
                                                        <Badge
                                                            className="font-mono bg-[#2b7fff]/10 text-[#2b7fff] text-xs leading-4"
                                                            data-id="26ad0277-888a-52b1-ade5-c95f1cfd5e81"
                                                        >
                                                            POST
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell data-id="03cba100-493f-5dc8-aa47-23a1ade29a00">
                                                        <Badge
                                                            className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4"
                                                            data-id="63b61bc4-7edd-596f-b154-0b4d602c4899"
                                                        >
                                                            200
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="35957ebe-390b-5b0c-8368-23cb35a53b8e"
                                                    >
                                                        2024-03-14 14:21:47
                                                    </TableCell>
                                                    <TableCell
                                                        className="text-right text-xs leading-4"
                                                        data-id="7b30a54e-62a4-5c62-844a-a44f31d2a684"
                                                    >
                                                        186ms
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter
                                className="p-0 justify-end gap-2"
                                data-id="3d08220f-db71-5fea-95e2-c20f16370b83"
                            >
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                    data-id="6cb3b2f4-541b-5792-baed-8b239db40fa1"
                                >
                                    <Download
                                        className="size-4"
                                        data-id="c5cf464a-821f-51a8-a47a-419ae0130ee5"
                                    />
                                    Download CSV
                                </Button>
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                    data-id="28692975-5611-534a-902b-157a19e4e668"
                                >
                                    <FileText
                                        className="size-4"
                                        data-id="42880789-52d3-5fca-87c2-358ecc4f747f"
                                    />
                                    View Full Logs
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card
                            className="p-6 gap-4"
                            data-id="e3002957-2d4c-5678-8300-ea3faeeec6db"
                        >
                            <CardHeader
                                className="p-0 gap-1"
                                data-id="8d409c7f-4daa-5f6c-9bf4-176e1aecb19a"
                            >
                                <div
                                    className="flex items-center gap-2"
                                    data-id="73aa457b-fb9b-5d58-944a-f0cd26ecbcbb"
                                >
                                    <Shield
                                        className="size-4 text-[#2b7fff]"
                                        data-id="cb4b2661-5374-5391-af93-02f32727d216"
                                    />
                                    <CardTitle
                                        className="text-base leading-6"
                                        data-id="aa978665-182f-5eb2-bf21-034549a71ed5"
                                    >
                                        Allowed IPs
                                    </CardTitle>
                                </div>
                                <CardDescription
                                    className="text-sm leading-5"
                                    data-id="7ded2362-5e2a-5b78-a13a-ded53f1ab88e"
                                >
                                    Restrict API access to specific IP addresses. Leave empty
                                    to allow all.
                                </CardDescription>
                            </CardHeader>
                            <CardContent
                                className="flex p-0 flex-col gap-4"
                                data-id="fe1e4cb5-aa5e-5efd-a155-5575a143b397"
                            >
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="599fa959-9b8e-58a6-bcdf-48a695e642f6"
                                >
                                    <Label
                                        className="font-medium text-sm leading-5"
                                        data-id="cf8c67c5-9060-58d1-925f-7ba847ed867d"
                                    >
                                        Add IP Address
                                    </Label>
                                    <div
                                        className="flex items-center gap-2"
                                        data-id="8c4d144b-ac07-5bc2-81fe-83ce6bc820b6"
                                    >
                                        <Input
                                            placeholder="e.g. 192.168.1.1 or 10.0.0.0/24"
                                            className="font-mono text-sm leading-5 flex-1"
                                            data-id="f53e44ba-2ad3-560e-9200-b02cf4043c86"
                                        />
                                        <Input
                                            placeholder="Label (optional)"
                                            className="text-sm leading-5 w-48"
                                            data-id="eb4bd792-01ba-5e4b-8623-4d89ebabe033"
                                        />
                                        <Button
                                            className="shrink-0 bg-[#2b7fff] text-blue-50 gap-2"
                                            data-id="e579ff40-7a6c-5693-b3a5-7969cf1336cb"
                                        >
                                            <Plus
                                                className="size-4"
                                                data-id="edd89551-f6d1-5e1d-aa77-023fda5196bb"
                                            />
                                            Add IP
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg border-zinc-200 border-1 border-solid overflow-hidden"
                                    data-id="94b0b26c-c9ac-50cd-a34b-2edc1a2b31a8"
                                >
                                    <Table data-id="ba0a638f-7405-54c8-99bb-14ae3e71b693">
                                        <TableHeader data-id="8262f52b-f66b-509e-a393-1d3c25b26670">
                                            <TableRow
                                                className="bg-zinc-100/40"
                                                data-id="417c3aaa-7159-5da6-be7a-b2a09948bfd0"
                                            >
                                                <TableHead
                                                    className="text-xs leading-4"
                                                    data-id="723f5380-64c8-5ac4-ad50-4dd59e86446c"
                                                >
                                                    IP Address
                                                </TableHead>
                                                <TableHead
                                                    className="text-xs leading-4"
                                                    data-id="2ba29246-6581-5401-baf3-fc0eb08d520e"
                                                >
                                                    Label
                                                </TableHead>
                                                <TableHead
                                                    className="text-xs leading-4"
                                                    data-id="9713c79c-9d99-5efa-a2e5-9fbad083f24d"
                                                >
                                                    Added
                                                </TableHead>
                                                <TableHead
                                                    className="text-xs leading-4"
                                                    data-id="5e3457e7-201d-5a52-b866-807921b8c6bc"
                                                >
                                                    Status
                                                </TableHead>
                                                <TableHead
                                                    className="text-right text-xs leading-4"
                                                    data-id="3cac9ba1-7c23-5ae0-99fd-da6b1bfaa64a"
                                                >
                                                    Actions
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody data-id="055db881-e504-52a8-80d7-b59c82ae6c25">
                                            <TableRow data-id="64427793-fe13-5828-862b-5c16cf6667f5">
                                                <TableCell
                                                    className="font-mono text-xs leading-4"
                                                    data-id="7b974f07-dec4-5a81-a98e-64dcb35cb856"
                                                >
                                                    192.168.1.100
                                                </TableCell>
                                                <TableCell
                                                    className="text-sm leading-5"
                                                    data-id="dadc5f6a-9411-5f89-a5c7-dc6b7507dd4f"
                                                >
                                                    Office Network
                                                </TableCell>
                                                <TableCell
                                                    className="text-[#71717b] text-xs leading-4"
                                                    data-id="35cdc303-7295-51ce-a1d3-be7436933b6a"
                                                >
                                                    Feb 12, 2024
                                                </TableCell>
                                                <TableCell data-id="79b3de3e-aff5-5e64-953f-9149374b0337">
                                                    <Badge
                                                        className="bg-emerald-100 text-emerald-700 text-xs leading-4"
                                                        data-id="5e9436d8-0782-51eb-884c-1676defc6518"
                                                    >
                                                        Active
                                                    </Badge>
                                                </TableCell>
                                                <TableCell
                                                    className="text-right"
                                                    data-id="e8986fc6-fa73-555d-966f-106a2b03fd16"
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-8"
                                                        data-id="60a64f5a-2e5d-53bd-ab95-b8d7ac7718db"
                                                    >
                                                        <Trash2
                                                            className="size-4 text-[#e7000b]"
                                                            data-id="1ec86694-c0c8-5998-968a-447f05761ec7"
                                                        />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow data-id="df8b5205-290a-5bb4-8686-0f40446d3cea">
                                                <TableCell
                                                    className="font-mono text-xs leading-4"
                                                    data-id="3805e807-3a5a-5b57-bfc7-d361911c90a5"
                                                >
                                                    10.0.0.0/24
                                                </TableCell>
                                                <TableCell
                                                    className="text-sm leading-5"
                                                    data-id="d3102d1f-90e8-590d-a7bd-f25a6ff86ace"
                                                >
                                                    VPN Range
                                                </TableCell>
                                                <TableCell
                                                    className="text-[#71717b] text-xs leading-4"
                                                    data-id="a0cabddc-e279-530c-8a6d-8fc926303170"
                                                >
                                                    Jan 28, 2024
                                                </TableCell>
                                                <TableCell data-id="512decdd-016b-5b89-a788-1fce8b0680cb">
                                                    <Badge
                                                        className="bg-emerald-100 text-emerald-700 text-xs leading-4"
                                                        data-id="858219d9-d475-52a8-818c-b9e4f572e698"
                                                    >
                                                        Active
                                                    </Badge>
                                                </TableCell>
                                                <TableCell
                                                    className="text-right"
                                                    data-id="1a0c1379-a658-5ab9-9482-6d817cc6f50e"
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-8"
                                                        data-id="724c8118-1898-52f9-8d3b-1c8e87d80cb9"
                                                    >
                                                        <Trash2
                                                            className="size-4 text-[#e7000b]"
                                                            data-id="b1cb4452-d6a6-5fb1-bcc5-8e048870bbb8"
                                                        />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow data-id="95113cfb-39eb-579a-aa38-07c60972dbd7">
                                                <TableCell
                                                    className="font-mono text-xs leading-4"
                                                    data-id="7557cc12-51b7-54a0-b33f-a232d7381fe2"
                                                >
                                                    203.0.113.42
                                                </TableCell>
                                                <TableCell
                                                    className="text-sm leading-5"
                                                    data-id="e3b12043-9e1e-59dc-b545-c62f89d8e4bb"
                                                >
                                                    CI/CD Server
                                                </TableCell>
                                                <TableCell
                                                    className="text-[#71717b] text-xs leading-4"
                                                    data-id="364c6ece-17c1-56df-b03c-33d4d3cd5db1"
                                                >
                                                    Mar 1, 2024
                                                </TableCell>
                                                <TableCell data-id="00d527c0-c6e6-5b31-8e52-b6124c299f7a">
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs leading-4"
                                                        data-id="3c0deb0a-0b41-586f-8254-c4b1253deb72"
                                                    >
                                                        Pending
                                                    </Badge>
                                                </TableCell>
                                                <TableCell
                                                    className="text-right"
                                                    data-id="b4b6df33-1916-5ff4-ad79-a5b8ac0dacf0"
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-8"
                                                        data-id="39596041-4dc2-5ba7-814f-2f3880fdc771"
                                                    >
                                                        <Trash2
                                                            className="size-4 text-[#e7000b]"
                                                            data-id="f5290732-0e73-546b-be19-ff4ef0399b6e"
                                                        />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            className="p-6 gap-4"
                            data-id="d8033e6d-3ae5-51a9-959e-971cdf9e2d4e"
                        >
                            <CardHeader
                                className="p-0 gap-1"
                                data-id="b340a3d5-7604-54d5-921a-ba144d6bb18e"
                            >
                                <div
                                    className="flex items-center gap-2"
                                    data-id="e2bb9f55-20b3-5acf-aeee-cbc50706119e"
                                >
                                    <BookOpen
                                        className="size-4 text-[#2b7fff]"
                                        data-id="3afa9262-b4f6-52f2-9649-60ff8bb70a59"
                                    />
                                    <CardTitle
                                        className="text-base leading-6"
                                        data-id="0dca28fd-90d0-50b6-a02b-b1dcda07da62"
                                    >{`Documentation & Resources`}</CardTitle>
                                </div>
                                <CardDescription
                                    className="text-sm leading-5"
                                    data-id="4a67e5d1-5082-54a3-87ed-fde8cfd5a979"
                                >
                                    Quick links to help you get started and integrate with our
                                    API.
                                </CardDescription>
                            </CardHeader>
                            <CardContent
                                className="flex p-0 flex-col gap-4"
                                data-id="31be9a92-b671-5007-9f47-d2ec025fa9ed"
                            >
                                <div
                                    className="grid grid-cols-2 gap-3"
                                    data-id="ef81afad-3e65-5d43-90e5-23f2c3fe8727"
                                >
                                    <a
                                        className="rounded-lg bg-white border-zinc-200 border-1 border-solid flex p-4 items-start gap-3"
                                        data-id="b38b6f59-b23d-5810-be2e-1df4b29ba900"
                                    >
                                        <div
                                            className="size-9 shrink-0 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                                            data-id="98ea020e-5ea3-5e9a-a487-59fcd660d130"
                                        >
                                            <FileCode
                                                className="size-4 text-[#2b7fff]"
                                                data-id="cdb69157-e323-59fa-a65c-a20dfee2725c"
                                            />
                                        </div>
                                        <div
                                            className="flex flex-col flex-1 gap-0.5"
                                            data-id="d68c9890-f033-50d2-a30d-472a17bb38fc"
                                        >
                                            <div
                                                className="flex justify-between items-center"
                                                data-id="da59d2ca-249e-5cdb-a7ae-37f2f87a10be"
                                            >
                                                <span
                                                    className="font-medium text-sm leading-5"
                                                    data-id="10fdf7af-7b36-5475-83d3-99db032fc41d"
                                                >
                                                    API Documentation
                                                </span>
                                                <ArrowUpRight
                                                    className="size-4 text-[#71717b]"
                                                    data-id="3a059526-c121-55d6-856f-bbc0616eb728"
                                                />
                                            </div>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="03d51764-46e3-58ec-8d61-914836cd0a39"
                                            >
                                                Reference for all endpoints, parameters, and
                                                responses.
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                        className="rounded-lg bg-white border-zinc-200 border-1 border-solid flex p-4 items-start gap-3"
                                        data-id="9aaef165-e4d0-5582-a328-13e30f5881bc"
                                    >
                                        <div
                                            className="size-9 shrink-0 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                                            data-id="2e15d171-3701-5f8b-b1d1-8d85f3edf648"
                                        >
                                            <Package
                                                className="size-4 text-[#2b7fff]"
                                                data-id="2b68098d-9cf0-5bf7-8320-80a45812b9b4"
                                            />
                                        </div>
                                        <div
                                            className="flex flex-col flex-1 gap-0.5"
                                            data-id="8bdeb969-df71-5e0b-9f64-527f7855e8a0"
                                        >
                                            <div
                                                className="flex justify-between items-center"
                                                data-id="54b62c9b-fd19-51c3-813e-ef90efffd9d2"
                                            >
                                                <span
                                                    className="font-medium text-sm leading-5"
                                                    data-id="deff6a36-85ff-549d-ad9f-3dbab63741c2"
                                                >{`SDKs & Libraries`}</span>
                                                <ArrowUpRight
                                                    className="size-4 text-[#71717b]"
                                                    data-id="5e525431-694c-5127-a2a2-1e625a8ed3a1"
                                                />
                                            </div>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="14e4e80f-59e0-53bd-bc47-b223507b9a4f"
                                            >
                                                Official client libraries for Node.js, Python, Go,
                                                Ruby.
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                        className="rounded-lg bg-white border-zinc-200 border-1 border-solid flex p-4 items-start gap-3"
                                        data-id="fe37ffb7-9156-53f4-8217-d40a0760f07e"
                                    >
                                        <div
                                            className="size-9 shrink-0 rounded-lg bg-emerald-100 flex justify-center items-center"
                                            data-id="60adf7d3-0cd3-5f8d-9ef9-d6ba72e95b8d"
                                        >
                                            <Activity
                                                className="size-4 text-emerald-700"
                                                data-id="9e5e6851-330b-5956-a2f7-891bf5046356"
                                            />
                                        </div>
                                        <div
                                            className="flex flex-col flex-1 gap-0.5"
                                            data-id="2e93b885-9c9e-55df-aee8-9b361185f3de"
                                        >
                                            <div
                                                className="flex justify-between items-center"
                                                data-id="ac58d70b-499c-5983-b0c3-a460dd195ea6"
                                            >
                                                <span
                                                    className="font-medium text-sm leading-5"
                                                    data-id="c898d389-7f44-59d7-9334-81d57bcca069"
                                                >
                                                    Status Page
                                                </span>
                                                <ArrowUpRight
                                                    className="size-4 text-[#71717b]"
                                                    data-id="c611e35b-e6e2-570d-8ad6-a815c4f16953"
                                                />
                                            </div>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="b1addcb3-c362-5396-86c7-6a47fbe2ea33"
                                            >
                                                All systems operational. View incident history.
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                        className="rounded-lg bg-white border-zinc-200 border-1 border-solid flex p-4 items-start gap-3"
                                        data-id="07bf37ee-e72b-5ad7-b523-b89c1acef023"
                                    >
                                        <div
                                            className="flex flex-col flex-1 gap-0.5"
                                            data-id="46ea1109-60bf-5cc6-9974-1c849c396282"
                                        >
                                            <div
                                                className="flex justify-between items-center"
                                                data-id="7b089347-21f2-5c93-bec8-35ea4f34fd7d"
                                            >
                                                <span
                                                    className="font-medium text-sm leading-5"
                                                    data-id="cee5a592-2208-52f9-bfa6-cfb7a1abe594"
                                                >
                                                    Code Examples
                                                </span>
                                                <ArrowUpRight
                                                    className="size-4 text-[#71717b]"
                                                    data-id="e8543174-8460-5c28-b94b-8b9c71f3b37f"
                                                />
                                            </div>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="a901a1fd-91cf-54d9-9633-dfb73131af9a"
                                            >
                                                Sample integrations and starter projects on GitHub.
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <Separator data-id="11a1e754-cfb9-5557-9b0c-890e14d470a4" />
                                <div
                                    className="rounded-lg bg-[#2b7fff]/5 flex p-4 justify-between items-center gap-4"
                                    data-id="843dbb9f-3850-58ec-bbd6-38c15489ded9"
                                >
                                    <div
                                        className="flex items-center gap-3"
                                        data-id="051c21e0-af2d-5ca4-ad61-257d6ab1050d"
                                    >
                                        <div
                                            className="size-9 shrink-0 rounded-full bg-[#2b7fff]/10 flex justify-center items-center"
                                            data-id="a36dd6f6-e4e4-5732-ba30-90d7d9e9b945"
                                        >
                                            <LifeBuoy
                                                className="size-4 text-[#2b7fff]"
                                                data-id="c84f2d3d-77ba-598f-9beb-703cf78a3793"
                                            />
                                        </div>
                                        <div
                                            className="flex flex-col"
                                            data-id="3ec46d0b-8dd5-52d3-8af3-d91d384d3348"
                                        >
                                            <span
                                                className="font-medium text-sm leading-5"
                                                data-id="4ea63db6-21d3-578d-b574-964a4f1ceae8"
                                            >
                                                Need help?
                                            </span>
                                            <span
                                                className="text-[#71717b] text-xs leading-4"
                                                data-id="3bbfb159-fbc6-5695-a24c-4369d781c80b"
                                            >
                                                Reach out to our developer support team — typically
                                                replies in under 4 hours.
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        className="shrink-0 bg-[#2b7fff] text-blue-50 gap-2"
                                        data-id="d6c21890-0487-501b-a147-2ac39204e649"
                                    >
                                        <MessageCircle
                                            className="size-4"
                                            data-id="4412c85d-e27f-5e9b-b9c2-0877b280632d"
                                        />
                                        Contact Support
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <div
                            className="flex pt-2 justify-between items-center"
                            data-id="404ece03-9677-50c0-a904-4e92bb8b8e37"
                        >
                            <span
                                className="text-[#71717b] text-xs leading-4"
                                data-id="15a0b0cb-a338-5d75-8aff-5073ab1770b9"
                            >
                                Last updated Mar 14, 2024 · API v1.4.2
                            </span>
                            <div
                                className="flex items-center gap-3"
                                data-id="feb347c8-bce5-5002-9a48-84fc78743029"
                            >
                                <Button
                                    variant="ghost"
                                    className="text-[#71717b] text-xs leading-4 gap-1.5 h-8"
                                    data-id="4a875d6d-9288-5766-b49b-7b6da3d3b463"
                                >
                                    <FileText
                                        className="size-3.5"
                                        data-id="3e46e0b5-a196-533e-918a-29ad14c29e2d"
                                    />
                                    Changelog
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="text-[#71717b] text-xs leading-4 gap-1.5 h-8"
                                    data-id="f3b12e65-23e3-5e73-867e-0339d46d2af3"
                                >
                                    <Shield
                                        className="size-3.5"
                                        data-id="2d5bf39b-0885-5aae-95a0-a4acb5d345ff"
                                    />
                                    Security
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
