// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBH44c3VNBV_3NE01Uf3h91XoT4Lw2GPPI",
  authDomain: "clone-8858c.firebaseapp.com",
  projectId: "clone-8858c",
  storageBucket: "clone-8858c.appspot.com",
  messagingSenderId: "1039043246235",
  appId: "1:1039043246235:web:424ada2dc0790e4af6ee3e",
  measurementId: "G-CB4YZD0NY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();