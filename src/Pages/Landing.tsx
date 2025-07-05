import React, { useEffect, useState } from "react";

import Noise from "../Components/Background/Noise";
import Aurora from "../Components/Background/Aurora";
import Navbar from "../Components/Navbar";
import Booklistings from "../App/Landing/Booklistings";
import CustomCursor from "../Components/CustomCursor";

function Landing() {
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
    <div>
       <CustomCursor />
      <div style={{ position: "relative" }}>
        <Aurora
          colorStops={["#2D9BA7", "#2DA784", "#2DA77C"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <Navbar />
      </div>

      {/* 🌈 Gradient overlay that fades in on scroll */}
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

      <Booklistings/>



      
    </div>
  );
}

export default Landing;
