import { Outlet } from "react-router-dom";
import SidePanel from "./SidePanel";
import MobileAuthBanner from "./MobileAuthBanner";
import { useAuthContext } from "@/contexts/AuthContext";
import { Loader } from "lucide-react";

export default function AuthLayout({ children }) {
  const { loading } = useAuthContext();
  // console.log("🚀 ~ AuthLayout ~ loading:", loading)

  if (loading) return <Loader className="animate-spin" size={48} />

  return (
    <main className="bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="hidden lg:flex lg:w-[40%] xl:w-[35%] shrink-0">
          <SidePanel />
        </div>
        <div className="lg:hidden">
          <MobileAuthBanner />
        </div>
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {children ? children : <Outlet />}
        </div>
      </div>
    </main>
  );
}