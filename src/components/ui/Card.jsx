import React from "react";
import { motion } from "framer-motion";

export function Card({
  children,
  className = "",
  hover = true,
  onClick,
  interactive = false,
  gradient = false,
  ...props
}) {
  const Component = interactive || onClick ? motion.div : "div";
  const motionProps = interactive || onClick
    ? {
        whileHover: { y: -3, transition: { duration: 0.2 } },
        whileTap: { scale: 0.99 }
      }
    : {};

  return (
    <Component
      onClick={onClick}
      className={`
        bg-white rounded-2xl border border-orange-100/80 shadow-soft
        ${hover && !interactive ? "hover:shadow-elevated transition-shadow duration-200" : ""}
        ${interactive || onClick ? "cursor-pointer" : ""}
        ${gradient ? "bg-gradient-to-br from-white via-orange-50/20 to-white" : ""}
        ${className}
      `}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`p-4 sm:p-5 border-b border-orange-50 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = "" }) {
  return <div className={`p-4 sm:p-5 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-4 sm:p-5 bg-orange-50/30 rounded-b-2xl border-t border-orange-50 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
