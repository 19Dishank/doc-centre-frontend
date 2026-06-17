import { Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PageHeading from "@/components/PageHeading";
import OrganizationDetailsForm from "@/components/Organization/OrganizationDetailsForm";

export default function Organization() {
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

        <CardContent>
          <OrganizationDetailsForm />
        </CardContent>

      </Card>
    </div>
  );
}