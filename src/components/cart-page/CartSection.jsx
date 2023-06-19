import emptyCart from '../../assets/images/empty-cart.svg'
import CartCard from './CartCard';
import Header from '../ui/Header';
import { Link } from 'react-router-dom';
import { cartContext, cartDispatchContext, userContext } from '../ShopContext';
import { useContext, useEffect } from 'react';
import { getUserCart } from '../../FirestoreFunctions';

export default function Cart() {
  
  const {cart, totalPrice} = useContext(cartContext)
  const cartDispatch = useContext(cartDispatchContext)

  // User state //
  const userState = useContext(userContext)

  useEffect(() => {
    getUserCart(userState.id)
    .then((response) => {
      const {userCartList, totalPrice, totalQuantity} = response;
      cartDispatch({
        type: 'SET-TO-CART',
        data: userCartList,
        totalPrice,
        totalQuantity,
      })
    })
  }, [])

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
      <div className='max-w-[1280px]'>
        <div className='border-y-2 border-zinc-200 py-6'>
          <p className='text-xl font-semibold'>Total price: {totalPrice} $</p>
        </div>
        <div className='py-6'>
          <Link to='/checkout' className='p-4 bg-yellow-600 hover:bg-yellow-700 transition-colors ease-in text-white'>Continue purchase</Link>
        </div>
      </div>
      </div>
      :
      <div className="empty-cart flex items-center justify-center flex-col w-full pt-8 pb-8 bg-slate-50">
        <img className=' w-60' src={emptyCart}></img>
        <p className='text-xl mt-4 mb-4'>Nothing found in the cart</p>
        <Link to='/shop'>Star Shopping</Link>
      </div>
      } 
    </div>
  )
}