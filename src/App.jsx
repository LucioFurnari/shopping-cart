import { Routes, Route } from "react-router-dom";
import {Root, loader as RootLoader} from './routes/root';
import ErrorPage from './routes/error.page';
import Cart from './components/Cart';
import Shop from './components/Shop'
import Nav from './components/Nav'
import shop from './components/db';
import { useState } from "react";

function App() {
  const [cart,setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  function buyProduct(ev, quantity) {
    const {id} = ev.target;
    const newItem = shop.filter((item,index) => {
      if(index == id) {
        return item
      }
    })
    const list = cart.filter((item) => {if(item.name == newItem[0].name)return item})
    if (list.length != 0) {
      let arr = cart.map(item => {
        if(item.name == newItem[0].name) {
          setTotalPrice(totalPrice + (newItem[0].price*quantity))
          setCartTotal(cartTotal + quantity)
          return {...item, price: item.price + (newItem[0].price*quantity), quantity: item.quantity + quantity}
        } else {
          return item
        }
      })
      setCart(arr)
    } else {
      setCart([...cart, {
        name: newItem[0].name,
        price: (newItem[0].price*quantity),
        img: newItem[0].img,
        quantity,
      }])
      setCartTotal(cartTotal + quantity)
      setTotalPrice(totalPrice + (newItem[0].price*quantity))
    }
  }
  function removeProduct(ev) {
    const { id } = ev.target;
    setCart(cart.filter((item, index) => {
      if(index != id) {
        return item
      } else {
        setTotal(total - item.price)
      }
    }))
  }
  function completePurchase() {
    setCart([])
    setTotalPrice(0)
  }

  return (
    <div className="App">
    <Nav total={cartTotal}/>
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/shop' element={<Shop func={buyProduct}/>} />
      <Route path='/cart' element={<Cart list={cart}
      total={totalPrice}
      handleDelete={removeProduct}
      handlePurchase={completePurchase}
      />}/>
      <Route path="/*" element={<ErrorPage />}/>
    </Routes>
    </div>
  )
}

export default App
