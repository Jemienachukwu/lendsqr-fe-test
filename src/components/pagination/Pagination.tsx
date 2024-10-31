import PageLink from "./PageLink";
import "./style.scss";
import React from "react";

// Define the props type
interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  paginate: (pageNum: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setPostPerPage: (postsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  paginate,
  currentPage,
  setCurrentPage,
  setPostPerPage,
}) => {
  const pageNums: number[] = [];
  const totalPages: number = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNums.push(i);
  }

  const next = () => setCurrentPage(currentPage + 1);
  const previous = () => setCurrentPage(currentPage - 1);

  const changePostsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPostPerPage(Number(e.target.value)); // Ensure value is a number
  };

  // Generate pagination numbers with ellipsis
  const generatePagination = () => {
    const pagination: (number | string)[] = [];

    if (totalPages <= 5) {
      pagination.push(...pageNums);
    } else {
      // Always show the first page
      pagination.push(1);

      // Show ellipsis if needed
      if (currentPage > 3) {
        pagination.push("...");
      }

      // Show pages around the current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pagination.push(i);
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        pagination.push("...");
      }

      // Always show the last page
      pagination.push(totalPages);
    }

    return pagination;
  };

  return (
    <div className="pagination-main">
      <div className="pagination-displayCount">
        Showing
        <select onChange={changePostsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        Out Of {totalPosts}
      </div>
      <nav className="pagination" aria-label="Pagination">
        <PageLink
          disabled={currentPage <= 1}
          onClick={previous}
          className="navigationTag"
        >
          &lt;
        </PageLink>
        {generatePagination().map((pageNum, idx) => (
          <PageLink
            key={idx}
            active={currentPage === pageNum}
            onClick={() => {
              if (typeof pageNum === "number") {
                paginate(pageNum);
              }
            }}
          >
            {pageNum}
          </PageLink>
        ))}
        <PageLink
          disabled={currentPage >= totalPages}
          onClick={next}
          className="navigationTag"
        >
          &gt;
        </PageLink>
      </nav>
    </div>
  );
};

export default Pagination;
