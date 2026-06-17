import { Lock, KeyRound, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChangePasswordForm from "./Forms/ChangePasswordForm";
import { useState } from "react";

const SecurityAndCredentials = () => {
    const [showPasswordForm, setShowPasswordForm] = useState(false);

    return (
        <Card className="p-4 sm:p-6 flex flex-col gap-5 shadow-sm">
            <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                    <div className="size-9 rounded-lg bg-purple-50 border border-purple-100 flex justify-center items-center shrink-0">
                        <Lock className="size-5 text-purple-600" />
                    </div>
                    <h2 className="font-semibold text-lg leading-7 text-zinc-950">
                        Security & Credentials
                    </h2>
                </div>
                <p className="text-zinc-600 text-sm leading-5">
                    Maintain strong security standards by updating access factors regularly.
                </p>
            </CardHeader>

            <CardContent className="p-0">
                {!showPasswordForm ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-sm font-semibold text-zinc-900">
                                Account Access Password
                            </span>
                            <span className="text-xs text-zinc-600 leading-normal">
                                Update your current functional login passcode security tokens.
                            </span>
                        </div>
                        <Button
                            type="button"
                            onClick={() => setShowPasswordForm(true)}
                            className="bg-[#2b7fff] text-blue-50 cursor-pointer text-xs px-3 h-9 w-full sm:w-auto gap-1.5 shrink-0"
                        >
                            <KeyRound className="size-3.5" />
                            Change Password
                        </Button>
                    </div>
                ) : (
                    <ChangePasswordForm setShowPasswordForm={setShowPasswordForm} />
                )}
            </CardContent>
        </Card>
    );
};

export default SecurityAndCredentials;