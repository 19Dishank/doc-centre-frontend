import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchRecentDocs } from "@/api/dashboard";
import RecentUploadFile from "./RecentUploadFile";
import { socket } from "@/helper/socketService";
import { SOCKET_EVENTS } from "@/helper/constants/socket.events";

const RecentUploads = () => {

    const [recentUploads, setRecentUploads] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRecentUploads = async () => {
        setLoading(true);
        try {
            const res = await fetchRecentDocs();
            setRecentUploads(res.data.docs);
        } catch (error) {
            console.error("Error fetching recent uploads:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getRecentUploads();

        const refreshRecent = () => {
            getRecentUploads();
        };

        socket.on(SOCKET_EVENTS.DOCUMENT_UPLOADED, refreshRecent);
        socket.on(SOCKET_EVENTS.DOCUMENT_TRASHED, refreshRecent);
        socket.on(SOCKET_EVENTS.DOCUMENT_RESTORED, refreshRecent);

        return () => {
            socket.off(SOCKET_EVENTS.DOCUMENT_UPLOADED, refreshRecent);
            socket.off(SOCKET_EVENTS.DOCUMENT_TRASHED, refreshRecent);
            socket.off(SOCKET_EVENTS.DOCUMENT_RESTORED, refreshRecent);
        };
    }, []);

    return (
        <>
            <Card className="flex flex-col h-full pt-0">
                <CardHeader className="p-5 flex justify-between items-center border-b">
                    <h2 className="font-semibold text-base">Recent Uploads</h2>
                    <NavLink to="/files" className="font-medium text-[#2b7fff] text-sm flex items-center gap-1 hover:underline">
                        View all
                        <ArrowRight className="size-3" />
                    </NavLink>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="divide-y divide-zinc-100">
                        {recentUploads.length === 0 && !loading
                            ? <div className="p-5 text-center text-zinc-500">No uploads found.</div>
                            : recentUploads.map((item) => (
                                <RecentUploadFile key={item._id} item={item} loading={loading} />
                            ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default RecentUploads;
