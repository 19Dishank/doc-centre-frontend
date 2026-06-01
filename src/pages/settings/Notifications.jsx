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
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8 tracking-tight text-zinc-950">Notifications</h1>
        <p className="text-zinc-500 text-sm leading-5">Control how and when you receive alerts and updates.</p>
      </div>

      {/* 1. Email Notifications Card */}
      <Card className="shadow-sm p-4 sm:p-6 flex flex-col gap-4">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <Mail className="size-4 text-[#2b7fff] shrink-0" />
            <CardTitle className="text-base leading-6">Email Notifications</CardTitle>
          </div>
          <CardDescription className="text-zinc-500 text-xs">
            Manage which emails are sent to your inbox.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex p-0 flex-col">
          {/* Row 1 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">Email on Upload</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Receive an email each time a new file is uploaded.
              </span>
            </div>
            <Switch checked={true} className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
          <Separator />
          
          {/* Row 2 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">Weekly Usage Report</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Get a summary of activity every Monday morning.
              </span>
            </div>
            <Switch checked={true} className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
          <Separator />
          
          {/* Row 3 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">Security Alerts</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Notify on suspicious sign-ins or permission changes.
              </span>
            </div>
            <Switch checked={true} className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
          <Separator />
          
          {/* Row 4 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">API Limit Warnings</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Warn when API usage approaches the monthly limit.
              </span>
            </div>
            <Switch className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
        </CardContent>
      </Card>

      {/* 2. In-App Notifications Card */}
      <Card className="shadow-sm p-4 sm:p-6 flex flex-col gap-4">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <Bell className="size-4 text-[#2b7fff] shrink-0" />
            <CardTitle className="text-base leading-6">In-App Notifications</CardTitle>
          </div>
          <CardDescription className="text-zinc-500 text-xs">
            Choose what shows up inside DocuCentral.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex p-0 flex-col">
          {/* Row 1 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">New File Comments</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Get notified when teammates comment on your files.
              </span>
            </div>
            <Switch checked={true} className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
          <Separator />
          
          {/* Row 2 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">Role Changes</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Alert me when my role or permissions are updated.
              </span>
            </div>
            <Switch checked={true} className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
          <Separator />
          
          {/* Row 3 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">Storage Warnings</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Notify when storage usage exceeds 80% of the limit.
              </span>
            </div>
            <Switch className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
          <Separator />
          
          {/* Row 4 */}
          <div className="flex py-4 justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <Label className="font-semibold text-sm leading-5 text-zinc-950">System Announcements</Label>
              <span className="text-zinc-500 text-xs leading-normal">
                Hear about new features and scheduled maintenance.
              </span>
            </div>
            <Switch checked={true} className="shrink-0 mt-0.5 sm:mt-0" />
          </div>
        </CardContent>
      </Card>

      {/* 3. Notification Digest Card */}
      <Card className="shadow-sm p-4 sm:p-6 flex flex-col gap-4">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-[#2b7fff] shrink-0" />
            <CardTitle className="text-base leading-6">Notification Digest</CardTitle>
          </div>
          <CardDescription className="text-zinc-500 text-xs">
            Bundle notifications and pick where they are delivered.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex p-0 flex-col gap-6">
          {/* Frequency Option Cards - Adjusted columns to scale down to 1 column on mobile */}
          <div className="flex flex-col gap-2">
            <Label className="font-semibold text-sm leading-5 text-zinc-950">Digest Frequency</Label>
            <RadioGroup defaultValue="realtime" className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Label
                htmlFor="realtime"
                className="cursor-pointer rounded-lg bg-[#2b7fff]/5 border-[#2b7fff] border flex p-3 items-center gap-2 hover:bg-[#2b7fff]/10 transition-colors"
              >
                <RadioGroupItem value="realtime" id="realtime" />
                <span className="font-medium text-sm leading-5 text-zinc-950">Real-time</span>
              </Label>
              
              <Label
                htmlFor="daily"
                className="cursor-pointer rounded-lg border-zinc-200 border flex p-3 items-center gap-2 hover:bg-zinc-50 transition-colors"
              >
                <RadioGroupItem value="daily" id="daily" />
                <span className="font-medium text-sm leading-5 text-zinc-950">Daily Summary</span>
              </Label>
              
              <Label
                htmlFor="weekly"
                className="cursor-pointer rounded-lg border-zinc-200 border flex p-3 items-center gap-2 hover:bg-zinc-50 transition-colors"
              >
                <RadioGroupItem value="weekly" id="weekly" />
                <span className="font-medium text-sm leading-5 text-zinc-950">Weekly Summary</span>
              </Label>
            </RadioGroup>
          </div>

          {/* Email Input Line with Adaptive Badge formatting */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="notif-email" className="font-semibold text-sm leading-5 text-zinc-950">
              Notification Email
            </Label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
              <Input id="notif-email" defaultValue="jane.doe@acmecorp.com" className="w-full sm:flex-1" />
              <Badge className="bg-emerald-100 text-emerald-700 border-0 gap-1 h-8 px-2 shrink-0 select-none">
                <CheckCircle2 className="size-3" />
                Verified
              </Badge>
            </div>
            <span className="text-zinc-500 text-xs leading-4">
              All digest emails will be delivered to this address.
            </span>
          </div>
        </CardContent>

        {/* Dynamic Mobile Footer Action Panel */}
        <CardFooter className="p-0 pt-2 bg-white flex flex-col-reverse sm:flex-row justify-end gap-2">
          <Button variant="ghost" className="w-full sm:w-auto">Cancel</Button>
          <Button className="bg-[#2b7fff] text-blue-50 gap-2 w-full sm:w-auto">
            <Save className="size-4" />
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}