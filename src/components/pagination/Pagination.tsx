import PageLink from "./PageLink";
import "./style.scss";
import React from "react";

export default function Pagination({
  totalPosts,
  postsPerPage,
  paginate,
  currentPage,
  setCurrentPage,
  setPostPerPage,
}: any) {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNums.push(i);
  }

  const next = () => setCurrentPage(currentPage + 1);
  const previous = () => setCurrentPage(currentPage - 1);

  const changePostsPerPage = (e: any) => {
    setPostPerPage(e);
  };

  return (
    <div className="pagination-main">
      <div className="pagination-displayCount">
        Showing
        <select onChange={(e) => changePostsPerPage(e.target.value)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        Out Of 100
      </div>
      <nav className="pagination" aria-label="Pagination">
        <PageLink
          disabled={currentPage <= 1}
          onClick={previous}
          className="navigationTag"
        >
          &lt;
        </PageLink>
        {pageNums.map((pageNum, idx) => (
          <PageLink
            key={idx}
            active={currentPage === pageNum}
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </PageLink>
        ))}

        <PageLink
          disabled={currentPage >= pageNums.length}
          onClick={next}
          className="navigationTag"
        >
          &gt;
        </PageLink>
      </nav>
    </div>
  );
}
