import {
    Files,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchBinData } from "@/api/file";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { formatSize } from "@/helper/formatSize";
import FileNameCell from "@/components/Files/Cells/FileNameCell";
import ActionsCell from "@/components/RecycleBin/ActionsCell";
import { formatTime } from "@/helper/formatTime";

export default function RecycleBin() {

    const [tableRows, setTableRows] = useState([]);
    const [renameMode, setRenameMode] = useState(null);
    const [loading, setLoading] = useState(true);

    // const [searchParams, setSearchParams] = useSearchParams();
    // const [filters, setFilters] = useState({
    //     q: searchParams.get("q") || "",
    //     sort: searchParams.get("sort") || "",
    //     type: searchParams.get("type") || "",
    // });

    // useEffect(() => {
    //     setSearchParams((prev) => {
    //         filters.q ? prev.set("q", filters.q) : prev.delete("q");
    //         filters.sort ? prev.set("sort", filters.sort) : prev.delete("sort");
    //         filters.type ? prev.set("type", filters.type) : prev.delete("type");
    //         return prev;
    //     })
    // }, [filters]);

    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         getBinData();
    //     }, 500);
    //     return () => clearTimeout(delayDebounceFn);
    // }, [filters]);

    const getBinData = async () => {
        setLoading(true);
        try {
            const res = await fetchBinData();
            setTableRows([...res.data.folders, ...res.data.docs]);
        } catch (error) {
            console.error("Error fetching files:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getBinData();
    }, []);

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
            key: "deletedAt",
            header: "Deleted At",
            width: "w-[10%]",
            render: (row) => formatTime(row.deletedAt),
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
            header: "Actions",
            width: "w-[20%]",
            align: "right",
            render: (row) => (
                <ActionsCell row={row} getFiles={getBinData} setRenameMode={setRenameMode} />
            ),
        },
    ];

    return (
        <div className="flex flex-col gap-6 w-full max-w-full">

            <div className="flex justify-between border-b border-zinc-100 pb-3">
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-2xl md:text-3xl leading-8 tracking-tight text-zinc-950">Recycle Bin</h1>
                    <p className="text-zinc-500 text-sm">Manage your deleted files and folders. These items will be permanently deleted after 7 days.</p>
                </div>
                <NavLink to="/files" className="cursor-pointer mt-auto flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700">
                    <Button variant="outline" className="cursor-pointer">
                        <Files className="size-4" />
                        Files
                    </Button>
                </NavLink>
            </div>

            {/* <FiltersBar filters={filters} setFilters={setFilters}  /> */}

            <DataTable
                columns={columns}
                data={tableRows}
                loading={loading}
            />

        </div>
    );
}
