import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../src/components/Cart";
import { ShopContext } from "../src/App";

describe("Cart component", () => {
  // tests to write
  it("renders empty message when no items in cart", () => {
    render(
      <ShopContext.Provider
        value={{
          cartItems: [],
          amountInCart: []
        }}>
        <Cart />
      </ShopContext.Provider>
    );
    screen.debug()
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });

  it("renders cart dummy items when items in cart", () => {
    render(
      <ShopContext.Provider
        value={{
          cartItems: [{title:"prod 1"}, {title:"prod 2"}],
          amountInCart: []
        }}>
        <Cart />
      </ShopContext.Provider>
    );
    screen.debug()
    expect(screen.getByText(/prod 2/i)).toBeInTheDocument();
  });
});
