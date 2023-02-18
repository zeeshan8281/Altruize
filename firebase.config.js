// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);