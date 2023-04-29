import { useState } from "react";

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
    <div className="card">
      <img src={img} ></img>
      <p>{name}</p>
      <p>{price} $</p>
      <div className="quantity-container">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button id={id} onClick={(ev) => {
        handleClick(ev, quantity)
        setQuantity(1)
        }} className="buy-btn">
        Buy
      </button>
    </div>
  )
}