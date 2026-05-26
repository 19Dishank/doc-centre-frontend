import { ChevronDown, Plus, Search, Filter } from "lucide-react";
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

import UserDetails from "@/components/Users/User";
import UserModal from "@/components/Users/UserModal";

export default function UsersList() {
  const { permissionCheck } = usePermissions();

  const [isOpen, setIsOpen] = useState(false);

  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [paginationData, setPaginationData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const {
    totalItems,
    totalPages,
    pageSize: limit,
    hasNextPage,
    hasPreviousPage
  } = paginationData || {};

  const fetchUsers = async (page = 1) => {
    setLoading(true);

    try {
      const res = await getUsers({
        page,
        limit: 1
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
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

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full">
          <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />

          <Input
            placeholder="Search users…"
            className="bg-white pl-9 w-full"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto pb-2 md:pb-0">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 shrink-0"
          >
            <Filter className="size-3" />
            Role
            <ChevronDown className="size-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="gap-2 shrink-0"
          >
            Status
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="p-0 border-zinc-200">
        <div className="overflow-x-auto w-full">
          <Table className="min-w-175 lg:min-w-full">
            <TableHeader className="bg-zinc-50">
              <TableRow>
                <TableHead className="uppercase text-[11px] tracking-wide font-bold">
                  User
                </TableHead>

                <TableHead className="uppercase text-[11px] tracking-wide font-bold">
                  Role
                </TableHead>

                {/* <TableHead className="uppercase text-[11px] tracking-wide font-bold sm:table-cell">
                  Account Status
                </TableHead> */}

                <TableHead className="uppercase text-[11px] tracking-wide font-bold lg:table-cell">
                  Last Active
                </TableHead>

                <TableHead className="uppercase text-[11px] tracking-wide font-bold text-right">
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

      {/* Pagination */}
      <PaginationBar
        totalPages={totalPages || 0}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        totalItems={totalItems}
        limit={limit}
      />

      {/* Modal */}
      {isOpen && (
        <UserModal
          setIsOpen={setIsOpen}
          fetchUsers={() => fetchUsers(currentPage)}
        />
      )}
    </div>
  );
}