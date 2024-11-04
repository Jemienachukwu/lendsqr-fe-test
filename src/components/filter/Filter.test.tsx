import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "./Filter";

describe("Filter Component", () => {
  const mockFilterData = {
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  };

  const mockSetFilterData = jest.fn();
  const mockOnApplyFilter = jest.fn();
  const mockOnResetFilter = jest.fn();
  const mockSetFilter = jest.fn();

  const setup = () =>
    render(
      <Filter
        filterData={mockFilterData}
        setFilterData={mockSetFilterData}
        onApplyFilter={mockOnApplyFilter}
        onResetFilter={mockOnResetFilter}
        setFilter={mockSetFilter}
      />
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders input fields and buttons correctly", () => {
    setup();
    expect(screen.getByPlaceholderText("organization")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("User")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Filter")).toBeInTheDocument();
  });

  test("updates form data on input change", () => {
    setup();
    fireEvent.change(screen.getByPlaceholderText("organization"), {
      target: { value: "Org1" },
    });
    fireEvent.change(screen.getByPlaceholderText("User"), {
      target: { value: "user123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Date"), {
      target: { value: "2024-11-03" },
    });
    fireEvent.change(screen.getByPlaceholderText("Phone Number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByDisplayValue("Select"), {
      target: { value: "active" },
    });

    expect(screen.getByDisplayValue("Org1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("user123")).toBeInTheDocument();
    expect(screen.getByDisplayValue("user@example.com")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2024-11-03")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1234567890")).toBeInTheDocument();
    expect(screen.getByDisplayValue("active")).toBeInTheDocument();
  });

  test("calls onApplyFilter with form data on submit", () => {
    setup();

    fireEvent.change(screen.getByPlaceholderText("organization"), {
      target: { value: "Org1" },
    });
    fireEvent.change(screen.getByPlaceholderText("User"), {
      target: { value: "user123" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /filter/i }));

    expect(mockOnApplyFilter).toHaveBeenCalledWith({
      organization: "Org1",
      username: "user123",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
    expect(mockSetFilter).toHaveBeenCalled();
  });

  test("resets form data on Reset button click", () => {
    setup();
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));

    expect(mockOnResetFilter).toHaveBeenCalled();
  });
});
