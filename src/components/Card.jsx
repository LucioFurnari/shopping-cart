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
      <h2>{name}</h2>
      <p>{price} $</p>
      <img src={img} ></img>
      <button id={id} onClick={(ev) => handleClick(ev, quantity)}>Buy</button>
      <div className="quantity-container">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  )
}