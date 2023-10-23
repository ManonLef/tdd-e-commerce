import { useContext } from "react";
import { ShopContext } from "../App";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  if (cartItems.length > 0) return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
  return <>
    <h1>Shopping Cart</h1>
    <div>There are no items in your cart yet</div>
    </>
};

export default Cart;
