import emptyCart from '../../assets/images/empty-cart.svg'
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const { list, total, handleDelete, handlePurchase } = props
  return(
    <div className='cart-section flex flex-col items-center justify-center bg-zinc-900 h-screen'>
      {(list.length > 0)
      ? 
      <div className="grid-container">
      {list.map((item, index) => {
        const {name, price, quantity, img} = item;
        return (
        <div className="card" key={index}>
          <img src={img}></img>
          <p>{name}</p>
          <p>Price: {price} $</p>
          <p>{quantity > 1 ? 'x' + quantity : null}</p>
          <button id={index} onClick={(ev) => handleDelete(ev, quantity)} className='cart-delete-btn'>X</button>
        </div>
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
        (list.length > 0)
        &&
        <div className='cart-purchase-section'>
          <p>Total price: {total}</p>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      } 
    </div>
  )
}