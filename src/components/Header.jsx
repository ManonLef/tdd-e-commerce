import { Link } from "react-router-dom";

const Header = () => {
  console.log("rendering Header Component");

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
            <div className="cartItems">0</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
