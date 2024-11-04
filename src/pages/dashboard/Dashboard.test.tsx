import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/jest-dom";

global.fetch = jest.fn();

describe("Dashboard Component", () => {
  const mockUsersData = [
    {
      id: "1",
      orgName: "Company A",
      userName: "User1",
      email: "user1@example.com",
      phoneNumber: "1234567890",
      createdAt: "2024-01-01T00:00:00Z",
      lastActiveDate: "2024-01-08T00:00:00Z",
    },
    {
      id: "2",
      orgName: "Company B",
      userName: "User2",
      email: "user2@example.com",
      phoneNumber: "0987654321",
      createdAt: "2024-01-02T00:00:00Z",
      lastActiveDate: "2024-01-08T00:00:00Z",
    },
  ];

  beforeEach(() => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockUsersData,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Dashboard and checks for essential elements", async () => {
    const { container } = render(<Dashboard />);

    expect(container.getElementsByClassName("header")).toBeTruthy();

    await waitFor(() => {
      expect(screen.getByText("Company A")).toBeInTheDocument();
      expect(screen.getByText("Company B")).toBeInTheDocument();
      expect(screen.getByText("User1")).toBeInTheDocument();
      expect(screen.getByText("User2")).toBeInTheDocument();
    });

    expect(screen.getByText("USERS")).toBeInTheDocument();
    expect(screen.getByText("ACTIVE USERS")).toBeInTheDocument();
  });

  it("filters users based on organization", async () => {
    const { container } = render(<Dashboard />);

    await waitFor(() =>
      expect(screen.getByText("Company A")).toBeInTheDocument()
    );

    fireEvent.click(container.getElementsByClassName("filter-btn")[0]);
    const orgFilterInput = container.getElementsByClassName("organization")[0];

    fireEvent.change(orgFilterInput, { target: { value: "Company A" } });
    fireEvent.click(container.getElementsByClassName("filter-filterBtn")[0]);

    await waitFor(() => {
      expect(screen.getByText("Company A")).toBeInTheDocument();
      expect(screen.queryByText("Company B")).not.toBeInTheDocument();
    });
  });

  it("paginates users", async () => {
    const { container } = render(<Dashboard />);

    await waitFor(() =>
      expect(screen.getByText("Company A")).toBeInTheDocument()
    );

    const paginationButtons = container.getElementsByClassName("navigationTag");
    fireEvent.click(paginationButtons[1]);
  });
});
