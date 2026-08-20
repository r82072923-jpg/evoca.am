import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUu6qkc5S36HTc8rRUf9DqUFdllLz50xE",
  authDomain: "evoca-754b1.firebaseapp.com",
  projectId: "evoca-754b1",
  storageBucket: "evoca-754b1.firebasestorage.app",
  messagingSenderId: "28285314062",
  appId: "1:28285314062:web:efb25c04b4ad9da876c85f",
  measurementId: "G-ZGMN35L06V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();