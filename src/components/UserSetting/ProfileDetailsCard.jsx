import {
    User,
    Save,
    Shield,
    Mail
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

import { useAuthContext } from "@/contexts/AuthContext";
import { toastNotification } from "@/helper/toastNotification";
import { updateUserProfile } from "@/api/user";

import FormField from "../ui/form-field";

const ProfileDetailsCard = () => {

    const { user, getUserDetails } = useAuthContext();

    const initialProfileData = {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
    };

    const [profileData, setProfileData] = useState(initialProfileData);

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
    });

    const [loading, setLoading] = useState(false);

    const hasChanges =
        profileData.firstName.trim() !== user.firstName ||
        profileData.lastName.trim() !== user.lastName;

    const validateField = (name, value) => {

        switch (name) {
            case "firstName":
                if (!value.trim()) return "First name is required";
                if (value.trim().length < 2 || value.trim().length > 50) return "First name must be between 2 and 50 characters";
                return "";

            case "lastName":
                if (!value.trim()) return "Last name is required";
                if (value.trim().length < 2 || value.trim().length > 50) return "Last name must be between 2 and 50 characters";
                return "";

            default:
                return "";
        }
    };

    const handleProfileChange = (e) => {

        const { name, value } = e.target;

        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const validateForm = () => {

        const newErrors = {};

        Object.keys(profileData).forEach((key) => {
            newErrors[key] = validateField(
                key,
                profileData[key]
            );
        });

        setErrors(newErrors);

        return Object.values(newErrors).every(
            (error) => error === ""
        );
    };

    const handleProfileDetails = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return;
        setLoading(true);

        try {
            await updateUserProfile(profileData);
            toastNotification(
                "Profile updated successfully",
                "success"
            );
            getUserDetails();
        } catch (error) {
            toastNotification(error?.response?.data?.message || "Failed to update profile. Please try again.", "error");
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="p-4 sm:p-6 flex flex-col gap-5 shadow-sm">
            <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                    <div className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center shrink-0">
                        <User className="size-5 text-[#2b7fff]" />
                    </div>
                    <h2 className="font-semibold text-lg leading-7 text-zinc-950">
                        Profile Details
                    </h2>
                </div>
                <p className="text-zinc-600 text-sm leading-5">
                    Update your core personal information and reachable contact addresses.
                </p>
            </CardHeader>

            <CardContent className="p-0">
                <form
                    onSubmit={handleProfileDetails}
                    className="space-y-5"
                >

                    {/* <div className="flex items-center gap-4 pb-4 border-zinc-200 border-b">

                        {(user.firstName && user.lastName) ? (

                            <img
                                className="size-12 rounded-full shrink-0"
                                src={`https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}&background=random`}
                                alt={`${user.firstName} ${user.lastName}`}
                            />

                        ) : (

                            <User className="size-12 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />

                        )}

                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="text-zinc-700 border-zinc-200 h-9 font-medium shadow-sm"
                        >
                            Change Profile Picture
                        </Button>

                    </div> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-zinc-200 border-t">
                        <FormField
                            label="First Name"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={profileData.firstName}
                            onChange={handleProfileChange}
                            error={errors.firstName}
                        />
                        <FormField
                            label="Last Name"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={profileData.lastName}
                            onChange={handleProfileChange}
                            error={errors.lastName}
                        />
                        <div className="flex flex-col gap-1.5">
                            <label className="font-medium text-sm text-zinc-800">
                                Email Address
                            </label>
                            <div className="flex items-center gap-2 w-full h-10 px-3 text-sm border border-zinc-200 bg-zinc-50 text-zinc-600 rounded-lg cursor-not-allowed select-none">
                                <Mail className="size-4 text-[#2b7fff] shrink-0" />
                                <span className="font-semibold">
                                    {user.email}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="font-medium text-sm text-zinc-800">
                                Assigned Privilege Role
                            </label>
                            <div className="flex items-center gap-2 w-full h-10 px-3 text-sm border border-zinc-200 bg-zinc-50 text-zinc-600 rounded-lg cursor-not-allowed select-none">
                                <Shield className="size-4 text-[#2b7fff] shrink-0" />
                                <span className="font-semibold">
                                    {user.role.name}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer px-0 pt-2 bg-white flex flex-col-reverse sm:flex-row justify-end gap-2">
                        {hasChanges && (<Button
                            type="button"
                            onClick={() => {
                                setProfileData(initialProfileData);
                                setErrors({
                                    firstName: "",
                                    lastName: "",
                                });
                            }}
                            variant="outline"
                            className="cursor-pointer h-9 w-full sm:w-auto"
                        >
                            Cancel
                        </Button>)}
                        <Button
                            type="submit"
                            className="cursor-pointer bg-[#2b7fff] text-blue-50 gap-2 h-9 w-full sm:w-auto disabled:cursor-not-allowed"
                            disabled={!hasChanges || loading}
                        >
                            <Save className="size-4" />
                            {loading
                                ? "Saving..."
                                : "Save Profile Changes"
                            }
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default ProfileDetailsCard;