import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartDispatchContext } from "../ShopContext";

export default function WishlistCard(props) {
  const {name, price, img, handlePurchase, handleCart, handleRemove,id} = props;
  const dispatch = useContext(cartDispatchContext)

  function handleAddToCart(ev) {
    dispatch({
      type: 'ADD-TO-CART',
      id: id,
      quantity: 0, // Maybe change the value for 1 // 
    })
  }

  return (
    <div className="flex flex-col grow items-center justify-center bg-zinc-300">
      <Link to={`/shop/${name}`}>
        <img className=" w-full" src={img} alt={name}></img>
      </Link>
      <h3 className="text-2xl pt-4 pb-4">{name}</h3>
      <p className="text-xl pb-4">{price}.00 $</p>
      <button className=" pr-6 pl-6 pt-4 pb-4 bg-yellow-800 text-yellow-50 mb-4">Buy it now</button>
      <button onClick={handleAddToCart}  className=" pr-6 pl-6 pt-4 pb-4 bg-yellow-800 text-yellow-50 mb-4">Add to the cart</button>
      <button className=" pr-6 pl-6 pt-4 pb-4 bg-yellow-800 text-yellow-50 mb-4">Remove</button>
    </div>
  )
}