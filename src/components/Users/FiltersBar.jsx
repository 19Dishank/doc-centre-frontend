import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";


const FiltersBar = ({ roles, currentPage, fetchUsers, setCurrentPage }) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");

    const [filters, setFilters] = useState({
        q: searchParams.get("q") || "",
        sort: searchParams.get("sort") || "",
        type: searchParams.get("type") || "",
    });

    // Debounce search input and update active filter
    useEffect(() => {
        const handler = setTimeout(() => {
            setFilters((prev) => {
                if (prev.q === searchInput) return prev;
                setCurrentPage(1);
                return { ...prev, q: searchInput };
            });
        }, 500);

        return () => clearTimeout(handler);
    }, [searchInput, setCurrentPage]);

    // Handle initial load and subsequent page/filter changes
    useEffect(() => {
        fetchUsers(filters);

        setSearchParams((prev) => {
            filters.q ? prev.set("q", filters.q) : prev.delete("q");
            filters.sort ? prev.set("sort", filters.sort) : prev.delete("sort");
            filters.type ? prev.set("type", filters.type) : prev.delete("type");
            return prev;
        });
    }, [currentPage, filters, fetchUsers, setSearchParams]);

    const handleRoleChange = (value) => {
        setCurrentPage(1);
        setFilters((prev) => ({ ...prev, type: value }));
    };

    const handleClearFilters = () => {
        setSearchInput("");
        setCurrentPage(1);
        setFilters({ q: "", sort: "", type: "" });
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">

            <div className="relative w-full">
                <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />
                <Input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search users…"
                    className="bg-white pl-9 w-full"
                />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto pb-2 md:pb-0">
                <Select name="type" value={filters.type} onValueChange={handleRoleChange}>
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
                {/* <Select name="sort" value={filters.sort} onValueChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}>
                    <SelectTrigger id="sort-select" className="w-full h-10 bg-white text-zinc-900">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="z-1000">
                        <SelectGroup>
                            <SelectLabel>Select Option</SelectLabel>
                            {sortOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select> */}
                <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    className="w-full md:w-auto cursor-pointer disabled:cursor-not-allowed!"
                    disabled={!filters.q && !filters.sort && !filters.type}
                >
                    Clear Filters
                </Button>
            </div>
        </div>
    );
};

export default FiltersBar;