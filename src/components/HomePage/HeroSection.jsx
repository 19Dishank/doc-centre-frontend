import { ArrowRight, Folder, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import HeroMockup from "./HeroMockup";

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-10">
            <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                <span className="inline-flex items-center rounded-full bg-blue-50 text-[#2b7fff] border border-blue-100 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                    Document management platform
                </span>

                <div className="relative">
                    <div className="hidden lg:flex absolute -left-14 top-1 size-9 rounded-xl bg-blue-50 border border-blue-100 items-center justify-center">
                        <Folder className="size-4 text-[#2b7fff]" />
                    </div>
                    <h1 className="leading-[1.12] font-bold text-[2.6rem] md:text-5xl lg:text-[3.15rem] tracking-tight text-zinc-950 max-w-xl">
                        Your team's documents, finally{" "}
                        <span className="text-[#2b7fff]">in order</span>
                    </h1>
                    <div className="hidden lg:flex absolute -right-3 -top-3 size-9 rounded-xl bg-blue-50 border border-blue-100 items-center justify-center rotate-6">
                        <FileText className="size-4 text-[#2b7fff]" />
                    </div>
                </div>

                <p className="leading-relaxed text-zinc-500 text-base md:text-[1.05rem] max-w-md">
                    Upload, organise, preview and share any file type — with role-based access control, real-time notifications, and an API to embed it all in your own product.
                </p>

                <div className="flex flex-col items-center lg:items-start gap-3">
                    <NavLink to="/onboarding">
                        <Button className="cursor-pointer bg-[#2b7fff] hover:bg-[#2b7fff]/90 text-white px-7 gap-2 h-12 text-[0.95rem] font-semibold rounded-full shadow-lg shadow-blue-500/20">
                            Get started free
                            <ArrowRight className="size-4" />
                        </Button>
                    </NavLink>
                    <span className="text-xs text-zinc-400">No credit card required</span>
                </div>
            </div>

            <HeroMockup />
        </section>
    );
};

export default HeroSection;