import { Routes, Route } from "react-router-dom";
import {Root, loader as RootLoader} from './routes/root';
import ErrorPage from './routes/error.page';
import Cart from './components/cart-page/CartSection';
import Shop from './components/Shop'
import Wishlist from "./components/wishlist-page/Wishlist";
import Nav from './components/Nav'
import Footer from "./components/Footer";
import { Loading } from "./components/ui/Loading";
import { useEffect, useState, Suspense, lazy, createContext, useReducer } from "react";
const LazyProduct = lazy(() => import("./components/product-page/Product"));

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
  // const [cart,setCart] = useState([]);
  // Wishlist reducer //
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
  // Cart reducer //
  const [cartList, cartDispatch] = useReducer(shopSectionReducer, {cart:[], totalPrice: 0, cartAmount: 0});


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
    <cartContext.Provider value={ cartList }>
    <cartDispatchContext.Provider value={ cartDispatch }>
    <WishlistDispatchContext.Provider value={dispatch}>
    <Nav />
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:item' 
        element={
          <Suspense fallback={<Loading />}>    
              <LazyProduct />
          </Suspense>
        }
        />
      <Route path='/cart' element={
        <Cart handleDelete={removeProduct} handlePurchase={completePurchase}/>
      }/>
      <Route path='/wishlist' element={
        <WishListContext.Provider value={wishlist}>
            <Wishlist />
        </WishListContext.Provider>
      }></Route>
      <Route path="/*" element={<ErrorPage />}/>
    </Routes>
    <Footer />
    </WishlistDispatchContext.Provider>
    </cartDispatchContext.Provider>
    </cartContext.Provider>
  </div>
  )
}

export default App