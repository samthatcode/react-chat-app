// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUua2FMU2fsZESYIWxpqNjxZcUK0-qEX4",
  authDomain: "react-chat-app-3af84.firebaseapp.com",
  projectId: "react-chat-app-3af84",
  storageBucket: "react-chat-app-3af84.appspot.com",
  messagingSenderId: "801819508534",
  appId: "1:801819508534:web:6d4c71e8d9ba5f5f49bd97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);