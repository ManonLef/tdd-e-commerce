import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";

describe("Shop Component", () => {
  it("renders dummy content", () => {
    render(<Home />)
    expect(screen.getByText(/hi from home/i)).toBeInTheDocument();
  })
})