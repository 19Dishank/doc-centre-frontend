import { Check, ChevronDown, ChevronLeft, ChevronRight, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
export default function UsersList() {
  return (
    <div>
      <div className="flex flex-col flex-1 h-239 overflow-hidden">
        <main className="relative bg-zinc-100/40 p-8 flex-1 overflow-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl leading-8">Users</h1>
              <p className="text-[#71717b] text-sm leading-5">Manage team members and their access levels.</p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative w-70">
                  <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />
                  <Input placeholder="Search users…" className="bg-white pl-9" />
                </div>
                <Button variant="outline" className="gap-2">
                  Role
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                  Status
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button className="font-semibold bg-[#2b7fff] text-blue-50 gap-2">
                <Plus className="size-4" />
                Invite User
              </Button>
            </div>
            <Card className="p-0 gap-0 overflow-hidden">
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] font-medium uppercase bg-zinc-100/30 text-[#71717b] text-[11px] tracking-wide border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox />
                <span>User</span>
                <span>Role</span>
                <span>Status</span>
                <span>Last Active</span>
                <span className="text-right">Actions</span>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-blue-100 text-blue-700 text-xs leading-4">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">Alex Morgan</span>
                    <span className="text-[#71717b] text-xs leading-4">alex.morgan@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-blue-100 text-blue-700">Admin</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500" />
                  <span className="text-sm leading-5">Active</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">2 min ago</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] bg-blue-50 border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox checked={true} />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-purple-100 text-purple-700 text-xs leading-4">
                      SK
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">Sarah Kim</span>
                    <span className="text-[#71717b] text-xs leading-4">sarah.kim@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-purple-100 text-purple-700">Editor</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500" />
                  <span className="text-sm leading-5">Active</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">15 min ago</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-amber-100 text-amber-700 text-xs leading-4">
                      JR
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">Jamal Rodriguez</span>
                    <span className="text-[#71717b] text-xs leading-4">jamal.r@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-zinc-100 text-zinc-700">Viewer</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-zinc-400" />
                  <span className="text-sm leading-5">Inactive</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">3 days ago</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-rose-100 text-rose-700 text-xs leading-4">
                      EP
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">Emily Park</span>
                    <span className="text-[#71717b] text-xs leading-4">emily.park@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-purple-100 text-purple-700">Editor</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-yellow-500" />
                  <span className="text-sm leading-5">Pending</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">—</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-teal-100 text-teal-700 text-xs leading-4">
                      DN
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">David Nguyen</span>
                    <span className="text-[#71717b] text-xs leading-4">d.nguyen@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-blue-100 text-blue-700">Admin</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500" />
                  <span className="text-sm leading-5">Active</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">1 hour ago</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-indigo-100 text-indigo-700 text-xs leading-4">
                      LT
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">Lara Thompson</span>
                    <span className="text-[#71717b] text-xs leading-4">lara.t@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-zinc-100 text-zinc-700">Viewer</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500" />
                  <span className="text-sm leading-5">Active</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">28 min ago</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid px-4 py-3 items-center">
                <Checkbox />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-orange-100 text-orange-700 text-xs leading-4">
                      MO
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">Marcus Owens</span>
                    <span className="text-[#71717b] text-xs leading-4">marcus.o@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-purple-100 text-purple-700">Editor</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-zinc-400" />
                  <span className="text-sm leading-5">Inactive</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">2 weeks ago</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1fr_100px] px-4 py-3 items-center">
                <Checkbox />
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="font-semibold bg-pink-100 text-pink-700 text-xs leading-4">
                      RC
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">Riya Chowdhury</span>
                    <span className="text-[#71717b] text-xs leading-4">riya.c@company.com</span>
                  </div>
                </div>
                <div>
                  <Badge className="font-medium rounded-full bg-zinc-100 text-zinc-700">Viewer</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-yellow-500" />
                  <span className="text-sm leading-5">Pending</span>
                </div>
                <span className="text-[#71717b] text-xs leading-4">—</span>
                <div className="flex justify-end items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8">
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </Card>
            <div className="flex justify-between items-center">
              <span className="text-[#71717b] text-sm leading-5">Showing 1–8 of 24 users</span>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="size-8">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="size-8 bg-[#2b7fff] text-blue-50 border-[#2b7fff] border-0 border-solid">
                  1
                </Button>
                <Button variant="outline" size="sm" className="size-8">
                  2
                </Button>
                <Button variant="outline" size="sm" className="size-8">
                  3
                </Button>
                <Button variant="outline" size="icon" className="size-8">
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-zinc-950/40 flex absolute inset-0 justify-center items-center">
            <Card className="shadow-2xl p-6 gap-4 w-120">
              <CardHeader className="p-0 flex-row justify-between items-start gap-1">
                <div className="flex flex-col gap-1">
                  <CardTitle className="font-semibold text-lg leading-7">Invite New User</CardTitle>
                  <CardDescription className="text-sm leading-5">
                    Send an invitation to join your workspace.
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="size-8 -mr-1 -mt-1">
                  <X className="size-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">Email address</Label>
                  <Input placeholder="Enter email address" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">Role</Label>
                  <Button variant="outline" className="font-normal justify-between">
                    Editor
                    <ChevronDown className="size-4 text-[#71717b]" />
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">
                    Message
                    <span className="font-normal text-[#71717b]">(optional)</span>
                  </Label>
                  <Textarea placeholder="Add a personal note to your invitation…" rows={3} />
                </div>
              </CardContent>
              <CardFooter className="p-0 justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="font-semibold bg-[#2b7fff] text-blue-50">Send Invite</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="shadow-lg min-w-[300px] rounded-lg bg-white border-green-200 border border-solid flex absolute right-6 bottom-6 p-4 items-center gap-3">
            <div className="size-8 rounded-full bg-green-100 flex justify-center items-center">
              <Check className="size-4 text-green-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm leading-5">Success</span>
              <span className="text-[#71717b] text-xs leading-4">User invitation sent successfully</span>
            </div>
            <Button variant="ghost" size="icon" className="size-7 ml-auto">
              <X className="size-3" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
