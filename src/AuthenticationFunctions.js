// Get auth //
import { auth } from './Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export async function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password )
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}

export async function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}