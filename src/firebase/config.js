import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: null,
  authDomain: null,
  projectId: null,
  storageBucket: null,
  messagingSenderId: null,
  appId: null
}; // Firebase information removed on GitHub

initializeApp(firebaseConfig);
const db = getFirestore();

export { db };