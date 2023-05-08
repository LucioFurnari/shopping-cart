import { createContext } from "react";
import dataBase from "./db";

export const WishListContext = createContext(null);
export const WishlistDispatchContext = createContext(null);

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