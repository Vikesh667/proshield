// context/MessageContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../../atom/Socket";


const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch("https://proshieldcybersecurity.onrender.com/api/get-message");
      const data = await res.json();
      setMessages(data.message || []);
    };

    getMessages();
    socket.on("message", (data) => {
      if (data.newMessage) {
        setMessages((prev) => [...prev, data.newMessage]);
      }
    });

    return () => socket.off("message");
  }, []);

  return (
    <MessageContext.Provider value={{ messages }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);
