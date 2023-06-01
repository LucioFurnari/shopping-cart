import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import ErrorPage from './routes/error.page';
import Cart from './components/cart-page/CartSection';
import Wishlist from "./components/wishlist-page/Wishlist";
import Nav from './components/ui/Nav'
import Footer from "./components/ui/Footer";
import { SignUpPage } from "./components/sign-up-page/signUpSection";
import { LogInPage } from "./components/login-page/loginSection";
import { Loading } from "./components/ui/Loading";
import { Suspense, lazy, useReducer, useEffect } from "react";
const LazyProduct = lazy(() => import("./components/product-page/Product"));
const LazyShop = lazy(() => import('./components/shop-page/Shop'))

import { handleUserState } from "./AuthenticationFunctions";

// Import context //
import {
  userContext,
  userDispatchContext,
  userReducer,
  shopContext,
  filterContext,
  shopDispatchContext,
  shopReducer,
  WishListContext,
  WishlistDispatchContext,
  wishlistReducer,
  cartContext,
  cartDispatchContext,
  cartSectionReducer
} from "./components/ShopContext";

function App() {
  // Use reducer //
  const [userInfo, userDispatch] = useReducer(userReducer, {isSigned: false, email: ''}) 
  // Shop reducer with shop array // 
  const [shopList, shopDispatch] = useReducer(shopReducer, {shop: [], filter: []});
  // Wishlist reducer with wishlist array //
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
  // Cart reducer with cart array //
  const [cartList, cartDispatch] = useReducer(cartSectionReducer, {cart:[], totalPrice: 0, cartAmount: 0});

  useEffect(() => {
    handleUserState(userDispatch)
  }, [])

  return (
    <div className="App relative">
    <userContext.Provider value={userInfo}>
    <userDispatchContext.Provider value={userDispatch}>
    <shopContext.Provider value={shopList.shop}>
    <filterContext.Provider value={shopList.filter}>
    <shopDispatchContext.Provider value={shopDispatch}>
    <cartContext.Provider value={ cartList }>
    <cartDispatchContext.Provider value={ cartDispatch }>
    <WishlistDispatchContext.Provider value={dispatch}>
    <WishListContext.Provider value={wishlist}>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={
        <Suspense fallback={<Loading />}>   
          <LazyShop />
        </Suspense>
      } />
      <Route path='/shop/:item'
      element={
        <Suspense fallback={<Loading />}>    
            <LazyProduct />
          </Suspense>
        }
      />
      <Route path='/cart'
      element={
        <Cart />
        }
      />
      <Route path='/wishlist' element={<Wishlist />}></Route>
      <Route path='/login' element={<LogInPage/>}></Route> 
      <Route path='/sign-up' element={<SignUpPage />}></Route>
      <Route path="/*" element={<ErrorPage />}/>
    </Routes>
    <Footer />
    </WishListContext.Provider>
    </WishlistDispatchContext.Provider>
    </cartDispatchContext.Provider>
    </cartContext.Provider>
    </shopDispatchContext.Provider>
    </filterContext.Provider>
    </shopContext.Provider>
    </userDispatchContext.Provider>
    </userContext.Provider>
  </div>
  )
}

export default App