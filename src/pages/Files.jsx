import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchFiles } from "@/api/file";
import { useEffect, useMemo, useRef, useState } from "react";
import { PERMISSIONS } from "@/helper/permissions";
import { usePermissions } from "@/hooks/usePermissions";
import { NavLink, useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { formatSize } from "@/helper/formatSize";
import BreadcrumbNavigation from "@/components/Files/BreadcrumbNavigation";
import FileNameCell from "@/components/Files/Cells/FileNameCell";
import OwnerNameCell from "@/components/Files/Cells/OwnerNameCell";
import ActionsCell from "@/components/Files/Cells/ActionsCell";
import PaginationBar from "@/components/ui/pagination-bar";
import FiltersBar from "@/components/Files/FiltersBar";
import PageHeading from "@/components/PageHeading";
import UploadButtons from "@/components/Files/UploadButtons";

export default function Files() {

  const { checkPermission } = usePermissions();

  const [searchParams, setSearchParams] = useSearchParams();
  const [parentId, setParentId] = useState("");
  const [navigationBar, setNavigationBar] = useState([{ name: "My Files", parentId: "" }]);
  const [tableRows, setTableRows] = useState([]);
  const [newFolderRow, setNewFolderRow] = useState(null);
  const [goBackRow, setGoBackRow] = useState({ isGoBackRow: false });
  const [renameMode, setRenameMode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);

  const {
    totalDocuments,
    totalPages,
    pageSize: limit,
    hasNextPage,
    hasPreviousPage
  } = paginationData || {};


  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGoBackRow({ isGoBackRow: !!parentId });
  }, [parentId]);

  const tableData = newFolderRow
    ? [newFolderRow, ...tableRows]
    : goBackRow.isGoBackRow
      ? [goBackRow, ...tableRows]
      : tableRows;

  const [filters, setFilters] = useState({
    q: searchParams.get("q") || "",
    sort: searchParams.get("sort") || "createdAt_desc",
    type: searchParams.get("type") || "",
  });

  useEffect(() => {
    setSearchParams((prev) => {
      filters.q ? prev.set("q", filters.q) : prev.delete("q");
      filters.sort ? prev.set("sort", filters.sort) : prev.delete("sort");
      filters.type ? prev.set("type", filters.type) : prev.delete("type");
      return prev;
    })
  }, [filters]);

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("page", currentPage);
      return prev;
    });
  }, [currentPage]);

  const handleNavigationClick = (parentId, index) => {
    setParentId(parentId)
    setNavigationBar(prev => prev.slice(0, index + 1))
  }

  const getFiles = async () => {
    setLoading(true);
    try {
      const res = await fetchFiles(parentId, {
        page: currentPage,
        limit: 5,
        ...filters,
        sort: undefined,
        [filters.sort.split("_")[0]]: filters.sort.split("_")[1]
      });
      setTableRows(res.data.documents);
      setPaginationData(res.data.pagination);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  }

  const prevParentIdRef = useRef(parentId);
  const prevCurrentPageRef = useRef(currentPage);

  useEffect(() => {

    const isParentIdChanged = prevParentIdRef.current !== parentId;
    prevParentIdRef.current = parentId;

    const isCurrentPageChanged = prevCurrentPageRef.current !== currentPage;
    prevCurrentPageRef.current = currentPage;

    if (isParentIdChanged || isCurrentPageChanged) {
      getFiles();
      return;
    }

    setCurrentPage(1);
    const delayDebounceFn = setTimeout(() => {
      getFiles();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [filters, parentId, currentPage]);

  const columns = [
    {
      key: "name",
      header: "Name",
      width: "w-[30%]",
      cellClassName: "font-medium",
      render: (row) => {
        return <FileNameCell
          row={row}
          setNewFolderRow={setNewFolderRow}
          setNavigationBar={setNavigationBar}
          parentId={parentId}
          setParentId={setParentId}
          getFiles={getFiles}
          renameMode={renameMode}
          setRenameMode={setRenameMode}
        />;
      },
    },
    {
      key: "type",
      header: "Type",
      width: "w-[10%]",
      render: (row) => !row?.isGoBackRow && (
        <div className="uppercase">{row?.originalFileName?.split(".").pop() || "Folder"}</div>
      ),
    },
    {
      key: "size",
      header: "Size",
      width: "w-[10%]",
      render: (row) => !row?.isGoBackRow && (row?.size ? formatSize(row.size) : "—"),
    },
    {
      key: "createdAt",
      header: "Uploaded At",
      width: "w-[10%]",
      render: (row) => !row?.isGoBackRow && (row?.createdAt ? new Date(row.createdAt).toLocaleDateString() : "—"),
    },
    {
      key: "owner",
      header: "Owner",
      width: "w-[15%]",
      cellClassName: "flex items-center gap-2",
      render: (row) => !row?.isGoBackRow && <OwnerNameCell row={row} />,
    },
    {
      key: "actions",
      header: "Actions",
      width: "w-[20%]",
      align: "right",
      render: (row) => !row?.isGoBackRow && (
        <ActionsCell row={row} getFiles={getFiles} setRenameMode={setRenameMode} currentPageItems={tableRows.length} setCurrentPage={setCurrentPage} />
      ),
    },
  ];

  const canRestoreDocument = useMemo(() => checkPermission(PERMISSIONS.RESTORE_DOCUMENT), [checkPermission]);

  return (
    <div className="flex h-full flex-col gap-6 w-full max-w-full p-1">

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 pb-4">
        <PageHeading
          heading="Files"
          subheading="Manage your files and folders."
        />
        {canRestoreDocument && (
          <NavLink to="/trash" className="mt-auto">
            <Button variant="outline" className="cursor-pointer gap-2 text-zinc-700 hover:text-zinc-900">
              <Trash2 className="size-4 text-zinc-500" />
              Recycle Bin
            </Button>
          </NavLink>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <BreadcrumbNavigation navigationBar={navigationBar} handleNavigationClick={handleNavigationClick} />
        <UploadButtons getFiles={getFiles} parentId={parentId} setNewFolderRow={setNewFolderRow} />
      </div>

      <FiltersBar filters={filters} setFilters={setFilters} />

      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        <DataTable
          columns={columns}
          data={tableData}
          loading={loading}
        />
      </div>

      {tableRows.length > 0 && (
        <div className="mt-auto">
          <PaginationBar
            totalPages={totalPages || 0}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            totalItems={totalDocuments}
            limit={limit}
          />
        </div>
      )}

    </div>
  );
}