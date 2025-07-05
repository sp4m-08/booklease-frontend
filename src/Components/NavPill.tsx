import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavPillProps {
  text: string;
  url: string;
}

const NavPill: React.FC<NavPillProps> = ({ text, url }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      onClick={() => (window.location.href = url)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ scaleX: 1, fontWeight: 400 }}
      animate={{
        scaleX: hovered ? 1.05 : 1,
        fontWeight: hovered ? 500 : 400,
        color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.8)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="cursor-pointer origin-left inline-block"
    >
      {hovered && "● "}{text}
    </motion.span>
  );
};

export default NavPill;
