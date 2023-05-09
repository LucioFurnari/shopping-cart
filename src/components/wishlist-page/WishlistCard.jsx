import { Link } from "react-router-dom";

export default function WishlistCard(props) {
  const {name, price, img, handlePurchase, handleCart, handleRemove} = props;

  return (
    <div className="flex flex-col grow items-center justify-center bg-zinc-300">
      <Link to={`/shop/${name}`}>
        <img className=" w-full" src={img} alt={name}></img>
      </Link>
      <h3 className="text-2xl pt-4 pb-4">{name}</h3>
      <p className="text-xl pb-4">{price}.00 $</p>
      <button className=" pr-6 pl-6 pt-4 pb-4 bg-yellow-800 text-yellow-50 mb-4">Buy it now</button>
      <button className=" pr-6 pl-6 pt-4 pb-4 bg-yellow-800 text-yellow-50 mb-4">Add to the cart</button>
      <button className=" pr-6 pl-6 pt-4 pb-4 bg-yellow-800 text-yellow-50 mb-4">Remove</button>
    </div>
  )
}