import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useState } from "react";
import FetchData from "./components/FetchData";

export const ShopContext = createContext();

const App = () => {
  console.log("rendering App component");

  const [cartItems, setCartItems] = useState([]);
  const [amountInCart, setAmountInCart] = useState([0, 0]);

  const addToCart = (amount, product) => {
    const copy = [...cartItems];
    const id = product.id;
    const check = copy.findIndex((product) => product.id === id);
    if (check >= 0) {
      // if item is already in cart, increase amount
      copy[check].amount += amount;
    } else {
      // if item is not in cart, add it including amount
      product.amount = amount;
      copy.push(product);
    }
    setCartItems(copy);
    setAmountInCart(calculateItems(copy));
  };

  const calculateItems = (array) => {
    let items = array.reduce(function (a, b) {
      return a + b.amount;
    }, 0);
    let price = array.reduce(function (a, b) {
      return a + Math.round(b.price * b.amount * 100) / 100;
    }, 0);
    return [items, price];
  };

  // API Fetch
  const url = "https://fakestoreapi.com/products?sort=desc";
  // data will contain the shop products
  const { data, loading, error } = FetchData(url);

  return (
    <ShopContext.Provider
      value={{ cartItems, amountInCart, data, addToCart, loading, error }}>
      <div className="flex flex-col h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ShopContext.Provider>
  );
};

export default App;
