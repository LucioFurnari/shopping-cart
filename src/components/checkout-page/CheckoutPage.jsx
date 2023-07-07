import { useContext } from "react"
import Header from "../ui/Header"
import { cartContext } from "../ShopContext"
import { ShippingInformation } from "./ShippingInformation"

export function CheckoutPage () {
  const userCartList = useContext(cartContext)
  const { cart, cartAmount, totalPrice } = userCartList;

  return(
    <>
    <div className='absolute flex items-center justify-center top-0 left-0 w-full h-full  z-[1] bg-gray-500/20'>
      <div className=' bg-yellow-900 text-white p-6 rounded-xl'>
        <h2 className=' text-xl mb-3'>Purchase complete</h2>
        <p className='pr-8 mb-3'>The purchase was completed.</p>
        <div className='flex justify-end p-3'>
          <button className=' text-yellow-600'>Continue</button>
        </div>
      </div>
    </div>
    <Header section='Checkout' link='/cart' routeName='Cart' item='Checkout'/>
    <main className="grid grid-col-1 md:grid-cols-2 gap-x-8 p-4 px-8 min-h-[calc(100vh-272px)]">
        <ShippingInformation />
        <section className="p-4">
          <h2 className="text-xl font-semibold mb-4">Orden summary</h2>
          <ul className="py-4 row-start-1 md:row-start-auto">
            {cart.map((product) => {
              return (
              <li className="flex items-center  border-b-[1px] border-black mb-4 pb-2" key={product.id}>
                <img className="w-20 h-auto mr-6" src={product.img}></img>
                <div>
                  <p className='font-semibold md:text-xl md:mr-6'>{product.name}</p>
                  <span className='text-black'>{product.price * product.quantity} $</span>
                </div>
                <p className="ml-auto">{product.quantity} Qty</p>
              </li>
              )
            })}
          </ul>
        </section>
    </main>
    </>
  )
}