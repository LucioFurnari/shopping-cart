import { useContext } from "react"
import Header from "../ui/Header"
import WishlistCard from "./WishlistCard"
import { WishlistContext } from "../../App"

export default function Wishlist () {
  const wishlist = useContext(WishlistContext)
  console.log(wishlist)
  return(
    <section className=" h-screen">
      <Header section={'Wishlist'} link={'/'} routeName={'Home'} item={'wishlist'} />
      { <div className="grid grid-cols-1"> 
        {wishlist.map((itemObj,index) => <WishlistCard props={itemObj} key={index}/>)}
      </div> }
    </section>
  )
}