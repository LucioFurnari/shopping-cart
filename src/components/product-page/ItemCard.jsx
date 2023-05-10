import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useContext, useState } from "react";
import { WishlistDispatchContext, cartDispatchContext } from "../ShopContext";

export default function ItemCard ({props,handleDescription,seeDesc}) {
  const { img, n, name, price, type, stock, description } = props;
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useContext(WishlistDispatchContext)
  const cartDispatch = useContext(cartDispatchContext)
  const handleFavorite = () => setFavorite(favorite => !favorite);

  function handleWishlist(ev) {
    ev.stopPropagation()
    handleFavorite()
    dispatch({
      type: 'added',
      id: ev.target.id,
    });
  }
  function handleRemoveList(ev) {
    ev.stopPropagation()
    handleFavorite()
    dispatch({
      type: 'remove',
      id: ev.target.id,
    })
  }
  function handleAddCart(ev, quantity) {
    cartDispatch({
      type: 'ADD-TO-CART',
      id: ev.target.id,
      quantity,
    })
  }

  return (
    <div className="flex flex-col grow items-start justify-center bg-zinc-300">
      <div className="relative">
        <span className="absolute top-4 right-4 text-2xl">{favorite ? <AiFillHeart className="fill-red-900 animate-pulse"/> : <AiOutlineHeart id={n} onClick={handleWishlist} className="fill-red-900"/>}</span>
        <img  src={img}></img>
      </div>
      <button id={n} onClick={handleRemoveList}>Remove favorite</button>
      <h2 className="text-2xl pt-4 pb-4">{name}</h2>
      <p className="text-xl pb-4">Price: <span className="text-xl pl-4 text-orange-800">{price}.00 $</span></p>
      <p className="text-xl pb-4">Type: <span className="text-xl pl-4 text-zinc-900">{type}</span></p>
      <p className="text-xl pb-4">Availability: 
        <span className={`text-xl pl-4 ${stock > 0 ? ' text-green-700' : ' text-red-700'}` }>
          {stock > 0 ? 'In stock!' : 'Out of stock'}
        </span>
      </p>
      <p className="text-xl pb-4">Quantity: <span className="text-xl pl-4 text-zinc-900"></span></p>
      <button className="p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100" id={n}
        onClick={(ev) => {
          handleAddCart(ev, quantity)
          // handlePurchase(ev,quantity)
          setQuantity(1)
          }}>
        Add to Cart
      </button>
      <button className="p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100">Buy it now</button>
      <button className={`${seeDesc &&"bg-yellow-700"} p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100 `} onClick={handleDescription}>Product description</button>
      <p className={`${seeDesc && " h-[200px]"} overflow-hidden transition-[height] duration-1000 ease-in-out h-0`}>{description }</p>
    </div>
  )
}