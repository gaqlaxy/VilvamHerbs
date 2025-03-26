import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ4m3bhuhWwJ6emOH-wzXqppAJQx972xs",
    authDomain: "vilvamherbs-42691.firebaseapp.com",
    projectId: "vilvamherbs-42691",
    storageBucket: "vilvamherbs-42691.firebasestorage.app",
    messagingSenderId: "733639918476",
    appId: "1:733639918476:web:7188249864284febe04ca9",
    measurementId: "G-CJLJ5HRL5S"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };