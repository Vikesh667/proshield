// socket.js
import { io } from "socket.io-client";

// ✅ Create a reusable, single socket instance
export const socket = io("http://localhost:4000", {
  autoConnect: false,
});
