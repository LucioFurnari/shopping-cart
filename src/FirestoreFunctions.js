import { db } from "./Firebase"
import { doc, collection, getDoc, getDocs, setDoc, updateDoc, query, where, arrayUnion, arrayRemove, onSnapshot } from "firebase/firestore"

// Set data to the carts collection  WIP //
export const setItemToCart = async (userId, productId, itemQuantity) => {
  // const [product] = item
  const cartRef = doc(db, 'carts', userId)
  const cartSnap = await getDoc(cartRef)

  if (cartSnap.exists()) {
    // Detect if the array have or not a listed item //
    const hasItem = cartSnap.data().cartItems.some((item) => item.id === productId)
    if (hasItem) {
      // Add conditional to increase or decrease the amount //
      if(itemQuantity > 0) {
        // Get a copy of the array of cart list //
        const [copyArr] = cartSnap.data().cartItems.filter((item) => item.id === productId)
        const itemQuantity = copyArr.quantity

        // First Remove the exact array and add a new one, firestore need the exact object to be removed and updated //
        await updateDoc(cartRef, {
          cartItems: arrayRemove({id: productId, quantity: itemQuantity}),
        })
        await updateDoc(cartRef, {
          cartItems: arrayUnion({id: productId, quantity: itemQuantity + 1}),
      })
      } else {
        // Get a copy of the array of cart list //
        const [copyArr] = cartSnap.data().cartItems.filter((item) => item.id === productId)
        const itemQuantity = copyArr.quantity

        // First Remove the exact array and add a new one, firestore need the exact object to be removed and updated //
        await updateDoc(cartRef, {
          cartItems: arrayRemove({id: productId, quantity: itemQuantity}),
        })
        await updateDoc(cartRef, {
        cartItems: arrayUnion({id: productId, quantity: itemQuantity - 1}),
      })
    }
    } else {
      // If the item is not in the array, add a new one // 
      await updateDoc(cartRef, {
        cartItems: arrayUnion({id: productId, quantity: itemQuantity})
      })
    }
  } else {
    await setDoc(cartRef, {
      cartItems: [{id: productId, quantity: itemQuantity}],
    })
  }
  return true;
}

// Get data form the carts collection WIP //
export const getUserCart = async (userId) => {
  const productsList = collection(db, 'products');
  const cartRef = doc(db, 'carts', userId)
  const cartSnap = await getDoc(cartRef)
  
  // Create a query
  const userCartList = [];
  let totalPrice = 0;
  let totalQuantity = 0;


  const requestList = cartSnap.data().cartItems.map( async (item) => {
    const queryProduct = query(productsList, where('id', '==', item.id))
    // return object with product data and quantity // 
    return {itemData: await getDocs(queryProduct), quantity: item.quantity}
  })

  const querySnapshots = await Promise.all(requestList)
  querySnapshots.forEach((querySnapshot) => {
    querySnapshot.itemData.forEach((doc) => {
      userCartList.push({...doc.data(), quantity: querySnapshot.quantity});

      totalPrice += doc.data().price;
      totalQuantity += querySnapshot.quantity;
    });
  });

  return ({userCartList, totalPrice, totalQuantity})
}

export const getUpdateData = async (userId) => {
  const productsList = collection(db, 'products');
  const cartRef = doc(db, 'carts', userId);
  const userCartList = [];

  onSnapshot(cartRef, async (doc) =>  {
    const requestList = doc.data().cartItems.map( async (item) => {
      const queryProduct = query(productsList, where('id', '==', item.id))
      // return object with product data and quantity // 
      return {itemData: await getDocs(queryProduct), quantity: item.quantity}
    })
  
    const querySnapshots = await Promise.all(requestList)
    querySnapshots.forEach((querySnapshot) => {
      querySnapshot.itemData.forEach((doc) => {
        userCartList.push({...doc.data(), quantity: querySnapshot.quantity});
      });
    });
  })

  return userCartList;
}