import StatsCards from "@/components/Dashboard/StatsCards";
import UsageChart from "@/components/Dashboard/UsageChart";
import RecentUploads from "@/components/Dashboard/RecentUploads";
import { useEffect, useState } from "react";
import { fetchDashBoardData } from "@/api/file";
import Loader from "@/components/ui/loader";
import { useAuthContext } from "@/contexts/AuthContext";

export default function Dashboard() {

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  const displayName = user?.firstName || user?.lastName ? `${user.firstName || ""} ${user.lastName || ""}`.trim() : user?.email || "User";

  const getDashboardData = async () => {
    setLoading(true);
    try {
      const response = await fetchDashBoardData();
      setDashboardData(response.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getDashboardData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col gap-6">

      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl md:text-3xl leading-8 tracking-tight text-zinc-950">
          Dashboard
        </h1>
        <p className="text-zinc-500 text-sm md:text-base">
          Welcome back, {displayName}. Here's what's happening.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <section>
          <StatsCards stats={dashboardData?.stats || {}} />
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">
            <UsageChart usageData={dashboardData?.usage || []} />
          </div>

          <div className="xl:col-span-1">
            <RecentUploads recentUploads={dashboardData?.docs || []} />
          </div>

        </div>
      </div>
    </div>
  );
}