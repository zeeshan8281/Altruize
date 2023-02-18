import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4X8682vKrY7pPWnVI_qWm1VVkedMReUo",
  authDomain: "altruize-593f2.firebaseapp.com",
  projectId: "altruize-593f2",
  storageBucket: "altruize-593f2.appspot.com",
  messagingSenderId: "374925455918",
  appId: "1:374925455918:web:5991b6d113e2128db765bf",
  measurementId: "G-JGTDTPJWCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);