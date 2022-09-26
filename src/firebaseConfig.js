// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF7R19mP_q_VPKA-1h9Vmb5S6fOl9CLM4",
  authDomain: "juana-b5ed8.firebaseapp.com",
  projectId: "juana-b5ed8",
  storageBucket: "juana-b5ed8.appspot.com",
  messagingSenderId: "842861466740",
  appId: "1:842861466740:web:b1ccdebc993003c4caed21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



