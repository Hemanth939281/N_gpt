// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1WFz-sr8GtbXa18ECXxDuNKF8HHoJ8E8",
    authDomain: "netflix-cff9b.firebaseapp.com",
    projectId: "netflix-cff9b",
    storageBucket: "netflix-cff9b.firebasestorage.app",
    messagingSenderId: "255981713432",
    appId: "1:255981713432:web:68c65a4858db364b7b2b6d",
    measurementId: "G-GWCS4HJ74Z",
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);