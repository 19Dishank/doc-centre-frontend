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
        const pageNumbers = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(
                    1,
                    "...",
                    totalPages - 2,
                    totalPages - 1,
                    totalPages
                );
            } else {
                pageNumbers.push(
                    1,
                    "...",
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    "...",
                    totalPages
                );
            }
        }

        return pageNumbers;
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
                                className={
                                    currentPage === page
                                        ? "bg-zinc-200/80"
                                        : ""
                                }
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