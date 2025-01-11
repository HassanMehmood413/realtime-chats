import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db, auth } from "./firebase"; 
// Import initialized Firebase services

const ChatComponent = ({ user }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Listen for messages in real-time
  useEffect(() => {
    const messagesRef = ref(db, "messages/");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList = data ? Object.values(data) : [];
      setMessages(messagesList);
    });
  }, []);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const messagesRef = ref(db, "messages/");
      await push(messagesRef, {
        user: user.uid,
        text: message,
        timestamp: Date.now(),
      });
      setMessage(""); // Clear message input after sending
    }
  };

  return (
    <div>
      <div>
        <h3>Welcome, {user.email}</h3>
        <div>
          {messages.map((msg, index) => (
            <div key={index}>
              <strong>{msg.user === user.uid ? "You" : "Someone"}:</strong>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      ></textarea>
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
