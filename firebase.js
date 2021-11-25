// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnofOjc2U4CM_ijTfk6YUCwjQs6u4bUr0",
  authDomain: "tinder-react-a998e.firebaseapp.com",
  projectId: "tinder-react-a998e",
  storageBucket: "tinder-react-a998e.appspot.com",
  messagingSenderId: "1050110276290",
  appId: "1:1050110276290:web:edcfde38b7b1cc5d9e415b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
