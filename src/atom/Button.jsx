import { GoArrowRight } from "react-icons/go";

const Button = ({ text, type = "button" }) => {
  return (
    <button
      type={type}
      className="px-9 py-3  text-white text-lg font-semibold rounded-full relative group
    bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-600
    bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500 ease-in-out"
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <GoArrowRight
          className="
          bg-white text-blue-500 rounded-full p-1 
          transition-all duration-500 ease-in-out
          group-hover:translate-x-1
        "
        />
      </span>
    </button>
  );
};

export default Button;
