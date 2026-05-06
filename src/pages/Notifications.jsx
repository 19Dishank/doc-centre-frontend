import { Bell, CheckCircle2, Clock, Mail, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
export default function Notifications() {
  return (
    <div>
      <div className="flex w-full" style={{ minHeight: "956px" }}>
        <div className="min-w-0 flex flex-col flex-1">
          <main className="bg-zinc-100/60 p-8 flex-1 overflow-auto">
            <div className="max-w-4xl flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-2xl leading-8 tracking-tight">Notifications</h1>
                <p className="text-[#71717b] text-sm leading-5">Control how and when you receive alerts and updates.</p>
              </div>
              <Card className="shadow-sm p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-[#2b7fff]" />
                    <CardTitle className="text-base leading-6">Email Notifications</CardTitle>
                  </div>
                  <CardDescription className="text-xs leading-4">
                    Manage which emails are sent to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-0">
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">Email on Upload</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Receive an email each time a new file is uploaded.
                      </span>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <Separator />
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">Weekly Usage Report</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Get a summary of activity every Monday morning.
                      </span>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <Separator />
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">Security Alerts</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Notify on suspicious sign-ins or permission changes.
                      </span>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <Separator />
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">API Limit Warnings</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Warn when API usage approaches the monthly limit.
                      </span>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <Bell className="size-4 text-[#2b7fff]" />
                    <CardTitle className="text-base leading-6">In-App Notifications</CardTitle>
                  </div>
                  <CardDescription className="text-xs leading-4">
                    Choose what shows up inside DocuCentral.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-0">
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">New File Comments</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Get notified when teammates comment on your files.
                      </span>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <Separator />
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">Role Changes</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Alert me when my role or permissions are updated.
                      </span>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <Separator />
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">Storage Warnings</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Notify when storage usage exceeds 80% of the limit.
                      </span>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex py-4 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <Label className="font-semibold text-sm leading-5">System Announcements</Label>
                      <span className="text-[#71717b] text-xs leading-4">
                        Hear about new features and scheduled maintenance.
                      </span>
                    </div>
                    <Switch checked={true} />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-[#2b7fff]" />
                    <CardTitle className="text-base leading-6">Notification Digest</CardTitle>
                  </div>
                  <CardDescription className="text-xs leading-4">
                    Bundle notifications and pick where they are delivered.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Label className="font-semibold text-sm leading-5">Digest Frequency</Label>
                    <RadioGroup defaultValue="realtime" className="grid grid-cols-3 gap-2">
                      <Label
                        htmlFor="realtime"
                        className="cursor-pointer rounded-lg bg-[#2b7fff]/5 border-[#2b7fff] border border-solid flex p-3 items-center gap-2">
                        <RadioGroupItem value="realtime" id="realtime" />
                        <span className="font-medium text-sm leading-5">Real-time</span>
                      </Label>
                      <Label
                        htmlFor="daily"
                        className="cursor-pointer rounded-lg border-zinc-200 border border-solid flex p-3 items-center gap-2">
                        <RadioGroupItem value="daily" id="daily" />
                        <span className="font-medium text-sm leading-5">Daily Summary</span>
                      </Label>
                      <Label
                        htmlFor="weekly"
                        className="cursor-pointer rounded-lg border-zinc-200 border border-solid flex p-3 items-center gap-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <span className="font-medium text-sm leading-5">Weekly Summary</span>
                      </Label>
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="notif-email" className="font-semibold text-sm leading-5">
                      Notification Email
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input id="notif-email" defaultValue="jane.doe@acmecorp.com" className="flex-1" />
                      <Badge className="bg-emerald-100 text-emerald-700 border-black/1 border-0 border-solid gap-1">
                        <CheckCircle2 className="size-3" />
                        Verified
                      </Badge>
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">
                      All digest emails will be delivered to this address.
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-0 justify-end gap-2">
                  <Button variant="ghost">Cancel</Button>
                  <Button className="bg-[#2b7fff] text-blue-50 gap-2">
                    <Save className="size-4" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
