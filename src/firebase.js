import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";  // Realtime Database import
import { getAuth } from "firebase/auth";  // Import for Authentication

// Your Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDFQ_AgD7CR46bedd042WnI9HmrGjwoTbA",
  authDomain: "rana-chad-app.firebaseapp.com",
  projectId: "rana-chad-app",
  storageBucket: "rana-chad-app.firebasestorage.app",
  messagingSenderId: "82995865254",
  appId: "1:82995865254:web:f5a76b0197315f3a1c7667",
  measurementId: "G-S6R4R90L84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);  // Initialize Firebase Authentication

// Export all the services you're using
export { app, analytics, db, auth };  // Export auth too
