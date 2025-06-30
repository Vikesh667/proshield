const ActionButton = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  icon = null,
}) => {
  const baseClasses =
    "relative overflow-hidden px-6 py-2 cursor-pointer font-semibold transition duration-200 ease-in-out inline-flex items-center justify-center gap-2 rounded-full";

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
      {/* Animated gradient background */}
      {hasSlideEffect && (
        <span
          className="absolute inset-0 z-0
          bg-gradient-to-r from-blue-800 to-blue-400
          translate-x-[-100%]
          group-hover:translate-x-0
          transition-transform duration-500 ease-in-out
          rounded-full slideInRight"
        ></span>
      )}

      {/* Button content */}
      <span className="relative z-10">{text} {icon}</span>
    </button>
  );
};

export default ActionButton;
