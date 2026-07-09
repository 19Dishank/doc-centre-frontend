import { BookOpen, CheckCircle, FileText, FolderOpen, Key, Layers, RefreshCw, Terminal, X } from "lucide-react";
import { useEffect } from "react";

export const sections = [
    { id: "overview", label: "01 Overview", icon: BookOpen },
    { id: "installation", label: "02 Installation & Initialization", icon: Terminal },
    { id: "auth-flow", label: "03 Authentication Flow", icon: Key },
    { id: "token-management", label: "04 Token Management & Session", icon: RefreshCw },
    { id: "operations", label: "05 Document & Folder Operations", icon: FolderOpen },
    { id: "backend-pattern", label: "06 Recommended Backend Pattern", icon: Layers },
    { id: "best-practices", label: "07 Best Practices", icon: CheckCircle },
    { id: "reference", label: "08 SDK Feature Reference", icon: FileText },
];

const Sidebar = ({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => {

    useEffect(() => {
        const handleScroll = () => {
            // Highlight the last section if scrolled to the very bottom of the page
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
                setActiveSection(sections[sections.length - 1].id);
                return;
            }

            const scrollPosition = window.scrollY + 120; // offset for sticky header

            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setActiveSection]);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -140; // offset for sticky header and mobile sub-header
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <>
            <aside className="hidden lg:block w-72 shrink-0 border-l border-zinc-200/80 py-8 pl-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="space-y-6">
                    <div>
                        <h5 className="mb-3 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                            Integration Guide v1.0
                        </h5>
                        <nav className="space-y-1">
                            {sections.map((sec) => {
                                const Icon = sec.icon;
                                const isActive = activeSection === sec.id;
                                return (
                                    <button
                                        key={sec.id}
                                        onClick={() => scrollToSection(sec.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer text-left ${isActive
                                            ? "bg-blue-50 text-[#2b7fff]"
                                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                                            }`}
                                    >
                                        <Icon className={`size-4 ${isActive ? "text-[#2b7fff]" : "text-zinc-400"}`} />
                                        {sec.label.substring(3)}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="pt-4 border-t border-zinc-200">
                        <div className="p-3 bg-zinc-100/60 rounded-lg border border-zinc-200/50">
                            <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                                NPM PACKAGE
                            </span>
                            <code className="text-xs text-zinc-700 bg-zinc-200/80 px-1.5 py-0.5 rounded font-mono">
                                doc-center-sdk
                            </code>
                        </div>
                    </div>
                </div>
            </aside>

            {mobileMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 ease-in-out" 
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div
                        className="absolute right-0 top-0 bottom-0 w-[280px] max-w-[85vw] bg-white shadow-2xl p-6 flex flex-col gap-4 overflow-y-auto animate-in slide-in-from-right duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center pb-4 border-b border-zinc-200">
                            <span className="font-bold text-zinc-800 text-sm">Documentation Menu</span>
                            <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-md hover:bg-zinc-100 cursor-pointer">
                                <X className="size-5 text-zinc-500" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-1.5 py-2">
                            {sections.map((sec) => {
                                const Icon = sec.icon;
                                const isActive = activeSection === sec.id;
                                return (
                                    <button
                                        key={sec.id}
                                        onClick={() => scrollToSection(sec.id)}
                                        className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left cursor-pointer transition-colors ${isActive
                                            ? "bg-blue-50 text-[#2b7fff]"
                                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                                            }`}
                                    >
                                        <Icon className={`size-4 ${isActive ? "text-[#2b7fff]" : "text-zinc-400"}`} />
                                        {sec.label.substring(3)}
                                    </button>
                                );
                            })}
                        </nav>
                        <div className="mt-auto pt-4 border-t border-zinc-200 text-xs text-zinc-400">
                            DocCenter SDK • V1.0 • Generated 2026
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;