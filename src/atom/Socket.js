// socket.js
import { io } from "socket.io-client";

// ✅ Create a reusable, single socket instance
export const socket = io("wss://proshieldcybersecurity.onrender.com", {
  autoConnect: false,
});
