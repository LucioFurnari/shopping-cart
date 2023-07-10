import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, price, id , handleClick, img} = props;
  const [quantity, setQuantity] = useState(1);
  function increaseQuantity() {
    setQuantity(quantity + 1)
  }
  function decreaseQuantity() {
    setQuantity(quantity > 1 ? quantity - 1 : quantity)
  }
  return (
    <div className="card flex flex-col justify-left items-star h-full  bg-zinc-100 border-2 border-gray-800/40 rounded-lg">
      <img className="h-auto w-full rounded-t-md" src={img} alt={name} ></img>
      <p className="text-2xl p-2 text-yellow-950 font-semibold">{name}</p>
      <p className="text-xl p-2">{price}.00 $</p>
      <Link className='bg-yellow-800 hover:bg-yellow-900 my-4 mx-2 py-2 rounded-lg text-white text-center' to={name}>See product</Link>
    </div>
  )
}