import { useEffect, useState } from "react";
import { socket } from "../../atom/Socket";

const Message = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const getMessage = async () => {
      const response = await fetch("http://localhost:4000/api/get-message");
      const data = await response.json();
      setMessage(data.message);
      localStorage.setItem("length", data.message.length);
    };
    getMessage();
    if (!socket.connected) {
      socket.connect();
    }

    socket.on("message", (data) => {
      console.log("Real-time update:", data);
      setMessage(data.message);
      localStorage.setItem("length", data.message.length);
    });

    return () => {
      socket.off("notification");
    };
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-300 py-5 px-5 flex flex-col gap-5">
      {message.map((item) => (
        <div className="w-full h-auto bg-white p-5 flex flex-col gap-2 rounded-lg">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML0gExaohZHdZW3609F12nUmVc14WXYNx_w&s"
          />
          <h1 className="text-md text-[#010535]">{`${item.firstName} ${item.lastName}`}</h1>
          <h1 className="text-md text-gray-500/90">{item.email}</h1>
          <p className="text-md text-gray-500/90">{item.message}</p>
        </div>
      ))}
    </div>
  );
};
export default Message;
