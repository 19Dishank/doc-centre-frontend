import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import PaginationBar from "@/components/ui/pagination-bar";
import { getUsers } from "@/api/user";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import UserModal from "@/components/Users/UserModal";
import { fetchRoles } from "@/api/role";
import { useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import { formatTime } from "@/helper/formatTime";
import UserNameCell from "@/components/Users/Cells/UserNameCell";
import ActionsCell from "@/components/Users/Cells/ActionsCell";
import PageHeading from "@/components/PageHeading";
import FiltersBar from "@/components/Users/FiltersBar";

export default function UsersList() {

  const { checkPermission } = usePermissions();

  const [isOpen, setIsOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);

  const {
    totalItems,
    totalPages,
    pageSize: limit,
    hasNextPage,
    hasPreviousPage
  } = paginationData || {};


  const fetchUsers = async (filters) => {
    setLoading(true);
    try {
      const res = await getUsers({
        page: currentPage,
        limit: 5,
        ...filters
      });

      if (res?.data?.users?.length === 0 && currentPage > 1) {
        setCurrentPage(1);
      }
      setUsersData(res?.data?.users);
      setPaginationData(res?.data?.paginationData);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoading(false);
    }
  }

  const getRoles = async () => {
    try {
      const res = await fetchRoles({ adminFlag: true });
      setRoles(res.data.roles || []);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getRoles();
  }, []);

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("page", currentPage);
      return prev;
    });
  }, [currentPage, setSearchParams]);

  const getStyles = role => {
    switch (role) {
      case "Admin": return "bg-blue-100 text-blue-700 hover:bg-blue-100"
      case "Editor": return "bg-violet-100 text-violet-700 hover:bg-violet-100"
      case "Viewer": return "bg-gray-100 text-gray-700 hover:bg-gray-100"
      default: return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
    }
  }

  const columns = [
    {
      key: "user",
      header: "User",
      width: "w-[55%] sm:w-[45%] lg:w-[40%]",
      cellClassName: "font-medium",
      render: (row) => <UserNameCell row={row} />,
    },
    {
      key: "role",
      header: "Role",
      width: "w-[20%]",
      render: (row) => (
        <Badge className={`font-medium rounded-full ${getStyles(row.role.name)}`}>
          {row?.role?.name}
        </Badge>
      ),
    },
    {
      key: "lastActive",
      header: "Last Active",
      width: "w-[25%]",
      headerClassName: "hidden sm:table-cell",
      cellClassName: "hidden sm:table-cell",
      render: (row) => row.lastActivateAt ? formatTime(row.lastActivateAt, "Active Now") : "—",
    },
    {
      key: "actions",
      header: "Actions",
      width: "w-[25%] sm:w-[20%] lg:w-[15%]",
      align: "right",
      render: (row) => <ActionsCell row={row} fetchUsers={fetchUsers} roles={roles} setCurrentPage={setCurrentPage} currentPageItems={usersData.length} />
    },
  ];

  const canInviteUser = useMemo(() => checkPermission(PERMISSIONS.INVITE_USER), [checkPermission]);

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">

        <PageHeading
          heading="Users"
          subheading="Manage team members and their access levels."
        />

        {canInviteUser && (
          <Button
            className="font-semibold bg-[#2b7fff] text-blue-50 gap-2 w-fit mt-auto cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Plus className="size-4" />
            Invite User
          </Button>
        )}
      </div>

      <FiltersBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchUsers={fetchUsers}
        roles={roles}
      />

      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
        <DataTable
          columns={columns}
          data={usersData}
          loading={loading}
          noDataMessage="No users found"
        />
      </div>

      {(usersData.length > 0) && (
        <div className="mt-auto">
          <PaginationBar
            totalPages={totalPages || 0}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            totalItems={totalItems}
            limit={limit}
          />
        </div>)}

      {isOpen && (
        <UserModal
          setIsOpen={setIsOpen}
          fetchUsers={fetchUsers}
          roles={roles}
        />
      )}
    </div>
  );
}

