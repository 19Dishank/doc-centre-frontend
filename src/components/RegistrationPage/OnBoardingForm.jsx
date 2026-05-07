import { FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";

const OnBoardingForm = () => {

    const registrationData = {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        orgName: "Acme Corp",
        orgSlogan: "Organization Slogan",
        slug: "acmecorp"
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Data:", registrationData);
    }

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
                        Set Password
                    </h1>
                    <p className="text-[#71717b] text-sm leading-6">Choose a strong password for your account</p>
                </div>

                <div className="flex flex-col gap-4">
                    
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="password"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Choose a strong password"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
                            defaultValue="jane.doe@acme.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="org"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Organization Name
                        </Label>
                        <Input
                            id="org"
                            placeholder="Acme Corp"
                            className="rounded-lg border-zinc-200 border border-solid h-10"
                            defaultValue="Acme Corp"
                        />
                    </div>
                </div>

                <Button onClick={handleSubmit} className=" cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full" style={{ height: "44px" }}>
                    Create Account
                </Button>
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

export default OnBoardingForm;