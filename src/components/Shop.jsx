import { useContext } from "react"
import { ShopContext } from "../App"

const Shop = () => {
  // get shop fetched data from Shopping API
  const { data, loading, error } = useContext(ShopContext);
  console.log(data)
  
  if (loading) return <div className="flex-1">loading</div>;
  if (error) return <div className="flex-1">error {error}</div>;
  
  return (
    <div>hi from Shop</div>
  )
}

export default Shop