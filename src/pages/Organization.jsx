import {
    Building2,
    Calendar,
    Check,
    Upload,
    Users,
    X,
    Zap,
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function Organization() {
    return (
        <div>
            <div
                className="min-w-0 flex flex-col flex-1"
                data-id="31ef9773-38e2-522c-a420-f583486ab9b0"
            >
                <main
                    className="relative bg-zinc-100/60 p-8 flex-1 overflow-auto"
                    data-id="cc9a4f3f-d880-595b-b9f9-a02aef1232f5"
                >
                    <div
                        className="max-w-4xl flex flex-col gap-6"
                        data-id="6b7c63d6-8162-5856-a804-493e643517fd"
                    >
                        <div
                            className="flex flex-col gap-1"
                            data-id="5c1424d2-0b9a-5dda-8bbc-1a3d55938d4a"
                        >
                            <h1
                                className="font-semibold text-2xl leading-8 tracking-tight"
                                data-id="d2c6cfa7-c26e-585c-a7e4-de4e23e1cfd3"
                            >
                                Organization
                            </h1>
                            <p
                                className="text-[#71717b] text-sm leading-5"
                                data-id="9a2270dd-02f7-51e7-b3cc-64f2be1d0051"
                            >
                                Manage your organization profile and preferences.
                            </p>
                        </div>
                        <Card
                            className="shadow-sm p-6 gap-6"
                            data-id="daf32386-ab23-5ed7-9507-c6dd62ea580b"
                        >
                            <CardHeader
                                className="p-0 gap-1"
                                data-id="79a05b91-8128-5ce9-9d65-3f48609f1cc8"
                            >
                                <div
                                    className="flex items-center gap-2"
                                    data-id="d3816f81-b37b-5d0b-9c63-5ff1f19c22ef"
                                >
                                    <div
                                        className="size-8 rounded-md bg-[#2b7fff]/10 flex justify-center items-center"
                                        data-id="96cb8fa3-07db-5bdb-a0c0-b22f2c30e168"
                                    >
                                        <Building2
                                            className="size-4 text-[#2b7fff]"
                                            data-id="b12a9cf6-d37e-5466-8790-a4149f865558"
                                        />
                                    </div>
                                    <CardTitle
                                        className="font-semibold text-base leading-6"
                                        data-id="7c39b368-edbe-5275-8536-d0d10ca33f53"
                                    >
                                        Organization Details
                                    </CardTitle>
                                </div>
                                <CardDescription
                                    className="text-[#71717b] text-sm leading-5"
                                    data-id="34b3099a-7919-54b9-9816-d781eb7903c6"
                                >
                                    Basic information about your organization.
                                </CardDescription>
                            </CardHeader>
                            <Separator data-id="df070ff7-5e12-50ed-be76-e069348c92df" />
                            <CardContent
                                className="flex p-0 flex-col gap-4"
                                data-id="af282604-6563-5db0-8793-3471d747eb76"
                            >
                                <div
                                    className="grid grid-cols-2 gap-4"
                                    data-id="b218246a-0e8d-569e-8a52-244ccd46ae8e"
                                >
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="8bfc79a7-0f1b-5acb-8fd2-bd2d1047e40b"
                                    >
                                        <Label
                                            htmlFor="orgname"
                                            className="text-sm leading-5"
                                            data-id="146e7a6c-6068-512b-a7c2-185f7385eb3f"
                                        >
                                            Organization Name
                                        </Label>
                                        <Input
                                            id="orgname"
                                            defaultValue="Acme Corp"
                                            className="h-10"
                                            data-id="e1aad7e5-b653-5c9b-a6c0-474e9ea73f7c"
                                        />
                                    </div>
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="76a1fa21-00e8-5485-8ad7-91aecf3e0edf"
                                    >
                                        <Label
                                            htmlFor="slug"
                                            className="text-sm leading-5"
                                            data-id="c325d685-cb40-5907-8e1a-d47f11cc400d"
                                        >
                                            Slug
                                        </Label>
                                        <div
                                            className="rounded-md bg-white border-zinc-200 border-1 border-solid flex h-10 overflow-hidden"
                                            data-id="528f21ff-a1e0-552b-8b9d-735d83576daf"
                                        >
                                            <span
                                                className="bg-zinc-100 text-[#71717b] text-sm leading-5 border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex px-3 items-center"
                                                data-id="34ab36ef-a885-5656-81a6-ef89bfd20bb9"
                                            >
                                                app.docucentral.com/
                                            </span>
                                            <input
                                                id="slug"
                                                defaultValue="acme-corp"
                                                className="bg-transparent outline-none text-sm leading-5 px-3 flex-1"
                                                data-id="fa6d673c-b3c2-50ec-b105-034c2bf08e2d"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="bc3245a4-a6e4-558d-a369-728a4b538ebe"
                                    >
                                        <Label
                                            htmlFor="industry"
                                            className="text-sm leading-5"
                                            data-id="21146d7f-91bc-52f8-9131-e60c74f1bc19"
                                        >
                                            Industry
                                        </Label>
                                        <Select
                                            defaultValue="tech"
                                            data-id="1d1164c6-23be-5eef-ae0a-13f71b30d481"
                                        >
                                            <SelectTrigger
                                                id="industry"
                                                className="h-10"
                                                data-id="f5db968b-2c5e-5117-aef6-bab7d040536e"
                                            >
                                                <SelectValue data-id="ea1a824d-9e34-5b60-a679-ef9b91b6dcdd" />
                                            </SelectTrigger>
                                            <SelectContent data-id="e9245ddc-a9f6-5c66-83bb-d71bbb2bb738">
                                                <SelectItem
                                                    value="tech"
                                                    data-id="62fe18f0-73ed-50aa-a7ac-57f9aed924be"
                                                >
                                                    Technology
                                                </SelectItem>
                                                <SelectItem
                                                    value="finance"
                                                    data-id="ca03f341-82e6-58be-bddc-5e2b306aae12"
                                                >
                                                    Finance
                                                </SelectItem>
                                                <SelectItem
                                                    value="health"
                                                    data-id="91c14eb1-6b16-567e-b4e3-816735d1162a"
                                                >
                                                    Healthcare
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="db4ac360-aa9a-50e2-909f-eae772af1f81"
                                    >
                                        <Label
                                            htmlFor="website"
                                            className="text-sm leading-5"
                                            data-id="0433ce24-14fb-51ee-8823-873496e35ee1"
                                        >
                                            Website
                                        </Label>
                                        <Input
                                            id="website"
                                            defaultValue="https://acmecorp.com"
                                            className="h-10"
                                            data-id="7b63474c-de8b-515d-8dfe-9f49fedd8195"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="grid grid-cols-3 gap-4"
                                    data-id="dc38e9c2-dffb-52b2-99bb-8832bc074eb1"
                                >
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="37f7df46-fe72-51e7-a8fa-181537011697"
                                    >
                                        <Label
                                            className="text-sm leading-5"
                                            data-id="2c43316f-ff4f-5972-9d1f-22e05801cd26"
                                        >
                                            Created
                                        </Label>
                                        <div
                                            className="rounded-md bg-zinc-100/50 text-sm leading-5 border-zinc-200 border-1 border-solid flex px-3 items-center gap-2 h-10"
                                            data-id="5a1bcbe4-eaf7-5f26-8373-96c5131d6759"
                                        >
                                            <Calendar
                                                className="size-4 text-[#71717b]"
                                                data-id="f8da34e1-c8e0-5779-8d77-7d16610a8386"
                                            />
                                            <span data-id="1fdc57c0-6696-5a3d-94d7-c70dc3b16a78">
                                                Jan 12, 2023
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="852e3ab0-e621-5886-9eb9-787891fbcd4d"
                                    >
                                        <Label
                                            className="text-sm leading-5"
                                            data-id="0c23897f-2143-5cce-9846-cd99f0d83ad1"
                                        >
                                            Member Count
                                        </Label>
                                        <div
                                            className="rounded-md bg-zinc-100/50 text-sm leading-5 border-zinc-200 border-1 border-solid flex px-3 items-center gap-2 h-10"
                                            data-id="2ccc45a6-92d3-5f92-8418-b46ae7484755"
                                        >
                                            <Users
                                                className="size-4 text-[#71717b]"
                                                data-id="60d2b4bf-7b64-5df6-8ca5-6e47baf0cd22"
                                            />
                                            <span data-id="029a6a7d-1420-517f-9942-e276dc54a3de">
                                                27 members
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2"
                                        data-id="3bef6f42-0d97-54ba-9a71-dd83a614d2be"
                                    >
                                        <Label
                                            className="text-sm leading-5"
                                            data-id="b615546f-3e0f-5873-800e-9edac1a773fe"
                                        >
                                            Current Plan
                                        </Label>
                                        <div
                                            className="rounded-md bg-zinc-100/50 border-zinc-200 border-1 border-solid flex px-2 justify-between items-center h-10"
                                            data-id="acc6cba6-492a-5f13-bae0-ab7d8655b591"
                                        >
                                            <Badge
                                                className="bg-[#2b7fff] text-blue-50 px-2 py-1 gap-1"
                                                data-id="abd708d2-90e6-5e11-840e-e7df83daa40a"
                                            >
                                                <Zap
                                                    className="size-3"
                                                    data-id="5fe99a84-efae-5fae-a7f2-9228f0eed687"
                                                />
                                                Pro Plan
                                            </Badge>
                                            <a
                                                className="cursor-pointer font-medium text-[#2b7fff] text-xs leading-4 pr-1"
                                                data-id="42a36404-f452-528c-9080-8755615676bf"
                                            >
                                                Upgrade
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="e15a32f1-5e77-5800-994a-7e01ced1d07d"
                                >
                                    <Label
                                        htmlFor="desc"
                                        className="text-sm leading-5"
                                        data-id="ad9dde7e-4d31-559f-8ce9-5d50811de37e"
                                    >
                                        Organization Description
                                    </Label>
                                    <Textarea
                                        id="desc"
                                        placeholder="Tell us a little about your organization, what you do, and your team..."
                                        className="min-h-24 resize-none"
                                        data-id="58b8ea1f-e832-522e-acc2-e2e8ba3cfd95"
                                    />
                                </div>
                                <Separator data-id="7cc87885-5459-514b-ae7c-51bf80d1304b" />
                                <div
                                    className="flex flex-col gap-2"
                                    data-id="b1a1add6-eaf9-5ff0-becd-08f4879bb62d"
                                >
                                    <Label
                                        className="text-sm leading-5"
                                        data-id="9ebae8b2-3f14-5475-98fa-199405c47da0"
                                    >
                                        Organization Logo
                                    </Label>
                                    <div
                                        className="flex items-center gap-4"
                                        data-id="9bf8822a-a9b8-5df9-9256-c4f2e50ea3e2"
                                    >
                                        <div
                                            className="size-16 rounded-lg bg-[#2b7fff]/10 border-[#2b7fff]/20 border-1 border-solid flex justify-center items-center"
                                            data-id="7da0df67-3a9f-5c61-ac70-a4546a4ec62a"
                                        >
                                            <span
                                                className="font-semibold text-[#2b7fff] text-lg leading-7"
                                                data-id="be58a4df-2572-5ed3-83b9-cbe18f5253ac"
                                            >
                                                AC
                                            </span>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="gap-2 h-9"
                                            data-id="ad2dafdb-23dc-5891-91c2-970b011b4b43"
                                        >
                                            <Upload
                                                className="size-4"
                                                data-id="ab3598aa-87d3-5b97-be3a-f7ab23835f47"
                                            />
                                            Upload Logo
                                        </Button>
                                        <span
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="f3310aa5-1a08-5177-a49a-64c7d9a72b34"
                                        >
                                            PNG, JPG up to 2MB
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <Separator data-id="ea724437-3df4-5add-89e4-a85129dd457b" />
                            <CardFooter
                                className="p-0 justify-end gap-2"
                                data-id="80282d29-dd60-5284-bc41-cf90c80568f6"
                            >
                                <Button
                                    variant="outline"
                                    className="h-9"
                                    data-id="090e9c05-0598-5610-83d9-3d8725ed130a"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className="bg-[#2b7fff] text-blue-50 gap-2 h-9"
                                    data-id="561f0d83-334c-505a-94db-9ba0f648c37b"
                                >
                                    <Check
                                        className="size-4"
                                        data-id="11115147-4261-5c15-b299-58d7b098dc5f"
                                    />
                                    Save Changes
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div
                        className="shadow-lg min-w-80 rounded-lg bg-white border-black/1 border-1 border-solid flex absolute right-6 bottom-6 pl-4 pr-10 py-4 items-start gap-3"
                        style={{ borderColor: "#a7f3d0", backgroundColor: "#ecfdf5" }}
                        data-id="83815b02-c680-5de0-819c-492ec2276e6c"
                    >
                        <div
                            className="size-8 shrink-0 rounded-full flex justify-center items-center"
                            style={{ backgroundColor: "#10b981" }}
                            data-id="111c552c-8f84-5b18-a525-10c5b28d733c"
                        >
                            <Check
                                className="size-4 text-white"
                                data-id="9557181c-fe6a-541e-9e3e-003d5e02d114"
                            />
                        </div>
                        <div
                            className="flex flex-col gap-0.5"
                            data-id="3165734e-7d60-5b3e-9d28-9ab5457cabbd"
                        >
                            <span
                                className="font-semibold text-sm leading-5"
                                style={{ color: "#065f46" }}
                                data-id="fa3c8bc3-47e2-51da-b3e3-7f025755155e"
                            >
                                Saved successfully
                            </span>
                            <span
                                className="text-xs leading-4"
                                style={{ color: "#047857" }}
                                data-id="a0db822a-4308-589a-83f0-86502303e0d4"
                            >
                                Organization details saved.
                            </span>
                        </div>
                        <button
                            className="absolute right-3 top-3"
                            data-id="1715b2f9-8270-5820-a6c1-48a626afe45d"
                        >
                            <X
                                className="size-4"
                                style={{ color: "#047857" }}
                                data-id="a8d7d05d-51e9-5d18-b532-21ee944035f7"
                            />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
