import { FileStack } from "lucide-react";
import { NavLink } from "react-router-dom";
import OnBoardingForm from "./Forms/OnBoardingForm";

const OnBoarding = () => {

    return (
        <div className="min-h-screen bg-white flex p-12 flex-col justify-center items-center flex-1">
            <div className="max-w-xl flex flex-col gap-8 w-full">

                <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-bold text-[#2b7fff] text-lg leading-7 tracking-tight">DocuCentral</span>
                </div>

                <div className="flex flex-col gap-2">
                    <h1
                        className="font-bold text-zinc-950 tracking-tight"
                        style={{
                            fontSize: "30px",
                            lineHeight: "36px",
                            letterSpacing: "-0.02em",
                        }}>
                        Create your account
                    </h1>
                    <p className="text-[#71717b] text-sm leading-6">Start your 14-day free trial. No credit card required.</p>
                </div>

                <OnBoardingForm />

                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#71717b] text-sm leading-5">
                        Already have an account? {" "}
                        <NavLink to="/login" className="font-medium text-[#2b7fff]"> Sign in</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OnBoarding;