import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";
import "@testing-library/jest-dom"; // Import jest-dom matchers

describe("Login Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  test("renders the login form", () => {
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/LOG IN/i)).toBeInTheDocument();
  });

  test("shows an error message for invalid email", () => {
    const emailInput = screen.getByPlaceholderText(/email/i);

    fireEvent.change(emailInput, { target: { value: "invalidEmail" } });

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
  });

  test("shows an error message for invalid password", () => {
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(passwordInput, { target: { value: "weakpass" } });

    expect(
      screen.getByText(/password must contain at least 8 characters/i)
    ).toBeInTheDocument();
  });
});
