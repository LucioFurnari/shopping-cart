import { Routes, Route } from "react-router-dom";
import {Root, loader as RootLoader} from './routes/root';
import ErrorPage from './error.page';
import Cart from './components/Cart';
import Shop from './components/Shop'
import dataBase from './components/db';

function App() {
  const cart = []
  function buyProduct(ev) {
    const {id} = ev.target;
    dataBase.map((item, index) => {
    if(index == id) {
      cart.push(item)
    }
  })
  console.log(cart)
}


  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
        <Route path='/shop' element={<Shop func={buyProduct}/>} />
        <Route path='/cart' element={<Cart list={cart}/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
