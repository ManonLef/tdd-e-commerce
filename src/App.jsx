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
    console.log(product.id);
    // if item is already in cart: add current amount to item amount
    // check id against products in cart
    const id = product.id;
    const check = copy.findIndex((product) => product.id === id);
    if (check >= 0) {
      copy[check].amount += amount;
      console.log("It's here", copy[check]);
    } else {
      // if item is not in cart yet: add item and set amount
      product.amount = amount;
      console.log("Not here yet", amount);
      copy.push(product);
    }
    setCartItems(copy);
    console.log("cart", copy)
  };

  // API Fetch
  const url = "https://fakestoreapi.com/products?sort=desc";
  // data will contain the shop products
  const { data, loading, error } = FetchData(url);

  return (
    <ShopContext.Provider
      value={{ cartItems, data, addToCart, loading, error }}>
      <div className="flex flex-col h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ShopContext.Provider>
  );
};

export default App;
