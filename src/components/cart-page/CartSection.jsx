import emptyCart from '../../assets/images/empty-cart.svg'
import CartCard from './CartCard';
import Header from '../ui/Header';
import { Link } from 'react-router-dom';
import { cartContext } from '../ShopContext';
import { useContext } from 'react';

export default function Cart(props) {
  const { list, total, handleDelete, handlePurchase } = props
  const {cart, totalPrice} = useContext(cartContext)

  return(
    <div className='bg-zinc-100 min-h-screen'>
    <Header section='Cart' link={'/'} routeName={'Home'} item={'Your Shopping Cart'}/>
      {(cart.length > 0)
      ? 
      <div className="grid grid-cols-1 gap-6 p-12 pt-20 justify-center ">
      {cart.map((item, index) => {
        return (
          <CartCard {...item} key={index}/>
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
        <div className=' bg-zinc-100'>
          <p>Total price: {totalPrice}</p>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      } 
    </div>
  )
}