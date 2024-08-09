import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--estate-ec015.firebaseapp.com",
  projectId: "mern--estate-ec015",
  storageBucket: "mern--estate-ec015.appspot.com",
  messagingSenderId: "193812655189",
  appId: "1:193812655189:web:412f3a313192c3f57c38dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);