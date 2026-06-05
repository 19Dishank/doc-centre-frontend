import StatsCards from "@/components/Dashboard/StatsCards";
import UsageChart from "@/components/Dashboard/UsageChart";
import RecentUploads from "@/components/Dashboard/RecentUploads";
import { useAuthContext } from "@/contexts/AuthContext";
import PageHeading from "@/components/PageHeading";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { useMemo } from "react";

export default function Dashboard() {

  const { user } = useAuthContext();
  // console.log(sadadas)

  const { checkPermission } = usePermissions();
  const displayName = user?.firstName || user?.lastName ? `${user.firstName || ""} ${user.lastName || ""}`.trim() : user?.email || "User";

  const canViewDocuments = useMemo(() => checkPermission(PERMISSIONS.VIEW_DOCUMENT), [checkPermission]);

  return (
    <div className="flex flex-col gap-6">

      <PageHeading
        heading="Dashboard"
        subheading={`Welcome back, ${displayName}. Here's what's happening.`}
      />

      <div className="flex flex-col gap-6">
        <section>
          <StatsCards />
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">
            <UsageChart />
          </div>

          {canViewDocuments && (
            <div className="xl:col-span-1">
              <RecentUploads />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}