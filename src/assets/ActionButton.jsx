const ActionButton = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "py-2 rounded-xl  transition duration-200 ease-in-out";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant] || ""} ${className}`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
