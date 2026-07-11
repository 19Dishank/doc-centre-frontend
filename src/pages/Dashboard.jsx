import StatsCards from "@/components/Dashboard/StatsCards";
import UsageChart from "@/components/Dashboard/UsageChart";
import RecentUploads from "@/components/Dashboard/RecentUploads";
import { useAuthContext } from "@/contexts/AuthContext";
import PageHeading from "@/components/PageHeading";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { useEffect, useMemo, useState } from "react";
import { fetchStorageStats } from "@/api/dashboard";
import useSEO from "@/hooks/useSEO";

export default function Dashboard() {

  const { user } = useAuthContext();

  useSEO({
    title: "Dashboard",
    description: "Manage storage, view upload analytics and access recent team files on your dashboard.",
  });

  const { checkPermission } = usePermissions();
  const displayName = user?.firstName || user?.lastName ? `${user.firstName || ""} ${user.lastName || ""}`.trim() : user?.email || "User";

  const canViewDocuments = useMemo(() => checkPermission(PERMISSIONS.VIEW_DOCUMENT), [checkPermission]);

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const getStorageStatsData = async () => {
    setLoading(true);
    try {
      const res = await fetchStorageStats();
      setStats(res.data);
    } catch (error) {
      console.error("Error fetching storage stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getStorageStatsData();
  }, []);

  return (
    <div className="flex flex-col gap-6">

      <PageHeading
        heading="Dashboard"
        subheading={`Welcome back, ${displayName}. Here's what's happening.`}
      />

      <div className="flex flex-col gap-6">
        <section>
          <StatsCards stats={stats} loading={loading} />
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">
            <UsageChart stats={stats} loading={loading} />
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