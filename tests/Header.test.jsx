import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header component", () => {
  it("renders logo component", () => {
    render(<Header />);
    expect(screen.getByRole("banner").textContent).toMatch(/logo/i);
  });

  it("renders home link component", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "home" })).toBeInTheDocument();
  });

  it("renders shop link component", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "shop" })).toBeInTheDocument();
  });

  it("renders cart link component", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "cart" })).toBeInTheDocument();
  });
});
