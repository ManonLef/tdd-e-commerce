import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer";

describe("Footer component", () => {
  it("renders footer dummy text", () => {
    render(<Footer />)
    expect(screen.getByText(/manon lef/i)).toBeInTheDocument();
  })
})
