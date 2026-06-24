import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import Sidebar from "@/components/DocsPage/SideBar";
import Introduction from "@/components/DocsPage/Introduction";
import Overview from "@/components/DocsPage/Overview";
import Installation from "@/components/DocsPage/Installation";
import AuthFlow from "@/components/DocsPage/AuthFlow";
import TokenManagement from "@/components/DocsPage/TokenManagement";
import Operations from "@/components/DocsPage/Operations";
import BestPractices from "@/components/DocsPage/BestPractices";
import BackendPattern from "@/components/DocsPage/BackendPattern";
import Reference from "@/components/DocsPage/Reference";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-zinc-50/50 flex flex-col text-zinc-800 antialiased ">
      <Header />
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative px-4 sm:px-6 lg:px-8">
        <Sidebar />
        <main className="flex-1 min-w-0 py-8 md:px-8 lg:px-12 max-w-4xl">
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
      </div>
      <Footer />
    </div>
  );
}
