// socket.js (frontend)
import { io } from "socket.io-client";

export const socket = io("https://proshieldcybersecurity.onrender.com", {
  transports: ["polling"], // 👈 force polling fallback
  autoConnect: false,
});
