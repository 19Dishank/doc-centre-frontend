import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "./pagination";

const PaginationBar = ({
    totalPages,
    currentPage,
    setCurrentPage,
    hasNextPage,
    hasPreviousPage,
}) => {
    const handlePreviousPage = () => {
        if (hasPreviousPage) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (hasNextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const displayPageNumbers = () => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [];

        // always show first page
        pages.push(1);

        if (currentPage > 3) {
            pages.push("...");
        }

        // pages around current
        const start = Math.max(2, currentPage - 2);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        // always show last page
        pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex justify-between items-center">
            <Pagination>
                <PaginationContent>

                    <PaginationItem>
                        <PaginationPrevious
                            onClick={handlePreviousPage}
                            className={
                                !hasPreviousPage
                                    ? "pointer-events-none opacity-50"
                                    : "cursor-pointer"
                            }
                        />
                    </PaginationItem>

                    {displayPageNumbers().map((page, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                onClick={() => {
                                    if (page !== "...") {
                                        setCurrentPage(page);
                                    }
                                }}
                                className={`cursor-pointer ${currentPage === page ? "bg-zinc-200/80" : ""} ${page === "..." ? "pointer-events-none" : ""}`}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            onClick={handleNextPage}
                            className={
                                !hasNextPage
                                    ? "pointer-events-none opacity-50"
                                    : "cursor-pointer"
                            }
                        />
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PaginationBar;