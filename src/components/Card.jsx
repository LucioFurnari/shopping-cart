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
    <div className="card flex flex-col justify-left items-star bg-zinc-300">
      <img className=" h-full" src={img} ></img>
      <p className="text-2xl p-2">{name}</p>
      <p className="text-xl p-2">{price}.00 $</p>
      <div className="quantity-container">
        {/* <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button> */}
      </div>
      <button id={id} onClick={(ev) => {
        handleClick(ev, quantity)
        setQuantity(1)
        }} className="buy-btn">
        Buy
      </button>
      <Link className="border-solid border-2 hover:border-sky-700" to={name}>Item</Link>
    </div>
  )
}