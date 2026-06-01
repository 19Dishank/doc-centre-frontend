import {
    Activity,
    ArrowUpRight,
    FileCode,
    FileText,
    LifeBuoy,
    MessageCircle,
    Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const DocumentationPage = () => {

    const resources = [
        { icon: <FileCode className="size-4 text-[#2b7fff]" />, title: "API Documentation", desc: "Reference for all endpoints, parameters, and responses." },
        { icon: <Package className="size-4 text-[#2b7fff]" />, title: "SDKs & Libraries", desc: "Official client libraries for Node.js, Python, Go, Ruby." },
        { icon: <Activity className="size-4 text-emerald-700" />, title: "Status Page", desc: "All systems operational. View incident history.", accent: "bg-emerald-50" },
        { icon: <FileText className="size-4 text-purple-600" />, title: "Code Examples", desc: "Sample integrations and starter projects on GitHub.", accent: "bg-purple-50" }
    ]

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-2xl leading-8 tracking-tight text-zinc-950">Documentation & Resources</h1>
                <p className="text-zinc-500 text-sm leading-5">Quick links to help you get started and integrate with our API.</p>
            </div>

            <div className="flex p-0 flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {resources.map((item, index) => (
                        <a href="#" key={index} className="rounded-lg bg-white border border-zinc-200 flex p-4 items-start gap-3 hover:bg-zinc-50/50 transition-colors group">
                            <div className={`size-9 shrink-0 rounded-lg flex justify-center items-center ${item.accent || 'bg-[#2b7fff]/10'}`}>
                                {item.icon}
                            </div>
                            <div className="flex flex-col flex-1 gap-0.5 min-w-0">
                                <div className="flex justify-between items-center gap-2">
                                    <span className="font-medium text-sm text-zinc-950 group-hover:text-[#2b7fff] transition-colors truncate">{item.title}</span>
                                    <ArrowUpRight className="size-4 text-zinc-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                                <span className="text-zinc-500 text-xs leading-normal line-clamp-2 sm:line-clamp-none">
                                    {item.desc}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <Separator />

                <div className="rounded-lg bg-[#2b7fff]/5 flex flex-col sm:flex-row p-4 justify-between items-start sm:items-center gap-4">
                    <div className="flex items-start sm:items-center gap-3 min-w-0">
                        <div className="size-9 shrink-0 rounded-full bg-[#2b7fff]/10 flex justify-center items-center mt-0.5 sm:mt-0">
                            <LifeBuoy className="size-4 text-[#2b7fff]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="font-medium text-sm text-zinc-950">Need help?</span>
                            <span className="text-zinc-500 text-xs leading-normal">
                                Reach out to our developer support team — typically replies in under 4 hours.
                            </span>
                        </div>
                    </div>
                    <Button className="shrink-0 bg-[#2b7fff] text-blue-50 gap-2 w-full sm:w-auto h-10">
                        <MessageCircle className="size-4" /> Contact Support
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DocumentationPage;