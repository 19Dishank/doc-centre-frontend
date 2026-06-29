// import { BookOpen, CheckCircle, FileText, FolderOpen, Key, Layers, Menu, RefreshCw, Terminal, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const Sidebar = () => {

//     const [activeSection, setActiveSection] = useState("overview");
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const sections = [
//         { id: "overview", label: "01 Overview", icon: BookOpen },
//         { id: "installation", label: "02 Installation & Initialization", icon: Terminal },
//         { id: "auth-flow", label: "03 Authentication Flow", icon: Key },
//         { id: "token-management", label: "04 Token Management & Session", icon: RefreshCw },
//         { id: "operations", label: "05 Document & Folder Operations", icon: FolderOpen },
//         { id: "backend-pattern", label: "06 Recommended Backend Pattern", icon: Layers },
//         { id: "best-practices", label: "07 Best Practices", icon: CheckCircle },
//         { id: "reference", label: "08 SDK Feature Reference", icon: FileText },
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY + 120; // offset for sticky header

//             for (const section of sections) {
//                 const el = document.getElementById(section.id);
//                 if (el) {
//                     const top = el.offsetTop;
//                     const height = el.offsetHeight;
//                     if (scrollPosition >= top && scrollPosition < top + height) {
//                         setActiveSection(section.id);
//                         break;
//                     }
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToSection = (id) => {
//         setMobileMenuOpen(false);
//         const element = document.getElementById(id);
//         if (element) {
//             const yOffset = -80; // offset for sticky header
//             const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
//             window.scrollTo({ top: y, behavior: "smooth" });
//             setActiveSection(id);
//         }
//     };

//     return (
//         <>
//             <aside className="hidden md:block w-72 shrink-0 border-r border-zinc-200/80 dark:border-zinc-800 py-8 pr-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
//                 <div className="space-y-6">
//                     <div>
//                         <h5 className="mb-3 text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
//                             Integration Guide v1.0
//                         </h5>
//                         <nav className="space-y-1">
//                             {sections.map((sec) => {
//                                 const Icon = sec.icon;
//                                 const isActive = activeSection === sec.id;
//                                 return (
//                                     <div
//                                         key={sec.id}
//                                         onClick={() => scrollToSection(sec.id)}
//                                         className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer text-left ${isActive
//                                             ? "bg-blue-50 dark:bg-blue-950/40 text-[#2b7fff]"
//                                             : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
//                                             }`}
//                                     >
//                                         <Icon className={`size-4 ${isActive ? "text-[#2b7fff]" : "text-zinc-400 dark:text-zinc-500"}`} />
//                                         {sec.label.substring(3)}
//                                     </div>
//                                 );
//                             })}
//                         </nav>
//                     </div>

//                     <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
//                         <div className="p-3 bg-zinc-100/60 dark:bg-zinc-900/60 rounded-lg border border-zinc-200/50 dark:border-zinc-800">
//                             <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
//                                 NPM PACKAGE
//                             </span>
//                             <code className="text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-200/80 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
//                                 doc-center-sdk
//                             </code>
//                         </div>
//                     </div>
//                 </div>
//             </aside>

//             <div className="md:hidden fixed bottom-6 right-6 z-40">
//                 <button
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                     className="flex items-center justify-center p-3 rounded-full bg-[#2b7fff] text-white shadow-lg hover:bg-blue-600 transition-all active:scale-95 cursor-pointer"
//                 >
//                     {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
//                 </button>
//             </div>

//             {mobileMenuOpen && (
//                 <div className="md:hidden fixed inset-0 z-30 bg-zinc-900/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
//                     <div
//                         className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-zinc-900 shadow-2xl p-6 flex flex-col gap-4 overflow-y-auto"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
//                             <span className="font-bold text-zinc-800 dark:text-zinc-200">Documentation Menu</span>
//                             <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">
//                                 <X className="size-5 text-zinc-500 dark:text-zinc-450" />
//                             </button>
//                         </div>
//                         <nav className="flex flex-col gap-1.5 py-2">
//                             {sections.map((sec) => {
//                                 const Icon = sec.icon;
//                                 const isActive = activeSection === sec.id;
//                                 return (
//                                     <button
//                                         key={sec.id}
//                                         onClick={() => scrollToSection(sec.id)}
//                                         className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-left ${isActive
//                                             ? "bg-blue-50 dark:bg-blue-950/40 text-[#2b7fff]"
//                                             : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
//                                             }`}
//                                     >
//                                         <Icon className="size-4" />
//                                         {sec.label}
//                                     </button>
//                                 );
//                             })}
//                         </nav>
//                         <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-400 dark:text-zinc-500">
//                             DocCenter SDK • V1.0 • Generated 2026
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Sidebar;