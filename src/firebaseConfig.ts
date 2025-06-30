// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkX4MPB-LJ83RLLx12252BnHr50axgyqI",
  authDomain: "find-it1.firebaseapp.com",
  projectId: "find-it1",
  storageBucket: "find-it1.firebasestorage.app",
  messagingSenderId: "811506808717",
  appId: "1:811506808717:web:0f5da7bfb8d60775932fc4",
  measurementId: "G-D30SDG2RJY"
};

const app = initializeApp(firebaseConfig);

// ✅ These are what you'll use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
