import { useContext, useEffect } from "react"
import Header from "../ui/Header"
import WishlistCard from "./WishlistCard"
import { WishListContext, WishlistDispatchContext, userContext } from "../ShopContext"
import { getWishlistData } from "../../FirestoreFunctions"

export default function Wishlist () {
  const userState = useContext(userContext)
  const wishlist = useContext(WishListContext)
  const wishlistDispatch = useContext(WishlistDispatchContext)

  useEffect(() => {
    getWishlistData(userState.id)
    .then((response) => {
      const {userWishlist} = response;
      wishlistDispatch({
        type: 'SET-TO-WISHLIST',
        data: userWishlist
      })
    })
  }, [])

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
        <div className=" flex justify-center items-center h-80">
          <h3 className=" text-4xl">The wishlist is empty</h3>
        </div>
      }
    </section>
  )
}