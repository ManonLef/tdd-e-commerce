import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import Router from "../src/components/Router";

describe("Header component", () => {
  it("renders logo component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("banner").textContent).toMatch(/frou frou/i);
  });

  it("renders home link component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("renders shop link component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
  });

  it("renders cart link component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("has a cart item amount of zero initially", () => {
    // should be revisited when working with items added to cart
    render(<Header />, { wrapper: Router });
    expect(screen.getByText(/Cart: 0/i)).toBeInTheDocument(); 
  })
});
