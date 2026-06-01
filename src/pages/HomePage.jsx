import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import TrustedBy from "@/components/HomePage/TrustedBy";
import Features from "@/components/HomePage/Features";
import Stats from "@/components/HomePage/Stats";
import GetStarted from "@/components/HomePage/GetStarted";

export default function HomePage() {

    console.log("HomePage rendered");
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
                <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
                    <HeroSection />
                    <TrustedBy />
                    <Features />
                    <Stats />
                    <GetStarted />
                </div>
            </main>
            <Footer />
        </div>
    );
}