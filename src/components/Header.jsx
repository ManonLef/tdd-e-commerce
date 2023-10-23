import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";

const Header = () => {
  console.log("rendering Header Component");
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <header className="flex flex-wrap justify-between p-5 h-16  bg-pink-300 text-white">
        <div>logo</div>
        <div className="flex gap-2">
          <Link to={`/`}>home</Link>
          <Link to={`/shop`}>shop</Link>
          <div className="flex gap-1">
            <Link to={`/cart`}>
              cart amount:
            </Link>
            <div>{cartItems.length}</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
