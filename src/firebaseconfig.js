// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import "./App"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoTYW2goGiUeJAPCv2elGFS4p0yDC22Gk",
  authDomain: "restaurant-management-7897f.firebaseapp.com",
  projectId: "restaurant-management-7897f",
  storageBucket: "restaurant-management-7897f.appspot.com",
  messagingSenderId: "179504958650",
  appId: "1:179504958650:web:80007ed079c1ecc76cc683",
  measurementId: "G-HVCW62EEW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const auth;
// const config = firebaseConfig;
// firebase.initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);
// export {firebaseConfig};
