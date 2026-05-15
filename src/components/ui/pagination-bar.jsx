import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./pagination";

const PaginationBar = ({ initialData, setTableRows, rowsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(initialData.length / rowsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        const startIndex = (pageNumber - 1) * rowsPerPage
        const endIndex = startIndex + rowsPerPage
        setTableRows(initialData.slice(startIndex, endIndex))
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

    return (
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
    );
};

export default PaginationBar;