import { X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { emailRegex } from "@/constants";
import { toastNotification } from "@/helper/toastNotification";
import { inviteUser, updateUserRole } from "@/api/user";
import FormField from "../ui/form-field";

const UserModel = ({ setIsOpen, user, fetchUsers, roles }) => {
    
    const [formData, setFormData] = useState({
        email: user?.email || "",
        role: user?.role?._id || "",
        message: "",
    });

    const [errors, setErrors] = useState({ email: "", role: "", message: "" });

    const [loading, setLoading] = useState(false);

    const validateField = (name, value) => {
        switch (name) {
            case "email":
                if (!value.trim()) return "Email is required";
                if (!emailRegex.test(value)) {
                    return "Please provide a valid email";
                }
                return "";

            case "role":
                if (!value) return "Role is required";
                return "";

            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSelectChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            newErrors[key] = validateField(key, formData[key]);
        });
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return;

        setLoading(true);
        try {
            user
                ? await updateUserRole(user._id, formData?.role)
                : await inviteUser(formData);
            toastNotification(`User ${user ? "updated" : "invited"} successfully!`, "success");
            setFormData({ email: "", role: "", message: "" });
            setIsOpen(false);
            fetchUsers();
        } catch (error) {
            console.error(`Error ${user ? "updating" : "inviting"} user:`, error);
            toastNotification(error?.response?.data?.message || "An error occurred. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-zinc-950/40 flex fixed inset-0 justify-center items-center z-100 backdrop-blur p-4">

            <Card className="shadow-2xl p-5 sm:p-6 flex flex-col gap-5 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                <CardHeader className="p-0 flex flex-row justify-between items-start gap-4 pb-3 border-b border-zinc-100">
                    <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="font-semibold text-lg text-zinc-950 truncate">
                            {user ? "Update User" : "Invite New User"}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm text-zinc-500 leading-normal">
                            {user ? "Update user information." : "Send an invitation to join your workspace."}
                        </CardDescription>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 cursor-pointer -mr-1 -mt-1 hover:bg-zinc-100 rounded-full shrink-0 text-zinc-500"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="size-4" />
                    </Button>
                </CardHeader>

                <CardContent className="flex p-0 flex-col gap-4">
                    <FormField
                        label="Email"
                        placeholder="Enter user's email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        disabled={!!user}
                    />
                    <FormField
                        placeholder="Select a role"
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={(value) => handleSelectChange("role", value)}
                        error={errors.role}
                        type="select"
                        options={roles.filter(role => role.name !== "Admin")}
                        emptyStateMessage="No roles available. Please create a role first."
                    />
                    {!user && (
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="message" className="font-medium text-sm text-zinc-800 flex items-center gap-1">
                                Message <span className="font-normal text-zinc-500 text-xs">(optional)</span>
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Add a personal note to your invitation…"
                                rows={3}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="resize-none text-zinc-900 bg-white"
                            />
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex gap-2 justify-end bg-white px-0 w-full">
                    <Button variant="outline" onClick={() => setIsOpen(false)} className=" text-zinc-700 cursor-pointer">
                        Cancel
                    </Button>
                    <Button
                        className="cursor-pointer font-semibold bg-[#2b7fff] text-blue-50 shadow-sm"
                        onClick={handleSubmit}
                        disabled={loading || !formData.email || !formData.role || formData.role === user?.role?._id || Object.values(errors).some((error) => error !== "")}
                    >
                        {loading
                            ? user ? "Updating..." : "Sending..."
                            : user ? "Update User" : "Send Invite"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default UserModel;