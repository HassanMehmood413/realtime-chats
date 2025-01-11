import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import ChatComponent from "./ChatComponent";
import { auth } from "./firebase"; // Import initialized Firebase services

const App = () => {
  const [user, setUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  return (
    <div>
      {!user ? (
        <div>
          <SignupComponent setUser={setUser} />
          <LoginComponent setUser={setUser} />
        </div>
      ) : (
        <ChatComponent user={user} />
      )}
    </div>
  );
};

export default App;
