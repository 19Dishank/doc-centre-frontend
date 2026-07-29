import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ProgressToast from "@/components/Files/ProgressToast";

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="bg-white text-zinc-950 flex h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex flex-col flex-1 min-w-0">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 overflow-x-hidden bg-white p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
      <ProgressToast />
    </div>
  );
}