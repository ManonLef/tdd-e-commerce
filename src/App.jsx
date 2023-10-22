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
  const url =
    "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";
  // data will contain the shop products
  const { data, loading, error } = FetchData(url);

 
  console.log(data);

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
