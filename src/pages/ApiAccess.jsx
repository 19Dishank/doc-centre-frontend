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
    <div className="flex w-full h-fit">
      <div className="flex flex-col flex-1">
        <main className="bg-zinc-100/50 px-8 pt-8 pb-12 flex-1">
          <div className="max-w-5xl flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl leading-8 tracking-tight">API Access</h1>
              <p className="text-[#71717b] text-sm leading-5">Manage your API keys and monitor usage.</p>
            </div>
            <Card className="p-6 gap-4">
              <CardHeader className="p-0 gap-1">
                <CardTitle className="text-base leading-6">API Key</CardTitle>
                <CardDescription className="text-sm leading-5">
                  Use this key to authenticate API requests.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-4">
                <div className="rounded-lg bg-amber-50 border-amber-200 border border-solid flex p-3 items-start gap-2">
                  <AlertTriangle className="size-4 shrink-0 text-amber-600 mt-0.5" />
                  <p className="text-amber-900 text-sm leading-5">
                    Keep your API key secret. Never expose it in client-side code or public repositories.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">API Key</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      value="••••••••••••••••••••••••••••sk_live_a3f9"
                      readOnly={true}
                      className="font-mono text-sm leading-5 flex-1"
                    />
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Copy className="size-4 text-[#2b7fff]" />
                    </Button>
                    <Button variant="outline" className="shrink-0 gap-2">
                      <Eye className="size-4" />
                      Reveal
                    </Button>
                    <Button variant="outline" className="shrink-0 text-[#e7000b] gap-2">
                      <RefreshCw className="size-4" />
                      Regenerate API Key
                    </Button>
                  </div>
                  <p className="text-[#71717b] text-xs leading-4">
                    Regenerating will invalidate your current key immediately.
                  </p>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#71717b] text-xs leading-4">Created</span>
                    <span className="font-medium text-sm leading-5">Mar 5, 2024</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#71717b] text-xs leading-4">Last used</span>
                    <span className="font-medium text-sm leading-5">2 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 gap-6">
              <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                  <BarChart2 className="size-4 text-[#2b7fff]" />
                  <CardTitle className="text-base leading-6">Usage This Month</CardTitle>
                </div>
                <CardDescription className="text-sm leading-5">
                  Track your API usage and remaining quota.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="shadow-none bg-zinc-100/40 p-4 gap-2">
                    <span className="text-[#71717b] text-xs leading-4">Requests Made</span>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-2xl leading-8">892,341</span>
                      <Badge className="bg-[#2b7fff]/10 text-[#2b7fff]">+12%</Badge>
                    </div>
                  </Card>
                  <Card className="shadow-none bg-zinc-100/40 p-4 gap-2">
                    <span className="text-[#71717b] text-xs leading-4">Rate Limit</span>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-2xl leading-8">
                        10,000
                        <span className="font-normal text-[#71717b] text-sm leading-5">req/mo</span>
                      </span>
                      <Badge variant="secondary">Pro Plan</Badge>
                    </div>
                  </Card>
                  <Card className="shadow-none bg-zinc-100/40 p-4 gap-2">
                    <span className="text-[#71717b] text-xs leading-4">Remaining Quota</span>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-2xl leading-8">9,107,659</span>
                      <Badge className="bg-emerald-100 text-emerald-700">91.1%</Badge>
                    </div>
                  </Card>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Label className="font-medium text-sm leading-5">Monthly Usage</Label>
                    <span className="font-medium text-[#71717b] text-sm leading-5">8.9%</span>
                  </div>
                  <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                    <div className="rounded-full bg-[#2b7fff] h-full" style={{ width: "8.9%" }} />
                  </div>
                  <span className="text-[#71717b] text-xs leading-4">892K / 10M requests</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm leading-5">Request Log</h3>
                    <span className="text-[#71717b] text-xs leading-4">Last 5 requests</span>
                  </div>
                  <div className="rounded-lg border-zinc-200 border border-solid overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-zinc-100/40">
                          <TableHead className="text-xs leading-4">Endpoint</TableHead>
                          <TableHead className="text-xs leading-4">Method</TableHead>
                          <TableHead className="text-xs leading-4">Status</TableHead>
                          <TableHead className="text-xs leading-4">Timestamp</TableHead>
                          <TableHead className="text-right text-xs leading-4">Latency</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-mono text-xs leading-4">/v1/files/upload</TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-[#2b7fff]/10 text-[#2b7fff] text-xs leading-4">POST</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4">200</Badge>
                          </TableCell>
                          <TableCell className="text-[#71717b] text-xs leading-4">2024-03-14 14:32:08</TableCell>
                          <TableCell className="text-right text-xs leading-4">142ms</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono text-xs leading-4">/v1/users/me</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="font-mono text-xs leading-4">
                              GET
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4">200</Badge>
                          </TableCell>
                          <TableCell className="text-[#71717b] text-xs leading-4">2024-03-14 14:30:51</TableCell>
                          <TableCell className="text-right text-xs leading-4">38ms</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono text-xs leading-4">/v1/files/list</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="font-mono text-xs leading-4">
                              GET
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4">200</Badge>
                          </TableCell>
                          <TableCell className="text-[#71717b] text-xs leading-4">2024-03-14 14:28:19</TableCell>
                          <TableCell className="text-right text-xs leading-4">94ms</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono text-xs leading-4">/v1/auth/token</TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-[#2b7fff]/10 text-[#2b7fff] text-xs leading-4">POST</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-red-100 text-red-700 text-xs leading-4">401</Badge>
                          </TableCell>
                          <TableCell className="text-[#71717b] text-xs leading-4">2024-03-14 14:25:02</TableCell>
                          <TableCell className="text-right text-xs leading-4">21ms</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono text-xs leading-4">/v1/files/share</TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-[#2b7fff]/10 text-[#2b7fff] text-xs leading-4">POST</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className="font-mono bg-emerald-100 text-emerald-700 text-xs leading-4">200</Badge>
                          </TableCell>
                          <TableCell className="text-[#71717b] text-xs leading-4">2024-03-14 14:21:47</TableCell>
                          <TableCell className="text-right text-xs leading-4">186ms</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 justify-end gap-2">
                <Button variant="outline" className="gap-2">
                  <Download className="size-4" />
                  Download CSV
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="size-4" />
                  View Full Logs
                </Button>
              </CardFooter>
            </Card>
            <Card className="p-6 gap-4">
              <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-[#2b7fff]" />
                  <CardTitle className="text-base leading-6">Allowed IPs</CardTitle>
                </div>
                <CardDescription className="text-sm leading-5">
                  Restrict API access to specific IP addresses. Leave empty to allow all.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">Add IP Address</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="e.g. 192.168.1.1 or 10.0.0.0/24"
                      className="font-mono text-sm leading-5 flex-1"
                    />
                    <Input placeholder="Label (optional)" className="text-sm leading-5 w-48" />
                    <Button className="shrink-0 bg-[#2b7fff] text-blue-50 gap-2">
                      <Plus className="size-4" />
                      Add IP
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border-zinc-200 border border-solid overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-zinc-100/40">
                        <TableHead className="text-xs leading-4">IP Address</TableHead>
                        <TableHead className="text-xs leading-4">Label</TableHead>
                        <TableHead className="text-xs leading-4">Added</TableHead>
                        <TableHead className="text-xs leading-4">Status</TableHead>
                        <TableHead className="text-right text-xs leading-4">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono text-xs leading-4">192.168.1.100</TableCell>
                        <TableCell className="text-sm leading-5">Office Network</TableCell>
                        <TableCell className="text-[#71717b] text-xs leading-4">Feb 12, 2024</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-100 text-emerald-700 text-xs leading-4">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="size-8">
                            <Trash2 className="size-4 text-[#e7000b]" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono text-xs leading-4">10.0.0.0/24</TableCell>
                        <TableCell className="text-sm leading-5">VPN Range</TableCell>
                        <TableCell className="text-[#71717b] text-xs leading-4">Jan 28, 2024</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-100 text-emerald-700 text-xs leading-4">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="size-8">
                            <Trash2 className="size-4 text-[#e7000b]" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono text-xs leading-4">203.0.113.42</TableCell>
                        <TableCell className="text-sm leading-5">CI/CD Server</TableCell>
                        <TableCell className="text-[#71717b] text-xs leading-4">Mar 1, 2024</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs leading-4">
                            Pending
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="size-8">
                            <Trash2 className="size-4 text-[#e7000b]" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 gap-4">
              <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#2b7fff]" />
                  <CardTitle className="text-base leading-6">{`Documentation & Resources`}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-5">
                  Quick links to help you get started and integrate with our API.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <a className="rounded-lg bg-white border-zinc-200 border border-solid flex p-4 items-start gap-3">
                    <div className="size-9 shrink-0 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                      <FileCode className="size-4 text-[#2b7fff]" />
                    </div>
                    <div className="flex flex-col flex-1 gap-0.5">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm leading-5">API Documentation</span>
                        <ArrowUpRight className="size-4 text-[#71717b]" />
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        Reference for all endpoints, parameters, and responses.
                      </span>
                    </div>
                  </a>
                  <a className="rounded-lg bg-white border-zinc-200 border border-solid flex p-4 items-start gap-3">
                    <div className="size-9 shrink-0 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                      <Package className="size-4 text-[#2b7fff]" />
                    </div>
                    <div className="flex flex-col flex-1 gap-0.5">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm leading-5">{`SDKs & Libraries`}</span>
                        <ArrowUpRight className="size-4 text-[#71717b]" />
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        Official client libraries for Node.js, Python, Go, Ruby.
                      </span>
                    </div>
                  </a>
                  <a className="rounded-lg bg-white border-zinc-200 border border-solid flex p-4 items-start gap-3">
                    <div className="size-9 shrink-0 rounded-lg bg-emerald-100 flex justify-center items-center">
                      <Activity className="size-4 text-emerald-700" />
                    </div>
                    <div className="flex flex-col flex-1 gap-0.5">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm leading-5">Status Page</span>
                        <ArrowUpRight className="size-4 text-[#71717b]" />
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        All systems operational. View incident history.
                      </span>
                    </div>
                  </a>
                  <a className="rounded-lg bg-white border-zinc-200 border border-solid flex p-4 items-start gap-3">
                    <div className="flex flex-col flex-1 gap-0.5">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm leading-5">Code Examples</span>
                        <ArrowUpRight className="size-4 text-[#71717b]" />
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        Sample integrations and starter projects on GitHub.
                      </span>
                    </div>
                  </a>
                </div>
                <Separator />
                <div className="rounded-lg bg-[#2b7fff]/5 flex p-4 justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 shrink-0 rounded-full bg-[#2b7fff]/10 flex justify-center items-center">
                      <LifeBuoy className="size-4 text-[#2b7fff]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">Need help?</span>
                      <span className="text-[#71717b] text-xs leading-4">
                        Reach out to our developer support team — typically replies in under 4 hours.
                      </span>
                    </div>
                  </div>
                  <Button className="shrink-0 bg-[#2b7fff] text-blue-50 gap-2">
                    <MessageCircle className="size-4" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="flex pt-2 justify-between items-center">
              <span className="text-[#71717b] text-xs leading-4">Last updated Mar 14, 2024 · API v1.4.2</span>
              <div className="flex items-center gap-3">
                <Button variant="ghost" className="text-[#71717b] text-xs leading-4 gap-1.5 h-8">
                  <FileText className="size-3.5" />
                  Changelog
                </Button>
                <Button variant="ghost" className="text-[#71717b] text-xs leading-4 gap-1.5 h-8">
                  <Shield className="size-3.5" />
                  Security
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
