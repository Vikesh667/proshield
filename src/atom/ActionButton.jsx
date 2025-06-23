import { GoArrowRight } from "react-icons/go";

const ActionButton = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  icon = null,
}) => {
  const baseClasses =
    "relative overflow-hidden px-6 py-2 cursor-pointer font-semibold transition duration-200 ease-in-out inline-flex items-center gap-2";

  const variants = {
    primary: "text-white bg-gray-800",
    secondary: "text-white bg-gray-600 hover:bg-gray-700",
    danger: "text-white bg-red-600 hover:bg-red-700",
    success: "text-white bg-green-600 hover:bg-green-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const hasSlideEffect = variant === "primary";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant] || ""} ${className}`}
    >
      {/* Animated background layer */}
     {hasSlideEffect && (
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-blue-800 to-blue-400
      translate-x-[-100%] hover:translate-x-full
      transition-transform duration-500 ease-in-out
      z-0
      rounded-inherit
    "
  ></span>
)}
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {text}
        {icon}
      </span>
    </button>
  );
};

export default ActionButton;
