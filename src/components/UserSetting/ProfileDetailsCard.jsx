import { User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UpdateProfileForm from "./Forms/UpdateProfileForm";

const ProfileDetailsCard = () => {
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

                <UpdateProfileForm />
            </CardContent>
        </Card>
    );
};

export default ProfileDetailsCard;