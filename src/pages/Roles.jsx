import { fetchRoles } from "@/api/role";
import AvailableRoles from "@/components/Roles/AvailableRoles";
import Permissions from "@/components/Roles/Permissions";
import { useEffect, useState, useCallback } from "react";

export default function Roles() {
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [availableRoles, setAvailableRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentRole = availableRoles.find(role => role._id === currentRoleId) || null;

  const handleRoleChange = useCallback((roleId) => {
    setCurrentRoleId(prev => prev === roleId ? null : roleId);
  }, []);

  const getAvailableRoles = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetchRoles();
      setAvailableRoles(res.data.roles || []);
    } catch (err) {
      console.error("Error fetching roles:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAvailableRoles();
  }, [getAvailableRoles]);

  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="flex flex-col gap-1 mb-6 shrink-0">
        <h1 className="font-bold text-2xl tracking-tight text-slate-900">
          Roles & Permissions
        </h1>
        <p className="text-slate-500 text-sm">
          Define what each role can access and perform within the system.
        </p>
      </div>

      <div className="flex gap-6 flex-1 min-h-0 items-start">
        <AvailableRoles 
          currentRoleId={currentRoleId} 
          handleRoleChange={handleRoleChange} 
          availableRoles={availableRoles} 
          getAvailableRoles={getAvailableRoles}
          isLoading={isLoading}
        />
        
        <Permissions 
          currentRoleId={currentRoleId} 
          currentRole={currentRole} 
          getAvailableRoles={getAvailableRoles} 
        />
      </div>
    </main>
  );
}