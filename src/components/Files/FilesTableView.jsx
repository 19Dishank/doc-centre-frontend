import { Download, Pencil, Share2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { getRegistryIcons } from "@/helper/getRegistryIcons";

const FilesTableFormat = ({ tableColumns, tableRows }) => {
    return (
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
                        {tableRows.map((row, index) => (
                            <TableRow key={index} className="hover:bg-zinc-50/50 transition-colors">
                                <TableCell className="first:pl-4">
                                    <div className="flex items-center gap-3 min-w-0">
                                        {getRegistryIcons(row.type)}
                                        <div className="flex flex-col min-w-0">
                                            <span className="font-semibold text-zinc-950 truncate">{row.name}</span>
                                            {/* Show small info on mobile that usually takes up columns */}
                                            <span className="text-[10px] text-zinc-400 md:hidden flex gap-1 items-center">
                                                {row.type} • {row.size || "Folder"}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-[#71717b] text-sm hidden md:table-cell">{row.type}</TableCell>
                                <TableCell className="text-[#71717b] text-sm hidden md:table-cell">{row?.size || "—"}</TableCell>
                                <TableCell className="text-[#71717b] text-sm whitespace-nowrap">{row?.modified}</TableCell>
                                <TableCell className="text-[#71717b] text-sm hidden lg:table-cell">{row.owner}</TableCell>
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
                                        <Button variant="ghost" size="icon" className="size-8 text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer">
                                            <Trash2 className="size-3.5" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
};

export default FilesTableFormat;