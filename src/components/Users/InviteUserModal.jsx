import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const InviteUserModal = ({ setIsOpen }) => {
    return (
        <div className="bg-zinc-950/40 flex absolute inset-0 justify-center items-center">
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
                        <Label className="font-medium text-sm leading-5">Email address</Label>
                        <Input placeholder="Enter email address" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-medium text-sm leading-5">
                            Message
                            <span className="font-normal text-[#71717b]">(optional)</span>
                        </Label>
                        <Textarea placeholder="Add a personal note to your invitation…" rows={3} />
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-2 bg-white px-0">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button className="font-semibold bg-[#2b7fff] text-blue-50">Send Invite</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default InviteUserModal;