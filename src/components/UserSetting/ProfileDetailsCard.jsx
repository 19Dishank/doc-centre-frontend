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

const ProfileDetailsCard = () => {

    const { user, getUserDetails } = useAuthContext();

    const [profileData, setProfileData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
    });

    const hasChanges = profileData.firstName !== user.firstName || profileData.lastName !== user.lastName;

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateUserProfile(profileData);
            console.log("Profile update response:", res);
            toastNotification("Profile updated successfully", "success");
            getUserDetails();
        } catch (error) {
            toastNotification(error?.response?.data?.message || "Failed to update profile. Please try again.", "error");
            console.error("Error updating profile:", error);
        }
    };

    return (
        <Card className="p-4 sm:p-6 flex flex-col gap-5 shadow-sm">
            <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                    <div className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center shrink-0">
                        <User className="size-5 text-[#2b7fff]" />
                    </div>
                    <h2 className="font-semibold text-lg leading-7 text-zinc-950">Profile Details</h2>
                </div>
                <p className="text-zinc-600 text-sm leading-5">
                    Update your core personal information and reachable contact addresses.
                </p>
            </CardHeader>

            <CardContent className="p-0">
                <form onSubmit={handleProfileSubmit} className="space-y-5">

                    <div className="flex items-center gap-4 pb-4 border-zinc-200 border-b">
                        {(user.firstName && user.lastName)
                            ? (<img
                                className="size-12 rounded-full shrink-0"
                                src={`https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}&background=random`}
                                alt={`${user.firstName} ${user.lastName}`}
                            />)
                            : <User className="size-12 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                        }
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="text-zinc-700 border-zinc-200 h-9 font-medium shadow-sm"
                        >
                            Change Avatar
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="font-medium text-sm text-zinc-800">First Name</label>
                            <input
                                placeholder="Enter first name"
                                type="text"
                                name="firstName"
                                value={profileData.firstName}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white text-zinc-900 font-medium"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="font-medium text-sm text-zinc-800">Last Name</label>
                            <input
                                placeholder="Enter last name"
                                type="text"
                                name="lastName"
                                value={profileData.lastName}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 h-10 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2b7fff] focus:border-[#2b7fff] transition-all bg-white text-zinc-900 font-medium"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="font-medium text-sm text-zinc-800">Email Address</label>
                            <div className="flex items-center gap-2 w-full h-10 px-3 text-sm border border-zinc-200 bg-zinc-50 text-zinc-600 rounded-lg cursor-not-allowed select-none">
                                <Mail className="size-4 text-[#2b7fff] shrink-0" />
                                <span className="font-semibold">{user.email}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="font-medium text-sm text-zinc-800">Assigned Privilege Role</label>
                            <div className="flex items-center gap-2 w-full h-10 px-3 text-sm border border-zinc-200 bg-zinc-50 text-zinc-600 rounded-lg cursor-not-allowed select-none">
                                <Shield className="size-4 text-[#2b7fff] shrink-0" />
                                <span className="font-semibold">{user.role.name}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end pt-2">
                        <Button type="submit" className="bg-[#2b7fff] text-blue-50 px-4 h-10 text-sm w-full sm:w-auto gap-2" disabled={!hasChanges} >
                            <Save className="size-4" />
                            Save Profile Changes
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default ProfileDetailsCard;