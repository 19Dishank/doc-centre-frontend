import { Card } from "./ui/card";
import Loader from "./ui/loader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function DataTable({
    columns,
    data,
    loading,
    emptyMessage = "No data found",
}) {
    return (
        <Card className="p-0 overflow-hidden border-zinc-200 w-full">
            <Table className="w-full table-fixed"> 
                
                <TableHeader className="bg-zinc-50/50">
                    <TableRow>
                        {columns.map((column) => (
                            <TableHead
                                key={column.key}
                                className={`first:pl-4 last:pr-4 text-[#71717b] text-[11px] uppercase tracking-wider font-bold h-10
                                    ${column.width || ""}
                                    ${column.headerClassName || ""}
                                    ${column.align === "right" ? "text-right" : "text-left"}
                                `}
                            >
                                {column.header}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="text-center py-10">
                                <Loader size="sm" />
                            </TableCell>
                        </TableRow>
                    ) : data.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="text-center py-10">
                                {emptyMessage}
                            </TableCell>
                        </TableRow>
                    ) : (
                        data.map((row) => (
                            <TableRow key={row.id}>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.key}
                                        className={`first:pl-4 last:pr-4 truncate
                                            ${column.cellClassName || ""} 
                                            ${column.align === "right" ? "text-right" : "text-left"} 
                                        `}
                                    >
                                        {column.render ? column.render(row) : row[column.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </Card>
    );
}