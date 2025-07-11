// src/Components/Layout.tsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Noise from "../Components/Background/Noise";
import Aurora from "../Components/Background/Aurora";
import Navbar from "../Components/Navbar";
import CustomCursor from "../Components/CustomCursor";
import Footer from "../Components/Footer";

const Layout = () => {
  const [gradientOpacity, setGradientOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 20;
      const fadeEnd = 50;
      const opacity = Math.min(
        Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
        1
      );
      setGradientOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#060010] overflow-x-hidden">
      <CustomCursor />
      <div style={{ position: "relative" }}>
        <Aurora
          colorStops={["#2D9BA7", "#2DA784", "#2DA77C"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <Navbar signed_in={true} />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "200px",
          background:
            "linear-gradient(to bottom, rgba(6, 0, 16, 0.9), rgba(6, 0, 16, 0.7), rgba(6, 0, 16, 0))",
          pointerEvents: "none",
          zIndex: 505,
          opacity: gradientOpacity,
          transition: "opacity 0.3s ease",
        }}
      />

      <div className="noise-overlay">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={10}
        />
      </div>

      <div className="flex-grow">
        <Outlet /> {/* Render child routes here */}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
