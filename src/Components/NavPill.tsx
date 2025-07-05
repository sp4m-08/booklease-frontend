import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavPillProps {
  text: string;
  url: string;
}

const NavPill: React.FC<NavPillProps> = ({ text, url}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-flex items-center justify-center overflow-visible"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => (window.location.href = url)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute w-[300%] h-[160%] rounded-full pointer-events-none -z-40"
            style={{
              background:
                "radial-gradient(circle, rgba(128, 128, 200, 1) 0%, transparent 100%)",
              filter: "blur(20px)",
              top: "90%", 
              zIndex: -1,
            }}
          />
        )}
      </AnimatePresence>

      <motion.span
        initial={{ scaleX: 1, fontWeight: 400 }}
        animate={{
          scaleX: hovered ? 1.03 : 1,
          fontWeight: hovered ? 500 : 400,
          color: hovered ? "#FFFFFF" : "#FFFFFF80",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="cursor-pointer relative z-10 px-2"
      >
        {hovered ? `● ${text}` : text}
      </motion.span>
    </div>
  );
};

export default NavPill;
