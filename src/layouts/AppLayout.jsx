import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <div>
      <div className="bg-white text-zinc-950 flex w-full h-fit min-h-screen overflow-visible">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
