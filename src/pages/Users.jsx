import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useEffect, useState } from "react";

import PaginationBar from "@/components/ui/pagination-bar";
import { getUsers } from "@/api/user";
import Loader from "@/components/ui/loader";

import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";

import UserDetails from "@/components/Users/UserDetails";
import UserModel from "@/components/Users/UserModel";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchRoles } from "@/api/role";
import { useSearchParams } from "react-router-dom";

export default function UsersList() {
  const { permissionCheck } = usePermissions();

  const [isOpen, setIsOpen] = useState(false);

  const [roles, setRoles] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    q: searchParams.get("q") || "",
    sort: searchParams.get("sort") || "",
    type: searchParams.get("type") || ""
  });

  const {
    totalItems,
    totalPages,
    pageSize: limit,
    hasNextPage,
    hasPreviousPage
  } = paginationData || {};


  const fetchUsers = async (page = 1, filters = {}) => {
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

      <Card className="p-0 border-zinc-200">
        <div className="w-full">
          <Table className="min-w-175 lg:min-w-full">
            <TableHeader className="bg-zinc-50">
              <TableRow>
                <TableHead className="w-[40%] text-[#71717b]! uppercase text-[11px] tracking-wide font-bold pl-4">
                  User
                </TableHead>

                <TableHead className="w-[20%] text-[#71717b]! uppercase text-[11px] tracking-wide font-bold">
                  Role
                </TableHead>

                <TableHead className="w-[25%] text-[#71717b]! uppercase text-[11px] tracking-wide font-bold lg:table-cell">
                  Last Active
                </TableHead>

                <TableHead className="w-[15%] text-[#71717b]! uppercase text-[11px] tracking-wide font-bold text-right pr-4">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    className="p-10 bg-white"
                    colSpan={5}
                  >
                    <Loader />
                  </TableCell>
                </TableRow>
              ) : usersData.length > 0 ? (
                usersData.map((user) => (
                  <UserDetails
                    key={user._id}
                    user={user}
                    fetchUsers={() => fetchUsers(currentPage)}
                    roles={roles}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell
                    className="text-center py-10"
                    colSpan={5}
                  >
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

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