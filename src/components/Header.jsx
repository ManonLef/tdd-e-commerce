import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";

const Header = () => {
  const { amountInCart } = useContext(ShopContext);

  return (
    <>
      <header className="bg-yellow-600 text-white text-xl font-semibold">
        <div className="max-w-screen-xl flex flex-wrap justify-between p-5 h-16 m-auto gap-2">
          <div className="italic"><Link to={`/`}>FROU FROU</Link></div>
          <div className="flex gap-8">
            <Link to={`/`}>Home</Link>
            <Link to={`/shop`}>Shop</Link>
          </div>
          <div>
            <Link to={`/cart`}>
              <div>
                Cart: {amountInCart[0]} items ♥ ${amountInCart[1]}
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
