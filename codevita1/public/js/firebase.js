
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseApp = initializeApp({ /* config */ });


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_GCYjMK-oxtelp9C_eQRFR2HMF7zfxu8",
  authDomain: "blogging-website-2cfae.firebaseapp.com",
  projectId: "blogging-website-2cfae",
  storageBucket: "blogging-website-2cfae.appspot.com",
  messagingSenderId: "106893172293",
  appId: "1:106893172293:web:b8fb2608be673092d44d2c"
};
 const app = initializeApp(firebaseConfig);
 let db = firebase.firestore();
 let auth = firebase.auth();