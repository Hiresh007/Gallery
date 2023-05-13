import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage}  from 'firebase/storage'
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "gallery-68910.firebaseapp.com",
  projectId: "gallery-68910",
  storageBucket: "gallery-68910.appspot.com",
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const storage = getStorage()
