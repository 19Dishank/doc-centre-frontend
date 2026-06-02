import { Bell, CheckCircle2, Clock, Mail, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Notifications() {

  const emailNotifications = [
    { title: "Email on Upload", description: "Receive an email each time a new file is uploaded.", name: "emailOnUpload" },
    { title: "Weekly Usage Report", description: "Get a summary of activity every Monday morning.", name: "weeklyUsageReport" },
    { title: "Security Alerts", description: "Get notified of any security-related events.", name: "securityAlerts" },
    { title: "API Limit Warnings", description: "Receive alerts when approaching API usage limits.", name: "apiLimitWarnings" },
  ]

  const inAppNotifications = [
    { title: "New File Comments", description: "Get notified when someone comments on a file you've uploaded.", name: "newFileComments" },
    { title: "Role Changes", description: "Receive updates when your role or permissions change.", name: "roleChanges" },
    { title: "Storage Warnings", description: "Get alerts when you're approaching your storage limits.", name: "storageWarnings" },
    { title: "System Announcements", description: "Stay informed about important system updates and announcements.", name: "systemAnnouncements" }
  ]

  const availableFrequencies = [
    { label: "Real-time", value: "realtime" },
    { label: "Daily Summary", value: "daily" },
    { label: "Weekly Summary", value: "weekly" }
  ]

  const initialFormData = {
    emailOnUpload: true,
    weeklyUsageReport: true,
    securityAlerts: true,
    apiLimitWarnings: true,
    newFileComments: true,
    roleChanges: true,
    storageWarnings: true,
    systemAnnouncements: true,
    frequency: "realtime",
    notificationEmail: ""
  }

  const [formData, setFormData] = useState(initialFormData);

  const handleToggle = (key) => {
    setFormData(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8 tracking-tight text-zinc-950">Notifications</h1>
        <p className="text-zinc-500 text-sm leading-5">Control how and when you receive alerts and updates.</p>
      </div>

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
          {emailNotifications.map(({ title, description, name }, index) => (
            <>
              <div className="flex py-4 justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <Label className="font-semibold text-sm leading-5 text-zinc-950">{title}</Label>
                  <span className="text-zinc-500 text-xs leading-normal">
                    {description}
                  </span>
                </div>
                <Switch
                  className="cursor-pointer shrink-0 mt-0.5 sm:mt-0 data-[state=checked]:bg-[#2b7fff] data-[state=unchecked]:bg-gray-300"
                  checked={formData[name]}
                  onCheckedChange={() => handleToggle(name)}
                />
              </div>
              {index < emailNotifications.length - 1 && <Separator />}
            </>
          ))}
        </CardContent>
      </Card>

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
          {inAppNotifications.map(({ title, description, name }, index) => (
            <>
              <div className="flex py-4 justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <Label className="font-semibold text-sm leading-5 text-zinc-950">{title}</Label>
                  <span className="text-zinc-500 text-xs leading-normal">
                    {description}
                  </span>
                </div>
                <Switch
                  className="cursor-pointer shrink-0 mt-0.5 sm:mt-0 data-[state=checked]:bg-[#2b7fff] data-[state=unchecked]:bg-gray-300"
                  checked={formData[name]}
                  onCheckedChange={() => handleToggle(name)}
                />
              </div>
              {index < inAppNotifications.length - 1 && <Separator />}
            </>
          ))}
        </CardContent>
      </Card>

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
          <div className="flex flex-col gap-2">
            <Label className="font-semibold text-sm leading-5 text-zinc-950">Digest Frequency</Label>

            <RadioGroup defaultValue="realtime" className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {availableFrequencies.map(({ label, value }) => (
                <Label
                  htmlFor={value}
                  className={`cursor-pointer rounded-lg ${formData.digestFrequency === value ? 'bg-blue-500! border-[#2b7fff]' : 'border-zinc-200'} border flex p-3 items-center gap-2 transition-colors`}
                >
                  <RadioGroupItem value={value} id={value} />
                  <span className="font-medium text-sm leading-5 text-zinc-950">{label}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>

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