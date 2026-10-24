import React from "react";
import { motion } from "framer-motion";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 shadow-md",
    xl: "px-8 py-4 text-lg gap-3 shadow-lg"
  };

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 focus:ring-primary shadow-soft hover:shadow-glow-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary-700 active:bg-secondary-800 focus:ring-secondary shadow-soft",
    accent:
      "bg-accent text-dark hover:bg-accent-600 active:bg-accent-700 focus:ring-accent shadow-soft",
    outline:
      "border-2 border-primary text-primary hover:bg-primary-50 active:bg-primary-100 focus:ring-primary",
    outlineSecondary:
      "border-2 border-secondary text-secondary hover:bg-secondary-50 active:bg-secondary-100 focus:ring-secondary",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500 shadow-soft",
    ghost:
      "text-textDark hover:bg-orange-50 active:bg-orange-100 focus:ring-primary"
  };

  return (
    <motion.button
      type={type}
      whileTap={disabled || loading ? {} : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses}
        ${sizeClasses[size] || sizeClasses.md}
        ${variantClasses[variant] || variantClasses.primary}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Processing...</span>
        </span>
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon className="w-5 h-5 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === "right" && <Icon className="w-5 h-5 shrink-0" />}
        </>
      )}
    </motion.button>
  );
}
export default Button;
