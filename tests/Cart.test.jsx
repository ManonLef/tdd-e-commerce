import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../src/components/Cart";

describe("Cart component", () => {
  it("renders cart dummy text", () => {
    render(<Cart />)
    expect(screen.getByText(/hi from cart/i)).toBeInTheDocument();
  })
})