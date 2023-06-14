import { db } from "./Firebase"
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"

// Set data to the carts collection  WIP //
export const setItemToCart = async (uid, item, quantity) => {
  const [product] = item
  const cartRef = doc(db, 'carts', uid)
  const cartSnap = await getDoc(cartRef)

  if (cartSnap.exists()) {
    const hasItem = cartSnap.data().cartItems.some((item) => item.id === product.id)
    if (hasItem) {
      const [copyArr] = cartSnap.data().cartItems.filter((item) => item.id === product.id)
      const quantity = copyArr.quantity

      await updateDoc(cartRef, {
        cartItems: arrayRemove({id: product.id, quantity: quantity}),
      })
      await updateDoc(cartRef, {
        cartItems: arrayUnion({id: product.id, quantity: quantity + 1}),
      })
    } else {
      await updateDoc(cartRef, {
        cartItems: arrayUnion({id: product.id, quantity: quantity})
      })
    }
  } else {
    await setDoc(cartRef, {
      cartItems: [{id: product.id, quantity: quantity}],
    })
  }
}