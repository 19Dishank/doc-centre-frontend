import { fetchRoles } from "@/api/role";
import AvailableRoles from "@/components/Roles/AvailableRoles";
import Permissions from "@/components/Roles/Permissions";
import { useEffect, useState, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Roles() {
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [availableRoles, setAvailableRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentRole = availableRoles.find(role => role._id === currentRoleId) || null;

  const isPermissionsVisible = currentRoleId !== null;

  const handleRoleChange = useCallback((roleId) => {
    setCurrentRoleId(roleId);
  }, []);

  const handleBackToRoles = () => {
    setCurrentRoleId(null);
  };

  const getAvailableRoles = async () => {
    try {
      setIsLoading(true);
      const res = await fetchRoles();
      const rolesData = res.data.roles || [];
      setAvailableRoles(rolesData);
      
      if (rolesData.length > 0 && !currentRoleId && window.innerWidth >= 1280) {
        setCurrentRoleId(rolesData[0]._id);
      }
    } catch (err) {
      console.error("Error fetching roles:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAvailableRoles();
  }, []);

  return (
    <div className="w-full flex flex-col h-full min-h-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2">
            {isPermissionsVisible && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleBackToRoles} 
                className="xl:hidden size-8 -ml-2 text-zinc-600 hover:text-zinc-950"
              >
                <ArrowLeft className="size-5" />
              </Button>
            )}
            <h1 className="font-bold text-2xl tracking-tight text-zinc-950 truncate">
              Roles & Permissions
            </h1>
          </div>
          <p className="text-zinc-500 text-sm">
            Define what each role can access and perform within the system.
          </p>
        </div>
      </div>

      <div className="flex gap-6 w-full flex-1 relative">
        
        <div className={`w-full xl:w-80 ${isPermissionsVisible ? "hidden xl:block" : "block"}`}>
          <AvailableRoles 
            currentRoleId={currentRoleId} 
            handleRoleChange={handleRoleChange} 
            availableRoles={availableRoles} 
            getAvailableRoles={getAvailableRoles}
            isLoading={isLoading}
          />
        </div>
        
        <div className={`flex-1 w-full min-w-0 mb-10! ${!isPermissionsVisible ? "hidden xl:block" : "block"}`}>
          <Permissions 
            currentRoleId={currentRoleId} 
            currentRole={currentRole} 
            getAvailableRoles={getAvailableRoles} 
            onCancel={handleBackToRoles}
          />
        </div>

      </div>
    </div>
  );
}