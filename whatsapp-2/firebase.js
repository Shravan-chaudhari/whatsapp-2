import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUVm1PxzM1odZt3pnVE9LO8mOXiLYEZR8",
  authDomain: "whatsapp-2-8954d.firebaseapp.com",
  projectId: "whatsapp-2-8954d",
  storageBucket: "whatsapp-2-8954d.appspot.com",
  messagingSenderId: "151670406380",
  appId: "1:151670406380:web:9e31523d5d1ca28bbb39c9",
  measurementId: "G-WS1RVE9LTC",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
