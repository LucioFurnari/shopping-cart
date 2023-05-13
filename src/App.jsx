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

import { db } from "./Firebase";
import { collection, getDocs, getDoc } from "firebase/firestore";

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
  // Wishlist reducer with wishlist array //
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
  // Cart reducer with cart array //
  const [cartList, cartDispatch] = useReducer(shopSectionReducer, {cart:[], totalPrice: 0, cartAmount: 0});
  // Shop database //
  const [shopData, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const newData = []
      const data = await getDocs(collection(db, 'products'));
      data.forEach((doc) => newData.push(doc.data()))
      setData(newData)
    }
    getData()
    
  },[])

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
    <WishListContext.Provider value={wishlist}>
    <Nav />
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/shop' element={<Shop dataBase={shopData}/>} />
        <Route path='/shop/:item'
        element={
          <Suspense fallback={<Loading />}>    
              <LazyProduct dataBase={shopData} />
          </Suspense>
          }
        />
      <Route path='/cart'
      element={
        <Cart handlePurchase={completePurchase}/>
        }
      />
      <Route path='/wishlist' element={<Wishlist />}></Route>
      <Route path="/*" element={<ErrorPage />}/>
    </Routes>
    <Footer />
    </WishListContext.Provider>
    </WishlistDispatchContext.Provider>
    </cartDispatchContext.Provider>
    </cartContext.Provider>
  </div>
  )
}

export default App