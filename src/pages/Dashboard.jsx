import StatsCards from "@/components/Dashboard/StatsCards";
import UsageChart from "@/components/Dashboard/UsageChart";
import RecentUploads from "@/components/Dashboard/RecentUploads";

export default function Dashboard() {



  return (
    <div>
      <div className="bg-white text-zinc-950 flex w-full h-fit min-h-screen overflow-visible">
        <div className="flex flex-col flex-1">
          <main className="bg-zinc-100/30 flex p-8 flex-col flex-1 gap-6 overflow-hidden">

            {/* Header Section */}
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl leading-8 tracking-tight">Dashboard</h1>
              <p className="text-[#71717b] text-sm leading-5">Welcome back, James. Here's what's happening.</p>
            </div>

            <StatsCards />

            {/* Usage Over Time Chart Section */}
            <UsageChart />


            {/* Recent Uploads Section */}
            <RecentUploads />

          </main>
        </div>
      </div>
    </div>
  );
}
