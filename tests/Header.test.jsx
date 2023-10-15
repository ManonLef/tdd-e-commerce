import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import Router from "../src/components/Router";

describe("Header component", () => {
  it("renders logo component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("banner").textContent).toMatch(/logo/i);
  });

  it("renders home link component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("link", { name: "home" })).toBeInTheDocument();
  });

  it("renders shop link component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("link", { name: "shop" })).toBeInTheDocument();
  });

  it("renders cart link component", () => {
    render(<Header />, { wrapper: Router });
    expect(screen.getByRole("link", { name: "cart" })).toBeInTheDocument();
  });
});
