import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useEffect, useState } from "react";
import { emailRegex } from "@/constants";
import { toastNotification } from "@/helper/toastNotification";
import { inviteUser } from "@/api/user";
import { fetchRoles } from "@/api/role";

const InviteUserModal = ({ setIsOpen }) => {

    const initialData = {
        email: "",
        role: "",
        message: "",
    };

    const [invitationData, setInvitationData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    const [roles, setRoles] = useState([]);
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

        setInvitationData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        Object.keys(invitationData).forEach((key) => {
            newErrors[key] = validateField(key, invitationData[key]);
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
            console.log("Sending req : ", invitationData)
            const res = await inviteUser(invitationData);
            console.log("Response Data:", res);
            toastNotification(`User invited successfully! Email is sent to ${invitationData.email}`, "success");
            setInvitationData(initialData);
            setIsOpen(false);
        } catch (error) {
            console.error("Error inviting user:", error);
            toastNotification(error?.response?.data?.message || "An error occurred while inviting the user. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    const gethRoles = async () => {
        try {
            const res = await fetchRoles();
            setRoles(res.data.roles);
        } catch (error) {
            console.error("Error fetching roles:", error);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        gethRoles();
    }, []);

    return (
        <div className="bg-zinc-950/40 flex absolute inset-0 justify-center items-center z-100 backdrop-blur">
            <Card className="shadow-2xl p-6 gap-4 w-120">
                <CardHeader className="p-0 flex justify-between items-start gap-1 border-b border-zinc-200">
                    <div className="flex flex-col gap-1">
                        <CardTitle className="font-semibold text-lg leading-7">Invite New User</CardTitle>
                        <CardDescription className="text-sm leading-5">
                            Send an invitation to join your workspace.
                        </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="size-8 -mr-1 -mt-1 hover:bg-zinc-100 rounded-full" onClick={() => setIsOpen(false)}>
                        <X className="size-4" />
                    </Button>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label className="font-medium text-sm leading-5">Email address <p className="text-red-500">*</p></Label>
                        <Input placeholder="Enter email address" name="email" value={invitationData.email} onChange={handleChange} />
                        {errors.email && <p className="text-red-500 text-xs"> * {errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-medium text-sm leading-5">Role</Label>
                        <Select name="role" value={invitationData.role} onValueChange={(value) => setInvitationData((prev) => ({ ...prev, role: value }))}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="z-999">
                                <SelectGroup>
                                    <SelectLabel>Select Role</SelectLabel>
                                    {roles.map((role) => (
                                        <SelectItem key={role._id} value={role._id}>{role.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-medium text-sm leading-5">
                            Message
                            <span className="font-normal text-[#71717b]">(optional)</span>
                        </Label>
                        <Textarea placeholder="Add a personal note to your invitation…" rows={3} name="message" value={invitationData.message} onChange={handleChange} />
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-2 bg-white px-0">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button className="font-semibold bg-[#2b7fff] text-blue-50" onClick={handleSubmit} disabled={loading}>
                        {loading ? "Sending..." : "Send Invite"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default InviteUserModal;