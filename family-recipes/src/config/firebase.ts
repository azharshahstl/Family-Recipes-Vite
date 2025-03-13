import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyAbkesIz-taYCJDhaDfjO-9hoGmW65jc",
  authDomain: "family-recipes-cb537.firebaseapp.com",
  projectId: "family-recipes-cb537",
  storageBucket: "family-recipes-cb537.firebasestorage.app",
  messagingSenderId: "789151907869",
  appId: "1:789151907869:web:66646de565df1fd2d9c6f4",
  measurementId: "G-4F4D2TQP0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const db = getFirestore(app);
