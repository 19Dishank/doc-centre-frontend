import { ArrowRight, KeyRound, Lock, Users } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import WorkflowPanel from "./WorkflowPanel";
import SecurityPanel from "./SecurityPanel";

const steps = [
    { icon: <Users className="size-4 text-[#2b7fff]" />, title: "Create your workspace", desc: "Sign up, name your organisation and you're in. No credit card needed." },
    { icon: <Lock className="size-4 text-violet-600" />, title: "Set up roles & invite team", desc: "Define custom permissions per role, then invite members via email link." },
    { icon: <KeyRound className="size-4 text-emerald-600" />, title: "Upload, share or integrate", desc: "Start uploading immediately, or connect via API for programmatic access." },
];

const GetStarted = () => {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {steps.map((step, i) => (
                    <div key={step.title} className="flex gap-4 items-start p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm">
                        <div className="size-9 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
                            {step.icon}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Step {i + 1}</span>
                            <span className="text-sm font-semibold text-zinc-900">{step.title}</span>
                            <span className="text-xs text-zinc-500 leading-relaxed">{step.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            <WorkflowPanel />
            <SecurityPanel />

            <div className="bg-[#2b7fff] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 overflow-hidden relative">
                <Users className="absolute -right-6 -bottom-8 size-44 text-white/10" strokeWidth={1} />
                <div className="flex flex-col gap-3 text-center lg:text-left max-w-xl relative z-10">
                    <h3 className="font-bold text-3xl md:text-4xl tracking-tight leading-tight text-white">
                        Ready to bring order to your documents?
                    </h3>
                    <p className="text-blue-100 text-base max-w-lg mx-auto lg:mx-0">
                        14-day free trial. No credit card. Your team can be set up in under 5 minutes.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0 relative z-10">
                    <NavLink to="/onboarding" className="w-full sm:w-auto">
                        <Button className="bg-white cursor-pointer text-[#2b7fff] hover:bg-blue-50 px-8 gap-2 h-12 w-full sm:w-auto text-base font-semibold rounded-full">
                            Get started free
                            <ArrowRight className="size-4" />
                        </Button>
                    </NavLink>
                    <NavLink to="/docs" className="w-full sm:w-auto">
                        <Button className="bg-transparent cursor-pointer text-white border-white/30 hover:bg-white/10 px-8 h-12 w-full sm:w-auto text-base rounded-full" variant="outline">
                            Read the docs
                        </Button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;