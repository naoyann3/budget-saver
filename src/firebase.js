import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5B5rjAfDyeX3IA33SkWY5yPDi4p0McTw",
    authDomain: "budget-saver-50bfc.firebaseapp.com",
    projectId: "budget-saver-50bfc",
    storageBucket: "budget-saver-50bfc.firebasestorage.app",
    messagingSenderId: "32478608048",
    appId: "1:32478608048:web:53bedb0ebe2630c3525975",
    measurementId: "G-3RHRQFK9L8"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);