import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function LoadingSpinner({
  message = "Loading...",
  subMessage = "Connecting to Chowk Network...",
  size = "md"
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="relative w-16 h-16 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-orange-200 border-t-primary"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </div>
      </div>
      <p className="text-base font-bold text-textDark">{message}</p>
      {subMessage && (
        <p className="text-xs text-textMuted mt-1 max-w-xs">{subMessage}</p>
      )}
    </div>
  );
}

export default LoadingSpinner;
