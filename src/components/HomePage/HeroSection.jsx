import { ArrowRight, FileText, PlayCircle, Sparkles, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="grid grid-cols-2 items-center gap-12">
            <div className="flex flex-col gap-6">
                <Badge className="px-3 py-1 gap-2 w-fit" variant="secondary">
                    <Sparkles className="size-3 text-[#2b7fff]" />
                    New · AI-powered document insights
                </Badge>
                <h1 className="leading-tight font-bold text-5xl tracking-tight">
                    The modern home for your team's
                    <span className="text-[#2b7fff]">documents</span>
                </h1>
                <p className="leading-relaxed text-[#71717b] text-base">
                    DocuCentral helps growing teams store, share, and collaborate on documents with enterprise-grade
                    security and a delightfully simple interface.
                </p>
                <div className="flex items-center gap-4">
                    <NavLink to="/register">
                        <Button className="bg-[#2b7fff] text-blue-50 px-6 gap-2 h-11">
                            Start for free
                            <ArrowRight className="size-4" />
                        </Button>
                    </NavLink>
                    <Button className="px-6 gap-2 h-11" variant="outline">
                        <PlayCircle className="size-4" />
                        Watch demo
                    </Button>
                </div>
                <div className="flex pt-2 items-center gap-6">
                    <div className="-space-x-2 flex">
                        <div className="size-8 rounded-full bg-[#f54900] border-white border-2 border-solid" />
                        <div className="size-8 rounded-full bg-[#009689] border-white border-2 border-solid" />
                        <div className="size-8 rounded-full bg-[#ffb900] border-white border-2 border-solid" />
                        <div className="size-8 rounded-full bg-[#fe9a00] border-white border-2 border-solid" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <Star className="size-3.5 fill-chart4 text-[#ffb900]" />
                            <Star className="size-3.5 fill-chart4 text-[#ffb900]" />
                            <Star className="size-3.5 fill-chart4 text-[#ffb900]" />
                            <Star className="size-3.5 fill-chart4 text-[#ffb900]" />
                            <Star className="size-3.5 fill-chart4 text-[#ffb900]" />
                            <span className="font-medium text-sm  ml-1">4.9</span>
                        </div>
                        <span className="text-[#71717b] text-xs leading-4">Trusted by 12,000+ teams worldwide</span>
                    </div>
                </div>
            </div>
            <div className="relative shadow-2xl rounded-2xl border-zinc-200 border border-solid overflow-hidden">
                <img
                    alt="Team collaboration"
                    className="object-cover w-full h-105"
                    data-authorname="Stanley Dai"
                    data-authorurl="https://unsplash.com/@stanleydai"
                    data-photoid="x_fhKJpVxhQ"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                />
                <div className="bg-linear-to-t from-foreground/60 to-transparent absolute inset-0" />
                <div className="absolute inset-x-6 bottom-6">
                    <Card className="backdrop-blur bg-white/95 p-4 gap-2">
                        <CardContent className="flex p-0 justify-between items-center gap-2">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                                    <FileText className="size-5 text-[#2b7fff]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-sm ">Q4-Strategy.pdf</span>
                                    <span className="text-[#71717b] text-xs leading-4">
                                        Updated 2 minutes ago · 3 collaborators
                                    </span>
                                </div>
                            </div>
                            <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">Live</Badge>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;