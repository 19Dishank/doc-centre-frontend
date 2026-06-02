import { Pencil, Plus, Search, Trash2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import PaginationBar from "@/components/ui/pagination-bar";
import { deleteUser, getUsers } from "@/api/user";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import UserModel from "@/components/Users/UserModel";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchRoles } from "@/api/role";
import { useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { useAuthContext } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { formatTime } from "@/helper/formatTime";
import ConfirmationModal from "@/components/ConfirmationModel";
import { toastNotification } from "@/helper/toastNotification";

export default function UsersList() {
  const { permissionCheck } = usePermissions();

  const [isOpen, setIsOpen] = useState(false);

  const [roles, setRoles] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);

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


  const fetchUsers = async (page, filters = {}) => {
    setLoading(true);

    try {
      const res = await getUsers({
        page,
        limit: 5,
        ...filters
      });

      setUsersData(res.data.users);
      setPaginationData(res.data.paginationData);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      fetchUsers(currentPage, filters);
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [currentPage, filters]);

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
  }, [filters]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setSearchParams((prev) => {
      prev.set("page", currentPage);
      return prev;
    });
  }, [currentPage]);

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
      header: "",
      width: "w-[15%]",
      align: "right",
      render: (row) => <ActionsCell row={row} fetchUsers={fetchUsers} roles={roles} />
    },
  ];

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl leading-8">Users</h1>

          <p className="text-[#71717b] text-sm leading-5">
            Manage team members and their access levels.
          </p>
        </div>

        {permissionCheck(PERMISSIONS.INVITE_USER) && (
          <Button
            className="font-semibold bg-[#2b7fff] text-blue-50 gap-2 w-full sm:w-auto cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Plus className="size-4" />
            Invite User
          </Button>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full">
          <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />

          <Input
            value={filters.q}
            onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))}
            placeholder="Search users…"
            className="bg-white pl-9 w-full"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto pb-2 md:pb-0">
          <Select name="type" value={filters.type} onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}>
            <SelectTrigger id="type-select" className="w-full h-10 bg-white text-zinc-900">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent position="popper" className="z-1000">
              <SelectGroup>
                <SelectLabel>Select Role</SelectLabel>
                {roles.map((role) => (
                  <SelectItem key={role._id} value={role._id}>
                    {role.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select name="sort" value={filters.sort} onValueChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}>
            <SelectTrigger id="sort-select" className="w-full h-10 bg-white text-zinc-900">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent position="popper" className="z-1000">
              <SelectGroup>
                <SelectLabel>Select Option</SelectLabel>
                {/* {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))} */}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => setFilters({ q: "", sort: "", type: "" })}
            className="w-full md:w-auto cursor-pointer disabled:cursor-not-allowed!"
            disabled={!filters.q && !filters.sort && !filters.type}
          >
            Clear Filters
          </Button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={usersData}
        loading={loading}
        noDataMessage="No users found"
      />

      {usersData.length > 0 && (
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
          fetchUsers={() => fetchUsers(currentPage)}
          roles={roles}
        />
      )}
    </div>
  );
}

const UserNameCell = ({ row: currentUser }) => {

  const { user: { _id: userId } } = useAuthContext();
  const displayName = currentUser.firstName && currentUser.lastName ? `${currentUser.firstName} ${currentUser.lastName}` : currentUser.email;

  return (
    <div className="flex items-center gap-3">
      {(currentUser.firstName && currentUser.lastName)
        ? (<img
          className="size-8 rounded-full shrink-0"
          src={`https://ui-avatars.com/api/?name=${currentUser.firstName} ${currentUser.lastName}&background=random`}
          alt={`${currentUser.firstName} ${currentUser.lastName}`}
        />)
        : <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
      }
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-sm leading-5 truncate">
          {displayName}  {currentUser._id === userId && <span className="font-medium text-zinc-500"> (You)</span>}
        </span>
        <span className="text-[#71717b] text-xs leading-4 truncate sm:block">{currentUser.email}</span>
      </div>
    </div>
  )
}

const ActionsCell = ({ row: currentUser, fetchUsers, roles }) => {
  const { permissionCheck } = usePermissions();
  const { user: { _id: userId } } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const displayName = currentUser.firstName && currentUser.lastName ? `${currentUser.firstName} ${currentUser.lastName}` : currentUser.email;


  const handleDelete = async () => {
    try {
      const res = await deleteUser(currentUser._id);
      if (res.success) {
        fetchUsers();
        setIsDeleting(false);
      }
    } catch (error) {
      console.log("Error deleting user: ", error);
      toastNotification(error?.response?.data?.message || "Failed to delete user", "error");
    }
  }

  return (
    <>
      {(currentUser._id !== userId && currentUser?.role?.name !== "Admin") && (
        <div className="flex justify-end items-center gap-1">
          {permissionCheck(PERMISSIONS.UPDATE_USER) && (
            <Button onClick={() => setIsEditing(true)} variant="ghost" size="icon" className="size-8 cursor-pointer">
              <Pencil className="size-4 text-zinc-500" />
            </Button>
          )}
          {permissionCheck(PERMISSIONS.DELETE_USER) && (
            <Button
              onClick={() => setIsDeleting(true)}
              variant="ghost"
              size="icon"
              className="size-8 cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 className="size-4" />
            </Button>
          )}
        </div>
      )}

      {isEditing && (
        <UserModel setIsOpen={setIsEditing} user={currentUser} fetchUsers={fetchUsers} roles={roles} />
      )}

      {isDeleting && (
        <ConfirmationModal
          heading="Delete User"
          subheading={`Are you sure you want to delete ${displayName}'s account? This action cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setIsDeleting(false)}
          type="danger"
        />
      )}
    </>
  )
}