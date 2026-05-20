import { fetchRoles } from "@/api/role";
import AvailableRoles from "@/components/Roles/AvailableRoles";
import Permissions from "@/components/Roles/Permissions";
import { useEffect, useState } from "react";

export default function Roles() {
  
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [availableRoles, setAvailableRoles] = useState([]);
  const currentRole = availableRoles.find(role => role._id === currentRoleId) || {};
  
  const handleRoleChange = (roleId) => {
    setCurrentRoleId(prev => prev === roleId ? null : roleId);
  }
  
  const getAvailableRoles = async () => {
    try {
      const res = await fetchRoles();
      setAvailableRoles(res.data.roles);
    } catch (err) {
      console.log("Error : ", err)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAvailableRoles();
  }, []);

  return (
    <main className="flex-1 overflow-hidden">
      <div className="flex mb-6 flex-col gap-1">
        <h1 className="font-semibold text-2xl leading-8">{`Roles & Permissions`}</h1>
        <p className="text-[#71717b] text-sm leading-5">
          Define what each role can access and perform within the system.
        </p>
      </div>
      <div className="flex gap-6">
        <AvailableRoles currentRole={currentRoleId} handleRoleChange={handleRoleChange} availableRoles={availableRoles} getAvailableRoles={getAvailableRoles} />
        <Permissions currentRoleId={currentRoleId} currentRole={currentRole} getAvailableRoles={getAvailableRoles} />
      </div>
    </main>
  );
}
