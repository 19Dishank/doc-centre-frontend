import { ArrowRight, Eye, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("token", "dummy-token");
        navigate("/dashboard");
    }

    return (
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-2xl flex px-12 flex-col w-full">
                <div className="flex mb-12 items-center gap-2">
                    <div className="size-9 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                        <FileStack className="size-5 text-blue-50" />
                    </div>
                    <span className="font-semibold text-[#2b7fff] text-lg leading-7 tracking-tight">DocuCentral</span>
                </div>
                <div className="flex mb-8 flex-col gap-2">
                    <h1 className="font-bold text-zinc-900 tracking-tight" style={{ fontSize: "28px", lineHeight: "1.2" }}>
                        Welcome back
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">Sign in to your account to continue</p>
                </div>
                <Button
                    variant="outline"
                    className="font-medium rounded-lg bg-white text-zinc-800 border-zinc-200 border border-solid gap-2 w-full h-11">
                    <img src="/images/GoogleLogo.svg" alt="Google Logo" className="size-5" />
                    Continue with Google
                </Button>
                <div className="flex my-6 items-center gap-4">
                    <Separator className="flex-1" />
                    <span className="whitespace-nowrap text-[#71717b] text-xs">or continue with email</span>
                    <Separator className="flex-1" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="font-medium text-zinc-800 text-sm leading-5">
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            defaultValue="jordan@acmecorp.com"
                            className="rounded-lg bg-white border-zinc-200 border border-solid h-11"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password" className="font-medium text-zinc-800 text-sm leading-5">
                            Password
                        </Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                defaultValue="••••••••••••"
                                className="rounded-lg bg-white border-zinc-200 border border-solid pr-10 h-11"
                            />
                            <button className="top-1/2 -translate-y-1/2 text-[#71717b] absolute right-3">
                                <Eye className="size-4" />
                            </button>
                        </div>
                        <a href="#" className="font-medium text-[#2b7fff] text-xs self-end">
                            Forgot password?
                        </a>
                    </div>
                    <Button onClick={handleLogin} className="cursor-pointer font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11">
                        Sign In
                        <ArrowRight className="size-4 ml-1" />
                    </Button>
                </div>
                <div className="text-sm leading-5 flex mt-8 justify-center items-center gap-1">
                    <span className="text-[#71717b]">Don't have an account?</span>
                    <NavLink to="/register" className="font-medium text-[#2b7fff]">
                        Sign up
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;