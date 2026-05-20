import {
    Plus,
    Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import NewRoleModel from "./NewRoleModel";

const AvailableRoles = ({ currentRole, handleRoleChange, availableRoles, getAvailableRoles }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Card className="shrink-0 h-full p-0 gap-0 w-70">
                <div className="border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid flex p-4 justify-between items-center">
                    <span className="font-semibold text-sm leading-5">Roles</span>
                    <Button size="sm" className="bg-[#2b7fff] text-blue-50 text-xs leading-4 px-2 h-7" onClick={() => setIsOpen(true)}>
                        <Plus className="size-3" />
                        New Role
                    </Button>
                </div>
                <div className="flex flex-col">
                    {availableRoles.map((role) => (
                        <div
                            className={` ${currentRole === role._id ? 'bg-blue-100 border-l-2 border-[#2b7fff] ' : ''} cursor-pointer border-t-0 border-r-0 border-b-0 border-l-2 border-solid flex p-4 items-center gap-3`}
                            onClick={() => handleRoleChange(role._id)}
                            key={role._id}
                        >
                            <div className="size-8 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                                <Shield className="size-4 text-[#2b7fff]" />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-sm leading-5">{role.name}</div>
                                <div className="text-[#71717b] text-xs leading-4">{role.totalUsers} members</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {isOpen && <NewRoleModel setIsOpen={setIsOpen} getAvailableRoles={getAvailableRoles} />}
        </>
    )
}

export default AvailableRoles;