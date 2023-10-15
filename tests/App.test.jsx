import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
  it("renders homepage on first render", () => {
    render(<App />)
    expect(screen.getByText(/hi from home/i)).toBeInTheDocument();
  })

  it("renders footer on first render", () => {
    render(<App />)
    expect(screen.getByText(/footer content/i)).toBeInTheDocument();
  })
})