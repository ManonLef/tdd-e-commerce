import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";

const Header = () => {
  console.log("rendering Header Component");
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <header>
        <div>logo</div>
        <div>
          <Link to={`/`}>home</Link>
          <Link to={`/shop`}>shop</Link>
          <Link to={`/cart`}>
            cart
            <div>{cartItems.length}</div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
