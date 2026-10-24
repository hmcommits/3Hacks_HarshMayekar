import React from "react";

export function Badge({
  children,
  variant = "primary",
  size = "md",
  dot = false,
  className = ""
}) {
  const variantStyles = {
    primary: "bg-orange-100 text-primary-700 border-orange-200",
    secondary: "bg-teal-50 text-secondary-700 border-teal-200",
    accent: "bg-amber-100 text-amber-900 border-amber-300",
    success: "bg-emerald-100 text-emerald-800 border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    danger: "bg-red-100 text-red-700 border-red-200",
    neutral: "bg-gray-100 text-gray-700 border-gray-200"
  };

  const dotColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    neutral: "bg-gray-400"
  };

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1.5 font-semibold"
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full font-medium border
        ${variantStyles[variant] || variantStyles.primary}
        ${sizeStyles[size] || sizeStyles.md}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || "bg-current"} animate-pulse`}
        />
      )}
      {children}
    </span>
  );
}
export default Badge;
