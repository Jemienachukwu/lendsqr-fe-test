import React, { HTMLProps } from "react";
import "./style.scss";

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
    setPostPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const generatePagination = () => {
    const pagination: (number | string)[] = [];

    if (totalPages <= 5) {
      pagination.push(...pageNums);
    } else {
      pagination.push(1);

      if (currentPage > 3) {
        pagination.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pagination.push(i);
      }

      if (currentPage < totalPages - 2) {
        pagination.push("...");
      }

      pagination.push(totalPages);
    }

    return pagination;
  };

  return (
    <div className="pagination-main">
      <div className="pagination-displayCount">
        Showing
        <select onChange={changePostsPerPage} value={postsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        Out Of {totalPosts}
      </div>
      <nav className="pagination" aria-label="Pagination">
        <PageLink
          id="prev-button"
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
          id="next-button"
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

export type PageLinkProps = HTMLProps<HTMLAnchorElement> & { active?: boolean };

const PageLink: React.FC<PageLinkProps> = ({
  className = "",
  active,
  disabled,
  children,
  ...otherProps
}) => {
  const customClassName = `page-link ${className} ${active ? "active" : ""} ${
    disabled ? "disabled" : ""
  }`.trim();

  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={active ? "page" : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Pagination;
