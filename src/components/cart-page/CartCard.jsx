import { useContext, useState } from "react";
import { cartDispatchContext, userContext } from "../ShopContext";
import { setItemToCart, getUserCart, getUpdateData, removeItemFromCart } from "../../FirestoreFunctions";

export default function CartCard(props) {
  const {name, price, quantity, img, id} = props;

  const [disableButton, setDisableButton] = useState(false)

  const dispatch = useContext(cartDispatchContext);
  // User State // 
  const userState = useContext(userContext)

  function handleRemoveItem() {
    removeItemFromCart(userState.id, id)
    .then((response) => {
      if(response) {
        getUserCart(userState.id).then(
          (response) => {
            dispatch({
            type: 'SET-TO-CART',
            data: response.userCartList,
            totalQuantity: response.totalQuantity,
            totalPrice: response.totalPrice
          })}
        )
      }
    })
    // dispatch({
    //   type: 'REMOVE-FROM-CART',
    //   id: id
    // });
  };

  function handleDecreaseAmount() {
    
     // dispatch({
      //   type: 'DECREASE-AMOUNT',
      //   id: id
      // })
    setDisableButton(true)
    setItemToCart(userState.id, id, - 1)
    .then((res) =>{ if (res){
      getUserCart(userState.id).then(
        (response) => {
          dispatch({
          type: 'SET-TO-CART',
          data: response.userCartList,
          totalQuantity: response.totalQuantity,
          totalPrice: response.totalPrice
        })}
      )
      setDisableButton(false)
    }
    })
  }
  function handleIncreaseAmount() {
      // dispatch({
      //   type: 'INCREASE-AMOUNT',
      //   id: id
      // })
    setDisableButton(true)
    setItemToCart(userState.id, id, 1)
    .then((res) =>{ if (res){
      getUserCart(userState.id).then(
        (response) => {
          console.log('testing')
          dispatch({
          type: 'SET-TO-CART',
          data: response.userCartList,
          totalQuantity: response.totalQuantity,
          totalPrice: response.totalPrice
        })}
      )
      setDisableButton(false)
    }
    })
    
  }

  return (
    <div className="bg-zinc-300 flex flex-col items-center xl:flex-row xl:max-w-7xl">
      <img src={img}></img>
    <div className="xl:ml-8">
      <p className="text-3xl pt-4">{name}</p>
      <p className="text-2xl pt-4">Price: {price}.00 $</p>
      {/* <p className="text-2xl pt-4">{quantity > 1 ? 'Amount: x' + quantity : null}</p> */}
      <div className="pt-4">
        <button className={`${disableButton && 'bg-zinc-200 text-zinc-500'} pl-2 pr-2 bg-zinc-400 text-4xl text-center`} onClick={handleDecreaseAmount} disabled={disableButton}>-</button>
          <span className="p-2 text-2xl">{quantity}</span>
        <button className={`${disableButton && 'bg-zinc-200 text-zinc-500'} pl-2 pr-2 bg-zinc-400 text-4xl`} onClick={handleIncreaseAmount} disabled={disableButton}>+</button>
      </div>
      <p className="text-2xl pt-4 font-semibold">Total price: {price * quantity} $</p>
      <button className="p-4 pl-8 pr-8 mb-4 mt-4 text-xl bg-yellow-900 text-yellow-100" id={id} onClick={handleRemoveItem} >Remove item</button>
    </div>
    </div>
  )
}