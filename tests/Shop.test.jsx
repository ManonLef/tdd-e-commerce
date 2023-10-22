import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop";
import { ShopContext } from "../src/App";

const customRender = (data = [], loading = false, error = 200) =>
  render(
    <ShopContext.Provider
      value={{
        data: data,
        loading: loading,
        error: error,
      }}>
      <Shop />
    </ShopContext.Provider>
  );

describe("Shop Component", () => {
  it("displays error 400 when fetch returns error 400", () => {
    customRender([], false, 400)
    expect(screen.getByText(/error 400/i)).toBeInTheDocument();
  });

  it("displays loading when data isn't fetched", () => {
    customRender([], true, null)
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
