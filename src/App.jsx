import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useState } from "react";
import FetchData from "./components/FetchData";

export const ShopContext = createContext();

const App = () => {
  console.log("rendering App component");

  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  // API Fetch
  const url = "https://fakestoreapi.com/products";
  // data will contain the shop products
  const { data, loading, error } = FetchData(url);

  return (
    <ShopContext.Provider
      value={{ cartItems, data, addToCart, loading, error }}>
      <Header />
      <Outlet />
      <Footer />
    </ShopContext.Provider>
  );
};

export default App;
