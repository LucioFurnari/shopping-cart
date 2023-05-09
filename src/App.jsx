import { Routes, Route } from "react-router-dom";
import {Root, loader as RootLoader} from './routes/root';
import ErrorPage from './routes/error.page';
import Cart from './components/cart-page/Cart';
import Shop from './components/Shop'
import Wishlist from "./components/wishlist-page/Wishlist";
import Nav from './components/Nav'
import Footer from "./components/Footer";
import dataBase from './components/db';
import { Loading } from "./components/ui/Loading";
import { useEffect, useState, Suspense, lazy, createContext, useReducer } from "react";
const LazyProduct = lazy(() => import("./components/product-page/Product"));
// import Product from './components/product-page/Product'
export const PurchaseContext = createContext()
//export const WishlistContext = createContext([])
// Import context //
import {
  WishListContext,
  WishlistDispatchContext,
  wishlistReducer,
  cartContext,
  cartDispatchContext,
  shopSectionReducer
} from "./components/ShopContext";

function App() {
  const [cart,setCart] = useState([]);
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
  // Cart reducer //
  const [cartList, cartDispatch] = useReducer(shopSectionReducer, []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  function handlePurchase(ev, quantity) {
    const {id} = ev.target;
    const [newItem] = dataBase.filter((item,index) => {
      if(item.n == id) {
        return item
      }
    })
    const list = cart.filter((item) => item.name == newItem.name)
    if (list.length != 0) {
      let arr = cart.map(item => {
        if(item.name == newItem.name) {
          setTotalPrice(totalPrice + (newItem.price*quantity))
          setCartTotal(cartTotal + quantity)
          return {...item, price: item.price + (newItem.price*quantity), quantity: item.quantity + quantity}
        } else {
          return item
        }
      })
      setCart(arr)
    } else {
      setCart([...cart, {
        name: newItem.name,
        price: (newItem.price*quantity),
        img: newItem.img,
        quantity,
      }])
      setCartTotal(cartTotal + quantity)
      setTotalPrice(totalPrice + (newItem.price*quantity))
    }
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
          <PurchaseContext.Provider value={ handlePurchase }>
            <WishlistDispatchContext.Provider value={dispatch}>
              <LazyProduct func={handlePurchase}/>
            </WishlistDispatchContext.Provider>
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