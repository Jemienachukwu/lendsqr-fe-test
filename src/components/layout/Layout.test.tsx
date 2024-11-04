import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout";

jest.mock("../navbar/Navbar", () => ({
  __esModule: true,
  default: ({
    setShowSide,
    showSide,
  }: {
    setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
    showSide: boolean;
  }) => (
    <div data-testid="navbar" onClick={() => setShowSide(!showSide)}>
      Navbar
    </div>
  ),
}));

jest.mock("../sideBar/Sidebar", () => ({
  __esModule: true,
  default: () => <div data-testid="sidebar">Sidebar</div>,
}));

describe("Layout Component", () => {
  const setup = (children: React.ReactNode) =>
    render(<Layout>{children}</Layout>);

  test("renders Navbar, Sidebar, and children", () => {
    setup(<div data-testid="child">Child Component</div>);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("toggles sidebar visibility when Navbar is clicked", () => {
    setup(<div data-testid="child">Child Component</div>);

    const sidebarContainer = screen.getByTestId("sidebar").parentElement;
    expect(sidebarContainer).toHaveClass("sidebarContainer1");

    fireEvent.click(screen.getByTestId("navbar"));

    expect(sidebarContainer).toHaveClass("sidebarContainer");
  });
});
