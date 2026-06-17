import PageHeading from "@/components/PageHeading";
import ProfileDetailsCard from "@/components/UserSetting/ProfileDetailsCard";
import SecurityAndCredentials from "@/components/UserSetting/SecurityAndCredentials";

export default function UserSettings() {

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 pb-8">
      
      <PageHeading
        heading="User Settings"
        subheading="Manage your account profile, change security credentials, and configure application preferences."
      />

      <div className="flex flex-col gap-6">
        <ProfileDetailsCard />
        <SecurityAndCredentials />
      </div>
    </div>
  );
}