import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FiltersBar = ({ parentId, setCurrentPage, currentPage, getFiles }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        q: searchParams.get("q") || "",
        sort: searchParams.get("sort") || "createdAt_desc",
        type: searchParams.get("type") || "",
    });

    const sortOptions = [
        { label: "Name (A-Z)", value: "name_asc" },
        { label: "Name (Z-A)", value: "name_desc" },
        { label: "Uploaded (Newest)", value: "createdAt_desc" },
        { label: "Uploaded (Oldest)", value: "createdAt_asc" },
        { label: "Size (Largest)", value: "size_desc" },
        { label: "Size (Smallest)", value: "size_asc" },
    ];

    // eslint-disable-next-line no-unused-vars
    const typeOptions = [
        { label: "All Types", value: "all" },
        { label: "Folders", value: "folder" },
        { label: "Documents", value: "file" },
    ]

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
            getFiles(filters);
            setSearchParams((prev) => {
                filters.q ? prev.set("q", filters.q) : prev.delete("q");
                filters.sort ? prev.set("sort", filters.sort) : prev.delete("sort");
                filters.type ? prev.set("type", filters.type) : prev.delete("type");
                return prev;
            });
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [filters, parentId, currentPage]);

    return (
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
                <Search className="size-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                    placeholder="Search files…"
                    className="bg-white pl-9 w-full border-zinc-200"
                    value={filters.q}
                    onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))}
                />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:w-auto w-full">
                {/* <Select disabled name="type" value={filters.type} onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}>
            <SelectTrigger id="type-select" className="w-full sm:w-[130px] bg-white text-zinc-900 border-zinc-200">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent position="popper" className="z-50">
              <SelectGroup>
                <SelectLabel>Select Type</SelectLabel>
                {typeOptions.map((type) => (
                  <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select> */}

                <Select name="sort" className="cursor-pointer" value={filters.sort} onValueChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}>
                    <SelectTrigger id="sort-select" className="w-full sm:w-35 bg-white text-zinc-900 border-zinc-200">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="z-50">
                        <SelectGroup>
                            <SelectLabel>Select Option</SelectLabel>
                            {sortOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Button
                    variant="outline"
                    onClick={() => setFilters({ q: "", sort: "", type: "" })}
                    className="col-span-2 sm:w-auto text-zinc-500 hover:text-zinc-900 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    disabled={!filters.q && !filters.sort && !filters.type}
                >
                    Clear Filters
                </Button>
            </div>
        </div>
    );
};

export default FiltersBar;