import { ArrowRight, FileText, PlayCircle, Sparkles, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
            <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
                <Badge className="px-3 py-1 gap-2 w-fit" variant="secondary">
                    <Sparkles className="size-3 text-[#2b7fff]" />
                    New · AI-powered document insights
                </Badge>
                
                <h1 className="leading-tight font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-150 lg:max-w-none">
                    The modern home for your team's
                    <span className="text-[#2b7fff] block sm:inline lg:block xl:inline"> documents</span>
                </h1>
                
                <p className="leading-relaxed text-[#71717b] text-base md:text-lg max-w-125 lg:max-w-none">
                    DocuCentral helps growing teams store, share, and collaborate on documents with enterprise-grade
                    security and a delightfully simple interface.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <NavLink to="/onboarding" className="w-full sm:w-auto">
                        <Button className="bg-[#2b7fff] text-blue-50 px-6 gap-2 h-12 w-full sm:w-auto shadow-lg shadow-blue-500/20">
                            Start for free
                            <ArrowRight className="size-4" />
                        </Button>
                    </NavLink>
                    <Button className="px-6 gap-2 h-12 w-full sm:w-auto" variant="outline">
                        <PlayCircle className="size-4" />
                        Watch demo
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row pt-4 items-center gap-4 lg:gap-6">
                    <div className="-space-x-2 flex">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className={`size-9 rounded-full border-white border-2 border-solid ${
                                i === 0 ? 'bg-[#f54900]' : i === 1 ? 'bg-[#009689]' : i === 2 ? 'bg-[#ffb900]' : 'bg-[#fe9a00]'
                            }`} />
                        ))}
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="size-3.5 fill-[#ffb900] text-[#ffb900]" />
                            ))}
                            <span className="font-bold text-sm ml-1">4.9</span>
                        </div>
                        <span className="text-[#71717b] text-xs leading-4">Trusted by 12,000+ teams worldwide</span>
                    </div>
                </div>
            </div>

            <div className="relative shadow-2xl rounded-2xl border-zinc-200 border border-solid overflow-hidden order-1 lg:order-2 group">
                <img
                    alt="Team collaboration"
                    className="object-cover w-full h-75 sm:h-100 lg:h-125 transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                />
                <div className="bg-linear-to-t from-black/60 via-transparent to-transparent absolute inset-0" />
                
                <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6">
                    <Card className="backdrop-blur-md bg-white/90 p-3 sm:p-4 border-none shadow-xl">
                        <CardContent className="flex p-0 justify-between items-center gap-3">
                            <div className="flex items-center gap-3">
                                <div className="size-9 sm:size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center shrink-0">
                                    <FileText className="size-5 text-[#2b7fff]" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="font-semibold text-sm truncate">Q4-Strategy.pdf</span>
                                    <span className="text-[#71717b] text-[10px] sm:text-xs leading-tight truncate">
                                        Updated 2m ago · 3 collab.
                                    </span>
                                </div>
                            </div>
                            <Badge className="bg-[#2b7fff] hover:bg-[#2b7fff] text-white border-none text-[10px] sm:text-xs px-2 py-0">Live</Badge>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;