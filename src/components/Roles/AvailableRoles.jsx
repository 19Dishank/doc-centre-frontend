import { Plus, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import RoleModal from "./RoleModal";
import Role from "./Role";
import { usePermissions } from "@/hooks/usePermissions";
import { PERMISSIONS } from "@/helper/permissions";

const AvailableRoles = ({
  currentRoleId,
  handleRoleChange,
  availableRoles = [],
  getAvailableRoles,
  isLoading
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { checkPermission } = usePermissions();

  const canCreateRole = useMemo(() => checkPermission(PERMISSIONS.CREATE_ROLE), [checkPermission]);

  return (
    <>
      <div className="w-full h-140 sticky top-0 flex flex-col bg-white gap-0 border border-zinc-200 rounded-xl shadow-none 
      ">
        <div className="flex h-14 px-4 justify-between items-center border-b border-zinc-200 shrink-0">
          <span className="font-semibold text-sm text-zinc-900 tracking-wide">
            Roles ({availableRoles.length})
          </span>

          {canCreateRole && (
            <Button
              size="sm"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-2.5 h-8 gap-1.5 transition-colors rounded-lg shadow-sm shrink-0"
              onClick={() => setIsOpen(true)}
            >
              <Plus className="size-3.5 stroke-[2.5]" />
              Add Role
            </Button>
          )}
        </div>

        <div className="flex-1 max-h-130 overflow-y-auto divide-y divide-zinc-100 p-3 custom-scrollbar
           [&::-webkit-scrollbar]:w-1
     [&::-webkit-scrollbar-track]:bg-slate-100
     [&::-webkit-scrollbar-thumb]:bg-slate-400
     [&::-webkit-scrollbar-thumb]:rounded-full
     hover:[&::-webkit-scrollbar-thumb]:bg-slate-500
        ">
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-16 bg-zinc-100 animate-pulse rounded-xl" />
              ))}
            </div>
          ) : availableRoles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <div className="p-3 bg-amber-50 rounded-full text-amber-700 mb-3 shrink-0">
                <ShieldAlert className="size-5" />
              </div>
              <p className="text-xs font-semibold text-zinc-900">No Roles Configured</p>
              <p className="text-[11px] text-zinc-500 mt-1 max-w-45 mx-auto leading-normal">
                Create a custom security profile to assign permissions.
              </p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {availableRoles.map((role) => (
                <Role
                  key={role._id}
                  currentRoleId={currentRoleId}
                  handleRoleChange={handleRoleChange}
                  role={role}
                  getAvailableRoles={getAvailableRoles}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <RoleModal
          setIsOpen={setIsOpen}
          getAvailableRoles={getAvailableRoles}
        />
      )}
    </>
  );
};

export default AvailableRoles;