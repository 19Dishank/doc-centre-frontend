import ProfileDetailsCard from "@/components/UserSetting/ProfileDetailsCard";
import SecurityAndCredentials from "@/components/UserSetting/SecurityAndCredentials";

export default function UserSettings() {

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 pb-8">

      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8 text-zinc-950 tracking-tight">User Settings</h1>
        <p className="text-zinc-600 text-sm leading-5">
          Manage your account profile, change security credentials, and configure application preferences.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <ProfileDetailsCard />
        <SecurityAndCredentials />
      </div>
    </div>
  );
}