import { FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";


const RegistrationForm = () => {
    return (
        <div className="bg-white flex p-12 flex-col justify-center items-center flex-1">
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

                <Button variant="outline" className="font-medium rounded-lg border-zinc-200 border border-solid gap-2 w-full h-11">
                    <img src="/images/GoogleLogo.svg" alt="Google Logo" className="size-5" />
                    Sign up with Google
                </Button>

                <div className="flex items-center gap-4">
                    <div className="bg-zinc-200 flex-1 h-px" />
                    <span className="uppercase text-[#71717b] text-xs leading-4 tracking-wider">or sign up with email</span>
                    <div className="bg-zinc-200 flex-1 h-px" />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="firstName"
                                className="font-medium uppercase text-zinc-950 tracking-wider"
                                style={{
                                    fontSize: "11px",
                                    lineHeight: "16px",
                                    letterSpacing: "0.06em",
                                }}>
                                First Name
                            </Label>
                            <Input
                                id="firstName"
                                placeholder="Jane"
                                className="rounded-lg border border-zinc-200 border-solid h-10"
                                defaultValue="Jane"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="lastName"
                                className="font-medium uppercase text-zinc-950 tracking-wider"
                                style={{
                                    fontSize: "11px",
                                    lineHeight: "16px",
                                    letterSpacing: "0.06em",
                                }}>
                                Last Name
                            </Label>
                            <Input
                                id="lastName"
                                placeholder="Doe"
                                className="rounded-lg border border-zinc-200 border-solid h-10"
                                defaultValue="Doe"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="email"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Work Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
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
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="org"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Organization Slogan
                        </Label>
                        <Input
                            id="org"
                            placeholder="Acme Corp"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
                            defaultValue="Organization Slogan"
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
                            Slug
                        </Label>
                        <div className="rounded-md bg-white border-zinc-200 border border-solid flex h-10 overflow-hidden">
                            <input
                                id="slug"
                                defaultValue="acmecorp"
                                className="bg-transparent outline-none text-sm leading-5 px-3"
                            />
                            <span className="bg-zinc-100 text-[#71717b] text-sm leading-5 border-zinc-200 border-t-0 border-r-1 flex-1 border-b-0 border-l-0 border-solid flex px-3 items-center">
                                .cdms.com
                            </span>
                        </div>
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
                            Upload Organization Logo
                        </Label>
                        <Input
                            id="org"
                            placeholder="Acme Corp"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
                            defaultValue="Organization Slogan"
                        />
                    </div>
                </div>

                <Button className=" cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 w-full" style={{ height: "44px" }}>
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

export default RegistrationForm;