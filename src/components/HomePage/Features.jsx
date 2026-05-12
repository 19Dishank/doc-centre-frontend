import { History, Lock, Search, Upload, Users, Workflow } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const FeaturesList = [
    {
        title: "Smart upload",
        description: "Drag, drop and watch as DocuCentral auto-tags, classifies and routes your files to the right folders.",
        icon: <Upload className="size-5 text-[#2b7fff]" />,
    },
    {
        title: "Real-time collaboration",
        description: "Comment, mention teammates and review changes together — no more emailed attachments.",
        icon: <Users className="size-5 text-[#2b7fff]" />,
    },
    {
        title: "Granular permissions",
        description: "Role-based access, audit trails and SSO keep sensitive documents in the right hands only.",
        icon: <Lock className="size-5 text-[#2b7fff]" />,
    },
    {
        title: "Universal search",
        description: "Find any document in milliseconds with full-text and OCR-powered semantic search.",
        icon: <Search className="size-5 text-[#2b7fff]" />,
    },
    {
        title: "Version history",
        description: "Every change tracked, every version restorable. Roll back to any point in time, instantly.",
        icon: <History className="size-5 text-[#2b7fff]" />,
    },
    {
        title: "Approval workflows",
        description: "Build custom review and signoff flows that route documents through your org automatically.",
        icon: <Workflow className="size-5 text-[#2b7fff]" />,
    },
];

const Features = () => {
    return (
        <section className="flex flex-col gap-12 py-8">
            <div className="text-center flex flex-col items-center gap-4 px-4">
                <Badge className="w-fit px-4 py-1" variant="secondary">
                    Features
                </Badge>
                <h2 className="font-bold text-3xl md:text-4xl tracking-tight max-w-2xl text-zinc-950">
                    Everything you need to manage documents
                </h2>
                <p className="max-w-xl text-zinc-500 text-base md:text-lg">
                    From upload to archive, DocuCentral handles the entire document lifecycle so your team can focus on the
                    work that matters.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {FeaturesList.map((feature, index) => (
                    <Card key={index} className="p-8 group hover:border-[#2b7fff]/50 transition-all duration-300 shadow-sm hover:shadow-md border-zinc-200">
                        <CardHeader className="p-0 gap-4">
                            <div className="size-12 rounded-xl bg-[#2b7fff]/10 flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <CardTitle className="text-xl font-bold text-zinc-950">
                                {feature.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-3">
                            <p className="leading-relaxed text-zinc-500 text-sm md:text-base">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Features;