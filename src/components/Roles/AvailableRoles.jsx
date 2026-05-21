import { Plus, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NewRoleModel from "./NewRoleModel";
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

  const { permissionCheck } = usePermissions();

  return (
    <>
      <div className="w-80 h-full flex flex-col bg-white gap-0 border shadow-none border-slate-200 overflow-hidden rounded-xl">
        <div className="flex h-14 px-4 justify-between items-center border-b border-slate-200 shrink-0">
          <span className="font-semibold text-sm text-slate-800 tracking-wide">
            Roles ({availableRoles.length})
          </span>

          {permissionCheck(PERMISSIONS.CREATE_ROLE) && (
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-2.5 h-8 gap-1.5 transition-colors rounded-lg shadow-sm"
              onClick={() => setIsOpen(true)}
            >
              <Plus className="size-3.5 stroke-[2.5]" />
              Add Role
            </Button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-3 custom-scrollbar">
          {isLoading ? (
            <div className="p-3 space-y-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-16 bg-slate-100 animate-pulse rounded-xl" />
              ))}
            </div>
          ) : availableRoles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <div className="p-3 bg-amber-50 rounded-full text-amber-600 mb-3">
                <ShieldAlert className="size-5" />
              </div>
              <p className="text-xs font-medium text-slate-700">No Roles Configured</p>
              <p className="text-[11px] text-slate-400 mt-0.5 max-w-45">
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
        <NewRoleModel
          setIsOpen={setIsOpen}
          getAvailableRoles={getAvailableRoles}
        />
      )}
    </>
  );
};

export default AvailableRoles;