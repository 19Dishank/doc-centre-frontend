import { FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RegistrationForm = () => {

    const initialData = {
        firstName: "",
        lastName: "",
        email: "",
        orgName: "",
        orgSlogan: "",
        slug: ""
    }

    const [registrationData, setRegistrationData] = useState(initialData);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegistrationData({
            ...registrationData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://192.168.100.117:3000/api/v1/tenant/register", registrationData);
        console.log("Registration Data:", res);
    }

    console.log("Registration Data", registrationData)

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
                                onChange={handleChange}
                                name="firstName"
                                value={registrationData.firstName}
                                id="firstName"
                                placeholder="Jane"
                                className="rounded-lg border border-zinc-200 border-solid h-10"
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
                                name="lastName"
                                onChange={handleChange}
                                value={registrationData.lastName}
                                placeholder="Doe"
                                className="rounded-lg border border-zinc-200 border-solid h-10"
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
                            name="email"
                            onChange={handleChange}
                            value={registrationData.email}
                            type="email"
                            placeholder="you@company.com"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="orgName"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Organization Name
                        </Label>
                        <Input
                            id="orgName"
                            name="orgName"
                            onChange={handleChange}
                            value={registrationData.orgName}
                            placeholder="Acme Corp"
                            className="rounded-lg border-zinc-200 border border-solid h-10"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="orgSlogan"
                            className="font-medium uppercase text-zinc-950 tracking-wider"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16px",
                                letterSpacing: "0.06em",
                            }}>
                            Organization Slogan
                        </Label>
                        <Input
                            id="orgSlogan"
                            name="orgSlogan"
                            onChange={handleChange}
                            value={registrationData.orgSlogan}
                            placeholder="Acme Corp"
                            className="rounded-lg border border-zinc-200 border-solid h-10"
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
                                name="slug"
                                onChange={handleChange}
                                value={registrationData.slug}
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

export default RegistrationForm;