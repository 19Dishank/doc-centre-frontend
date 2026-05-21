import {
    Lock,
    KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { changeUserPassword } from "@/api/user";
import { toastNotification } from "@/helper/toastNotification";
import FormField from "../ui/form-field";

const SecurityAndCredentials = () => {

    const [securityData, setSecurityData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [showPasswordForm, setShowPasswordForm] = useState(false);

    const handleSecurityChange = (e) => {
        const { name, value } = e.target;
        setSecurityData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            if (securityData.newPassword !== securityData.confirmPassword) {
                toastNotification("New password and confirmation do not match.", "error");
                return;
            }
            const res = await changeUserPassword({
                currentPassword: securityData.currentPassword,
                newPassword: securityData.newPassword,
                confirmPassword: securityData.confirmPassword
            });
            console.log("Password change response:", res);
            setShowPasswordForm(false);
        } catch (error) {
            console.error("Error changing password:", error);
            toastNotification(error?.response?.data?.message || "Failed to change password. Please try again.", "error");
        }

    };


    return (
        <Card className="p-4 sm:p-6 flex flex-col gap-5 shadow-sm">
            <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                    <div className="size-9 rounded-lg bg-purple-50 border border-purple-100 flex justify-center items-center shrink-0">
                        <Lock className="size-5 text-purple-600" />
                    </div>
                    <h2 className="font-semibold text-lg leading-7 text-zinc-950">Security & Credentials</h2>
                </div>
                <p className="text-zinc-600 text-sm leading-5">
                    Maintain strong security standards by updating access factors regularly.
                </p>
            </CardHeader>

            <CardContent className="p-0">
                {!showPasswordForm ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-sm font-semibold text-zinc-900">Account Access Password</span>
                            <span className="text-xs text-zinc-600 leading-normal">Update your current functional login passcode security tokens.</span>
                        </div>
                        <Button
                            type="button"
                            onClick={() => setShowPasswordForm(true)}
                            className="bg-[#2b7fff] text-blue-50 text-xs px-3 h-9 w-full sm:w-auto gap-1.5 shrink-0"
                        >
                            <KeyRound className="size-3.5" />
                            Change Password
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handlePasswordSubmit} className="space-y-4 pt-4 border-t border-zinc-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormField label="Current Password" name="currentPassword" value={securityData.currentPassword} onChange={handleSecurityChange} isPasswordField={true} />
                            <FormField label="New Password" name="newPassword" value={securityData.newPassword} onChange={handleSecurityChange} isPasswordField={true} />
                            <FormField label="Confirm Password" name="confirmPassword" value={securityData.confirmPassword} onChange={handleSecurityChange} isPasswordField={true} />
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setShowPasswordForm(false)}
                                className="border-zinc-200 text-zinc-700 h-9 text-xs w-full sm:w-auto"
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#2b7fff] text-blue-50 h-9 text-xs w-full sm:w-auto">
                                Update Password
                            </Button>
                        </div>
                    </form>
                )}
            </CardContent>
        </Card>
    );
};

export default SecurityAndCredentials;