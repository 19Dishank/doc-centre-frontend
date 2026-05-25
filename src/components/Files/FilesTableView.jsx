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

    return (
        <>
            <Card className="p-0 overflow-x-hidden border-zinc-200">
                <div className="overflow-x-auto w-full">
                    <Table className="min-w-200 lg:min-w-full">
                        <TableHeader className="bg-zinc-50/50">
                            <TableRow>
                                {tableColumns.map((column) => (
                                    <TableHead
                                        key={column}
                                        className={`text-[#71717b] text-[11px] uppercase tracking-wider font-bold h-10 first:pl-4 
                                        ${column === "Actions" ? "text-right pr-4" : ""}
                                        ${column === "Type" || column === "Size" ? "hidden md:table-cell" : ""}
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
                                : (tableRows.length > 0 || createNewFolder)
                                    ? <>
                                        {createNewFolder && (
                                            <TableRow className="hover:bg-zinc-50/50 transition-colors">
                                                <TableCell className="first:pl-4 ">
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        {getRegistryIcon("folder")}
                                                        <div className="flex flex-col min-w-0 cursor-pointer hover:underline">
                                                            <span className="font-semibold text-zinc-950 truncate">
                                                                <Input autoFocus={true} onBlur={() => setCreateNewFolder(false)} className="focus:ring-0! w-full" placeholder="Folder name..." onKeyDown={handleKeyDown} />
                                                            </span>
                                                            <span className="text-[10px] text-zinc-400 md:hidden flex gap-1 items-center">
                                                                Folder
                                                            </span>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-[#71717b] text-sm hidden md:table-cell uppercase">Folder</TableCell>
                                                <TableCell className="text-[#71717b] text-sm hidden md:table-cell">--</TableCell>
                                                <TableCell className="text-[#71717b] text-sm whitespace-nowrap">{new Date().toLocaleDateString()}</TableCell>
                                            </TableRow>
                                        )}
                                        {tableRows.map((item) => (
                                            <DisplayRow key={item._id} item={item} setParentId={setParentId} setNavigationBar={setNavigationBar} getFiles={getFiles} />
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