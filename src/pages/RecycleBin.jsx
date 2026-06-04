/* eslint-disable no-unused-vars */
import {
    Search,
    Files,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchBinData } from "@/api/file";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NavLink, useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { formatSize } from "@/helper/formatSize";
import FileNameCell from "@/components/Files/Cells/FileNameCell";
import ActionsCell from "@/components/RecycleBin/ActionsCell";

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
                    showPreview={false}
                />;
            },
        },
        {
            key: "type",
            header: "Type",
            width: "w-[10%]",
            cellClassName: "uppercase",
            render: (row) => row?.originalFileName ? row?.originalFileName.split(".").pop() : "Folder",
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

            {/* <div className="flex flex-col gap-3 md:flex-row md:items-center">
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
            </div> */}

            <DataTable
                columns={columns}
                data={tableRows}
                loading={loading}
            />

        </div>
    );
}
