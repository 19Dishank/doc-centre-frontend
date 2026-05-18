import {
  ChevronDown,
  Pencil,
  Plus,
  Search,
  Trash2,
  Filter,
  User,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import { useEffect, useState } from "react"
import InviteUserModal from "@/components/Users/InviteUserModal"
import PaginationBar from "@/components/ui/pagination-bar"
import { getUsers } from "@/api/user"
import Loader from "@/components/ui/loader"

export default function UsersList() {

  const rowsPerPage = 5
  const [isOpen, setIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsers();
      setUsersData(res.data.users);
      setTableRows(res.data.users.slice(0, rowsPerPage));
    } catch (error) {
      console.log("Error : ", error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, [])

  const getStyles = role => {
    switch (role) {
      case "Admin": return "bg-blue-100 text-blue-700 hover:bg-blue-100"
      case "Editor": return "bg-violet-100 text-violet-700 hover:bg-violet-100"
      case "Viewer": return "bg-gray-100 text-gray-700 hover:bg-gray-100"
      default: return ""
    }
  }

  const formateTime = (time) => {
    const date = new Date(time);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    if (diff < 5 * 60 * 1000) return "Active Now";
    if (diff < 60 * 60 * 1000) return `${Math.floor(diff / (60 * 1000))} minutes ago`;
    if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / (60 * 60 * 1000))} hours ago`;
    if (diff < 7 * 24 * 60 * 60 * 1000) return `${Math.floor(diff / (24 * 60 * 60 * 1000))} days ago`;
    if (diff < 30 * 24 * 60 * 60 * 1000) return `${Math.floor(diff / (7 * 24 * 60 * 60 * 1000))} weeks ago`;
    if (diff < 365 * 24 * 60 * 60 * 1000) return `${Math.floor(diff / (30 * 24 * 60 * 60 * 1000))} months ago`;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl leading-8">Users</h1>
          <p className="text-[#71717b] text-sm leading-5">
            Manage team members and their access levels.
          </p>
        </div>
        <Button
          className="font-semibold bg-[#2b7fff] text-blue-50 gap-2 w-full sm:w-auto cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Plus className="size-4" />
          Invite User
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-80">
          <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />
          <Input placeholder="Search users…" className="bg-white pl-9 w-full" />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Button variant="outline" size="sm" className="gap-2 shrink-0">
            <Filter className="size-3" />
            Role
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2 shrink-0">
            Status
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      <Card className="p-0 border-zinc-200">
        <div className="overflow-x-auto w-full">
          <Table className="min-w-175 lg:min-w-full">
            <TableHeader className="bg-zinc-50">
              <TableRow>
                <TableHead className="uppercase text-[11px] tracking-wide font-bold">User</TableHead>
                <TableHead className="uppercase text-[11px] tracking-wide font-bold">Role</TableHead>
                <TableHead className="uppercase text-[11px] tracking-wide font-bold sm:table-cell">Status</TableHead>
                <TableHead className="uppercase text-[11px] tracking-wide font-bold lg:table-cell">Last Active</TableHead>
                <TableHead className="uppercase text-[11px] tracking-wide font-bold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading
                ? <TableRow>
                  <TableCell className="p-10 bg-white" colSpan={5}>
                    <Loader />
                  </TableCell>
                </TableRow>
                : tableRows.map(user => (
                  <TableRow key={user.id} className="hover:bg-zinc-50/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {(user.firstName && user.lastName)
                          ? (<img
                            className="size-8 rounded-full shrink-0"
                            src={`https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}&background=random`}
                            alt={`${user.firstName} ${user.lastName}`}
                          />)
                          : <User className="size-8 p-1.5 rounded-full bg-[#2b7fff] text-white text-xs" />
                        }
                        <div className="flex flex-col min-w-0">
                          <span className="font-medium text-sm leading-5 truncate">{user.firstName} {user.lastName}</span>
                          <span className="text-[#71717b] text-xs leading-4 truncate sm:block">{user.email}</span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge className={`font-medium rounded-full ${getStyles(user.role.name)}`}>
                        {user.role.name}
                      </Badge>
                    </TableCell>

                    <TableCell className="sm:table-cell">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500" />
                        <span className="text-sm leading-5">{user.status}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-[#71717b] text-xs leading-4 lg:table-cell whitespace-nowrap">
                      {formateTime(user.lastActivateAt)}
                    </TableCell>

                    <TableCell>
                      <div className="flex justify-end items-center gap-1">
                        <Button variant="ghost" size="icon" className="size-8">
                          <Pencil className="size-4 text-zinc-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8 text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </Card>

      <PaginationBar initialData={usersData} setTableRows={setTableRows} rowsPerPage={rowsPerPage} />

      {isOpen && <InviteUserModal setIsOpen={setIsOpen} />}
    </div>
  )
}