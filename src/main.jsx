import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Shop from './components/Shop'
import Cart from './components/Cart'
import {Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path='/' element={<App />}/>
    <Route path='/shop' element={<Shop />}/>
    <Route path='/cart' element={<Cart/>}/>
  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
