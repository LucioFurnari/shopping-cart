import { db } from "./Firebase"
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"

// Set data to the carts collection  WIP //
export const setItemToCart = async (userId, item, itemQuantity) => {
  const [product] = item
  const cartRef = doc(db, 'carts', userId)
  const cartSnap = await getDoc(cartRef)

  if (cartSnap.exists()) {
    // Detect if the array have or not a listed item //
    const hasItem = cartSnap.data().cartItems.some((item) => item.id === product.id)
    if (hasItem) {
      // Get a copy of the array of cart list //
      const [copyArr] = cartSnap.data().cartItems.filter((item) => item.id === product.id)
      const itemQuantity = copyArr.quantity

      // First Remove the exact array and add a new one, firestore need the exact object to be removed and updated //
      await updateDoc(cartRef, {
        cartItems: arrayRemove({id: product.id, quantity: itemQuantity}),
      })
      await updateDoc(cartRef, {
        cartItems: arrayUnion({id: product.id, quantity: itemQuantity + 1}),
      })
    } else {
      // If the item is not in the array, add a new one // 
      await updateDoc(cartRef, {
        cartItems: arrayUnion({id: product.id, quantity: itemQuantity})
      })
    }
  } else {
    await setDoc(cartRef, {
      cartItems: [{id: product.id, quantity: itemQuantity}],
    })
  }
}