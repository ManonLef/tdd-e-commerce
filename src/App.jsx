import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useState } from "react";
import FetchData from "./components/FetchData";

export const ShopContext = createContext();

const App = () => {
  console.log("rendering App component");

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (amount, product) => {
    const copy = [...cartItems];
    for (let i = 0; i < amount; i++) {
      copy.push(product);
    }
    setCartItems(copy);
  };

  // API Fetch
  const url = "https://fakestoreapi.com/products?sort=desc";
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
