import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop";

describe("Shop Component", () => {
  it("renders dummy content", () => {
    render(<Shop />)
    expect(screen.getByText(/hi from shop/i)).toBeInTheDocument();
  })
})