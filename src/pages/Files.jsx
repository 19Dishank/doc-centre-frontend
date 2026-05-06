import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Download,
    FileText,
    Folder,
    FolderInput,
    FolderPlus,
    Image,
    LayoutGrid,
    List,
    MoreHorizontal,
    Pencil,
    Plus,
    Search,
    Share2,
    Trash2,
    Video,
    X,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Files() {
    return (
        <div
            className="bg-zinc-100/40 flex p-8 flex-col flex-1 gap-6"
            style={{ backgroundColor: "#F9FAFB" }}
            data-id="9a816cd6-4516-544e-8ad4-4a5ed38664d7"
        >
            <div
                className="flex justify-between items-center"
                data-id="a124c6bf-b0eb-5173-a06d-bd59fd63bcda"
            >
                <div
                    className="text-sm leading-5 flex items-center gap-2"
                    data-id="8d25a68b-e896-5757-b92c-1afc906fdbb2"
                >
                    <span
                        className="cursor-pointer font-medium text-[#2b7fff]"
                        data-id="1347e5d9-ea9b-5ec2-9f80-07b21145b85e"
                    >
                        My Files
                    </span>
                    <ChevronRight
                        className="size-4 text-[#71717b]"
                        data-id="e9c8addf-575e-566a-ab51-b5121f6b5264"
                    />
                    <span
                        className="cursor-pointer font-medium text-[#2b7fff]"
                        data-id="05822800-2b73-5a87-b7ae-38ca57e27e2c"
                    >
                        Projects
                    </span>
                    <ChevronRight
                        className="size-4 text-[#71717b]"
                        data-id="1a00aa77-252e-5ede-ad00-4e69d2c3cdb2"
                    />
                    <span
                        className="font-semibold text-zinc-950"
                        data-id="a9d565eb-7102-5785-9f0a-3cb1c951c518"
                    >
                        2024
                    </span>
                </div>
                <div
                    className="flex items-center gap-2"
                    data-id="da693383-3dd3-5dce-aed0-1c1062d70eda"
                >
                    <Button
                        className="bg-[#2b7fff] text-blue-50 gap-1"
                        data-id="6c748b3f-d3b0-5527-a31b-312145ed020c"
                    >
                        <Plus
                            className="size-4"
                            data-id="f65321ee-48f4-5c13-99a9-52d4ad31ed11"
                        />
                        Upload
                    </Button>
                    <Button
                        variant="outline"
                        className="gap-1"
                        data-id="f1b63a92-f5a6-5da3-accd-c2fce22ca67a"
                    >
                        <FolderPlus
                            className="size-4"
                            data-id="4c37ec31-c4cc-5d1c-8a14-b3d9d60bebe7"
                        />
                        New Folder
                    </Button>
                    <div
                        className="rounded-lg bg-white border-zinc-200 border-1 border-solid flex overflow-hidden"
                        data-id="67dfdea4-ed60-5793-8b55-31d6376beb2b"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            data-id="7af42016-c574-5038-8c12-bb4300ec9d71"
                        >
                            <LayoutGrid
                                className="size-4 text-[#71717b]"
                                data-id="0d367a07-bd64-5dc8-9427-9b9bb5d353bf"
                            />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="bg-[#2b7fff]/10"
                            data-id="c4a5aa7a-ec7b-5156-ba54-9dc8f27a70e2"
                        >
                            <List
                                className="size-4 text-[#2b7fff]"
                                data-id="1d5cf503-adc3-5903-b323-5fd37e08006a"
                            />
                        </Button>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        data-id="4d926a09-7ce7-50ab-8b1d-5a4482c36376"
                    >
                        <MoreHorizontal
                            className="size-4"
                            data-id="1c322942-4192-51cc-8207-db92e779f893"
                        />
                    </Button>
                </div>
            </div>
            <div
                className="flex items-center gap-2"
                data-id="b868baa4-2933-5552-965c-268ffb7ad0eb"
            >
                <div
                    className="relative flex-1"
                    data-id="c86b2943-81d1-5ca0-907e-e9c4e31cb1b5"
                >
                    <Search
                        className="size-4 text-[#71717b] absolute left-3 top-2.5"
                        data-id="48d61e1a-6e18-5a82-ad14-0f8bb303ca7e"
                    />
                    <Input
                        placeholder="Search files…"
                        className="bg-white pl-9"
                        data-id="6927e0bf-8924-5acd-ae0f-d0ea308682ab"
                    />
                </div>
                <Button
                    variant="outline"
                    className="gap-1"
                    data-id="9329fb03-57ad-508d-8bf1-a12e8b64b41a"
                >
                    Type
                    <ChevronDown
                        className="size-3"
                        data-id="301305d2-d0b0-5857-b2e5-ba71744205b0"
                    />
                </Button>
                <Button
                    variant="outline"
                    className="gap-1"
                    data-id="3fa1449b-593d-5eef-a8ae-28c6d78c9d19"
                >
                    Date
                    <ChevronDown
                        className="size-3"
                        data-id="a983647c-3212-51ba-8f10-dc22768e1e15"
                    />
                </Button>
                <Button
                    variant="outline"
                    className="gap-1"
                    data-id="4d2ff53a-039e-56ba-9316-fd75bb0fbf69"
                >
                    Sort by: Name
                    <ChevronDown
                        className="size-3"
                        data-id="fe7e1663-845f-5fb0-aa54-75b2e7281113"
                    />
                </Button>
            </div>
            <Card
                className="p-0 gap-0 overflow-hidden"
                data-id="6e8db4e9-6134-5837-9b50-dd8e46f62bb9"
            >
                <div
                    className="bg-[#2b7fff]/10 border-[#2b7fff]/20 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-4 py-2 justify-between items-center"
                    data-id="22949158-114c-5c00-a396-208be4e197a0"
                >
                    <div
                        className="text-sm leading-5 flex items-center gap-4"
                        data-id="0f362ff1-a4ae-5b88-ade7-2a7e7a2f4f04"
                    >
                        <span
                            className="font-medium text-[#2b7fff]"
                            data-id="4c4d29f5-92c8-5eaa-9cc1-f03a553de42f"
                        >
                            3 items selected
                        </span>
                        <Separator
                            orientation="vertical"
                            className="h-4"
                            data-id="63fc29c0-fdc3-595f-b949-6fa047618d5f"
                        />
                        <button
                            className="text-[#2b7fff] flex items-center gap-1"
                            data-id="bdbb99c7-0222-5a5d-8aa5-4fca5dc58e61"
                        >
                            <Download
                                className="size-3.5"
                                data-id="853a1c51-d4c1-58b5-a32b-8afaf7eb3b88"
                            />
                            Download
                        </button>
                        <button
                            className="text-[#2b7fff] flex items-center gap-1"
                            data-id="c989ddff-4cc7-5f7f-8c94-e4631a017df3"
                        >
                            <FolderInput
                                className="size-3.5"
                                data-id="ad4dfb4a-f284-5fad-afe8-ed3072058218"
                            />
                            Move
                        </button>
                        <button
                            className="text-[#e7000b] flex items-center gap-1"
                            data-id="0656f800-6784-5636-9180-20ad7649c13b"
                        >
                            <Trash2
                                className="size-3.5"
                                data-id="839d0774-bea1-5013-908f-e8295d057d59"
                            />
                            Delete
                        </button>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        data-id="53f6e700-9d91-5ad2-8026-75b39f18acba"
                    >
                        <X
                            className="size-4"
                            data-id="fef2699e-46b7-564b-a668-37da2d3e2c1e"
                        />
                    </Button>
                </div>
                <Table data-id="f85c19ec-36b9-596a-b721-8c517663a53d">
                    <TableHeader data-id="e6f48fed-bd92-5636-8043-18b8d75ae843">
                        <TableRow data-id="351e4cdf-c510-5522-8ee1-697495677397">
                            <TableHead
                                className="px-3 w-10"
                                data-id="4e96b9c4-f0b1-5cd0-bd40-3b4092bce38c"
                            >
                                <Checkbox data-id="6721c913-ad7f-56fe-8846-b128bb69aea1" />
                            </TableHead>
                            <TableHead
                                className="uppercase text-[#71717b] text-[11px] tracking-wider"
                                data-id="d7b52c55-b2b3-584a-8d36-21e0fbd260cb"
                            >
                                Name
                            </TableHead>
                            <TableHead
                                className="uppercase text-[#71717b] text-[11px] tracking-wider"
                                data-id="cf631af2-41b3-5a76-a8b0-ef1d2f6eec91"
                            >
                                Type
                            </TableHead>
                            <TableHead
                                className="uppercase text-[#71717b] text-[11px] tracking-wider"
                                data-id="ade5488d-b92d-57cf-b1df-ef4fee35c9c6"
                            >
                                Size
                            </TableHead>
                            <TableHead
                                className="uppercase text-[#71717b] text-[11px] tracking-wider"
                                data-id="f87a395d-0345-553c-a578-e4a273cc823f"
                            >
                                Modified
                            </TableHead>
                            <TableHead
                                className="uppercase text-[#71717b] text-[11px] tracking-wider"
                                data-id="0d718439-0962-5429-a120-5ffbdcac9c82"
                            >
                                Owner
                            </TableHead>
                            <TableHead
                                className="text-right uppercase text-[#71717b] text-[11px] tracking-wider pr-4"
                                data-id="10160c41-b8a4-5c4d-b8f4-351b8c8d72ee"
                            >
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody data-id="9abe0756-4972-5ef0-8acb-268239eb81b8">
                        <TableRow data-id="306d1b05-c35a-517b-a018-c096667e6219">
                            <TableCell
                                className="px-3"
                                data-id="3a895156-8bfd-5939-b03e-3764ddc34870"
                            >
                                <Checkbox data-id="3aa8f99b-0857-54d3-a23e-158de93db8bd" />
                            </TableCell>
                            <TableCell
                                className="font-semibold flex items-center gap-2"
                                data-id="6ea21dcc-91cf-50b0-a464-274a7a7030b9"
                            >
                                <Folder
                                    className="size-4 fill-yellow-400 text-yellow-500"
                                    data-id="3d2cb1b7-bee8-5fc2-90a4-ee8eca1834f0"
                                />
                                Client Assets
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="dc4f13d5-60f5-5cfa-8865-47bf71241a7c"
                            >
                                Folder
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="dbfbd024-dc10-5234-bd7e-a6837db3735f"
                            >
                                —
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="bcace7cd-6410-5808-a1e8-3d93edb01ba7"
                            >
                                Mar 12, 2024
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="68d0dde3-b591-53c7-9f20-91589045548f"
                            >
                                Jane Doe
                            </TableCell>
                            <TableCell
                                className="text-right pr-4"
                                data-id="0dcf9c35-fb9a-5be5-9191-191251ef2c5b"
                            >
                                <div
                                    className="flex justify-end gap-1"
                                    data-id="c4a4e04e-c912-5890-afcf-a5d05e9715a6"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="d163662a-2b2f-595a-b0e1-7c8deb33c8b7"
                                    >
                                        <Share2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="5df3ceef-cf81-51fa-8412-7daad8670eb4"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="4d1c1381-fd99-51a3-8cc5-b88c03b5ea57"
                                    >
                                        <Download
                                            className="size-3.5 text-[#71717b]"
                                            data-id="573c28df-41d3-56c0-af41-3a6e126b104e"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="58771e50-6c5e-5824-9227-3d6b2307635b"
                                    >
                                        <Pencil
                                            className="size-3.5 text-[#71717b]"
                                            data-id="344d2ddc-d9cf-5668-91a5-bde811e26fa1"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="ddb72979-6bd9-5193-8898-2a328b7d89e0"
                                    >
                                        <Trash2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="44488b42-c7c3-5dec-b2f9-6f0fa982df7a"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            className="bg-zinc-100/40"
                            data-id="f08d0506-2127-5ed0-9db2-2fdd33d72106"
                        >
                            <TableCell
                                className="px-3"
                                data-id="6b9d6176-26bf-5f91-975c-801829273f20"
                            >
                                <Checkbox data-id="4c4d8f57-2553-5788-9a29-56014b2577cb" />
                            </TableCell>
                            <TableCell
                                className="font-semibold flex items-center gap-2"
                                data-id="ef026206-cde5-5577-970a-c069b12ce599"
                            >
                                <Folder
                                    className="size-4 fill-yellow-400 text-yellow-500"
                                    data-id="4dac47f0-e3a7-5841-b8d0-726d1ad40ed0"
                                />
                                Marketing Campaigns
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="8e62b6ff-6efd-54d5-882d-fd0de1924368"
                            >
                                Folder
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="4d8514d9-91f3-574a-bc7d-6ac1cca37e36"
                            >
                                —
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="bf218f61-654c-50df-ad4d-0c0634a38e7e"
                            >
                                Mar 10, 2024
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="063e92c5-b5c8-598c-a3ab-c62c37fea7df"
                            >
                                Mark Lee
                            </TableCell>
                            <TableCell
                                className="text-right pr-4"
                                data-id="8122bf28-34ac-5580-a5fc-0cedde4c390d"
                            >
                                <div
                                    className="flex justify-end gap-1"
                                    data-id="2336c8e5-b282-55ba-bcda-ce66a85ae9fd"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="caec37e9-ed59-5711-8c43-4544f4fb7bf6"
                                    >
                                        <Share2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="cf1c3996-5185-502f-b4e3-8d118d2ac22b"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="710abef3-7e70-5017-8448-4d807b9defeb"
                                    >
                                        <Download
                                            className="size-3.5 text-[#71717b]"
                                            data-id="b9cc7277-ba31-51e5-8b06-705f644a6d97"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="12e5749b-1024-5407-aa1c-0727bacb1be1"
                                    >
                                        <Pencil
                                            className="size-3.5 text-[#71717b]"
                                            data-id="fce59542-da9f-5d55-a41e-a20dc98356f9"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="a1d370d0-704e-5566-a905-5aa0d840d527"
                                    >
                                        <Trash2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="29440513-4890-5439-bbce-059b7570395f"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow data-id="8fa8d0c9-ce25-5c20-87e6-934a5bcb760e">
                            <TableCell
                                className="px-3"
                                data-id="760873fd-cba6-5182-bda2-9cdb1d2ca7aa"
                            >
                                <Checkbox data-id="b8c73794-9237-507e-ae1e-16b00744cc59" />
                            </TableCell>
                            <TableCell
                                className="font-semibold flex items-center gap-2"
                                data-id="06cda817-aba4-5254-be78-38586a3127c4"
                            >
                                <Folder
                                    className="size-4 fill-yellow-400 text-yellow-500"
                                    data-id="3150e605-74b4-5d96-8f95-d5170fa25fa5"
                                />
                                Design Specs
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="3feccebd-4d05-54f8-8136-653d56c231d9"
                            >
                                Folder
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="de11568b-657b-55f7-8c38-fd6775e1c1ed"
                            >
                                —
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="b1222a4a-ec60-5db7-93d0-4b820ce7a076"
                            >
                                Mar 08, 2024
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="f9f52af1-e435-50e6-97ee-8e1012bb06ee"
                            >
                                Sara Kim
                            </TableCell>
                            <TableCell
                                className="text-right pr-4"
                                data-id="9e43bc4b-b8f2-5492-b8d6-5e4777955a96"
                            >
                                <div
                                    className="flex justify-end gap-1"
                                    data-id="d97e5868-4fc4-5c85-82a2-fc14276afb40"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="0833849f-9b02-5b54-82d9-a26da8e79b63"
                                    >
                                        <Share2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="533f09cf-ba2e-5a0f-9eb7-d26c3da7112a"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="f288ecd4-206e-5355-8959-1793dcca89cf"
                                    >
                                        <Download
                                            className="size-3.5 text-[#71717b]"
                                            data-id="a230da09-cdd7-5369-8ddf-76859d23e1ec"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="1bc4786f-5ce5-511c-ad05-1a4944a7cd85"
                                    >
                                        <Pencil
                                            className="size-3.5 text-[#71717b]"
                                            data-id="a3688bc9-2246-5930-bc34-1ed964f632cf"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="d4ed9b9b-07cc-530a-b504-0b71259c6f74"
                                    >
                                        <Trash2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="7b23829e-f624-5ff4-b6e7-c7d2dc31c6f4"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            className="bg-zinc-100/40"
                            data-id="2df17396-6a5f-5655-9ad5-0a21e8f5a7ba"
                        >
                            <TableCell
                                className="px-3"
                                data-id="ad11c567-40ff-5b8a-994d-07737195e9d3"
                            >
                                <Checkbox data-id="4aeefd37-52eb-5ac6-8d0d-414f19c4d634" />
                            </TableCell>
                            <TableCell
                                className="font-medium flex items-center gap-2"
                                data-id="6478440a-1a9f-5798-b2bf-b0a45d86a39f"
                            >
                                <FileText
                                    className="size-4 text-red-500"
                                    data-id="c91a98fe-2cd9-5513-ac3e-14e04118c24a"
                                />
                                Q1-Report.pdf
                            </TableCell>
                            <TableCell data-id="149e94d5-3d94-5f24-a620-b68c4c6e399f">
                                <Badge
                                    variant="secondary"
                                    className="bg-red-100 text-red-700"
                                    data-id="432eb074-9de9-514c-a631-4fb5b253ae31"
                                >
                                    PDF
                                </Badge>
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="95b91190-b96d-5371-ad78-2544b887e92c"
                            >
                                2.4 MB
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="04c2cc13-efb6-5635-9033-e7593efd4b00"
                            >
                                Mar 14, 2024
                            </TableCell>
                            <TableCell data-id="a81b73ff-e200-57ab-a22a-7811eb6df4da">
                                <div
                                    className="flex items-center gap-2"
                                    data-id="5c1aeec2-76b3-5352-8eb4-22d39dbb22d7"
                                >
                                    <Avatar
                                        className="size-6"
                                        data-id="e097c19d-5868-5ccc-8a11-bbc6bfff8b31"
                                    >
                                        <AvatarFallback
                                            className="text-[10px]"
                                            data-id="306920cf-1dc8-5810-aa5b-0d971088b1c2"
                                        >
                                            JD
                                        </AvatarFallback>
                                    </Avatar>
                                    <span
                                        className="text-[#71717b]"
                                        data-id="f0d0ca27-b546-58f0-92ac-74ece15c910f"
                                    >
                                        Jane Doe
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell
                                className="text-right pr-4"
                                data-id="9477618c-01ad-55a1-9def-329ed5c83952"
                            >
                                <div
                                    className="flex justify-end gap-1"
                                    data-id="5915cfe1-3f09-57ca-9f4b-e59c88a155e6"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="8e6ab5c3-e89c-51f5-a03c-4f4da45fe13a"
                                    >
                                        <Share2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="d7317c9d-1e3a-5a78-9421-07e3677b9b2f"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="3ac7cb76-143a-5701-8be4-929e56ed7033"
                                    >
                                        <Download
                                            className="size-3.5 text-[#71717b]"
                                            data-id="146721de-7ca3-5498-986e-929a3aa59263"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="08988dc7-930f-5740-a777-d78e89947180"
                                    >
                                        <Pencil
                                            className="size-3.5 text-[#71717b]"
                                            data-id="d853f864-f553-5433-b846-ef2d1ce3480b"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="ce53cd2c-6e82-53ee-ae39-cdb2ffd295f7"
                                    >
                                        <Trash2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="41f26f65-e06a-5159-9c1c-558f899dfaa7"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            className="relative"
                            data-id="7ed16918-6d53-5ef9-924f-acb29aa45507"
                        >
                            <TableCell
                                className="px-3"
                                data-id="86dc85ac-d9e4-56c4-addd-a11f75c42a54"
                            >
                                <Checkbox data-id="3412ce7c-3efb-59dd-afc6-d913b6cbda76" />
                            </TableCell>
                            <TableCell
                                className="font-medium flex items-center gap-2"
                                data-id="c034ff58-4f5f-5e7e-b87e-9b9a83a66425"
                            >
                                <FileText
                                    className="size-4 text-blue-500"
                                    data-id="f92d5337-99b4-5b8a-938f-5b27701dc20f"
                                />
                                Proposal-Draft.docx
                            </TableCell>
                            <TableCell data-id="0be25a72-b7a5-572d-8680-ed1c7b9426d5">
                                <Badge
                                    variant="secondary"
                                    className="bg-blue-100 text-blue-700"
                                    data-id="f0c4f4de-fe34-5b80-af9a-ae6b230b1b38"
                                >
                                    DOCX
                                </Badge>
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="2a938fb7-c491-5ada-a494-0c485bf2ab83"
                            >
                                486 KB
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="8c0af2d7-28ab-54fa-9b55-09f38a089831"
                            >
                                Mar 13, 2024
                            </TableCell>
                            <TableCell data-id="523a4191-28a0-5eb8-8a8f-0f211c83b53f">
                                <div
                                    className="flex items-center gap-2"
                                    data-id="b93014f3-0081-53a4-97a4-ae4fa49e2c04"
                                >
                                    <Avatar
                                        className="size-6"
                                        data-id="d869d31f-36cc-5386-8b86-d965bff4004e"
                                    >
                                        <AvatarFallback
                                            className="text-[10px]"
                                            data-id="b1f465ef-c9f6-5741-8c8f-ec40e404f604"
                                        >
                                            ML
                                        </AvatarFallback>
                                    </Avatar>
                                    <span
                                        className="text-[#71717b]"
                                        data-id="a7b1628b-c7fb-5285-891f-dc85988b83e5"
                                    >
                                        Mark Lee
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell
                                className="text-right pr-4"
                                data-id="353db1cc-1ae7-59d2-9bcf-004afdbc4c98"
                            >
                                <div
                                    className="flex justify-end gap-1"
                                    data-id="a9e3058f-5782-5ead-a91e-4fa076eb0987"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="1c14e7db-43d8-5003-a43c-8c70c0b93c5c"
                                    >
                                        <Share2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="0b8951a9-d12e-54a6-8fb1-9720e42766ca"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="ba04810d-9a74-5843-b681-b42e368e7de2"
                                    >
                                        <Download
                                            className="size-3.5 text-[#71717b]"
                                            data-id="f0f2deb1-dd18-5c4d-83b9-bf87673d11ad"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="2ff2ecc7-7667-5b52-b566-43e7a995a7b9"
                                    >
                                        <Pencil
                                            className="size-3.5 text-[#71717b]"
                                            data-id="bcfadd94-299e-523c-8f4f-4b573bce1d08"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="470f49d5-6a9d-5053-9d00-ead9fbb2f17b"
                                    >
                                        <Trash2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="bb615848-75dd-51f8-a0eb-2ff60d529773"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            className="bg-zinc-100/40"
                            data-id="88623809-a8e1-5d4e-8ac9-54cc7e7862fa"
                        >
                            <TableCell
                                className="px-3"
                                data-id="6c3bc045-4185-5582-ae14-4620e5c37e59"
                            >
                                <Checkbox data-id="4f61415a-fb5e-5d74-9b21-da3f0fc0c250" />
                            </TableCell>
                            <TableCell
                                colSpan={6}
                                data-id="0681195f-f478-5eca-bfd7-33961305b102"
                            >
                                <div
                                    className="flex py-1 items-center gap-3"
                                    data-id="273e7e06-fec7-50d2-a86f-581fcce12f20"
                                >
                                    <Skeleton
                                        className="size-4 rounded-sm"
                                        data-id="f29720e2-a600-59ea-afa0-c06a93a71425"
                                    />
                                    <Skeleton
                                        className="w-48 h-3"
                                        data-id="cb6ae0c8-0d8b-5f70-affe-68b30edb7ca8"
                                    />
                                    <Skeleton
                                        className="w-16 h-3"
                                        data-id="ad2595eb-0492-5ce8-a2c8-c5202e47fe4f"
                                    />
                                    <Skeleton
                                        className="w-20 h-3"
                                        data-id="c3b41fe5-3f31-5868-8c93-6204fd2e683c"
                                    />
                                    <Skeleton
                                        className="w-24 h-3"
                                        data-id="f5ff56d9-7c90-5a9d-bfe9-6bf8f2faf091"
                                    />
                                    <Skeleton
                                        className="w-28 h-3"
                                        data-id="d220f857-a6cb-52c9-9cb9-a0277e261912"
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow data-id="4f50a6a7-90b0-526a-85f1-5b4bc6581dd1">
                            <TableCell
                                className="px-3"
                                data-id="53259a9a-1d78-5ce4-8dc3-ab28d4e5face"
                            >
                                <Checkbox data-id="b2239f8e-e602-589b-ab4b-c2cdc541ea3b" />
                            </TableCell>
                            <TableCell
                                className="font-medium flex items-center gap-2"
                                data-id="84c57bcc-2d2b-5620-9e19-3bb3ddf04375"
                            >
                                <Image
                                    className="size-4 text-purple-500"
                                    data-id="501a5533-968b-5a9f-b86d-35c2d4a76ba3"
                                />
                                hero-banner.png
                            </TableCell>
                            <TableCell data-id="d29be8b5-2754-5dda-abcd-b700ea84cb2e">
                                <Badge
                                    variant="secondary"
                                    className="bg-purple-100 text-purple-700"
                                    data-id="3cc070e1-d93b-5b76-b923-133a05ef2110"
                                >
                                    PNG
                                </Badge>
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="475f2dae-f584-5261-a32a-a28a7a617caa"
                            >
                                3.1 MB
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="76db92c3-0683-5480-aec8-1c358ecbe2df"
                            >
                                Mar 09, 2024
                            </TableCell>
                            <TableCell data-id="ecfeed8f-5f68-5676-b781-ea3a92ba6621">
                                <div
                                    className="flex items-center gap-2"
                                    data-id="f59be4c7-5e9f-58c9-8ab0-6a46dca533e9"
                                >
                                    <Avatar
                                        className="size-6"
                                        data-id="fb2a0561-322e-59f8-a74b-d871544cf2ae"
                                    >
                                        <AvatarFallback
                                            className="text-[10px]"
                                            data-id="95a461d6-ee0e-5d9e-8917-81d3cd06f080"
                                        >
                                            SK
                                        </AvatarFallback>
                                    </Avatar>
                                    <span
                                        className="text-[#71717b]"
                                        data-id="558e4cbe-674e-5bd4-8fdc-163c078f8c7b"
                                    >
                                        Sara Kim
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell
                                className="text-right pr-4"
                                data-id="a9c28536-73cd-59c4-b34b-6e49036b0fda"
                            >
                                <div
                                    className="flex justify-end gap-1"
                                    data-id="856ddd44-d678-53de-adf7-a5fdbaee00eb"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="0a8309c3-4527-595f-b0fc-5d22faf547e3"
                                    >
                                        <Share2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="a4dcf356-0532-5e3d-b496-e42d2966f397"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="751ece13-91cf-5824-867e-23c070c5061e"
                                    >
                                        <Download
                                            className="size-3.5 text-[#71717b]"
                                            data-id="9dbe3e27-eec1-5508-88fb-663e07c62315"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="9255d15e-1a76-5975-9e73-086c2d02c7d0"
                                    >
                                        <Pencil
                                            className="size-3.5 text-[#71717b]"
                                            data-id="aab61015-71d0-5392-b03c-2a99f7946378"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="00b1fabc-f2f1-5c86-ae1f-b0bd8b36d98e"
                                    >
                                        <Trash2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="6042bfc6-8abc-5e2f-a8a2-44688306abc9"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            className="bg-zinc-100/40"
                            data-id="a8a1a2c6-2eeb-5193-83b7-ab8b3faaa714"
                        >
                            <TableCell
                                className="px-3"
                                data-id="96967cbe-0422-5d3b-9f28-ecb111dbb2ed"
                            >
                                <Checkbox data-id="2d96fa15-499f-5c15-afd5-8b11c3ad4513" />
                            </TableCell>
                            <TableCell
                                className="font-medium flex items-center gap-2"
                                data-id="6ed32242-25d3-5cd6-b3d1-4bb14a4405e9"
                            >
                                <Video
                                    className="size-4 text-orange-500"
                                    data-id="aae67e07-1078-59f8-8282-f486195ce590"
                                />
                                demo-walkthrough.mp4
                            </TableCell>
                            <TableCell data-id="d18ff8bf-f308-5187-98cb-8ff471a1d4a7">
                                <Badge
                                    variant="secondary"
                                    className="bg-orange-100 text-orange-700"
                                    data-id="7a4a6906-474a-5f8f-b018-591f7ea86a28"
                                >
                                    MP4
                                </Badge>
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="4adfbb7c-2faa-5b1c-99f3-d987207c9aa9"
                            >
                                28.7 MB
                            </TableCell>
                            <TableCell
                                className="text-[#71717b]"
                                data-id="44016d3e-c13e-55ca-9268-dae40f53489c"
                            >
                                Mar 05, 2024
                            </TableCell>
                            <TableCell data-id="2804dd5e-3a78-5371-ab52-e01194584cd5">
                                <div
                                    className="flex items-center gap-2"
                                    data-id="de38ca13-bae6-5f67-8547-cf9997c6e351"
                                >
                                    <Avatar
                                        className="size-6"
                                        data-id="79853439-a108-5024-98ab-f96d3d30577a"
                                    >
                                        <AvatarFallback
                                            className="text-[10px]"
                                            data-id="f1bd0ca6-072c-530f-a8c8-17c6e228d8cf"
                                        >
                                            AR
                                        </AvatarFallback>
                                    </Avatar>
                                    <span
                                        className="text-[#71717b]"
                                        data-id="7c9cc9e2-3cb3-58b8-b53f-f663c76408e2"
                                    >
                                        Alex R.
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell
                                className="text-right pr-4"
                                data-id="d371df24-5f6f-599d-bd1e-c5fc0e603049"
                            >
                                <div
                                    className="flex justify-end gap-1"
                                    data-id="b1371263-95dd-59aa-aff8-d35826ea3bc6"
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="c48e922f-7f53-59b1-a61b-5c2f6256dcf4"
                                    >
                                        <Share2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="446314d6-9fcc-5ca2-bf61-aa498cd8bb3a"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="f0abd8e1-ab98-575b-b46a-f28874d9adf6"
                                    >
                                        <Download
                                            className="size-3.5 text-[#71717b]"
                                            data-id="a68e7844-8023-58ee-837f-22d8a3551cd1"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="18e4719b-4fc3-5457-8856-50b04f414a56"
                                    >
                                        <Pencil
                                            className="size-3.5 text-[#71717b]"
                                            data-id="2b256cc7-3d67-59ee-b9d2-8e117778ec9d"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7"
                                        data-id="6dcf63b0-140c-5791-8a97-5d0a25629338"
                                    >
                                        <Trash2
                                            className="size-3.5 text-[#71717b]"
                                            data-id="fd3159ac-8ec7-5085-8125-24b803230549"
                                        />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div
                    className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex px-4 py-3 justify-between items-center"
                    data-id="fbb6083f-4d45-535e-83c9-4d38efe366db"
                >
                    <span
                        className="text-[#71717b] text-sm leading-5"
                        data-id="f0b95ca7-be46-5050-b4f8-098657e44f40"
                    >
                        Showing 1–8 of 34 files
                    </span>
                    <div
                        className="flex items-center gap-1"
                        data-id="9afc2c51-201d-58b0-a728-910f2b29de32"
                    >
                        <Button
                            variant="outline"
                            size="sm"
                            data-id="1c8d1e16-2a0e-503b-8b01-79753ea5f830"
                        >
                            <ChevronLeft
                                className="size-3.5"
                                data-id="649784e5-c766-511a-8bfe-3ebe798e475c"
                            />
                            Previous
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="size-8 bg-[#2b7fff] text-blue-50 p-0"
                            data-id="a1fffb41-6866-5632-927d-d59e9cca97af"
                        >
                            1
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="size-8 p-0"
                            data-id="b07565e2-e6bb-59c8-aeee-4d72f910b8e2"
                        >
                            2
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="size-8 p-0"
                            data-id="45894cd7-9e43-5c7b-b05f-29a21a8c47df"
                        >
                            3
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="size-8 p-0"
                            data-id="f339fb34-71bd-5c76-a554-941c8dff0ca0"
                        >
                            4
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            data-id="644aed91-ed73-5c52-a0c1-0ba1282a1756"
                        >
                            Next
                            <ChevronRight
                                className="size-3.5"
                                data-id="16c9daaf-997c-5211-b7ff-c5bdbc68747f"
                            />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
