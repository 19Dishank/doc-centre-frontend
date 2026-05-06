import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div>
            <div
                className="bg-white text-zinc-950 flex w-full h-fit min-h-screen overflow-visible"
                data-id="ddc44dcd-976c-5d60-b638-0092e54c1849"
            >
                <Sidebar />
                <div
                    className="flex flex-col flex-1"
                    data-id="b108831c-fe47-5e65-8100-c72ce592e50e"
                >
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
