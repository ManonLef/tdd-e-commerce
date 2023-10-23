import { useContext } from "react";
import { ShopContext } from "../App";
import ProductCard from "./ProductCard";

const Shop = () => {
  // get shop fetched data from Shopping API
  const { data, loading, error } = useContext(ShopContext);

  if (error) return <div className="flex-1 p-5">error {error}</div>;
  if (loading) return <div className="flex-1 p-5">products loading</div>;

  const img4 = new URL("../images/image4.jpg", import.meta.url).href;

  return (
    <div className="flex flex-col p-5 max-w-screen-xl m-auto items-center">
      <img src={img4} alt="" className="m-5 max-w-6xl"/>
      <div className="flex-1 p-5">
        <div className="flex gap-3 flex-wrap justify-center">
          {data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
