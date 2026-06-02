import {
    Search,
    Trash2,
    ArchiveRestore,
    Files,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFolder, deleteFile, deleteFolder, fetchBinData, renameFile, renameFolder, restoreFile, restoreFolder } from "@/api/file";
import { useEffect, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { toastNotification } from "@/helper/toastNotification";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NavLink, useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { getRegistryIcon } from "@/helper/getRegistryIcon";
import { formatSize } from "@/helper/formatSize";
import ShareDocumentModal from "@/components/Files/ShareDocumentModal";
import DocumentPreview from "@/components/Files/DocumentPreview";
import ConfirmationModal from "@/components/ConfirmationModel";

export default function RecycleBin() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [tableRows, setTableRows] = useState([]);
    const [renameMode, setRenameMode] = useState(null);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        q: searchParams.get("q") || "",
        sort: searchParams.get("sort") || "",
        type: searchParams.get("type") || "",
    });

    useEffect(() => {
        setSearchParams((prev) => {
            filters.q ? prev.set("q", filters.q) : prev.delete("q");
            filters.sort ? prev.set("sort", filters.sort) : prev.delete("sort");
            filters.type ? prev.set("type", filters.type) : prev.delete("type");
            return prev;
        })
    }, [filters]);

    const getBinData = async () => {
        setLoading(true);
        try {
            const res = await fetchBinData();
            console.log("Bin data:", res);
            setTableRows([...res.data.folders, ...res.data.docs]);
        } catch (error) {
            console.error("Error fetching files:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getBinData();
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [filters]);

    const columns = [
        {
            key: "name",
            header: "Name",
            width: "w-[30%]",
            cellClassName: "font-medium",
            render: (row) => {
                return <FileNameCell
                    row={row}
                    getFiles={getBinData}
                    renameMode={renameMode}
                    setRenameMode={setRenameMode}
                />;
            },
        },
        {
            key: "type",
            header: "Type",
            width: "w-[10%]",
            cellClassName: "uppercase",
            render: (row) => { row?.originalFileName?.split(".").pop() || "Folder" },
        },
        {
            key: "size",
            header: "Size",
            width: "w-[10%]",
            render: (row) => row?.size ? formatSize(row.size) : "—",
        },
        {
            key: "createdAt",
            header: "Uploaded At",
            width: "w-[10%]",
            render: (row) => row?.createdAt ? new Date(row.createdAt).toLocaleDateString() : "—",
        },
        // {
        //     key: "owner",
        //     header: "Owner",
        //     width: "w-[15%]",
        //     cellClassName: "flex items-center gap-2",
        //     render: (row) => <OwnerCell row={row} />,
        // },
        {
            key: "actions",
            header: "",
            width: "w-[20%]",
            align: "right",
            render: (row) => (
                <ActionsCell row={row} getFiles={getBinData} setRenameMode={setRenameMode} />
            ),
        },
    ];

    const sortOptions = [
        { label: "Name (A-Z)", value: "name_asc" },
        { label: "Name (Z-A)", value: "name_desc" },
        { label: "Uploaded (Newest)", value: "createdAt_desc" },
        { label: "Uploaded (Oldest)", value: "createdAt_asc" },
        { label: "Size (Largest)", value: "size_desc" },
        { label: "Size (Smallest)", value: "size_asc" },
    ];

    const typeOptions = [
        { label: "All Types", value: "all" },
        { label: "Folders", value: "folder" },
        { label: "Documents", value: "file" },
    ]

    return (
        <div className="flex flex-col gap-6 w-full max-w-full">

            <div className="flex justify-between border-b border-zinc-100 pb-3">
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-2xl tracking-tight text-zinc-950">Recycle Bin</h1>
                    <p className="text-zinc-500 text-sm">Manage your deleted files and folders.</p>
                </div>
                <NavLink to="/files" className="cursor-pointer mt-auto flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700">
                    <Button variant="outline" className="cursor-pointer">
                        <Files  className="size-4" />
                        Files
                    </Button>
                </NavLink>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="relative flex-1">
                    <Search className="size-4 text-[#71717b] absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input placeholder="Search files…" className="bg-white pl-9 w-full" value={filters.q} onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))} />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <Select name="type" value={filters.type} onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}>
                        <SelectTrigger id="type-select" className="w-full h-10 bg-white text-zinc-900">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent position="popper" className="z-1000">
                            <SelectGroup>
                                <SelectLabel>Select Type</SelectLabel>
                                {typeOptions.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select name="sort" value={filters.sort} onValueChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}>
                        <SelectTrigger id="sort-select" className="w-full h-10 bg-white text-zinc-900">
                            <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent position="popper" className="z-1000">
                            <SelectGroup>
                                <SelectLabel>Select Option</SelectLabel>
                                {sortOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button
                        variant="outline"
                        onClick={() => setFilters({ q: "", sort: "", type: "" })}
                        className="w-full md:w-auto cursor-pointer disabled:cursor-not-allowed!"
                        disabled={!filters.q && !filters.sort && !filters.type}
                    >
                        Clear Filters
                    </Button>
                </div>
            </div>

            <DataTable
                columns={columns}
                data={tableRows}
                loading={loading}
            />

        </div>
    );
}

const ActionsCell = ({ row: item, getFiles }) => {

    const isFolder = !item.originalFileName;
    const { permissionCheck } = usePermissions();
    const [shareDocument, setShareDocument] = useState(null);
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

    const handleDelete = async () => {
        try {
            isFolder
                ? await deleteFolder(item._id)
                : await deleteFile(item._id);
            getFiles();
        } catch (error) {
            console.error("Error deleting :", error);
            toastNotification(error?.response?.data?.message || `Error deleting ${isFolder ? "folder" : "file"}. Please try again.`, "error");
        }
    };

    const restore = async (id) => {
        try {
            isFolder
                ? await restoreFolder(id)
                : await restoreFile(id);
            getFiles();
        } catch (error) {
            console.error("Error restoring :", error);
            toastNotification(error?.response?.data?.message || `Error restoring ${isFolder ? "folder" : "file"}. Please try again.`, "error");
        }
    }

    return (
        <>
            <div className="flex justify-end items-center gap-0.5">

                {permissionCheck(PERMISSIONS.RESTORE_DOCUMENT) && (
                    <Button
                        onClick={() => restore(item._id)}
                        variant="ghost"
                        size="icon"
                        className="size-8 inline-flex cursor-pointer"
                    >
                        <ArchiveRestore className="size-3.5 text-[#71717b]" />
                    </Button>
                )}

                {permissionCheck(PERMISSIONS.PERMANENTLY_DELETE_DOCUMENT) && (
                    <Button
                        onClick={() => setConfirmationModalOpen(true)}
                        variant="ghost"
                        size="icon"
                        className="size-8 text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                        <Trash2 className="size-3.5" />
                    </Button>
                )}
            </div>

            {confirmationModalOpen && (
                <ConfirmationModal
                    setIsOpen={setConfirmationModalOpen}
                    heading={`Delete ${isFolder ? "Folder" : "File"}`}
                    subheading={`Are you sure you want to delete ${item.originalFileName || item.name} ${isFolder ? "Folder" : "File"}? This action cannot be undone.`}
                    onConfirm={handleDelete}
                    onCancel={() => setConfirmationModalOpen(false)}
                    type="danger"
                />
            )}

            {shareDocument && <ShareDocumentModal documentId={shareDocument} setIsOpen={setShareDocument} />}
        </>
    )
}

const FileNameCell = ({ row, setNewFolderRow, parentId, getFiles, setRenameMode, renameMode }) => {

    const [previewDocument, setPreviewDocument] = useState(null);
    const isFolder = !row.originalFileName;
    const displayExtension = row.originalFileName?.split(".").pop();
    const displayName = row.originalFileName ? row.originalFileName.split(".").slice(0, -1).join(".") : row.name;
    const [input, setInput] = useState(displayName);

    const handleKeyDown = async (event) => {

        if (row.isNewFolder) {
            if (event.key === "Enter") {
                await createFolder({ parentFolderId: parentId, name: event.target.value });
                setNewFolderRow(null);
                getFiles();
            } else if (event.key === "Escape") {
                setNewFolderRow(null);
            }
        } else {
            if (event.key === "Enter") {
                isFolder
                    ? await renameFolder(row._id, event.target.value)
                    : await renameFile(row._id, `${event.target.value}.${displayExtension}`);
                setRenameMode(null);
                getFiles();
            } else if (event.key === "Escape") {
                setRenameMode(null);
            }
        }
    };

    const handleChange = (event) => {
        if (row.isNewFolder) {
            setNewFolderRow((prev) => ({
                ...prev,
                name: event.target.value,
            }));
        } else {
            setInput(event.target.value);
        }
    }

    return (
        <>
            <div onClick={() => setPreviewDocument(row._id)} className="cursor-pointer flex items-center gap-3">
                {getRegistryIcon(row)}
                {row.isNewFolder
                    ? <Input
                        className="focus:ring-0!"
                        autoFocus
                        placeholder="Folder name"
                        value={row.name}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onBlur={() => setNewFolderRow(null)}
                    />
                    : renameMode === row._id
                        ? <Input
                            className="focus:ring-0!"
                            autoFocus
                            placeholder={row.originalFileName || row.name}
                            value={input}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            onBlur={() => setRenameMode(null)}
                        />
                        : displayName
                }
            </div>

            {previewDocument && row?.mimeType && <DocumentPreview setIsOpen={setPreviewDocument} url={previewDocument} type={row?.originalFileName?.split(".").pop()} item={row} />}
        </>
    )
}