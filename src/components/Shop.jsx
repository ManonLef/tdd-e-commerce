import { useContext } from "react"
import { ShopContext } from "../App"
import ProductCard from "./ProductCard";

const Shop = () => {
  // get shop fetched data from Shopping API
  const { data, loading, error } = useContext(ShopContext);
  
  if (error) return <div className="flex-1">error {error}</div>;
  if (loading) return <div className="flex-1">products loading</div>;
  
  return (
    <div>
      <div>hi from Shop</div>
      {data.map((product) => {
        return <ProductCard 
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      })}
    </div>
  )
}

export default Shop