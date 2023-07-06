// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from"firebase/storage"
import { getFirestore } from "@firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfdUwKaqmXAPvsgKMfwu_pnks6t1SjMUw",
  authDomain: "mehfooz-ghar-6b539.firebaseapp.com",
  projectId: "mehfooz-ghar-6b539",
  storageBucket: "mehfooz-ghar-6b539.appspot.com",
  messagingSenderId: "780208370708",
  appId: "1:780208370708:web:defb0eb9b418fd3f342301",
  measurementId: "G-4Y7K4GKTHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);