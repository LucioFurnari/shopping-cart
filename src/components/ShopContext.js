import { createContext } from "react";
import dataBase from "./db";

// Wishlist context //
export const WishListContext = createContext(null);
export const WishlistDispatchContext = createContext(null);

// Cart/Shop context //
export const cartContext = createContext(null);
export const cartDispatchContext = createContext(null);

// Wishlist functions //
export function wishlistReducer(list, action) {
  switch (action.type) {
    case 'added': {
      let [newItem] = dataBase.filter((item,index) => item.n == action.id)
      // Detect if the list is empty or have the same item selected //
      const copyArr = list.filter((item) => (item.n == newItem.n))
      if (copyArr.length != 0) {
        const newList = list.map((item,index) => {
        if (item.n == newItem.n) {
          return {...item, newItem}
        } else {
          return item
        }
        })
        return newList
      } else {
        const newArr = [...list, newItem]
        return newArr
      }
    }
    case 'remove': {
      return list.filter((item,index) => item.n != action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Shop section functions //

export function shopSectionReducer(item, action) {
  const {cart} = item;
  switch (action.type) {
    case 'ADD-TO-CART': {
      const {id} = ev.target;
      const [newItem] = dataBase.filter((item,index) => {
      if(item.n == id) {
        return item
      }
      })
      const list = cart.filter((item) => item.name == newItem.name)
      if (list.length != 0) {
      const newArr = cart.map(item => {
      if(item.name == newItem.name) {
        return {...item, newItem}
      } else {
        return item
      }
      })
      return newArr;
      } else {
      setCart([...cart, {
        name: newItem.name,
        price: (newItem.price*quantity),
        img: newItem.img,
        quantity,
        }])
      }
      }
  }
}