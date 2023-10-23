import { useContext } from "react";
import { ShopContext } from "../App";

const Cart = () => {
  const { cartItems, amountInCart } = useContext(ShopContext);

  if (cartItems.length > 0)
    return (
      <div className="flex-1 p-5 max-w-screen-xl m-auto items-center">
        <h1 className="text-2xl">Shopping Cart</h1>

        <hr className="my-5 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />

        <div className="grid grid-cols-4 gap-4">
          <div>Product:</div>
          <div>Amount</div>
          <div>Individual Price</div>
          <div>Total Price</div>
        </div>

        <hr className="my-5 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <div className="divide-y divide-dotted">
          {cartItems.map((item) => {
            const totalPrice = (item.price * item.amount).toFixed(2);
            return (
              <div key={item.id} className="grid grid-cols-4 gap-4">
                <div>{item.title}</div>
                <div>{item.amount}</div>
                <div>$ {item.price}</div>
                <div>$ {totalPrice}</div>
              </div>
            );
          })}
        </div>

        <hr className="my-5 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />

        <div className="grid grid-cols-4 gap-4">
          <div>Shopping Cart Total</div>
          <div></div>
          <div></div>
          <div>$ {amountInCart[1]}</div>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-3 flex-1 p-5 max-w-screen-xl mx-auto my-5 text-center">
      <h1 className="text-2xl">Shopping Cart</h1>
      <p>There are no items in your cart yet</p>
    </div>
  );
};

export default Cart;
