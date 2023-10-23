import { useContext } from "react";
import { ShopContext } from "../App";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      {cartItems.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
};

export default Cart;
