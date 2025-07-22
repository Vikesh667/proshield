// context/MessageContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../../atom/Socket";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

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

    return () => {
      socket.off("message");
      socket.disconnect(); 
    };
  }, []);

  return (
    <MessageContext.Provider value={{ messages,setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);
