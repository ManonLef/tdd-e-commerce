import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";

const Header = () => {
  console.log("rendering Header Component");
  const { amountInCart } = useContext(ShopContext);

  return (
    <>
      <header className="bg-yellow-600 text-white text-xl">
        <div className="max-w-screen-xl flex flex-wrap justify-between p-5 h-16 m-auto gap-2">
          <div className="italic">FROU FROU</div>
          <div className="flex gap-8 uppercase">
            <Link to={`/`}>home</Link>
            <Link to={`/shop`}>le shop</Link>
          </div>
          <div>
            <Link to={`/cart`}>
              <div>
                Cart {amountInCart[0]} items for ${amountInCart[1]}
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
