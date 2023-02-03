import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APIKEY,
//     authDomain: import.meta.env.VITE_AUTHDOMAIN,
//     projectId: import.meta.env.VITE_PROJECTID,
//     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//     appId: import.meta.env.VITE_APPID,
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_-1AySgRjff8k9kjO96He0mMtE92601M",
  authDomain: "berusaha-cool.firebaseapp.com",
  projectId: "berusaha-cool",
  storageBucket: "berusaha-cool.appspot.com",
  messagingSenderId: "911365130506",
  appId: "1:911365130506:web:fda2acfd62195bee7092f3",
  measurementId: "G-P8YT3EVMV2",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
