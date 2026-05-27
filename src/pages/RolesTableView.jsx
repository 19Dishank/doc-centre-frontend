import { fetchRoles } from "@/api/role";
import { useEffect, useState, useCallback } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Loader from "@/components/ui/loader";
import { usePermissionsCatalog } from "@/contexts/PermissionsCatalogContext";
import { usePermissions } from "@/hooks/usePermissions";
import { PERMISSIONS } from "@/helper/permissions";
import { Checkbox } from "@/components/ui/checkbox";
import NewRoleModel from "@/components/Roles/NewRoleModel";

export default function Roles() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [availableRoles, setAvailableRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { permissionsCatalog = [] } = usePermissionsCatalog();
  const { permissionCheck } = usePermissions();

  const isViewingPermissionsOnMobile = currentRoleId !== null;

  const handleBackToRoles = () => {
    setCurrentRoleId(null);
  };

  const getAvailableRoles = useCallback(async () => {
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
  }, [currentRoleId]);


  const handlePermissionChange = (
    roleId,
    permissionId,
    checked,
    module,
    name
  ) => {
    setAvailableRoles((prevRoles) =>
      prevRoles.map((role) => {
        if (role._id !== roleId) return role;

        let updatedPermissions = [...(role.permissions || [])];

        if (checked) {
          if (!updatedPermissions.includes(permissionId)) {
            updatedPermissions.push(permissionId);
          }

          if (!name.startsWith("View")) {
            const viewPermissionId = permissionsCatalog
              .find((cat) => cat.module === module)
              ?.permissions.find((perm) =>
                perm.name.startsWith("View")
              )?.permissionId;

            if (
              viewPermissionId &&
              !updatedPermissions.includes(viewPermissionId)
            ) {
              updatedPermissions.push(viewPermissionId);
            }
          }
        } else {
          updatedPermissions = updatedPermissions.filter(
            (perm) => perm !== permissionId
          );

          if (name.startsWith("View")) {
            const relatedPermissions =
              permissionsCatalog
                .find((cat) => cat.module === module)
                ?.permissions.filter((perm) => perm.name !== name)
                .map((perm) => perm.permissionId) || [];

            updatedPermissions = updatedPermissions.filter(
              (perm) => !relatedPermissions.includes(perm)
            );
          }
        }

        return {
          ...role,
          permissions: updatedPermissions,
        };
      })
    );
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAvailableRoles();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col h-full min-h-0">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2">
              {isViewingPermissionsOnMobile && (
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
          {permissionCheck(PERMISSIONS.CREATE_ROLE) && (
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-2.5 h-8 gap-1.5 transition-colors rounded-lg shadow-sm shrink-0"
              onClick={() => setIsOpen(true)}
            >
              <Plus className="size-3.5 stroke-[2.5]" />
              Add Role
            </Button>
          )}
        </div>

        {/* <div className="flex gap-6 w-full flex-1 min-h-0 items-start relative">
        
        <div className={`w-full xl:w-80 shrink-0 ${isViewingPermissionsOnMobile ? "hidden xl:block" : "block"}`}>
          <AvailableRoles 
            currentRoleId={currentRoleId} 
            handleRoleChange={handleRoleChange} 
            availableRoles={availableRoles} 
            getAvailableRoles={getAvailableRoles}
            isLoading={isLoading}
          />
        </div>
        
        <div className={`flex-1 w-full min-w-0 ${!isViewingPermissionsOnMobile ? "hidden xl:block" : "block"}`}>
          <Permissions 
            currentRoleId={currentRoleId} 
            currentRole={currentRole} 
            getAvailableRoles={getAvailableRoles} 
            onCancel={handleBackToRoles}
          />
        </div>

      </div> */}

        <Card className="p-0 border-zinc-200">
          <div className="overflow-x-auto w-full">
            <Table className="min-w-175 lg:min-w-full">
              <TableHeader className="bg-zinc-100">
                <TableRow>
                  <TableHead className="uppercase text-[11px] tracking-wide font-bold">
                    Permissions
                  </TableHead>
                  {availableRoles.map((role) => (
                    <TableHead className="uppercase text-[11px] tracking-wide font-bold">
                      {role.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell className="p-10 bg-white" colSpan={availableRoles.length + 1}>
                      <Loader />
                    </TableCell>
                  </TableRow>
                ) : (
                  permissionsCatalog.map((category) => (
                    <>
                      <TableRow key={category.module}>
                        <TableCell
                          colSpan={availableRoles.length + 1}
                          className="bg-zinc-50 font-bold text-sm text-zinc-700"
                        >
                          {category.module}
                        </TableCell>
                      </TableRow>

                      {/* Permissions Rows */}
                      {category.permissions.map((permission) => (
                        <TableRow key={permission.permissionId}>
                          <TableCell className="font-medium">
                            {permission.name}
                          </TableCell>

                          {availableRoles.map((role) => {
                            const checked = role.permissions?.includes(
                              permission.permissionId
                            );

                            return (
                              <TableCell key={role._id}>
                                <Checkbox
                                  disabled={
                                    !permissionCheck(PERMISSIONS.ASSIGN_PERMISSION)
                                  }
                                  checked={checked}
                                  onCheckedChange={(value) =>
                                    handlePermissionChange(
                                      role._id,
                                      permission.permissionId,
                                      value,
                                      category.module,
                                      permission.name
                                    )
                                  }
                                  className="size-4 rounded border border-zinc-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                />
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </>
                  ))
                )}
              </TableBody>

            </Table>
          </div>
        </Card>

      </div>

      {isOpen && (
        <NewRoleModel
          setIsOpen={setIsOpen}
          getAvailableRoles={getAvailableRoles}
        />
      )}
    </>
  );
}
