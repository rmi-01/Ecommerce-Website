import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//Initializing firebase
const config = {
  apiKey: "AIzaSyCw-w3cMinGr3yWD4Z_trXsyy8ql82TUO8",
  authDomain: "e-commerce-website-115ff.firebaseapp.com",
  databaseURL: "https://e-commerce-website-115ff.firebaseio.com",
  projectId: "e-commerce-website-115ff",
  storageBucket: "e-commerce-website-115ff.appspot.com",
  messagingSenderId: "324315957824",
  appId: "1:324315957824:web:7c8575deb886d21efc6da5",
  measurementId: "G-7XN9T3S5SM",
};
firebase.initializeApp(config);

//Export
export const firestore = firebase.firestore();
export const auth = firebase.auth();

//Integrating OAuth for Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
