// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrCrOrnUDzF2-KrYSSa6vuofM9x8sGYP4",
  authDomain: "globul-8c09e.firebaseapp.com",
  projectId: "globul-8c09e",
  storageBucket: "globul-8c09e.appspot.com",
  messagingSenderId: "89651239354",
  appId: "1:89651239354:web:b2b6462b98728107882583",
  measurementId: "G-FR0HGDVEQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize firestore 
export const db = getFirestore(app)