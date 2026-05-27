import { X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { emailRegex } from "@/constants";
import { toastNotification } from "@/helper/toastNotification";
import { inviteUser, updateUserRole } from "@/api/user";

const UserModal = ({ setIsOpen, user, fetchUsers, roles }) => {
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
            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

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
                        className="size-8 -mr-1 -mt-1 hover:bg-zinc-100 rounded-full shrink-0 text-zinc-500" 
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="size-4" />
                    </Button>
                </CardHeader>

                <CardContent className="flex p-0 flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="email" className="font-medium text-sm text-zinc-800 flex items-center gap-1">
                            Email address <span className="text-red-500 font-bold">*</span>
                        </Label>
                        <Input 
                            id="email"
                            disabled={!!user} 
                            placeholder="Enter email address" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="h-10 text-zinc-900 bg-white"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-0.5 font-medium">*{errors.email}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="role-select" className="font-medium text-sm text-zinc-800">Role</Label>
                        <Select name="role" value={formData.role} onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}>
                            <SelectTrigger id="role-select" className="w-full h-10 bg-white text-zinc-900">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="z-1000">
                                <SelectGroup>
                                    <SelectLabel>Select Role</SelectLabel>
                                    {roles.map((role) => (
                                        <SelectItem key={role._id} value={role._id}>{role.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

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
                    <Button variant="outline" onClick={() => setIsOpen(false)} className=" text-zinc-700">
                        Cancel
                    </Button>
                    <Button 
                        className="cursor-pointer font-semibold bg-[#2b7fff] text-blue-50 shadow-sm" 
                        onClick={handleSubmit} 
                        disabled={loading}
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

export default UserModal;