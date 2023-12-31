import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import userEvent from "@testing-library/user-event";
import Router from "../src/components/Router";

describe("App component", () => {
  it("renders homepage on first render", () => {
    render(<App />, { wrapper: Router });
    expect(
      screen.getByText(/Welcome to Le Shop de Frou Frou/i)
    ).toBeInTheDocument();
  });

  it("renders footer on first render", () => {
    render(<App />, { wrapper: Router });
    expect(screen.getByText(/manon lef/i)).toBeInTheDocument();
  });

  it("renders shop when clicking on the shop link", async () => {
    const user = userEvent.setup();

    render(<App />, { wrapper: Router });
    const link = screen.getByRole("link", { name: "Shop" });

    await user.click(link);

    expect(screen.getByRole("img", { name: /coat/i })).toBeInTheDocument();
  });

  it("renders cart when clicking on the cart link", async () => {
    const user = userEvent.setup();

    render(<App />, { wrapper: Router });
    const link = screen.getByRole("link", { name: /cart/i });

    await user.click(link);

    expect(
      screen.getByRole("heading", { name: /shopping cart/i })
    ).toBeInTheDocument();
  });

  it("renders home when clicking on the home link", async () => {
    const user = userEvent.setup();

    render(<App />, { wrapper: Router });
    const link = screen.getByRole("link", { name: /home/i });

    await user.click(link);

    expect(
      screen.getByText(/Welcome to Le Shop de Frou Frou!/i)
    ).toBeInTheDocument();
  });
});
