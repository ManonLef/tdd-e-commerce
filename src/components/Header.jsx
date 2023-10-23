import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";

const Header = () => {
  console.log("rendering Header Component");
  const { amountInCart } = useContext(ShopContext);

  return (
    <>
      <header className="flex flex-wrap justify-between p-5 h-16  bg-pink-300 text-white">
        <div>logo</div>
        <div className="flex gap-8">
          <Link to={`/`}>home</Link>
          <Link to={`/shop`}>shop</Link>
        </div>
        <div>
          <Link to={`/cart`}>
            <div>
              Cart {amountInCart[0]} items for ${amountInCart[1]}
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
