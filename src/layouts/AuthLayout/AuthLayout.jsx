import { Outlet } from "react-router-dom";
import SidePanel from "./SidePanel";
import { useAuthContext } from "@/contexts/AuthContext";
import { Loader } from "lucide-react";

export default function AuthLayout({ children }) {
  const { loading } = useAuthContext();
  // console.log("🚀 ~ AuthLayout ~ loading:", loading)

  if (loading) return <Loader className="animate-spin" size={48} />

  return (
    <main className="bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 xl:w-[50%] 2xl:w-[50%]">
          <SidePanel />
        </div>
        <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-16">
          {children ? children : <Outlet />}
        </div>
      </div>
    </main>
  );
}