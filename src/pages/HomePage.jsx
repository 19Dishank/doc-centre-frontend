import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import TrustedBy from "@/components/HomePage/TrustedBy";
import Features from "@/components/HomePage/Features";
import Stats from "@/components/HomePage/Stats";
import GetStarted from "@/components/HomePage/GetStarted";

export default function HomePage() {


    return (
        <div>
            <Header />
            <div className="max-w-285 mx-auto px-8 py-12">
                <div className="flex flex-col gap-12">
                    <HeroSection />
                    <TrustedBy />
                    <Features />
                    <Stats />
                    <GetStarted />
                </div>
            </div>
            <Footer />
        </div>
    );
}
