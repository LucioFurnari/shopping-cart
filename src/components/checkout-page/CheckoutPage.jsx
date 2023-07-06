import { useContext } from "react"
import Header from "../ui/Header"
import { cartContext } from "../ShopContext"
import { ShippingInformation } from "./ShippingInformation"

export function CheckoutPage () {
  const userCartList = useContext(cartContext)
  const { cart, cartAmount, totalPrice } = userCartList;

  return(
    <>
    <Header section='Checkout' link='/cart' routeName='Cart' item='Checkout'/>
    <main className="grid grid-cols-2 gap-x-8 p-4 px-8 min-h-[calc(100vh-272px)]">
        <ShippingInformation />
        <section className="p-4">
        <h2 className="text-xl font-semibold mb-4">Orden summary</h2>
        <ul className="p-4">
          {cart.map((product) => {
            return (
            <li className="flex items-center border-b-[1px] border-black mb-4 pb-2" key={product.id}>
              <img className="w-20 h-auto mr-6" src={product.img}></img>
              <div>
                <p className='font-semibold text-xl mr-6'>{product.name}</p>
                <span className='text-black'>{product.price * product.quantity} $</span>
              </div>
              <p className="ml-10">{product.quantity} Qty</p>
            </li>
            )
          })}
        </ul>
        </section>
    </main>
    </>
  )
}