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
          {/* <a href="">home</a>
          <a href="">shop</a>
          <a href="">cart</a> */}
          <Link to={`/`}>home</Link>
          <Link to={`/shop`}>shop</Link>
          <div>
            <Link to={`/cart`}>cart</Link>
            <div className="cartItems">{cartItems.length}</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
