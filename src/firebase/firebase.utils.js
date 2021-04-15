import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwN3g860-lFn6JlQhmYcPyCN0zs7AtDxA",
  authDomain: "crwn-db-95dd2.firebaseapp.com",
  projectId: "crwn-db-95dd2",
  storageBucket: "crwn-db-95dd2.appspot.com",
  messagingSenderId: "939160940859",
  appId: "1:939160940859:web:53c4d1061f59a7ab05871e",
  measurementId: "G-18EP2WNMN4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
