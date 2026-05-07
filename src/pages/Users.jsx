import {
  ChevronDown,
  Pencil,
  Plus,
  Search,
  Trash2
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

import { useState } from "react"
import InviteUserModal from "@/components/Users/InviteUserModal"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

export default function UsersList() {
  const [isOpen, setIsOpen] = useState(false)

  const users = [
    {
      id: 1,
      name: "Alex Morgan",
      email: "alex.morgan@company.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 min ago"
    },
    {
      id: 2,
      name: "Sarah Kim",
      email: "sarah.kim@company.com",
      role: "Viewer",
      status: "Active",
      lastActive: "5 min ago"
    },
    {
      id: 3,
      name: "Jamal Rodriguez",
      email: "jamal.rodriguez@company.com",
      role: "Editor",
      status: "Active",
      lastActive: "10 min ago"
    },
    {
      id: 4,
      name: "Emily Park",
      email: "emily.park@company.com",
      role: "Viewer",
      status: "Active",
      lastActive: "15 min ago"
    },
    {
      id: 5,
      name: "David Nguyen",
      email: "david.nguyen@company.com",
      role: "Editor",
      status: "Active",
      lastActive: "20 min ago"
    },
    {
      id: 6,
      name: "Lara Thompson",
      email: "lara.thompson@company.com",
      role: "Viewer",
      status: "Active",
      lastActive: "25 min ago"
    },
    {
      id: 7,
      name: "Marcus Owens",
      email: "marcus.owens@company.com",
      role: "Editor",
      status: "Active",
      lastActive: "30 min ago"
    },
    {
      id: 8,
      name: "Riya Chowdhury",
      email: "riya.chowdhury@company.com",
      role: "Viewer",
      status: "Active",
      lastActive: "35 min ago"
    }
  ]

  const rowsPerPage = 5
  const [tableRows, setTableRows] = useState(users.slice(0, rowsPerPage));
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(users.length / rowsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    const startIndex = (pageNumber - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    setTableRows(users.slice(startIndex, endIndex))
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  const getStyles = role => {
    switch (role) {
      case "Admin":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100"

      case "Editor":
        return "bg-violet-100 text-violet-700 hover:bg-violet-100"

      case "Viewer":
        return "bg-gray-100 text-gray-700 hover:bg-gray-100"

      default:
        return ""
    }
  }

  const tableColumns = ["User", "Role", "Status", "Last Active", "Actions"]

  return (
    <div className="flex flex-col flex-1 h-239 overflow-hidden">
      <main className="bg-zinc-100/40 p-8 flex-1 overflow-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl leading-8">Users</h1>

            <p className="text-[#71717b] text-sm leading-5">
              Manage team members and their access levels.
            </p>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-70">
                <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />

                <Input placeholder="Search users…" className="bg-white pl-9" />
              </div>

              <Button variant="outline" className="gap-2">
                Role
                <ChevronDown className="size-4" />
              </Button>

              <Button variant="outline" className="gap-2">
                Status
                <ChevronDown className="size-4" />
              </Button>
            </div>

            <Button
              className="font-semibold bg-[#2b7fff] text-blue-50 gap-2"
              onClick={() => setIsOpen(true)}
            >
              <Plus className="size-4" />
              Invite User
            </Button>
          </div>

          <Card className="overflow-hidden p-0">
            <Table>
              <TableHeader className="bg-zinc-100/30">
                <TableRow>
                  {tableColumns.map(column => {
                    return (
                      <TableHead className="uppercase text-[11px] tracking-wide">
                        <div className={`ml-2 ${column === "Actions" ? "text-right mr-2" : ""}`}>{column}</div>
                      </TableHead>
                    )
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableRows.map(user => (
                  <TableRow key={user.id} className="hover:bg-zinc-100/50 cursor-pointer">
                    <TableCell>
                      <div className="flex items-center gap-3 ml-2">
                        <img
                          className="w-8 h-8 rounded-full cursor-pointer"
                          src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                          alt={user.name}
                        />

                        <div className="flex flex-col">
                          <span className="font-medium text-sm leading-5">
                            {user.name}
                          </span>

                          <span className="text-[#71717b] text-xs leading-4">
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={`font-medium rounded-full ${getStyles(
                          user.role
                        )}`}
                      >
                        {user.role}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500" />

                        <span className="text-sm leading-5">{user.status}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-[#71717b] text-xs leading-4">
                      {user.lastActive}
                    </TableCell>

                    <TableCell>
                      <div className="flex justify-end items-center gap-1">
                        <Button variant="ghost" size="icon" className="size-8">
                          <Pencil className="size-4" />
                        </Button>

                        <Button variant="ghost" size="icon" className="size-8">
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* PAGINATION */}
          <div className="flex justify-between items-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={handlePreviousPage} />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      className={currentPage === index + 1 ? "bg-zinc-200/80" : ""}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext onClick={handleNextPage} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        {isOpen && <InviteUserModal setIsOpen={setIsOpen} />}
      </main>
    </div>
  )
}
