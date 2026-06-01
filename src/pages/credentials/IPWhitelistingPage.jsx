import {
  Plus,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const IPWhitelistingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8 tracking-tight text-zinc-950">Allowed IPs</h1>
        <p className="text-zinc-500 text-sm leading-5">Restrict API access to specific IP addresses. Leave empty to allow all.</p>
      </div>

      <div className="flex p-0 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="font-medium text-sm text-zinc-950">Add IP Address</Label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
            <Input
              placeholder="e.g. 192.168.1.1 or 10.0.0.0/24"
              className="font-mono text-sm h-10 flex-1 min-w-0 w-full"
            />
            <Input placeholder="Label (optional)" className="text-sm h-10 w-full sm:w-40 md:w-48" />
            <Button className="shrink-0 bg-[#2b7fff] text-blue-50 gap-2 h-10 w-full sm:w-auto">
              <Plus className="size-4" /> Add IP
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 overflow-hidden">
          <div className="overflow-x-auto w-full">
            <Table className="min-w-137.5 lg:min-w-full">
              <TableHeader>
                <TableRow className="bg-zinc-100/40">
                  <TableHead className="text-xs">IP Address</TableHead>
                  <TableHead className="text-xs">Label</TableHead>
                  <TableHead className="text-xs hidden sm:table-cell">Added</TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                  <TableHead className="text-right text-xs">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { ip: "192.168.1.100", label: "Office Network", date: "Feb 12, 2024", active: true },
                  { ip: "10.0.0.0/24", label: "VPN Range", date: "Jan 28, 2024", active: true },
                  { ip: "203.0.113.42", label: "CI/CD Server", date: "Mar 1, 2024", active: false }
                ].map((row, i) => (
                  <TableRow key={i} className="hover:bg-zinc-50/50 transition-colors">
                    <TableCell className="font-mono text-xs text-zinc-900">{row.ip}</TableCell>
                    <TableCell className="text-sm text-zinc-700 truncate max-w-30 sm:max-w-none">{row.label}</TableCell>
                    <TableCell className="text-zinc-500 text-xs hidden sm:table-cell whitespace-nowrap">{row.date}</TableCell>
                    <TableCell>
                      <Badge variant={row.active ? "default" : "secondary"} className={row.active ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 pointer-events-none" : "pointer-events-none"}>
                        {row.active ? "Active" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="size-8 text-red-500 hover:text-red-700 hover:bg-red-50">
                        <Trash2 className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPWhitelistingPage;