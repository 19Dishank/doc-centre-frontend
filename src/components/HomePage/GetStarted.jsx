import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
    return (
        <section>
            <Card className="bg-[#2b7fff] text-blue-50 border-black/1 border-0 border-solid p-12 gap-6">
                <CardContent className="flex p-0 justify-between items-center gap-6">
                    <div className="max-w-xl flex flex-col gap-2">
                        <h3 className="font-bold text-2xl leading-8 tracking-tight">
                            Ready to bring order to your documents?
                        </h3>
                        <p className="opacity-90 text-sm ">
                            Start your 14-day free trial. No credit card required, cancel anytime.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <NavLink to="/register">
                            <Button className="bg-blue-50 text-[#2b7fff] px-6 gap-2 h-11">
                                Get started
                                <ArrowRight className="size-4" />
                            </Button>
                        </NavLink>
                        <Button
                            className="bg-transparent text-blue-50 border-blue-50/30 border-0 border-solid px-6 h-11"
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