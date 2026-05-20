import {
  FileText,
  Lock,
  Pencil,
  Save,
  Settings,
  Shield,
  Trash2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import NewRoleModel from "@/components/Roles/NewRoleModel";
import AvailableRoles from "@/components/Roles/AvailableRoles";

export default function Roles() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex-1 overflow-hidden">
      <div className="flex mb-6 flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8">{`Roles & Permissions`}</h1>
        <p className="text-[#71717b] text-sm leading-5">
          Define what each role can access and perform within the system.
        </p>
      </div>
      <div className="flex gap-6">
        <AvailableRoles />
        <Card className="p-6 flex-1 gap-4">
          <CardHeader className="p-0 gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                  <Shield className="size-5 text-[#2b7fff]" />
                </div>
                <span className="font-semibold text-lg leading-7">Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#2b7fff] border-[#2b7fff] border-0 border-solid h-8">
                  <Pencil className="size-3" />
                  Edit Role
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#e7000b] border-[#e7000b] border-0 border-solid h-8">
                  <Trash2 className="size-3" />
                  Delete Role
                </Button>
              </div>
            </div>
            <p className="italic text-[#71717b] text-sm leading-5">
              Full access to all system features and settings.
            </p>
          </CardHeader>
          <CardContent className="flex p-0 flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-base leading-6">Permissions</span>
              <span className="text-[#71717b] text-xs leading-4">16 of 16 enabled</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border-zinc-200 border border-solid flex p-4 flex-col gap-2">
                <div className="flex mb-1 items-center gap-2">
                  <FileText className="size-4 text-[#2b7fff]" />
                  <span className="font-semibold text-sm leading-5">Files</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="f1" />
                  <label htmlFor="f1" className="text-sm leading-5">
                    View Files
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="f2" />
                  <label htmlFor="f2" className="text-sm leading-5">
                    Upload Files
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="f3" />
                  <label htmlFor="f3" className="text-sm leading-5">
                    Delete Files
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="f4" />
                  <label htmlFor="f4" className="text-sm leading-5">
                    Rename Files
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="f5" />
                  <label htmlFor="f5" className="text-sm leading-5">
                    Download Files
                  </label>
                </div>
              </div>
              <div className="rounded-lg border-zinc-200 border border-solid flex p-4 flex-col gap-2">
                <div className="flex mb-1 items-center gap-2">
                  <Users className="size-4 text-[#2b7fff]" />
                  <span className="font-semibold text-sm leading-5">Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="u1" />
                  <label htmlFor="u1" className="text-sm leading-5">
                    View Users
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="u2" />
                  <label htmlFor="u2" className="text-sm leading-5">
                    Invite Users
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="u3" />
                  <label htmlFor="u3" className="text-sm leading-5">
                    Remove Users
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="u4" />
                  <label htmlFor="u4" className="text-sm leading-5">
                    Assign Roles
                  </label>
                </div>
              </div>
              <div className="rounded-lg border-zinc-200 border border-solid flex p-4 flex-col gap-2">
                <div className="flex mb-1 items-center gap-2">
                  <Settings className="size-4 text-[#71717b]" />
                  <Skeleton className="w-16 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-4 rounded-sm" />
                  <Skeleton className="w-28 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-4 rounded-sm" />
                  <Skeleton className="w-36 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-4 rounded-sm" />
                  <Skeleton className="w-32 h-4" />
                </div>
              </div>
              <div className="rounded-lg border-zinc-200 border border-solid flex p-4 flex-col gap-2">
                <div className="flex mb-1 items-center gap-2">
                  <Lock className="size-4 text-[#2b7fff]" />
                  <span className="font-semibold text-sm leading-5">Roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="r1" />
                  <label htmlFor="r1" className="text-sm leading-5">
                    View Roles
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="r2" />
                  <label htmlFor="r2" className="text-sm leading-5">
                    Create Roles
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="r3" />
                  <label htmlFor="r3" className="text-sm leading-5">
                    Edit Roles
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked={true} id="r4" />
                  <label htmlFor="r4" className="text-sm leading-5">
                    Delete Roles
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-0 gap-2">
            <Button className="bg-[#2b7fff] text-blue-50 w-full">
              <Save className="size-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </div>

      {isOpen && <NewRoleModel setIsOpen={setIsOpen} />}
    </main>
  );
}
