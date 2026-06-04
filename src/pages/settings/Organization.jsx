import { Building2, Calendar, Check, Link2, Upload, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { fetchOrganizationDetails, updateOrganizationDetails } from "@/api/organization";
import { useEffect, useState } from "react";
import FormField from "@/components/ui/form-field";
import { toastNotification } from "@/helper/toastNotification";
import { CompanyLogo } from "@/components/ui/form-container";
import PageHeading from "@/components/PageHeading";
import { NavLink } from "react-router-dom";
import { getSignedURLForLogoUpload, uploadLogoToS3 } from "@/api/auth";

export default function Organization() {

  const logoUrlRegex = /^[a-zA-Z0-9/!\-_.*'()]+$/;
  const [organizationDetails, setOrganizationDetails] = useState(null);
  const [selectedLogoFile, setSelectedLogoFile] = useState(null);
  const [formData, setFormData] = useState({
    orgName: "",
    slug: "",
    orgSlogan: "",
    createdAt: "",
    memberCount: 0,
    currentPlan: "",
    logo: null
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toastNotification("Please select a valid image file (PNG, JPG, JPEG).", "error");
        return;
      }
      if (file.size > 1024 * 1024) {
        toastNotification("File size exceeds 1MB. Please select a smaller image.", "error");
        return;
      }

      const logoURL = URL.createObjectURL(file);
      console.log("Selected logo file:", logoURL);

      setSelectedLogoFile(file);
      setFormData((prev) => ({
        ...prev,
        logo: logoURL
      }));
    }
  };

  const getOrganizationDetails = async () => {
    try {
      const res = await fetchOrganizationDetails();
      setOrganizationDetails(res.data);
      setFormData(res.data);
    } catch (error) {
      console.error("Failed to fetch organization details:", error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getOrganizationDetails();
  }, []);

  const hasChanges = organizationDetails && (organizationDetails.orgName !== formData.orgName.trim() ||
    organizationDetails.slug !== formData.slug.trim() ||
    organizationDetails.orgSlogan !== formData.orgSlogan.trim()) ||
    formData?.logo !== organizationDetails?.logo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (organizationDetails.logo !== formData.logo && selectedLogoFile) {
        const getPresignedUrlRes = await getSignedURLForLogoUpload({
          "slug": formData.slug,
          "fileName": selectedLogoFile.name,
          "contentType": selectedLogoFile.type
        });
        const { url, key: logoKey } = getPresignedUrlRes.data;
        const uploadRes = await uploadLogoToS3(url, selectedLogoFile);
        if (uploadRes.status !== 200) {
          toastNotification("Failed to upload logo. Please try again.", "error");
          return;
        } else {
          await updateOrganizationDetails({ ...formData, logo: undefined, logoKey });
        }
      } else {
        await updateOrganizationDetails(formData);
      }
      toastNotification("Organization details updated successfully", "success");
      getOrganizationDetails();
    } catch (error) {
      toastNotification(error?.response?.data?.message || "Failed to update organization details. Please try again.", "error");
      console.error("Error updating organization details:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">

      <PageHeading
        heading="Organization"
        subheading="Manage your organization profile and preferences."
      />

      <Card className="shadow-sm p-4 sm:p-6 flex flex-col gap-6 mt-6">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-[#2b7fff]/10 flex justify-center items-center shrink-0">
              <Building2 className="size-4 text-[#2b7fff]" />
            </div>
            <CardTitle className="font-semibold text-base leading-6">Organization Details</CardTitle>
          </div>
          <CardDescription className="text-zinc-500 text-sm leading-5">
            Basic information about your organization.
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="flex p-0 flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Organization Name"
              id="name"
              placeholder="Acme Corporation"
              value={formData.orgName}
              onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
              isRequired={false}
            />

            <div className="flex flex-col gap-2">
              <Label className="font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]">Slug</Label>
              <div className="rounded-md bg-zinc-100/50 text-sm leading-5 border border-zinc-200 flex px-3 items-center gap-2 h-10 text-zinc-700">
                <Link2 className="size-4 text-zinc-400 shrink-0 rotate-45" />
                <span className="truncate">{formData.slug}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]">Created On</Label>
              <div className="rounded-md bg-zinc-100/50 text-sm leading-5 border border-zinc-200 flex px-3 items-center gap-2 h-10 text-zinc-700">
                <Calendar className="size-4 text-zinc-400 shrink-0" />
                <span className="truncate">{new Date(formData.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]">Member Count</Label>
              <div className="rounded-md bg-zinc-100/50 text-sm leading-5 border border-zinc-200 flex px-3 items-center gap-2 h-10 text-zinc-700">
                <Users className="size-4 text-zinc-400 shrink-0" />
                <span className="truncate">{formData.memberCount} members</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-1">
              <Label className="font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]">Current Plan</Label>
              <div className="rounded-md bg-zinc-100/50 border border-zinc-200 flex px-3 justify-between items-center h-10 gap-2">
                <Badge className="bg-[#2b7fff] text-blue-50 px-2 py-0.5 gap-1 select-none shrink-0">
                  <Zap className="size-3" />
                  {formData.currentPlan}
                </Badge>
                <NavLink to="/settings/billing" className="cursor-pointer font-semibold text-[#2b7fff] text-xs hover:underline shrink-0">
                  Upgrade
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="desc" className="font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]">
              Organization Slogan
            </Label>
            <Textarea
              id="desc"
              placeholder="Enter a catchy slogan or mission statement for your organization."
              className="min-h-24 resize-none w-full"
              value={formData.orgSlogan}
              onChange={(e) => setFormData({ ...formData, orgSlogan: e.target.value })}
            />
          </div>

          <Separator />
          <div className="flex flex-col gap-3">
            <Label className="font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]">Organization Logo</Label>
            <div className="flex flex-row items-center gap-5">
              <div className="flex h-14 w-32 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-2 shadow-sm transition-colors hover:bg-zinc-100/80">
                {!logoUrlRegex.test(formData.logo) ? (
                  <img src={formData.logo} alt="Organization Logo" className="h-full w-full object-contain" />
                ) : (
                  <CompanyLogo />
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="logo-upload" className="w-max block cursor-pointer">
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 gap-2 border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    <span>
                      <Upload className="size-4 text-zinc-500" />
                      Upload Logo
                    </span>
                  </Button>
                  <input name="logo" onChange={handleLogoChange} id="logo-upload" type="file" accept="image/*" className="hidden" />
                </label>
                <span className="text-xs font-normal text-zinc-500">PNG, JPG up to 1MB</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="px-0 pt-2 bg-white flex flex-col-reverse sm:flex-row justify-end gap-2">
          <Button onClick={() => setFormData(organizationDetails)} variant="outline" className="h-9 w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!hasChanges} className="bg-[#2b7fff] cursor-pointer text-blue-50 gap-2 h-9 w-full sm:w-auto">
            <Check className="size-4" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}