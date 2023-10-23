import { useContext, useState } from "react";
import { ShopContext } from "../App";

const ProductCard = ({ ...props }) => {
  const { addToCart } = useContext(ShopContext);
  const [input, setInput] = useState(1)

  function inputHandler(e) {
    e.preventDefault()
    const amount = e.target.value
    setInput(amount)
  }
  
  return (
    <div className="flex flex-col justify-between border rounded p-3 w-2/12 bg-white">
      <div>
        <img src={props.image} alt="" />
        <div className="flex whitespace-nowrap overflow-hidden">
          {props.title}
        </div>
        <div>$ {props.price}</div>
      </div>
      <div>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          className="my-2 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="1"
          onChange={inputHandler}
        />
        <button onClick={() => addToCart(input, props)} className="bg-gray-100 px-2 w-full rounded">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
