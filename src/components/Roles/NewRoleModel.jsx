import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toastNotification } from "@/helper/toastNotification";
import { inviteUser } from "@/api/user";

const NewRoleModel = ({ setIsOpen }) => {

    const initialData = {
        name: "",
        description: "",
    };

    const [invitationData, setInvitationData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    const validateField = (name, value) => {

        switch (name) {

            case "name":
                if (!value.trim()) return "Name is required";
                return "";

            case "description":
                if (!value.trim()) return "Description is required";
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

    console.log("errors", errors)

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

        try {
            console.log("Sending req : ", invitationData)
            const res = await inviteUser(invitationData);
            console.log("Response Data:", res);
            toastNotification(`User invited successfully! Email is sent to ${invitationData.email}`, "success");
            setInvitationData(initialData);
        } catch (error) {
            console.error("Error inviting user:", error);
            toastNotification(error?.response?.data?.message || "An error occurred while inviting the user. Please try again.", "error");
        }
    };

    return (
        <div className="bg-zinc-950/40 flex absolute inset-0 justify-center items-center z-100 backdrop-blur">
            <Card className="shadow-2xl p-6 gap-4 w-120">
                <CardHeader className="p-0 flex justify-between items-start gap-1 border-b border-zinc-200">
                    <div className="flex flex-col gap-1">
                        <CardTitle className="font-semibold text-lg leading-7">Add New Role</CardTitle>
                        <CardDescription className="text-sm leading-5">
                            Create a new role for your workspace.
                        </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="size-8 -mr-1 -mt-1 hover:bg-zinc-100 rounded-full" onClick={() => setIsOpen(false)}>
                        <X className="size-4" />
                    </Button>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label className="font-medium text-sm leading-5">Role <p className="text-red-500">*</p></Label>
                        <Input placeholder="Enter role name" name="name" value={invitationData.name} onChange={handleChange} />
                        {errors.name && <p className="text-red-500 text-xs"> * {errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-medium text-sm leading-5">
                            Description <p className="text-red-500">*</p> 
                        </Label>
                        <Textarea placeholder="Add a description for the role…" rows={3} name="description" value={invitationData.description} onChange={handleChange} />
                        {errors.description && <p className="text-red-500 text-xs"> * {errors.description}</p>}
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-2 bg-white px-0">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button className="font-semibold bg-[#2b7fff] text-blue-50" onClick={handleSubmit}>
                        Send Invite
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NewRoleModel;