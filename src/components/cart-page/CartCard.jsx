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
      <div className="pt-4 flex items-center">
        <button className={`${disableButton && 'bg-zinc-200 text-zinc-500'} pl-2 pr-2 bg-zinc-400 text-4xl text-center`} onClick={handleDecreaseAmount} disabled={disableButton}>-</button>
          <span className="p-2 text-2xl">{quantity}</span>
        <button className={`${disableButton && 'bg-zinc-200 text-zinc-500'} pl-2 pr-2 bg-zinc-400 text-4xl mr-6`} onClick={handleIncreaseAmount} disabled={disableButton}>+</button>
        {
        disableButton &&
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        }
      </div>
      <p className="text-2xl pt-4 font-semibold">Total price: {price * quantity} $</p>
      <button className="p-4 pl-8 pr-8 mb-4 mt-4 text-xl bg-yellow-900 text-yellow-100" id={id} onClick={handleRemoveItem} >Remove item</button>
    </div>
    </div>
  )
}