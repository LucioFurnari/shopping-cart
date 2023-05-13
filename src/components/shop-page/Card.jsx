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
    <div className="card flex flex-col justify-left items-star h-full  bg-zinc-300">
      <Link className="border-solid border-2 inline-block hover:border-sky-700" to={name}><img className=" h-auto w-full " src={img} alt={name} ></img></Link>
      <p className="text-2xl p-2 text-yellow-950 font-semibold">{name}</p>
      <p className="text-xl p-2">{price}.00 $</p>
      <div className="quantity-container">
        {/* <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button> */}
      </div>
      {/* <button id={id} onClick={(ev) => {
        handleClick(ev, quantity)
        setQuantity(1)
        }} className="buy-btn">
        Buy
      </button>  */}
      
    </div>
  )
}