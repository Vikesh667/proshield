import { FaTrash } from "react-icons/fa";
import { useMessages } from "./MessageProvider";
import { toast } from "react-toastify";

const Messages = () => {
  const { messages,setMessages} = useMessages();
const deleteMessage=async(id)=>{
 try {
   const response=await fetch(`https://proshieldcybersecurity.onrender.com/api/message-delete/${id}`,{
    method:"DELETE"
   })
    const data=await response.json()
    if(response.ok){
      toast.success(data.message)
      const updatedMessage=messages.filter((item)=>item._id!==id)
      setMessages(updatedMessage)
    }else{
      toast.error(data.message)
    }
 } catch (error) {
    toast(error)
 }
}
  return (
    <div className="p-5 bg-gray-300 w-full min-h-screen">
      <h2 className="text-xl font-bold mb-3">Messages</h2>
      {messages.map((msg) => (
        <div key={msg._id} className="bg-white p-4 rounded shadow mb-2 flex justify-between">
          <div>
            <p className="text-xl text-[#010535]">
              <strong>Name:</strong> {`${msg.firstName} ${msg.lastName}`}
            </p>
            <p className="text-md text-[#010535]">
              <strong>Email:</strong> {msg.email}
            </p>
            <p className="text-sm text-[#010535] opacity-80">
              <strong>Message:</strong> {msg.message}
            </p>
          </div>
          <button
          onClick={()=>deleteMessage(msg._id)}
          className="text-2xl text-red-500 cursor-pointer hover:scale-70 transition-all duration-300"><FaTrash/></button>
        </div>
      ))}
    </div>
  );
};

export default Messages;
