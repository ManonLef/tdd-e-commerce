import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../src/components/Cart";
import { ShopContext } from "../src/App";

describe("Cart component", () => {
  it("renders cart dummy items", () => {
    render(
      <ShopContext.Provider
        value={{
          cartItems: [{title:"prod 1"}, {title:"prod 2"}]
        }}>
        <Cart />
      </ShopContext.Provider>
    );
    screen.debug()
    expect(screen.getByText(/prod 2/i)).toBeInTheDocument();
  });
});
