import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MessageProvider } from "./component/dashbord/MessageProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageProvider>
      <App />
      <ToastContainer position="top-right" autoClose={3000}/>
    </MessageProvider>
  </StrictMode>
);
