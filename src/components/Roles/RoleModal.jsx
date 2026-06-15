import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toastNotification } from "@/helper/toastNotification";
import { createNewRole, updateRole } from "@/api/role";
import FormField from "../ui/form-field";
import { createPortal } from "react-dom";

const RoleModal = ({ setIsOpen, getAvailableRoles, currentRole }) => {

    const [invitationData, setInvitationData] = useState({
        name: currentRole?.name || "",
        description: currentRole?.description || "",
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
    });

    const validateField = (name, value) => {

        switch (name) {

            case "name":
                if (!value.trim()) return "Name is required";
                if (value.length < 3) return "Name should contain at least 3 characters";
                if (value.length > 100) return "Name should not exceed 100 characters";
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

        try {
            const res = currentRole
                ? await updateRole(currentRole._id, invitationData)
                : await createNewRole(invitationData);
            console.log("Response Data:", res);
            toastNotification(`Role ${currentRole ? "updated" : "created"} successfully!`, "success");
            getAvailableRoles();
            setInvitationData({ name: "", description: "" });
        } catch (error) {
            console.error("Error creating role:", error);
            toastNotification(error?.response?.data?.message || `An error occurred while ${currentRole ? "updating" : "creating"} the role. Please try again.`, "error");
        } finally {
            setIsOpen(false);
        }
    };

    return createPortal(
        <div className="bg-zinc-950/40 flex fixed inset-0 justify-center items-center z-100 backdrop-blur">
            <Card className="w-120 overflow-hidden animate-in fade-in zoom-in-95 duration-150 border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10 rounded-2xl p-0 gap-0">
                <div className="h-1 w-full bg-linear-to-r from-blue-500 via-blue-600 to-blue-500" />

                <div className="p-6 shadow-2xl flex flex-col gap-4 w-full">
                    <CardHeader className="p-0 flex justify-between items-start gap-1 border-b border-zinc-200">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="font-semibold text-lg leading-7">
                                {currentRole ? "Edit Role" : "Add New Role"}
                            </CardTitle>
                            <CardDescription className="text-sm leading-5">
                                {currentRole ? "Update the details of your role." : "Create a new role for your workspace."}
                            </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" className="cursor-pointer size-8 -mr-1 -mt-1 hover:bg-zinc-100 rounded-full" onClick={() => setIsOpen(false)}>
                            <X className="size-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-4">
                        <FormField
                            label="Role"
                            placeholder="Enter role name"
                            name="name"
                            value={invitationData.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <div className="flex flex-col gap-2">
                            <Label
                                className="flex font-medium uppercase text-zinc-950 text-[11px] leading-4 tracking-[0.06em]"
                            >
                                <span>Description</span>
                            </Label>
                            <Textarea placeholder="Add a description for the role…" rows={3} name="description" value={invitationData.description} onChange={handleChange} />
                        </div>
                    </CardContent>
                    <CardFooter className="justify-end gap-2 bg-white px-0 pb-0">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button className="cursor-pointer font-semibold bg-[#2b7fff] text-blue-50" onClick={handleSubmit}>
                            {currentRole ? "Edit Role" : "Create Role"}
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
        , document.body
    );
};

export default RoleModal;