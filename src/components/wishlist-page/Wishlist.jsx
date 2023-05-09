import { useContext } from "react"
import Header from "../ui/Header"
import WishlistCard from "./WishlistCard"
import { WishListContext } from "../ShopContext"

export default function Wishlist () {
  const wishlist = useContext(WishListContext)

  return(
    <section className=" min-h-screen gap-4">
      <Header section={'Wishlist'} link={'/'} routeName={'Home'} item={'wishlist'} />
      {
        wishlist.length > 0 ?
        <div className="grid-container gap-8 p-12 pt-20 justify-center grid grid-cols-1"> 
        {wishlist.map((itemObj,index) =>{ 
        return( <WishlistCard {...itemObj} key={index}/>)
        })}
        </div>
        :
        <h3>The wishlist is empty</h3>
      }
    </section>
  )
}