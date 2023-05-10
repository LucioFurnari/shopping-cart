import { useContext } from "react";
import { cartDispatchContext } from "../ShopContext";

export default function CartCard(props) {
  const {name, price, quantity, img, id} = props;
  const dispatch = useContext(cartDispatchContext);

  function handleRemoveItem(ev) {
    dispatch({
      type: 'REMOVE-FROM-CART',
      id: ev.target.id
    });
  };

  function handleDecreaseAmount(ev) {
    dispatch({
      type: 'DECREASE-AMOUNT',
      id: ev.target.parentNode.id
    })
  }
  function handleIncreaseAmount(ev) {
    dispatch({
      type: 'INCREASE-AMOUNT',
      id: ev.target.parentNode.id
    })
  }

  return (
    <div className=" bg-zinc-300">
      <img src={img}></img>
      <p className="text-3xl pt-4">{name}</p>
      <p className="text-2xl pt-4">Price: {price}.00 $</p>
      <p className="text-2xl pt-4">{quantity > 1 ? 'Amount: x' + quantity : null}</p>
      <div id={id}>
        <button className="pl-2 pr-2 bg-zinc-400 text-4xl text-center" onClick={handleDecreaseAmount}>-</button>
          <span className="p-2 text-2xl">{quantity}</span>
        <button className="pl-2 pr-2 bg-zinc-400 text-4xl" onClick={handleIncreaseAmount}>+</button>
      </div>
      <p className="text-2xl pt-4 font-semibold">Total price: {price * quantity}</p>
      <button className="p-4 pl-8 pr-8 mb-4 mt-4 text-xl bg-yellow-900 text-yellow-100" id={id} onClick={(ev) => handleRemoveItem(ev, quantity)} >Remove item</button>
    </div>
  )
}