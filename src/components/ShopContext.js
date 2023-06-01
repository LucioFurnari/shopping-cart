import { createContext } from "react";
// import dataBase from "./db";

// Wishlist context //
export const WishListContext = createContext(null);
export const WishlistDispatchContext = createContext(null);

// Cart context //
export const cartContext = createContext(null);
export const cartDispatchContext = createContext(null);

// Shop context //
export const shopContext = createContext(null);
export const filterContext = createContext(null);
export const shopDispatchContext = createContext(null);

// User context //
export const userContext = createContext(null);
export const userDispatchContext = createContext(null);

// User Reducer //

export function userReducer(userInfo, action) {
  switch(action.type) {
    case 'LOG-IN': {
      return {...userInfo, isSigned: true, email: action.userEmail}
    }
    case 'GET-USER': {
      return {...userInfo, isSigned: true, email: action.userEmail}
    }
    case 'SIGN-OUT': {
      return {...userInfo, isSigned: false}
    }
  }
}

// Shop Reducer //

export function shopReducer(shopList, action) {
  const {shop, filter} = shopList;
  switch (action.type) {
    case 'CREATE-SHOP-LIST': {
      return {...shopList, shop: action.data, filter: action.data}
    }
    case 'FILTER-SHOP': {
      if(!action.name == '') {
        const inputValue = action.name.trim().replace('-','');
        const filterList = shop.filter((item) => item.name.toLowerCase().replace('-','').includes(inputValue))
        return {...shopList, filter: filterList};
      } else {
        return {...shopList, filter: shop};
      }
    }
    case 'SORT_Feature': {
      return {...shopList, filter: shop}
    }
    case 'SORT_A-Z': {
      const filterList = [].concat(filter).sort((a,b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return (nameA > nameB) ? 1 : ((nameB > nameA) ? -1 : 0)
      })
      return {...shopList, filter: filterList}
    }
    case 'SORT_Z-A': {
      const filterList = [].concat(filter).sort((a,b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return (nameA < nameB) ? 1 : ((nameB > nameA) ? -1 : 0)
      })
      return {...shopList, filter: filterList}
    }
    case 'SORT_Price-low-to-high': {
      const filterList = [].concat(filter).sort((a,b) => {
        const priceA = a.price;
        const priceB = b.price;
        return priceA - priceB
      })
      return {...shopList, filter: filterList}
    }
    case 'SORT_Price-high-to-low': {
      const filterList = [].concat(filter).sort((a,b) => {
        const priceA = a.price;
        const priceB = b.price;
        return priceB - priceA
      })
      return {...shopList, filter: filterList}
    }
  }
}


// Wishlist Reducer //
export function wishlistReducer(list, action) {
  switch (action.type) {
    case 'added': {
      let [newItem] = action.data;
      // let [newItem] = dataBase.filter((item,index) => item.id == action.id)
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

// Cart Reducer //

export function cartSectionReducer(cartObj, action) {
  const {cart, totalPrice, cartAmount} = cartObj;
  switch (action.type) {
    case 'ADD-TO-CART': {
      // Get Item from data base //
      const [newItem] = action.data;
      // const [newItem] = dataBase.filter((item) => item.id == action.id);

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