import { createContext } from "react";
import dataBase from "./db";

export const WishListContext = createContext(null);
export const WishlistDispatchContext = createContext(null);

export function wishlistReducer(list, action) {
  switch (action.type) {
    case 'added': {
      const [newItem] = dataBase.filter((item,index) => item.n == action.id)
      return [...list, newItem]
    }
    case 'remove': {
      return list.filter((item,index) => item.n != action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}