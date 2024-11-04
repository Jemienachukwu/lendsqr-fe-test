import { render, fireEvent, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  const defaultProps = {
    totalPosts: 100,
    postsPerPage: 10,
    paginate: jest.fn(),
    currentPage: 1,
    setCurrentPage: jest.fn(),
    setPostPerPage: jest.fn(),
  };

  test("renders pagination elements correctly", () => {
    render(<Pagination {...defaultProps} />);

    const displayCount = document.getElementsByClassName(
      "pagination-displayCount"
    );
    expect(displayCount.length).toBeGreaterThan(0);

    const pagination = document.getElementsByClassName("pagination");
    expect(pagination.length).toBeGreaterThan(0);
  });

  test("disables previous button on first page", async () => {
    render(<Pagination {...defaultProps} currentPage={1} />);

    await waitFor(() => {
      const prevButton = document.querySelector(".navigationTag.disabled");
      expect(prevButton).toBeTruthy();
    });
  });

  test("disables next button on last page", async () => {
    render(<Pagination {...defaultProps} currentPage={10} />);

    await waitFor(() => {
      const nextButton = document.querySelector(".navigationTag.disabled");
      expect(nextButton).toBeTruthy();
    });
  });

  test("changes posts per page and resets current page", () => {
    render(<Pagination {...defaultProps} />);
    const select = document
      .getElementsByClassName("pagination-displayCount")[0]
      .getElementsByTagName("select")[0];

    fireEvent.change(select, { target: { value: "20" } });
    expect(defaultProps.setPostPerPage).toHaveBeenCalledWith(20);
    expect(defaultProps.setCurrentPage).toHaveBeenCalledWith(1);
  });

  test("shows ellipsis when there are more than 5 pages", () => {
    render(<Pagination {...defaultProps} totalPosts={200} currentPage={5} />);
    const ellipsisElements = document.getElementsByClassName("page-link");

    const ellipsisCount = Array.from(ellipsisElements).filter(
      (el) => el.textContent === "..."
    ).length;
    expect(ellipsisCount).toBeGreaterThanOrEqual(1);
  });

  test("does not trigger navigation on disabled buttons", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    const prevButton = document.getElementsByClassName("navigationTag")[0];

    fireEvent.click(prevButton);

    expect(defaultProps.setCurrentPage).not.toHaveBeenCalled();
  });
});
