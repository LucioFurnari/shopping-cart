import { createContext } from "react";
import dataBase from "./db";
import { stringify } from "postcss";

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
      let [newItem] = dataBase.filter((item,index) => item.id == action.id)
      // Detect if the list is empty or have the same item selected //

      const hasItem = list.some((item) => (item.id == newItem.id))
      if (hasItem) {
        const newList = list.map((item,index) => {
        if (item.id == newItem.id) {
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
      return list.filter((item,index) => item.id != action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Cart section functions //

export function shopSectionReducer(item, action) {
  const {cart, totalPrice, cartAmount} = item;
  switch (action.type) {
    case 'ADD-TO-CART': {
      // Search item in the data base //
      const [newItem] = dataBase.filter((item) => item.id == action.id);

      const hasItem = cart.some((item) => item.name === newItem.name)
      if (hasItem) {
        const newArr = cart.map(item => {
        if(item.name === newItem.name) {
          return {...item, quantity: item.quantity + action.quantity}
        } else {
          return item
        }
      })

      return {
        cart: newArr,
        totalPrice: totalPrice + newItem.price * action.quantity,
        cartAmount: cartAmount + action.quantity,
      };
      } else {
        return {
          cart: [...cart, {
            name: newItem.name,
            price: newItem.price,
            img: newItem.img,
            quantity: action.quantity,
            id: newItem.id.toString()
            }],
          cartAmount: (cartAmount + action.quantity),
          totalPrice: (totalPrice + (newItem.price*action.quantity))
        }
      }
      }
    case 'REMOVE-FROM-CART': {
      const [item] = cart.filter((item) => item.id == action.id);
      return {
        cart: cart.filter((item) => item.id !== action.id),
        cartAmount: (cartAmount - item.quantity),
        totalPrice: (cart.length > 1 ? (totalPrice - (item.price * item.quantity)) : 0)
      }
    }
    case 'DECREASE-AMOUNT': {
      const [item] = cart.filter((item) => item.id == action.id);
      return {
        cart: cart.map((item) => {
          if (item.id === action.id) {
            if(item.quantity > 0) {
              return {...item, quantity: (item.quantity - 1)}
            } else {
              return item
            }
          } else {
            return item
          }
        }),
        cartAmount: (cartAmount > 0 ? cartAmount - 1 : 0),
        totalPrice: (totalPrice > 0 ? (totalPrice - item.price) : 0)
      }
    }
    case 'INCREASE-AMOUNT': {
      const [item] = cart.filter((item) => item.id == action.id);
      return {
        cart: cart.map((item) => {
          if (item.id == action.id) {
            return {...item, quantity: (item.quantity + 1)}
          } else {
            return item
          }
        }),
        cartAmount: (cartAmount + 1),
        totalPrice: (totalPrice + item.price)
      }
    }
  }
}