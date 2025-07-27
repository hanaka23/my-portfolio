"use client";

import { useEffect } from "react";

export default function Particle() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles.json", () => {
        console.log("✨ particles.js config loaded!");
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed top-0 left-0 w-screen h-screen -z-10"
      
    />
    
  );
}
