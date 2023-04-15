import { Routes, Route } from "react-router-dom";
import {Root, loader as RootLoader} from './routes/root';
import ErrorPage from './error.page';
import Cart from './components/Cart';
import Shop from './components/Shop'
import Nav from './components/Nav'
import shop from './components/db';
import { useEffect, useState } from "react";
import { createElement } from "react";

function App() {
  const [cart,setCart] = useState([]);
  function buyProduct(ev) {
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
          return {...item, price: item.price + newItem[0].price}
        } else {
          return item
        }
      })
      setCart(arr)
    } else {
      setCart([...cart, ...newItem])
    }
  }

  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path='/' element={<Root />} errorElement={<ErrorPage />}/>
      <Route path='/shop' element={<Shop func={buyProduct}/>} />
      <Route path='/cart' element={<Cart list={cart}/>}/>
    </Routes>
    </div>
  )
}

export default App
