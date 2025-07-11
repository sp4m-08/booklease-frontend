import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PrimaryButtonProps {
  text: string;
  url: string;
  iconUrl?: string; // optional icon
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, url, iconUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => (window.location.href = url)}
      className="relative flex items-center justify-center 
                 gap-2 sm:gap-[16px] 
                 px-4 sm:px-[48px] 
                 py-[24px]
                 min-w-[100px]
                 rounded-[215px] overflow-hidden 
                 text-white text-[15px] transition-all duration-300 
                 backdrop-blur-[12px] bg-[#2DA77C80]"
      style={{
        outline: "0.01px solid #8CFFC580",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="button-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.75, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute w-[150%] h-[40%] rounded-full pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(140, 255, 197, 0.6) 0%, transparent 70%)",
              filter: "blur(16px)",
              top: "60%",
            }}
          />
        )}
      </AnimatePresence>

      {/* Icon (if provided) */}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon"
          className="w-5 h-5 sm:w-[20px] sm:h-[20px] object-contain relative z-10 shrink-0"
        />
      )}

      {/* Text */}
      <motion.span
        animate={{
          scaleX: hovered ? 1.08 : 1,
          fontWeight: hovered ? 600 : 400,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 origin-left"
      >
        {text}
      </motion.span>
    </button>
  );
};

export default PrimaryButton;
