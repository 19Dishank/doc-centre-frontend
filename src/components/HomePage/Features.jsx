import { History, Lock, Search, Upload, Users, Workflow } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Features = () => {

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

    return (
        <section className="flex flex-col gap-8">
            <div className="text-center flex flex-col items-center gap-2">
                <Badge className="w-fit" variant="secondary">
                    Features
                </Badge>
                <h2 className="font-bold text-3xl leading-9 tracking-tight">Everything you need to manage documents</h2>
                <p className="max-w-xl text-[#71717b] text-sm ">
                    From upload to archive, DocuCentral handles the entire document lifecycle so your team can focus on the
                    work that matters.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {FeaturesList.map((feature, index) => {
                    return (
                        <Card key={index} className="p-6 gap-4">
                            <CardHeader className="p-0 gap-2">
                                <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">{feature.icon}</div>
                                <CardTitle className="text-base leading-6">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 gap-2">
                                <p className="leading-relaxed text-[#71717b] text-sm">{feature.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    );
};

export default Features;