import { useContext } from "react"
import Header from "../ui/Header"
import WishlistCard from "./WishlistCard"
import { WishListContext } from "../ShopContext"

export default function Wishlist () {
  const wishlist = useContext(WishListContext)

  return(
    <section className=" h-screen">
      <Header section={'Wishlist'} link={'/'} routeName={'Home'} item={'wishlist'} />
      <div className="grid grid-cols-1"> 
        {wishlist.map((itemObj,index) =>{ 
        return( <WishlistCard {...itemObj} key={index}/>)
        })}
      </div>
    </section>
  )
}