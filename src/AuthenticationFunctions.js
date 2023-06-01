// Get auth //
import { auth } from './Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

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

export const handleLogIn = (ev, user, password, dispatch) => {
  ev.preventDefault()
  // Firebase function to sig In //
  signInWithEmailAndPassword(auth, user, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // Dispatch to save the user state //
    dispatch({type: 'LOG-IN', userEmail: user.email})
    console.log(user.email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export const handleSignOut = (dispatch) => {
  // Use signOut function from Firebase //
  signOut(auth)
    .then(() => {
      // Call the userDispatch to change the state //
      dispatch({type: 'SIGN-OUT'})
      console.log('Sign Out succesful')
    })
    .catch((error) => console.log('Something happend' + error))
}

export const handleUserState = (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      dispatch({type: 'GET-USER', userEmail: user.email})
      const uid = user.uid;
      console.log(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}