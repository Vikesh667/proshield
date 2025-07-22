// context/MessageContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../../atom/Socket";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 🔌 Connect the socket when component mounts
    if (!socket.connected) {
      socket.connect();
    }

    // 📨 Fetch initial messages
    const getMessages = async () => {
      try {
        const res = await fetch("https://proshieldcybersecurity.onrender.com/api/get-message");
        const data = await res.json();
        setMessages(data.message || []);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    getMessages();

    // 📡 Listen to incoming real-time messages
    socket.on("message", (data) => {
      console.log("Socket message received:", data);
      if (data) {
        setMessages((prev) => [...prev, data]);
        console.log(data)
      }
    });

    // 🧹 Clean up listener and disconnect on unmount
    return () => {
      socket.off("message");
      socket.disconnect(); // optional: if you want to fully disconnect
    };
  }, []);

  return (
    <MessageContext.Provider value={{ messages,setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);
