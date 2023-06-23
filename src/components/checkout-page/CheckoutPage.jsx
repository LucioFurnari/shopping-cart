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
    <main className=" grid grid-cols-2">
        <ShippingInformation />
        <section>
        <h2>Orden summary</h2>
        <ul>
          {cart.map((product) => {
            return (
            <li key={product.id}>
              <p className='text-red-500 font-semibold text-xl'>{product.name} 
                <span className='text-black'>{product.price * product.quantity} $</span>
              </p>
              <p>x {product.quantity}</p>
            </li>
            )
          })}
        </ul>
        </section>
    </main>
    </>
  )
}