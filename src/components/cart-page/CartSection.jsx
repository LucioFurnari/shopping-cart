import emptyCart from '../../assets/images/empty-cart.svg'
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import { cartContext } from '../ShopContext';
import { useContext } from 'react';

export default function Cart(props) {
  const { list, total, handleDelete, handlePurchase } = props
  const {cart} = useContext(cartContext)

  return(
    <div className='cart-section flex flex-col items-center justify-center bg-zinc-900 h-screen'>
      {(cart.length > 0)
      ? 
      <div className="grid-container">
      {cart.map((item, index) => {
        return (
          <CartCard {...item} index={index}/>
        )
      })}
      </div>
      :
      <div className="empty-cart flex items-center justify-center flex-col w-full pt-8 pb-8 bg-slate-50">
        <img className=' w-60' src={emptyCart}></img>
        <p className='text-xl mt-4 mb-4'>Nothing found in the cart</p>
        <Link to='/shop'>Star Shopping</Link>
      </div>
      }
      {
        (cart.length > 0)
        &&
        <div className='cart-purchase-section'>
          <p>Total price: {total}</p>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      } 
    </div>
  )
}