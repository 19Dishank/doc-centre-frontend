import { Building2, Calendar, Check, Upload, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function Organization() {
  return (
    <div>
      <div className="min-w-0 flex flex-col flex-1">
        <main className="relative bg-zinc-100/60 p-8 flex-1 overflow-auto">
          <div className="max-w-4xl flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl leading-8 tracking-tight">Organization</h1>
              <p className="text-[#71717b] text-sm leading-5">Manage your organization profile and preferences.</p>
            </div>
            <Card className="shadow-sm p-6 gap-6">
              <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-md bg-[#2b7fff]/10 flex justify-center items-center">
                    <Building2 className="size-4 text-[#2b7fff]" />
                  </div>
                  <CardTitle className="font-semibold text-base leading-6">Organization Details</CardTitle>
                </div>
                <CardDescription className="text-[#71717b] text-sm leading-5">
                  Basic information about your organization.
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className="flex p-0 flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="orgname" className="text-sm leading-5">
                      Organization Name
                    </Label>
                    <Input id="orgname" defaultValue="Acme Corp" className="h-10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="org"
                      className="font-medium uppercase text-zinc-950 tracking-wider"
                      style={{
                        fontSize: "11px",
                        lineHeight: "16px",
                        letterSpacing: "0.06em",
                      }}>
                      Slug
                    </Label>
                    <div className="rounded-md bg-white border-zinc-200 border border-solid flex h-10 overflow-hidden">
                      <input
                        id="slug"
                        defaultValue="acmecorp"
                        className="bg-transparent outline-none text-sm leading-5 px-3"
                      />
                      <span className="bg-zinc-100 text-[#71717b] text-sm leading-5 border-zinc-200 border-t-0 border-r flex-1 border-b-0 border-l-0 border-solid flex px-3 items-center">
                        .cdms.com
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="industry" className="text-sm leading-5">
                      Industry
                    </Label>
                    <Select defaultValue="tech">
                      <SelectTrigger id="industry" className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="health">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="website" className="text-sm leading-5">
                      Website
                    </Label>
                    <Input id="website" defaultValue="https://acmecorp.com" className="h-10" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm leading-5">Created</Label>
                    <div className="rounded-md bg-zinc-100/50 text-sm leading-5 border-zinc-200 border border-solid flex px-3 items-center gap-2 h-10">
                      <Calendar className="size-4 text-[#71717b]" />
                      <span>Jan 12, 2023</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm leading-5">Member Count</Label>
                    <div className="rounded-md bg-zinc-100/50 text-sm leading-5 border-zinc-200 border border-solid flex px-3 items-center gap-2 h-10">
                      <Users className="size-4 text-[#71717b]" />
                      <span>27 members</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm leading-5">Current Plan</Label>
                    <div className="rounded-md bg-zinc-100/50 border-zinc-200 border border-solid flex px-2 justify-between items-center h-10">
                      <Badge className="bg-[#2b7fff] text-blue-50 px-2 py-1 gap-1">
                        <Zap className="size-3" />
                        Pro Plan
                      </Badge>
                      <a className="cursor-pointer font-medium text-[#2b7fff] text-xs leading-4 pr-1">Upgrade</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="desc" className="text-sm leading-5">
                    Organization Description
                  </Label>
                  <Textarea
                    id="desc"
                    placeholder="Tell us a little about your organization, what you do, and your team..."
                    className="min-h-24 resize-none"
                  />
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <Label className="text-sm leading-5">Organization Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="size-16 rounded-lg bg-[#2b7fff]/10 border-[#2b7fff]/20 border border-solid flex justify-center items-center">
                      <span className="font-semibold text-[#2b7fff] text-lg leading-7">AC</span>
                    </div>
                    <Button variant="outline" className="gap-2 h-9">
                      <Upload className="size-4" />
                      Upload Logo
                    </Button>
                    <span className="text-[#71717b] text-xs leading-4">PNG, JPG up to 2MB</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-0 bg-white justify-end gap-2">
                <Button variant="outline" className="h-9">
                  Cancel
                </Button>
                <Button className="bg-[#2b7fff] text-blue-50 gap-2 h-9">
                  <Check className="size-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
