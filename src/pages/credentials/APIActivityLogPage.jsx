import {
    Download,
    FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const APIActivityLogPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-2xl leading-8 tracking-tight text-zinc-950">Activity Logs</h1>
                <p className="text-zinc-500 text-sm leading-5">View and manage your API activity logs.</p>
            </div>

            <div className="flex p-0 flex-col gap-6">
                {/* Metrics Stack Grid: Collapses to single cards sequentially */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="shadow-none bg-zinc-100/40 p-4 flex flex-col gap-2">
                        <span className="text-zinc-500 text-xs">Requests Made</span>
                        <div className="flex justify-between items-center gap-2">
                            <span className="font-semibold text-xl sm:text-2xl tracking-tight">892,341</span>
                            <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] pointer-events-none">+12%</Badge>
                        </div>
                    </Card>

                    <Card className="shadow-none bg-zinc-100/40 p-4 flex flex-col gap-2">
                        <span className="text-zinc-500 text-xs">Rate Limit</span>
                        <div className="flex justify-between items-center gap-2">
                            <span className="font-semibold text-xl sm:text-2xl tracking-tight">
                                10,000<span className="font-normal text-zinc-500 text-xs sm:text-sm ml-1">req/mo</span>
                            </span>
                            <Badge variant="secondary" className="pointer-events-none">Pro</Badge>
                        </div>
                    </Card>

                    <Card className="shadow-none bg-zinc-100/40 p-4 flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
                        <span className="text-zinc-500 text-xs">Remaining Quota</span>
                        <div className="flex justify-between items-center gap-2">
                            <span className="font-semibold text-xl sm:text-2xl tracking-tight">9,107,659</span>
                            <Badge className="bg-emerald-100 text-emerald-700 pointer-events-none">91.1%</Badge>
                        </div>
                    </Card>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                        <Label className="text-zinc-950">Monthly Usage</Label>
                        <span className="text-zinc-500">8.9%</span>
                    </div>
                    <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                        <div className="rounded-full bg-[#2b7fff] h-full transition-all duration-300" style={{ width: "8.9%" }} />
                    </div>
                    <span className="text-zinc-500 text-xs">892K / 10M requests</span>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-sm text-zinc-950">Request Log</h3>
                        <span className="text-zinc-500 text-xs">Last 5 requests</span>
                    </div>

                    <div className="rounded-lg border border-zinc-200 overflow-hidden">
                        <div className="overflow-x-auto w-full">
                            <Table className="min-w-150 lg:min-w-full">
                                <TableHeader>
                                    <TableRow className="bg-zinc-100/40">
                                        <TableHead className="text-xs">Endpoint</TableHead>
                                        <TableHead className="text-xs">Method</TableHead>
                                        <TableHead className="text-xs">Status</TableHead>
                                        <TableHead className="text-xs hidden sm:table-cell">Timestamp</TableHead>
                                        <TableHead className="text-right text-xs">Latency</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { path: "/v1/files/upload", method: "POST", status: "200", badge: "bg-emerald-100 text-emerald-700", time: "2024-03-14 14:32:08", latency: "142ms" },
                                        { path: "/v1/users/me", method: "GET", status: "200", badge: "bg-emerald-100 text-emerald-700", time: "2024-03-14 14:30:51", latency: "38ms" },
                                        { path: "/v1/files/list", method: "GET", status: "200", badge: "bg-emerald-100 text-emerald-700", time: "2024-03-14 14:28:19", latency: "94ms" },
                                        { path: "/v1/auth/token", method: "POST", status: "401", badge: "bg-red-100 text-red-700", time: "2024-03-14 14:25:02", latency: "21ms" },
                                        { path: "/v1/files/share", method: "POST", status: "200", badge: "bg-emerald-100 text-emerald-700", time: "2024-03-14 14:21:47", latency: "186ms" }
                                    ].map((log, i) => (
                                        <TableRow key={i} className="hover:bg-zinc-50/50 transition-colors">
                                            <TableCell className="font-mono text-xs text-zinc-900 truncate max-w-45 sm:max-w-none">{log.path}</TableCell>
                                            <TableCell>
                                                <Badge variant={log.method === "GET" ? "secondary" : "default"} className={`font-mono text-[10px] ${log.method === "POST" ? "bg-[#2b7fff]/10 text-[#2b7fff] hover:bg-[#2b7fff]/10" : ""}`}>
                                                    {log.method}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`font-mono text-[10px] pointer-events-none ${log.badge}`}>{log.status}</Badge>
                                            </TableCell>
                                            <TableCell className="text-zinc-500 text-xs whitespace-nowrap hidden sm:table-cell">{log.time}</TableCell>
                                            <TableCell className="text-right text-xs text-zinc-600 font-medium whitespace-nowrap">{log.latency}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-0 pb-0 bg-white flex flex-col sm:flex-row justify-end gap-2 border-t pt-4">
                <Button variant="outline" className="gap-2 w-full sm:w-auto h-9">
                    <Download className="size-4" /> Download CSV
                </Button>
                <Button variant="outline" className="gap-2 w-full sm:w-auto h-9">
                    <FileText className="size-4" /> View Full Logs
                </Button>
            </div>
        </div>
    );
};

export default APIActivityLogPage;