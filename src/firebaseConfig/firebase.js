// src/firebaseConfig/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration (from Step 2)
const firebaseConfig = {
    apiKey: "AIzaSyAW-eirEDNlU15eJ0xY3lLU9IKHBEw3yIU",
    authDomain: "photofolio-4fe0f.firebaseapp.com",
    projectId: "photofolio-4fe0f",
    storageBucket: "photofolio-4fe0f.firebasestorage.app",
    messagingSenderId: "577069827306",
    appId: "1:577069827306:web:634cc00271d397be52c393"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
