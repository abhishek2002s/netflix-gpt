// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH3JPjCKHrHawtDNQX8pqAnl3dchiDlSQ",
  authDomain: "netflix-gpt-67edd.firebaseapp.com",
  projectId: "netflix-gpt-67edd",
  storageBucket: "netflix-gpt-67edd.appspot.com",
  messagingSenderId: "1062859619737",
  appId: "1:1062859619737:web:e082926ad64ddeee4c2708",
  measurementId: "G-4EVFG8PS8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();