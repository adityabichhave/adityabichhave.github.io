import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorParticles() {
  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 600); 
    };

    const move = (e) => createParticle(e.clientX, e.clientY);
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}
