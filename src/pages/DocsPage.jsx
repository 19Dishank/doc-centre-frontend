import { useState } from "react";
import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import Sidebar, { sections } from "@/components/DocsPage/Sidebar";
import Introduction from "@/components/DocsPage/Introduction";
import Overview from "@/components/DocsPage/Overview";
import Installation from "@/components/DocsPage/Installation";
import AuthFlow from "@/components/DocsPage/AuthFlow";
import TokenManagement from "@/components/DocsPage/TokenManagement";
import Operations from "@/components/DocsPage/Operations";
import BestPractices from "@/components/DocsPage/BestPractices";
import BackendPattern from "@/components/DocsPage/BackendPattern";
import Reference from "@/components/DocsPage/Reference";
import { BookOpen, Menu } from "lucide-react";
import useSEO from "@/hooks/useSEO";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLabel = sections.find((s) => s.id === activeSection)?.label.replace(/^\d+\.\s*/, "") || "Overview";

  useSEO({
    title: `${activeLabel} | Developer Documentation`,
    description: `Read the official DocCenter developer documentation for ${activeLabel}. Explore guides, API reference, installation steps, and integration details.`,
  });

  return (
    <div className="min-h-screen bg-zinc-50/50 flex flex-col text-zinc-800 antialiased ">
      <Header />

      {/* Sticky Mobile Sub-Header */}
      <div className="sticky top-16 z-30 lg:hidden w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="size-4 text-[#2b7fff]" />
          <span className="text-sm font-semibold text-zinc-700">
            {activeLabel}
          </span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-semibold text-zinc-600 shadow-sm hover:bg-zinc-50 active:scale-95 transition-all cursor-pointer"
        >
          <Menu className="size-3.5 text-zinc-500" />
          <span>Menu</span>
        </button>
      </div>

      <div className="flex-1 flex max-w-[1440px] justify-between w-full mx-auto relative px-4 sm:px-6 lg:px-8">
        <main className="flex-1 min-w-0 py-8 px-0 lg:px-8 xl:px-12">
          <Introduction />
          <Overview />
          <Installation />
          <AuthFlow />
          <TokenManagement />
          <Operations />
          <BackendPattern />
          <BestPractices />
          <Reference />
        </main>
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
      </div>
      <Footer />
    </div>
  );
}
