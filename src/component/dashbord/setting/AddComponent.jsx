import { useState } from "react";
import { motion } from "framer-motion";
const AddComponent = ({ setAddShow }) => {
  const [text, setText] = useState("");
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");

  const createsPopPosition = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://proshieldcybersecurity.onrender.com/api/popup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          position: { top: top, left: left, text: text },
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full h-full bg-gray-700 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <form
        onSubmit={createsPopPosition}
        className="bg-gray-600 flex flex-col lg:w-1/3 h-auto gap-6 p-5 rounded-xl shadow-lg"
      >
        <h1 className="text-white opacity-85 text-center text-xl font-semibold">
          Add New Pop-Up
        </h1>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Display your message"
          className="w-full px-5 py-3 border border-white outline-none rounded-xl"
        />

        <div className="mt-4">
          <label htmlFor="top-select" className="text-white mb-1 block">
            Position Top
          </label>
          <select
            id="top-select"
            value={top}
            onChange={(e) => setTop(Number(e.target.value))}
            className="w-full py-3 px-5 rounded-xl outline-none border border-white bg-gray-400"
          >
            <option value={22}>22</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="left-select" className="text-white mb-1 block">
            Position Left
          </label>
          <select
            id="left-select"
            value={left}
            onChange={(e) => setLeft(Number(e.target.value))}
            className="w-full py-3 px-5 rounded-xl outline-none border border-white bg-gray-400"
          >
            <option value={22}>22</option>
            <option value={35}>35</option>
            <option value={70}>70</option>
          </select>
        </div>

        <div className="flex gap-5 justify-center">
          <button
            type="submit"
            className="mt-6 py-3 px-5 bg-green-400 rounded-xl hover:bg-green-500 transition duration-200"
          >
            Add Pop-Up
          </button>
          <button
            onClick={() => setAddShow(false)}
            type="submit"
            className="mt-6 py-3 px-5  rounded-xl transition duration-200 bg-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};
export default AddComponent;
