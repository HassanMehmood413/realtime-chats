import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";  // Realtime Database import
import { getAuth } from "firebase/auth";  // Import for Authentication

// Your Firebase configuration (from Firebase Console)
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);  // Initialize Firebase Authentication

// Export all the services you're using
export { app, analytics, db, auth };  // Export auth too
