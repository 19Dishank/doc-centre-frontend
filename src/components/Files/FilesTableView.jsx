import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Loader from "../ui/loader";
import { createFolder } from "@/api/file";
import { Input } from "../ui/input";
import { getRegistryIcon } from "@/helper/getRegistryIcon";
import DisplayRow from "./DisplayRow";

const FilesTableFormat = ({ parentId, createNewFolder, setCreateNewFolder, setParentId, tableColumns, tableRows, loading, setNavigationBar, getFiles }) => {

    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            await createFolder({ parentFolderId: parentId, name: event.target.value });
            setCreateNewFolder(false);
            getFiles();
        } else if (event.key === "Escape") {
            setCreateNewFolder(false);
        }
    };

    // Helper to enforce identical widths on headers and structural cells
    const getCellWidthClass = (columnName) => {
        switch (columnName.toLowerCase()) {
            case "name": return "w-[30%]";
            case "type": return "w-[10%]";
            case "size": return "w-[10%]";
            case "last modified": return "w-[10%]";
            case "actions": return "w-[20%]";
            default: return "";
        }
    };

    const handleBack = () => setNavigationBar((prev) => {
        setParentId(prev[prev.length - 2]?.parentId || "");
        return prev.slice(0, -1)
    });

    return (
        <>
            <Card className="p-0 overflow-x-hidden border-zinc-200">
                <div className="overflow-x-auto w-full">
                    {/* Added 'table-fixed' to force layout to respect structural width configurations */}
                    <Table className="min-w-200 lg:min-w-full table-fixed">
                        <TableHeader className="bg-zinc-50/50">
                            <TableRow>
                                {tableColumns.map((column) => (
                                    <TableHead
                                        key={column}
                                        className={`text-[#71717b] text-[11px] uppercase table-cell tracking-wider font-bold h-10 first:pl-4 last:pr-4
                                        ${getCellWidthClass(column)}
                                        ${column === "Actions" ? "text-right pr-4" : ""}
                                    `}
                                    >
                                        {column}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading
                                ? <TableRow>
                                    <TableCell colSpan={tableColumns.length} className="text-center py-10">
                                        <Loader />
                                    </TableCell>
                                </TableRow>
                                : ((tableRows.length > 0 && !parentId) || createNewFolder || parentId)
                                    ? <>
                                        {parentId && (
                                            <TableRow onClick={handleBack} className="hover:bg-zinc-50/50 transition-colors">
                                                <TableCell className="flex gap-3 pl-4 cursor-pointer font-black">
                                                    {getRegistryIcon("folder")}
                                                    <div className="flex items-center gap-1 text-[#71717b]">
                                                        <span>.</span>
                                                        <span>.</span>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                        {createNewFolder && (
                                            <TableRow className="hover:bg-zinc-50/50 transition-colors">
                                                <TableCell className={`first:pl-4 ${getCellWidthClass("Name")}`}>
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        {getRegistryIcon("folder")}
                                                        <div className="flex flex-col min-w-0 cursor-pointer hover:underline w-full">
                                                            <span className="font-semibold text-zinc-950 truncate">
                                                                <Input autoFocus={true} onBlur={() => setCreateNewFolder(false)} className="focus:ring-0! w-full" placeholder="Folder name..." onKeyDown={handleKeyDown} />
                                                            </span>
                                                            <span className="text-[10px] text-zinc-400 md:hidden flex gap-1 items-center">
                                                                Folder
                                                            </span>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className={`text-[#71717b] text-sm table-cell uppercase ${getCellWidthClass("Type")}`}>Folder</TableCell>
                                                <TableCell className={`text-[#71717b] text-sm table-cell ${getCellWidthClass("Size")}`}>--</TableCell>
                                                <TableCell className={`text-[#71717b] text-sm whitespace-nowrap ${getCellWidthClass("Last Modified")}`}>{new Date().toLocaleDateString()}</TableCell>
                                                {/* Added placeholder cell to preserve layout symmetry when 'Actions' header is active */}
                                                {tableColumns.includes("Actions") && <TableCell className={getCellWidthClass("Actions")}></TableCell>}
                                            </TableRow>
                                        )}
                                        {tableRows.map((item) => (
                                            <DisplayRow
                                                key={item._id}
                                                item={item}
                                                setParentId={setParentId}
                                                setNavigationBar={setNavigationBar}
                                                getFiles={getFiles}
                                                getCellWidthClass={getCellWidthClass} // Pass down to lock standard row widths
                                            />
                                        ))}
                                    </>
                                    : <TableRow>
                                        <TableCell colSpan={tableColumns.length} className="text-center py-10">
                                            No files or folders found.
                                        </TableCell>
                                    </TableRow>
                            }
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </>
    );
};

export default FilesTableFormat;