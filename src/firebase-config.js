// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBffUYBtldrS8r_QQDr5X7jxBfksUjUbfY",
  authDomain: "crudreactapp-1921a.firebaseapp.com",
  projectId: "crudreactapp-1921a",
  storageBucket: "crudreactapp-1921a.appspot.com",
  messagingSenderId: "1066114135141",
  appId: "1:1066114135141:web:bb8f3ecda1cb3f542e428c",
  measurementId: "G-9Q6XQYZZ9K"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)