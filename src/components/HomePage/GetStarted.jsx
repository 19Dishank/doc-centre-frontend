import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
    return (
        <section className="py-8">
            <Card className="bg-[#2b7fff] text-blue-50 border-none p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-500/20 overflow-hidden relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                
                <CardContent className="flex p-0 flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 relative z-10">
                    <div className="max-w-2xl flex flex-col gap-4 text-center lg:text-left">
                        <h3 className="font-bold text-3xl md:text-4xl tracking-tight leading-tight">
                            Ready to bring order to your documents?
                        </h3>
                        <p className="opacity-90 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
                            Start your 14-day free trial. No credit card required, cancel anytime.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <NavLink to="/onboarding" className="w-full sm:w-auto">
                            <Button className="bg-white cursor-pointer text-[#2b7fff] hover:bg-blue-50 px-8 gap-2 h-12 w-full sm:w-auto text-base font-semibold shadow-lg">
                                Get started
                                <ArrowRight className="size-4" />
                            </Button>
                        </NavLink>
                        <Button
                            className="bg-transparent cursor-pointer text-white border-white/30 hover:bg-white/10 px-8 h-12 w-full sm:w-auto text-base"
                            variant="outline">
                            Talk to sales
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default GetStarted;