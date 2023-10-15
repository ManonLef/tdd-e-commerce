import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useState } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

const App = () => {
  console.log("rendering App component");

  const [cartItems, setCartItems] = useState([]);
  const products = [];

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
      <Outlet />
      <Footer />
    </ShopContext.Provider>
  );
};

export default App;
