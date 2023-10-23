import { useContext } from "react";
import { ShopContext } from "../App";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  if (cartItems.length > 0) return (
    <div className="flex-1 p-5">
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
  return <>
    <h1>Shopping Cart</h1>
    <div className="flex-1 p-5">There are no items in your cart yet</div>
    </>
};

export default Cart;
