import { useContext } from "react"
import { ShopContext } from "../App"

const Shop = () => {
  // get shop fetched data from Shopping API
  const { data, loading, error } = useContext(ShopContext);
  
  if (error) return <div className="flex-1">error {error}</div>;
  if (loading) return <div className="flex-1">products loading</div>;
  
  return (
    <div>hi from Shop</div>
  )
}

export default Shop