import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Navbar";

jest.mock("./imgs/image 4.png", () => "avatar.png");
jest.mock("./imgs/notification.svg", () => "notification.svg");
jest.mock("./imgs/ham.svg", () => "ham.svg");
jest.mock("./imgs/logo.svg", () => "logo.svg");
jest.mock("./imgs/closebtn.svg", () => "closebtn.svg");

describe("NavBar Component", () => {
  const mockSetShowSide = jest.fn();

  const setup = (showSide: boolean) =>
    render(
      <Router>
        <NavBar showSide={showSide} setShowSide={mockSetShowSide} />
      </Router>
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders navbar elements correctly", () => {
    setup(true);

    expect(screen.getByAltText("ham-icon")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for anything")
    ).toBeInTheDocument();
    expect(screen.getByText("Docs")).toBeInTheDocument();
    expect(screen.getByAltText("notification-icon")).toBeInTheDocument();
    expect(screen.getByAltText("user")).toBeInTheDocument();
    expect(screen.getByText("Adedeji")).toBeInTheDocument();
  });

  test("toggles sidebar icon based on showSide prop", () => {
    setup(true);
    expect(screen.getByAltText("ham-icon")).toBeInTheDocument();

    setup(false);
    expect(screen.getByAltText("close-button-icon")).toBeInTheDocument();
  });

  test("calls setShowSide with correct argument on toggle button click", () => {
    setup(true);

    const toggleButton = screen.getByAltText("ham-icon").parentElement;
    fireEvent.click(toggleButton!);

    expect(mockSetShowSide).toHaveBeenCalledWith(false);
  });
});
