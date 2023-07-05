// Get auth //
import { auth } from './Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth"

// Get data base //
import { db } from './Firebase';
import { setDoc, getDoc, doc } from 'firebase/firestore';

export async function createUser(email, password, firstName, lastName) {
  createUserWithEmailAndPassword(auth, email, password )
  .then((userCredential) => {
    const user = userCredential.user;
    setDoc(doc(db, 'users', user.uid), {
      email: email,
      firstName: firstName,
      lastName: lastName,
      uid: user.uid,
    })
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
    getUserData(user)
    .then(data => dispatch({type: 'LOG-IN', userData: data}))
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
      getUserData(user)
      .then(data => dispatch({type: 'GET-USER', userData: data}))

      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

const getUserData = async (user) => {
  const data = await getDoc(doc(db, 'users', user.uid))
  return data.data()
}

export const loginDemoUser = (dispatch) => {
  signInWithEmailAndPassword(auth, 'demouser@email.com', '741123')
  .then((userCredential) => {
    // Signed in 
    console.log('login')
    const user = userCredential.user;
    // Dispatch to save the user state //
    getUserData(user)
    .then(data => dispatch({type: 'LOG-IN', userData: data}))
    // ...
  })
  .catch((error) => {
    console.log('error')
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}