// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rishavsharmablog.firebaseapp.com",
  projectId: "rishavsharmablog",
  storageBucket: "rishavsharmablog.appspot.com",
  messagingSenderId: "111735041313",
  appId: "1:111735041313:web:b0f4c7c01e8256213a6260",
  measurementId: "G-30TML58RPW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
