import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import Router from "../src/components/Router";

describe("Shop Component", () => {
  it("renders dummy content", () => {
    render(<Home />, {wrapper: Router})
    expect(screen.getByText(/Welcome to Le Shop de Frou Frou!/i)).toBeInTheDocument();
  })
})