import StatsCards from "@/components/Dashboard/StatsCards";
import UsageChart from "@/components/Dashboard/UsageChart";
import RecentUploads from "@/components/Dashboard/RecentUploads";

export default function Dashboard() {
  return (
    // We remove the nested Sidebar/Navbar wrappers since AppLayout handles them
    <div className="flex flex-col gap-6">
      
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl md:text-3xl leading-8 tracking-tight text-zinc-950">
          Dashboard
        </h1>
        <p className="text-zinc-500 text-sm md:text-base">
          Welcome back, James. Here's what's happening.
        </p>
      </div>

      {/* 
          Main Grid Layout 
          1. StatsCards usually contains small boxes (should be a grid inside its component).
          2. UsageChart and RecentUploads can be stacked or side-by-side.
      */}
      <div className="flex flex-col gap-6">
        
        {/* Top Row: Statistics */}
        <section>
          <StatsCards />
        </section>

        {/* 
            Bottom Section: 
            On large screens, we might want Chart and Uploads side-by-side.
            On mobile/tablet, they should stack.
        */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Chart takes up 2 columns on extra large screens */}
          <div className="xl:col-span-2">
            <UsageChart />
          </div>

          {/* Recent Uploads takes up 1 column */}
          <div className="xl:col-span-1">
            <RecentUploads />
          </div>
          
        </div>
      </div>
    </div>
  );
}