import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BarChart2,
  BookOpen,
  Copy,
  Download,
  Eye,
  FileCode,
  FileText,
  LifeBuoy,
  MessageCircle,
  Package,
  Plus,
  RefreshCw,
  Shield,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ApiAccess() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8 tracking-tight text-zinc-950">API Access</h1>
        <p className="text-zinc-500 text-sm leading-5">Manage your API keys and monitor usage.</p>
      </div>

      {/* 1. API Key Control Panel */}
      <Card className="p-4 sm:p-6 flex flex-col gap-4">
        <CardHeader className="p-0 gap-1">
          <CardTitle className="text-base leading-6">API Key</CardTitle>
          <CardDescription className="text-sm leading-5 text-zinc-500">
            Use this key to authenticate API requests.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex p-0 flex-col gap-4">
          <div className="rounded-lg bg-amber-50 border-amber-200 border flex p-3 items-start gap-2">
            <AlertTriangle className="size-4 shrink-0 text-amber-600 mt-0.5" />
            <p className="text-amber-900 text-sm leading-5">
              Keep your API key secret. Never expose it in client-side code or public repositories.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-medium text-sm leading-5 text-zinc-950">API Key</Label>
            
            {/* Input Row Wrapper: Wraps action items dynamically on smaller screens */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <div className="flex items-center gap-2 flex-1 w-full">
                <Input
                  value="••••••••••••••••••••••••••••sk_live_a3f9"
                  readOnly={true}
                  className="font-mono text-sm leading-5 flex-1 min-w-0 bg-zinc-50"
                />
                <Button variant="outline" size="icon" className="shrink-0 size-10">
                  <Copy className="size-4 text-[#2b7fff]" />
                </Button>
                <Button variant="outline" className="shrink-0 gap-2 h-10 md:hidden">
                  <Eye className="size-4" /> Reveal
                </Button>
              </div>

              {/* Desktop inline, mobile grouped stack elements */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Button variant="outline" className="shrink-0 gap-2 flex-1 md:flex-initial h-10 hidden md:inline-flex">
                  <Eye className="size-4" /> Reveal
                </Button>
                <Button variant="outline" className="shrink-0 text-[#e7000b] hover:bg-red-50 hover:text-red-700 gap-2 flex-1 md:flex-initial h-10">
                  <RefreshCw className="size-4" /> Regenerate <span className="hidden sm:inline">Key</span>
                </Button>
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-1">
              Regenerating will invalidate your current key immediately.
            </p>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-xs">Created</span>
              <span className="font-medium text-sm text-zinc-950">Mar 5, 2024</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-xs">Last used</span>
              <span className="font-medium text-sm text-zinc-950">2 hours ago</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Usage & Performance Overview */}
      <Card className="p-4 sm:p-6 flex flex-col gap-6">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <BarChart2 className="size-4 text-[#2b7fff]" />
            <CardTitle className="text-base leading-6">Usage This Month</CardTitle>
          </div>
          <CardDescription className="text-sm text-zinc-500">
            Track your API usage and remaining quota.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex p-0 flex-col gap-6">
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

          {/* Progress Bar Container */}
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

          {/* Request Logs Sub-Section */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm text-zinc-950">Request Log</h3>
              <span className="text-zinc-500 text-xs">Last 5 requests</span>
            </div>
            
            <div className="rounded-lg border border-zinc-200 overflow-hidden">
              <div className="overflow-x-auto w-full">
                <Table className="min-w-[600px] lg:min-w-full">
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
                        <TableCell className="font-mono text-xs text-zinc-900 truncate max-w-[180px] sm:max-w-none">{log.path}</TableCell>
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
        </CardContent>
        
        <CardFooter className="px-0 pb-0 bg-white flex flex-col sm:flex-row justify-end gap-2 border-t pt-4">
          <Button variant="outline" className="gap-2 w-full sm:w-auto h-9">
            <Download className="size-4" /> Download CSV
          </Button>
          <Button variant="outline" className="gap-2 w-full sm:w-auto h-9">
            <FileText className="size-4" /> View Full Logs
          </Button>
        </CardFooter>
      </Card>

      {/* 3. IP Address Configurations Area */}
      <Card className="p-4 sm:p-6 flex flex-col gap-4">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <Shield className="size-4 text-[#2b7fff]" />
            <CardTitle className="text-base leading-6">Allowed IPs</CardTitle>
          </div>
          <CardDescription className="text-sm text-zinc-500">
            Restrict API access to specific IP addresses. Leave empty to allow all.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex p-0 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-medium text-sm text-zinc-950">Add IP Address</Label>
            
            {/* Input Stack: Stacks to individual inputs on phones/tablets */}
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
              <Table className="min-w-[550px] lg:min-w-full">
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
                      <TableCell className="text-sm text-zinc-700 truncate max-w-[120px] sm:max-w-none">{row.label}</TableCell>
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
        </CardContent>
      </Card>

      {/* 4. External Resource Cards Grid */}
      <Card className="p-4 sm:p-6 flex flex-col gap-4">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <BookOpen className="size-4 text-[#2b7fff]" />
            <CardTitle className="text-base leading-6">Documentation & Resources</CardTitle>
          </div>
          <CardDescription className="text-sm text-zinc-500">
            Quick links to help you get started and integrate with our API.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex p-0 flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: <FileCode className="size-4 text-[#2b7fff]" />, title: "API Documentation", desc: "Reference for all endpoints, parameters, and responses." },
              { icon: <Package className="size-4 text-[#2b7fff]" />, title: "SDKs & Libraries", desc: "Official client libraries for Node.js, Python, Go, Ruby." },
              { icon: <Activity className="size-4 text-emerald-700" />, title: "Status Page", desc: "All systems operational. View incident history.", accent: "bg-emerald-50" },
              { icon: <FileText className="size-4 text-purple-600" />, title: "Code Examples", desc: "Sample integrations and starter projects on GitHub.", accent: "bg-purple-50" }
            ].map((item, index) => (
              <a href="#" key={index} className="rounded-lg bg-white border border-zinc-200 flex p-4 items-start gap-3 hover:bg-zinc-50/50 transition-colors group">
                <div className={`size-9 shrink-0 rounded-lg flex justify-center items-center ${item.accent || 'bg-[#2b7fff]/10'}`}>
                  {item.icon}
                </div>
                <div className="flex flex-col flex-1 gap-0.5 min-w-0">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-medium text-sm text-zinc-950 group-hover:text-[#2b7fff] transition-colors truncate">{item.title}</span>
                    <ArrowUpRight className="size-4 text-zinc-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-zinc-500 text-xs leading-normal line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </span>
                </div>
              </a>
            ))}
          </div>
          
          <Separator />
          
          {/* Help Banner Box */}
          <div className="rounded-lg bg-[#2b7fff]/5 flex flex-col sm:flex-row p-4 justify-between items-start sm:items-center gap-4">
            <div className="flex items-start sm:items-center gap-3 min-w-0">
              <div className="size-9 shrink-0 rounded-full bg-[#2b7fff]/10 flex justify-center items-center mt-0.5 sm:mt-0">
                <LifeBuoy className="size-4 text-[#2b7fff]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-sm text-zinc-950">Need help?</span>
                <span className="text-zinc-500 text-xs leading-normal">
                  Reach out to our developer support team — typically replies in under 4 hours.
                </span>
              </div>
            </div>
            <Button className="shrink-0 bg-[#2b7fff] text-blue-50 gap-2 w-full sm:w-auto h-10">
              <MessageCircle className="size-4" /> Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Meta Footer Details Links */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-2 pb-4 border-t border-zinc-100">
        <span className="text-zinc-400 text-xs order-2 sm:order-1 text-center sm:text-left">
          Last updated Mar 14, 2026 · API v1.4.2
        </span>
        <div className="flex items-center justify-center gap-3 order-1 sm:order-Order-2">
          <Button variant="ghost" className="text-zinc-500 hover:text-zinc-950 text-xs gap-1.5 h-8 px-2">
            <FileText className="size-3.5" /> Changelog
          </Button>
          <Button variant="ghost" className="text-zinc-500 hover:text-zinc-950 text-xs gap-1.5 h-8 px-2">
            <Shield className="size-3.5" /> Security
          </Button>
        </div>
      </div>
    </div>
  );
}