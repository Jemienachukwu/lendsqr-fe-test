import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar Component", () => {
  test("renders the sidebar with all sections and items", () => {
    render(<Sidebar />);

    expect(screen.getByText("CUSTOMERS")).toBeInTheDocument();
    expect(screen.getByText("BUSINESSES")).toBeInTheDocument();
    expect(screen.getByText("SETTINGS")).toBeInTheDocument();

    const customerItems = [
      "Users",
      "Guarantors",
      "Loans",
      "Decision Models",
      "Savings",
      "Loan Requests",
      "Whitelist",
      "Karma",
    ];
    customerItems.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    const businessItems = [
      "Organisation",
      "Loan Product",
      "Savings Products",
      "Fees and Charges",
      "Transactions",
      "Services",
      "Service Account",
      "Settlements",
      "Reports",
    ];
    businessItems.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    const settingItems = ["Prefrences", "Fees and Pricing", "Audit Logs"];
    settingItems.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    expect(screen.getByAltText("user")).toBeInTheDocument();
    expect(screen.getByText("Adedeji")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Search for anything")
    ).toBeInTheDocument();
  });
});
