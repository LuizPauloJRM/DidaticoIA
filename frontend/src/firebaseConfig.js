// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaKVET9qetu3uhEDzxUHgt_6bJ11VcrKo",
  authDomain: "didatico-ia.firebaseapp.com",
  projectId: "didatico-ia",
  storageBucket: "didatico-ia.firebasestorage.app",
  messagingSenderId: "956086668786",
  appId: "1:956086668786:web:b8e5e6b647607f9785ef6b",
  measurementId: "G-EET4KVC3GB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
// Initialize Authentication
const auth = getAuth(app); // Objeto auth é criado

// Export the auth object
export { auth, db };
