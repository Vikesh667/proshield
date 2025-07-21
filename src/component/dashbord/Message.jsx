import { useMessages } from "./MessageProvider";

const Messages = () => {
  const { messages } = useMessages();

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Messages</h2>
      {messages.map((msg, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow mb-2">
          <p><strong>Name:</strong> {`${msg.firstName} ${msg.lastName}`}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Messages;
