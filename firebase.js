// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ZTSAhxhIYcuv-C_-MJZB8eyom3OuZzE",
  authDomain: "janjibdev-d524d.firebaseapp.com",
  projectId: "janjibdev-d524d",
  storageBucket: "janjibdev-d524d.appspot.com",
  messagingSenderId: "620076226460",
  appId: "1:620076226460:web:e2c1989c67261602475a59",
  measurementId: "G-ZG9GG9CRV7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
