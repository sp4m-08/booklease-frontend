import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <img
      src="/cursor.svg"
      alt="Custom Cursor"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "32px",
        height: "32px",
        pointerEvents: "none",
        transform: "translate(-10px, -6px)", // adjust to match SVG arrow tip
        zIndex: 9999,
        transition: "transform 0.05s ease-out",
      }}
    />
  );
};

export default CustomCursor;
