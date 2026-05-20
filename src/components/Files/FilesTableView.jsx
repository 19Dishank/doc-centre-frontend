import { Download, Pencil, Share2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { getRegistryIcons } from "@/helper/getRegistryIcons";
import Loader from "../ui/loader";
import { formatSize } from "@/helper/formatSize";
import { deleteFile, upload } from "@/api/file";
import { Input } from "../ui/input";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModel";

const FilesTableFormat = ({ parentId, createNewFolder, setCreateNewFolder, setParentId, tableColumns, tableRows, loading, setNavigationBar, getFiles }) => {

    const [currFileId, setCurrFileId] = useState(null);

    const handleClick = (parentId, type, name) => {
        if (type === "folder") {
            setParentId(parentId);
            setNavigationBar((prev) => [...prev, { name, parentId }]);
        }
    };

    const handleDelete = async (fileId) => {
        await deleteFile(fileId);
        setCurrFileId(null);
        getFiles();
    }

    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            await upload({ parentId, name: event.target.value });
            setCreateNewFolder(false);
            getFiles();
        } else if (event.key === "Escape") {
            setCreateNewFolder(false);
        }
    };

    return (
        <>
        <Card className="p-0 overflow-hidden border-zinc-200">
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
                                                    {getRegistryIcons("folder")}
                                                    <div className="flex flex-col min-w-0 cursor-pointer hover:underline">
                                                        <span className="font-semibold text-zinc-950 truncate">
                                                            {/* // Auto-focus on this input and create folder on blur or enter */}
                                                            <Input autoFocus={true} className="focus:ring-0! w-full" placeholder="Folder name..." onKeyDown={handleKeyDown} />
                                                        </span>
                                                        {/* Show small info on mobile that usually takes up columns */}
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
                                    {tableRows.map((file, index) => (
                                        <TableRow key={index} className="hover:bg-zinc-50/50 transition-colors">
                                            <TableCell className="first:pl-4 ">
                                                <div className="flex items-center gap-3 min-w-0">
                                                    {getRegistryIcons(file.type, file.name.split(".").pop())}
                                                    <div className="flex flex-col min-w-0 cursor-pointer hover:underline" onClick={() => handleClick(file._id, file.type, file.name)}>
                                                        <span className="font-semibold text-zinc-950 truncate">{file.name}</span>
                                                        {/* Show small info on mobile that usually takes up columns */}
                                                        <span className="text-[10px] text-zinc-400 md:hidden flex gap-1 items-center">
                                                            {file.type} • {formatSize(file.size) || "Folder"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-[#71717b] text-sm hidden md:table-cell uppercase">{file.type === "file" ? file.name.split(".").pop() : "Folder"}</TableCell>
                                            <TableCell className="text-[#71717b] text-sm hidden md:table-cell">{file.type === "file" ? formatSize(file.size) : "--"}</TableCell>
                                            <TableCell className="text-[#71717b] text-sm whitespace-nowrap">{new Date(file.updatedAt).toLocaleDateString()}</TableCell>
                                            <TableCell className="text-[#71717b] text-sm hidden lg:table-cell">{file.owner}</TableCell>
                                            <TableCell className="text-right pr-4">
                                                <div className="flex justify-end items-center gap-0.5">
                                                    {/* Only show primary action on mobile, rest in a menu if needed */}
                                                    <Button variant="ghost" size="icon" className="size-8 hidden sm:inline-flex cursor-pointer">
                                                        <Share2 className="size-3.5 text-[#71717b]" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="size-8 cursor-pointer">
                                                        <Download className="size-3.5 text-[#71717b]" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="size-8 hidden lg:inline-flex cursor-pointer">
                                                        <Pencil className="size-3.5 text-[#71717b]" />
                                                    </Button>
                                                    <Button onClick={() => setCurrFileId(file._id)} variant="ghost" size="icon" className="size-8 text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer">
                                                        <Trash2 className="size-3.5" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
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

        {currFileId && (
            <ConfirmationModal
                heading="Delete File"
                subheading="Are you sure you want to delete this file? This action cannot be undone."
                onConfirm={() => handleDelete(currFileId)}
                onCancel={() => setCurrFileId(null)}
                type="danger"
            />
        )}
        </>
    );
};

export default FilesTableFormat;