import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import Features from "@/components/HomePage/Features";
import Stats from "@/components/HomePage/Stats";
import GetStarted from "@/components/HomePage/GetStarted";
import DocumentPreview from "@/components/Files/DocumentPreview";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSharedDocumentDetails } from "@/api/file";
// import PlanComparison from "@/components/HomePage/PlanComparison";
// import TrustedBy from "@/components/HomePage/TrustedBy";

export default function HomePage() {

    const { pathname } = useLocation();
    const isSharedFilePage = pathname.startsWith("/shared/");
    const [item, setItem] = useState(null);
    const { id: sharedDocumentId } = useParams();
    const [isOpen, setIsOpen] = useState(true);

    const getSharedDocumentDetails = async (id) => {
        try {
            const res = await fetchSharedDocumentDetails(id);
            setItem(res.data);
        } catch (error) {
            console.error("Error fetching shared document details:", error);
        }
    };

    useEffect(() => {
        if (isOpen && isSharedFilePage && sharedDocumentId) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            getSharedDocumentDetails(sharedDocumentId);
        }
    }, [isOpen, sharedDocumentId, isSharedFilePage]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isOpen) {
            navigate("/");
        }
    }, [isOpen]);

    return (
        <>
            <div className="min-h-screen bg-white">
                <Header />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-10">
                    <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
                        <HeroSection />
                        {/* <TrustedBy /> */}
                        <Features />
                        <Stats />
                        {/* <PlanComparison /> */}
                        <GetStarted />
                    </div>
                </main>
                <Footer />
            </div>

            {(isOpen && isSharedFilePage && !!sharedDocumentId && !!item) && (
                <DocumentPreview setIsOpen={setIsOpen} item={item} />
            )}
        </>
    );
}