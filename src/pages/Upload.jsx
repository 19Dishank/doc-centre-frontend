import {
    Check,
    ChevronDown,
    Clock,
    FileText,
    Folder,
    FolderOpen,
    Image,
    Info,
    Upload,
    UploadCloud,
    X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function UploadFile() {
    return (
        <div>
            <div
                className="min-h-[956px] flex"
                data-id="5c137da5-65a4-5b75-b6af-2812ee78269d"
            >
                <div
                    className="flex flex-col flex-1"
                    data-id="5ab1459c-9ff9-5dcd-b55f-4c038efecf55"
                >
                    <main
                        className="bg-zinc-100/40 p-8 flex-1"
                        data-id="1e2a21d4-9d16-5b43-9978-1795b18811c6"
                    >
                        <div
                            className="flex mb-6 flex-col gap-1"
                            data-id="2ecdd309-8cae-5687-bb23-3cc8c41dc8ea"
                        >
                            <h1
                                className="font-semibold text-2xl leading-8"
                                data-id="6b72895e-04dc-5158-b2f4-1376ada17fc6"
                            >
                                Upload Files
                            </h1>
                            <p
                                className="text-[#71717b] text-sm leading-5"
                                data-id="df34a527-d442-544a-a1ef-5dc2eb26d018"
                            >
                                Add files to your document system. Supported: PDF, DOCX, XLSX,
                                PNG, MP4, ZIP.
                            </p>
                        </div>
                        <div
                            className="grid grid-cols-5 gap-6"
                            data-id="603b1b87-a749-59f7-8305-33b6d7a3038b"
                        >
                            <div
                                className="col-span-3 flex flex-col gap-6"
                                data-id="b216605e-350e-58b5-9faf-fc96fab68b6f"
                            >
                                <Card
                                    className="bg-white border-zinc-200 border-2 border-dashed p-12 gap-4"
                                    data-id="d9c628ec-f3c0-550d-98e6-ca24ff6ad77c"
                                >
                                    <div
                                        className="text-center flex flex-col items-center gap-4"
                                        data-id="d35f614a-4e62-5d09-9951-031f82ef461f"
                                    >
                                        <div
                                            className="size-16 rounded-full bg-[#2b7fff]/10 flex justify-center items-center"
                                            data-id="8921abe5-8752-52c5-849d-b1f70b46fb2e"
                                        >
                                            <UploadCloud
                                                className="size-8 text-[#2b7fff]"
                                                data-id="6c480e91-f882-5d68-8552-52642a334aeb"
                                            />
                                        </div>
                                        <div
                                            className="flex flex-col gap-1"
                                            data-id="06c8c48d-feb3-5ef9-8f52-8b7e64fe97b4"
                                        >
                                            <h3
                                                className="font-semibold text-lg leading-7"
                                                data-id="203df173-186d-51e0-a5fe-47d35ad0d9da"
                                            >{`Drag & drop files here`}</h3>
                                            <p
                                                className="text-[#71717b] text-sm leading-5"
                                                data-id="c8e63768-c14d-5251-89c4-f4502b4cfaf1"
                                            >
                                                or click to browse from your computer
                                            </p>
                                        </div>
                                        <Button
                                            className="gap-2"
                                            data-id="f02cced5-7f72-5720-b4a6-4d04690a90d4"
                                        >
                                            <FolderOpen
                                                className="size-4"
                                                data-id="a9ce2b58-0f71-5012-b27b-fcfb3f071dee"
                                            />
                                            Browse Files
                                        </Button>
                                        <p
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="9b047245-605c-5aa1-ae1d-11280a687d78"
                                        >
                                            Max 200MB per file · PDF, DOCX, XLSX, PNG, MP4, ZIP
                                        </p>
                                    </div>
                                </Card>
                                <Card
                                    className="p-0 gap-0"
                                    data-id="b9509d9c-bb29-5c54-bed9-aa2c66c39adc"
                                >
                                    <CardHeader
                                        className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-4 flex-row justify-between items-center gap-2"
                                        data-id="8f613f97-5761-5e64-a8ca-770fc01203e7"
                                    >
                                        <CardTitle
                                            className="font-semibold text-sm leading-5"
                                            data-id="f61c37af-15e7-5800-95ca-0f1ec47cd7df"
                                        >
                                            Upload Queue (3 files)
                                        </CardTitle>
                                        <button
                                            className="text-[#71717b] text-xs leading-4"
                                            data-id="6a93f95e-afee-55bb-8641-48f87faa7035"
                                        >
                                            Clear all
                                        </button>
                                    </CardHeader>
                                    <CardContent
                                        className="flex p-0 flex-col gap-0"
                                        data-id="e0fac8b0-c7d8-5aef-aeef-24901f065dcc"
                                    >
                                        <div
                                            className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-4 items-center gap-4"
                                            data-id="e7e8b73c-a774-53c8-8160-ba8abb1b9129"
                                        >
                                            <div
                                                className="size-10 rounded-lg bg-red-50 text-red-600 flex justify-center items-center"
                                                data-id="f8614028-0114-5978-9fbf-33cbe0b4b586"
                                            >
                                                <FileText
                                                    className="size-5"
                                                    data-id="8ced0146-0224-5d21-86f1-3548d11804c1"
                                                />
                                            </div>
                                            <div
                                                className="flex flex-col flex-1 gap-1"
                                                data-id="905d8981-ac17-5a85-b816-9158064398f4"
                                            >
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-id="0b0a065c-22f2-547e-8503-c5a4bd3a27ad"
                                                >
                                                    <span
                                                        className="font-medium text-sm leading-5"
                                                        data-id="d2b30ad5-33c8-5c09-8b88-6fdcce5b3dd0"
                                                    >
                                                        Annual_Report_2024.pdf
                                                    </span>
                                                    <span
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="0b6853b4-6c23-5f64-98d3-cf6acaaffa22"
                                                    >
                                                        4.2 MB
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex items-center gap-2"
                                                    data-id="352c7619-a0d7-534e-a0d6-e12b332eec7f"
                                                >
                                                    <Progress
                                                        value={100}
                                                        className="flex-1 h-1.5"
                                                        data-id="b86a4bfb-f3c3-557c-ba5f-38a6c2c7a6a7"
                                                    />
                                                    <span
                                                        className="font-medium text-emerald-600 text-xs leading-4"
                                                        data-id="21042f65-7e6e-519d-aeee-e4bcb74e92f1"
                                                    >
                                                        100%
                                                    </span>
                                                </div>
                                            </div>
                                            <Badge
                                                className="bg-emerald-100 text-emerald-700 gap-1"
                                                data-id="21ba303a-9e09-522a-8b01-801e32f8e07f"
                                            >
                                                <Check
                                                    className="size-3"
                                                    data-id="641723a2-2154-55d8-87e4-b2afba1a4285"
                                                />
                                                Uploaded
                                            </Badge>
                                            <button
                                                className="text-[#71717b]"
                                                data-id="0bb1de97-231b-5e28-bdd1-2b0a4576cf18"
                                            >
                                                <X
                                                    className="size-4"
                                                    data-id="64fc2706-c328-56b1-88ca-5b347f739e5c"
                                                />
                                            </button>
                                        </div>
                                        <div
                                            className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-4 items-center gap-4"
                                            data-id="773c2d9b-e963-5ae6-854f-8770d6d5b211"
                                        >
                                            <div
                                                className="size-10 rounded-lg bg-blue-50 text-blue-600 flex justify-center items-center"
                                                data-id="6db685cd-1138-5d39-8fd7-707b437996f3"
                                            >
                                                <FileText
                                                    className="size-5"
                                                    data-id="4b4efcb9-f62b-573a-a741-f03aa7510c4c"
                                                />
                                            </div>
                                            <div
                                                className="flex flex-col flex-1 gap-1"
                                                data-id="7adf6b8a-7c4c-5616-b246-5a7068bd2c59"
                                            >
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-id="711cbf60-78a3-5e06-98ad-c084bbed800c"
                                                >
                                                    <span
                                                        className="font-medium text-sm leading-5"
                                                        data-id="30d17d41-d356-5302-b145-ffc4cc6a20a7"
                                                    >
                                                        Project_Brief.docx
                                                    </span>
                                                    <span
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="966748fb-483d-5bfb-9574-d28845642621"
                                                    >
                                                        1.1 MB
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex items-center gap-2"
                                                    data-id="23f19074-3c7d-5627-978c-180a05dd0b61"
                                                >
                                                    <Progress
                                                        value={67}
                                                        className="flex-1 h-1.5"
                                                        data-id="e2c8c7ca-9cb3-5319-8749-d874cb981a14"
                                                    />
                                                    <span
                                                        className="font-medium text-[#2b7fff] text-xs leading-4"
                                                        data-id="4957af0e-987c-5b91-97d4-d4c6a1042169"
                                                    >
                                                        67%
                                                    </span>
                                                </div>
                                            </div>
                                            <span
                                                className="font-medium text-[#2b7fff] text-xs leading-4"
                                                data-id="3b2a95b2-2143-59e9-afc9-c7e1febbe854"
                                            >
                                                Uploading…
                                            </span>
                                            <button
                                                className="text-[#71717b]"
                                                data-id="5c7fa126-5490-538f-96c3-db6186b50b10"
                                            >
                                                <X
                                                    className="size-4"
                                                    data-id="6a38375c-69bf-53ff-8734-9de6dc70bd4a"
                                                />
                                            </button>
                                        </div>
                                        <div
                                            className="flex p-4 items-center gap-4"
                                            data-id="fdebee2d-0d0a-54f3-b260-6db5f847f128"
                                        >
                                            <div
                                                className="size-10 rounded-lg bg-violet-50 text-violet-600 flex justify-center items-center"
                                                data-id="37ce56ce-97b4-5386-9a1d-cbcdadc670d4"
                                            >
                                                <Image
                                                    className="size-5"
                                                    data-id="f4610aac-f3a5-5daa-b18e-0f8615bf9c72"
                                                />
                                            </div>
                                            <div
                                                className="flex flex-col flex-1 gap-1"
                                                data-id="16159334-57b6-5909-9a70-853d59a0e34a"
                                            >
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-id="933e83a0-9f05-5fab-b601-d03d159e4b1b"
                                                >
                                                    <span
                                                        className="font-medium text-sm leading-5"
                                                        data-id="5b1e458a-5935-5b64-8bea-6a3ee12e73a4"
                                                    >
                                                        hero_banner.png
                                                    </span>
                                                    <span
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="18530064-e54c-5142-861e-71d211a775eb"
                                                    >
                                                        890 KB
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex items-center gap-2"
                                                    data-id="40f46bb3-6296-54b1-98ce-3782103744cb"
                                                >
                                                    <Progress
                                                        value={0}
                                                        className="flex-1 h-1.5"
                                                        data-id="268b8fb8-71db-594a-846e-e92ad333e419"
                                                    />
                                                    <span
                                                        className="font-medium text-[#71717b] text-xs leading-4"
                                                        data-id="30974a3d-43b9-527b-b271-53a16ac9051d"
                                                    >
                                                        0%
                                                    </span>
                                                </div>
                                            </div>
                                            <Badge
                                                variant="secondary"
                                                className="gap-1"
                                                data-id="36843d28-bc18-522d-b205-1d01f7f58b37"
                                            >
                                                <Clock
                                                    className="size-3"
                                                    data-id="ebf3c7e9-6461-55b5-a97b-901b34344b36"
                                                />
                                                Queued
                                            </Badge>
                                            <button
                                                className="text-[#71717b]"
                                                data-id="a44574e4-2692-59b0-9af4-e95b560874f6"
                                            >
                                                <X
                                                    className="size-4"
                                                    data-id="1e3c7c0d-e557-5af1-a2d0-c744d738aef5"
                                                />
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div
                                className="col-span-2"
                                data-id="cea9f387-6c54-54e1-9d60-059866697c88"
                            >
                                <Card
                                    className="p-6 gap-4"
                                    data-id="f72be52a-5c33-564c-9d60-9f3348dde409"
                                >
                                    <CardHeader
                                        className="p-0 gap-2"
                                        data-id="96702d5f-39ea-5a32-b734-62bd3b50e78a"
                                    >
                                        <CardTitle
                                            className="font-semibold text-sm leading-5"
                                            data-id="45f69137-9ee9-511f-ac62-443f084dd90a"
                                        >
                                            Preview
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent
                                        className="flex p-0 flex-col gap-4"
                                        data-id="353f72d0-1ffd-5dd3-a2b2-99870edc7437"
                                    >
                                        <div
                                            className="rounded-lg bg-zinc-100 flex justify-center items-center h-48"
                                            data-id="6766e1e7-fd67-5146-aa84-7996f67c918c"
                                        >
                                            <div
                                                className="flex flex-col items-center gap-2"
                                                data-id="31afc5ee-64ba-53be-8c04-16caf1e8c1ee"
                                            >
                                                <div
                                                    className="size-16 rounded-lg bg-red-100 text-red-600 flex justify-center items-center"
                                                    data-id="e4b51381-8b5b-5e9f-a04e-a81707c72671"
                                                >
                                                    <FileText
                                                        className="size-8"
                                                        data-id="f62c0a36-87a1-539e-8929-61e382965494"
                                                    />
                                                </div>
                                                <span
                                                    className="text-[#71717b] text-xs leading-4"
                                                    data-id="1f2109ef-b876-5719-8bf5-80e3a91422e8"
                                                >
                                                    PDF Preview
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col gap-2"
                                            data-id="29441529-c948-5a05-b325-a1650936f6fb"
                                        >
                                            <span
                                                className="font-bold text-sm leading-5"
                                                data-id="db9288b4-bcb1-5ad9-af98-4d7d9add1235"
                                            >
                                                Annual_Report_2024.pdf
                                            </span>
                                            <div
                                                className="rounded-lg border-zinc-200 border-1 border-solid flex p-4 flex-col gap-2"
                                                data-id="e538c872-6320-5d93-8086-b8529e760cbc"
                                            >
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-id="3e34736a-eafe-5f9e-99dd-ce884e39731d"
                                                >
                                                    <span
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="5ec03635-1d4d-55d9-84fd-2b8021d49403"
                                                    >
                                                        Type
                                                    </span>
                                                    <span
                                                        className="font-medium text-xs leading-4"
                                                        data-id="594c1fa7-5397-5980-8ee0-c736bd117759"
                                                    >
                                                        PDF Document
                                                    </span>
                                                </div>
                                                <Separator data-id="8fb535e2-1276-5181-a9a4-4c0614b92cfc" />
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-id="0d3da0a3-41d1-5b6c-b79b-89d3c8b241c0"
                                                >
                                                    <span
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="6dc61a5a-8a23-55c5-b9bd-0ad8a13be77e"
                                                    >
                                                        Size
                                                    </span>
                                                    <span
                                                        className="font-medium text-xs leading-4"
                                                        data-id="548fde42-4972-5d3d-93bf-f41f2daee45a"
                                                    >
                                                        4.2 MB
                                                    </span>
                                                </div>
                                                <Separator data-id="55cae272-ebb5-52c5-a11b-d6a4a6ce8fcb" />
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-id="b1d8f732-4ccf-599f-99a9-08c473f20126"
                                                >
                                                    <span
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="de01dd03-e452-53dd-8eab-4c3c52c52ff9"
                                                    >
                                                        Pages
                                                    </span>
                                                    <span
                                                        className="font-medium text-xs leading-4"
                                                        data-id="9586b7f6-cbe6-55e8-86ac-ce508a2bbad5"
                                                    >
                                                        18
                                                    </span>
                                                </div>
                                                <Separator data-id="7aa58999-80fe-5b56-9685-cf252fef6cfe" />
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-id="11f83dbc-15a0-5f95-befd-867660bab904"
                                                >
                                                    <span
                                                        className="text-[#71717b] text-xs leading-4"
                                                        data-id="9dc448c4-addf-5ec8-8892-776a9ede564b"
                                                    >
                                                        Modified
                                                    </span>
                                                    <span
                                                        className="font-medium text-xs leading-4"
                                                        data-id="c87d0a65-51cb-5705-a7dd-9418a0712cb4"
                                                    >
                                                        Today 14:32
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col gap-2"
                                            data-id="07c3370c-2537-587b-bbf1-99b0d675b282"
                                        >
                                            <label
                                                className="font-medium text-[#71717b] text-xs leading-4"
                                                data-id="b8b750c5-f85e-5b1c-8915-5a796b5e03bd"
                                            >
                                                Destination Folder
                                            </label>
                                            <button
                                                className="rounded-lg bg-white text-sm leading-5 border-zinc-200 border-1 border-solid flex px-3 py-2 justify-between items-center"
                                                data-id="a7bb15fe-15aa-581f-a077-1b8dae69a02f"
                                            >
                                                <span
                                                    className="flex items-center gap-2"
                                                    data-id="80c664d5-662e-584b-90ff-7e2a2ce8495c"
                                                >
                                                    <Folder
                                                        className="size-4 text-[#71717b]"
                                                        data-id="bc468e99-eddb-57a8-be16-53e69c70bba4"
                                                    />
                                                    My Files / Projects
                                                </span>
                                                <ChevronDown
                                                    className="size-4 text-[#71717b]"
                                                    data-id="af69a06e-176e-57e6-8ebc-6c4feae6304e"
                                                />
                                            </button>
                                        </div>
                                    </CardContent>
                                    <CardFooter
                                        className="p-0 gap-2"
                                        data-id="dcdd3370-9c7c-5f62-9153-15d5c8e403a4"
                                    >
                                        <Button
                                            className="gap-2 w-full"
                                            data-id="0e414a94-9a6e-5674-b872-92aa0401fed3"
                                        >
                                            <Upload
                                                className="size-4"
                                                data-id="f0e8c8f2-9432-5b04-976b-be6cda293942"
                                            />
                                            Start Upload
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div
                className="fixed shadow-lg rounded-lg bg-[#2b7fff] text-blue-50 flex right-6 bottom-6 px-4 py-3 items-center gap-3"
                data-id="6bc1c47a-aca3-550d-a5b3-21e96f438858"
            >
                <Info
                    className="size-5"
                    data-id="3f563e89-e563-5ea8-8332-343dd5f77a8e"
                />
                <div
                    className="flex flex-col gap-1"
                    data-id="e8823dc3-2cf3-577c-99d8-78791be233a6"
                >
                    <span
                        className="font-medium text-sm leading-5"
                        data-id="d73850b8-8fcd-5562-8413-183ee8d6cf7c"
                    >
                        Uploading 1 of 3 files…
                    </span>
                    <Progress
                        value={56}
                        className="bg-blue-50/20 w-48 h-1"
                        data-id="6351ae1c-993f-5e0f-8a5b-0969c995971f"
                    />
                </div>
                <button
                    className="text-blue-50/80"
                    data-id="bef92a71-b1cb-52ae-9a75-9d3610ab2a4d"
                >
                    <X
                        className="size-4"
                        data-id="3fd3f84c-59ae-5a5c-8ff1-54083fa3546e"
                    />
                </button>
            </div>
        </div>
    );
}
