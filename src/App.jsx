import { Routes, Route } from "react-router-dom";
import {Root, loader as RootLoader} from './routes/root';
import ErrorPage from './routes/error.page';
import Cart from './components/Cart';
import Shop from './components/Shop'
import Wishlist from "./components/wishlist-page/Wishlist";
import Nav from './components/Nav'
import Footer from "./components/Footer";
import dataBase from './components/db';
import { Loading } from "./components/ui/Loading";
import { useEffect, useState, Suspense, lazy, createContext, useReducer } from "react";
const LazyProduct = lazy(() => import("./components/product-page/Product"));
export const PurchaseContext = createContext()
export const WishlistContext = createContext([])
import { WishListContext, WishlistDispatchContext } from "./components/ShopContext";

function App() {
  const [cart,setCart] = useState([]);
  // const [wishlist, setWishlist] = useState(WishlistContext)
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  function handlePurchase(ev, quantity) {
    const {id} = ev.target;
    const newItem = dataBase.filter((item,index) => {
      if(item.n == id) {
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
  function handleWishlist(ev) {
    // console.log(wishlist)
    // const {id} = ev.target;
    // const newItem = dataBase.filter((item,index) => {
    //   if(item.n == id) {
    //     return item
    //   }
    // })
    // setWishlist(newItem)
  }
  function removeProduct(ev, quantity) {
    const { id } = ev.target;
    setCart(cart.filter((item, index) => {
      if(index != id) {
        return item
      } else {
        setCartTotal(cartTotal - quantity)
        setTotalPrice(totalPrice - item.price)
      }
    }))
  }
  function completePurchase() {
    setCart([])
    setTotalPrice(0)
    setCartTotal(0)
  }

  return (
    <div className="App relative">
    <Nav total={cartTotal}/>
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:item' 
        element={
          <Suspense fallback={<Loading />}> 
          <PurchaseContext.Provider value={{ handlePurchase, handleWishlist, wishlist }}>
          <WishListContext.Provider value={wishlist}>
            <WishlistDispatchContext.Provider value={dispatch}>
              <LazyProduct func={handlePurchase}/>
            </WishlistDispatchContext.Provider>
            </WishListContext.Provider>
          </PurchaseContext.Provider>
          </Suspense>
        }
        />
      <Route path='/cart' element={<Cart list={cart}
      total={totalPrice}
      handleDelete={removeProduct}
      handlePurchase={completePurchase}
      />}/>
      <Route path='/wishlist' element={
        <WishListContext.Provider value={wishlist}>
            <Wishlist />
        </WishListContext.Provider>
      }></Route>
      <Route path="/*" element={<ErrorPage />}/>
    </Routes>
    <Footer />
  </div>
  )
}

export default App


function wishlistReducer(list, action) {
  switch (action.type) {
    case 'added': {
      const newArr = dataBase.filter((item,index) => {if (item.n == action.id) return item})
      return [...list, newArr]
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}