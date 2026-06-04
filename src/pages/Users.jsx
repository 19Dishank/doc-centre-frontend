import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import PaginationBar from "@/components/ui/pagination-bar";
import { getUsers } from "@/api/user";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import UserModel from "@/components/Users/UserModel";
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
  const { permissionCheck } = usePermissions();

  const [isOpen, setIsOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState((Number(searchParams.get("page")) || 1));
  const prevCurrentPageRef = useRef(currentPage);

  const [filters, setFilters] = useState({
    q: searchParams.get("q") || "",
    sort: searchParams.get("sort") || "",
    type: searchParams.get("type") || "",
  });

  const {
    totalItems,
    totalPages,
    pageSize: limit,
    hasNextPage,
    hasPreviousPage
  } = paginationData || {};


  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getUsers({
        page: currentPage,
        limit: 1,
        ...filters
      });
      setUsersData(res.data.users);
      setPaginationData(res.data.paginationData);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, filters]);

  useEffect(() => {
    const isCurrentPageChanged = prevCurrentPageRef.current !== currentPage;
    prevCurrentPageRef.current = currentPage;

    if (isCurrentPageChanged) {
      fetchUsers();
      return;
    }

    setCurrentPage(1);
    const debounceTimeout = setTimeout(() => {
      fetchUsers();
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [currentPage, fetchUsers, filters]);

  const getRoles = async () => {
    try {
      const res = await fetchRoles();
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
      filters.q ? prev.set("q", filters.q) : prev.delete("q");
      filters.sort ? prev.set("sort", filters.sort) : prev.delete("sort");
      filters.type ? prev.set("type", filters.type) : prev.delete("type");
      return prev;
    })
  }, [filters, setSearchParams]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
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
      width: "w-[40%]",
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
      render: (row) => row.lastActivateAt ? formatTime(row.lastActivateAt) : "—",
    },
    {
      key: "actions",
      header: "Actions",
      width: "w-[15%]",
      align: "right",
      render: (row) => <ActionsCell row={row} fetchUsers={fetchUsers} roles={roles} setCurrentPage={setCurrentPage} currentPageItems={usersData.length} />
    },
  ];

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

        <PageHeading
          heading="Users"
          subheading="Manage team members and their access levels."
        />

        {permissionCheck({ permissions: [PERMISSIONS.INVITE_USER] }) && (
          <Button
            className="font-semibold bg-[#2b7fff] text-blue-50 gap-2 w-full sm:w-auto cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Plus className="size-4" />
            Invite User
          </Button>
        )}
      </div>

      <FiltersBar
        filters={filters}
        setFilters={setFilters}
        roles={roles}
      />

      <DataTable
        columns={columns}
        data={usersData}
        loading={loading}
        noDataMessage="No users found"
      />

      {(usersData.length > 0)  && (
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
        <UserModel
          setIsOpen={setIsOpen}
          fetchUsers={fetchUsers}
          roles={roles}
        />
      )}
    </div>
  );
}

