import { Loader, Mail, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Fragment, useState } from "react";
import PageHeading from "@/components/PageHeading";
import { toastNotification } from "@/helper/toastNotification";
import { changePreferences } from "@/api/user";
import { useAuthContext } from "@/contexts/AuthContext";
import { useCatalogContext } from "@/contexts/CatalogContext";

export default function NotificationsSetting() {

  const { userNotificationPreferences, getUserDetails } = useAuthContext();
  const { preferencesCatalog } = useCatalogContext();
  const { emailNotifications } = preferencesCatalog || {};

  // const availableFrequencies = [
  //   { label: "Real-time", value: "realtime" },
  //   { label: "Daily Summary", value: "daily" },
  //   { label: "Weekly Summary", value: "weekly" }
  // ]

  const initialFormData = {
    emailNotifications: userNotificationPreferences?.emailNotifications,
    // inAppNotifications: userNotificationPreferences?.inAppNotifications,
  }

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const hasChanges = Object.keys(formData).some(key => formData[key] !== initialFormData[key]);

  const handleToggle = (module, key) => {
    setFormData(prev => ({
      ...prev,
      [module]: {
        ...prev[module],
        [key]: !prev[module][key]
      }
    }))
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await changePreferences(formData);
      console.log("Preferences updated: ", res);
      getUserDetails();
      toastNotification("Preferences updated successfully.", "success");
    } catch (error) {
      toastNotification(error.response?.data?.message || "An error occurred while updating preferences.", "error");
      console.error("Error updating preferences: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      <PageHeading
        heading="Notifications"
        subheading="Customize your notification preferences for email and in-app alerts."
      />

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
          {emailNotifications?.map(({ title, description, name }, index) => (
            <Fragment key={name}>
              <div className="flex py-4 justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <Label className="font-semibold text-sm leading-5 text-zinc-950">{title}</Label>
                  <span className="text-zinc-500 text-xs leading-normal">
                    {description}
                  </span>
                </div>
                <Switch
                  className="cursor-pointer shrink-0 mt-0.5 sm:mt-0 data-[state=checked]:bg-[#2b7fff] data-[state=unchecked]:bg-gray-300"
                  checked={formData.emailNotifications?.[name]}
                  onCheckedChange={() => handleToggle("emailNotifications", name)}
                />
              </div>
              {index < emailNotifications.length - 1 && <Separator />}
            </Fragment>
          ))}
        </CardContent>
      </Card>

      {/* <Card className="shadow-sm p-4 sm:p-6 flex flex-col gap-4">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <Bell className="size-4 text-[#2b7fff] shrink-0" />
            <CardTitle className="text-base leading-6">In-App Notifications</CardTitle>
          </div>
          <CardDescription className="text-zinc-500 text-xs">
            Choose what shows up inside DocCentral.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex p-0 flex-col">
          {inAppNotifications.map(({ title, description, name }, index) => (
            <Fragment key={name}>
              <div className="flex py-4 justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <Label className="font-semibold text-sm leading-5 text-zinc-950">{title}</Label>
                  <span className="text-zinc-500 text-xs leading-normal">
                    {description}
                  </span>
                </div>
                <Switch
                  className="cursor-pointer shrink-0 mt-0.5 sm:mt-0 data-[state=checked]:bg-[#2b7fff] data-[state=unchecked]:bg-gray-300"
                  checked={formData.inAppNotifications?.[name]}
                  onCheckedChange={() => handleToggle("inAppNotifications", name)}
                />
              </div>
              {index < inAppNotifications.length - 1 && <Separator />}
            </Fragment>
          ))}
        </CardContent>
      </Card> */}

      <Separator />

      <div className="pt-0 bg-white flex flex-col-reverse sm:flex-row justify-end gap-2">
        {hasChanges && (
          <Button
            variant="outline"
            className="w-full sm:w-auto cursor-pointer"
            onClick={() => setFormData(initialFormData)}
          >
            Reset
          </Button>
        )}
        <Button
          className="bg-[#2b7fff] text-blue-50 gap-2 w-full sm:w-auto cursor-pointer"
          onClick={handleSubmit}
          disabled={!hasChanges || loading}
        >
          {loading
            ? <><Loader className="animate-spin" /> <span>Saving Preferences...</span></>
            : <><Save className="size-4" /><span>Save Preferences</span></>}

        </Button>
      </div>
      
      {/* <Card className="shadow-sm p-4 sm:p-6 flex flex-col gap-4">
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
                  key={value}
                  htmlFor={value}
                  className={`cursor-pointer rounded-lg ${formData.digestFrequency === value ? 'bg-blue-500! border-[#2b7fff]' : 'border-zinc-200'} border flex p-3 items-center gap-2 transition-colors`}
                >
                  <RadioGroupItem
                    value={value}
                    id={value}
                  />
                  <span className="font-medium text-sm leading-5 text-zinc-950">{label}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>
        </CardContent>


      </Card> */}
    </div>
  );
}