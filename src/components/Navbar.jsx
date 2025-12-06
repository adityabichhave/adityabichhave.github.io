import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "about", "skills", "projects", "certifications", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const velocity = useRef(0);

  const [blurStrength, setBlurStrength] = useState(8);

  // ✅ SCROLL HANDLER (Velocity Based)
  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // ✅ Hide on scroll down, show on scroll up
      if (diff > 8 && currentY > 80) {
        setHidden(true);
      } else if (diff < -8) {
        setHidden(false);
      }

      lastScrollY.current = currentY;

      // ✅ Scroll Spy
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(sec);
          break;
        }
      }

      ticking = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <motion.nav
      className="
        fixed top-0 left-0 w-full z-50
        py-3
        backdrop-saturate-150
        border-b border-white/10
      "
      style={{
        backdropFilter: `blur(${blurStrength}px)`,
        WebkitBackdropFilter: `blur(${blurStrength}px)`,
        background: "rgba(11,19,43,0.75)",
        boxShadow: "0 6px 25px rgba(0,255,255,0.15)",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-[#0ef] to-yellow-400" />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
        {/* LOGO */}
        <motion.h1
          className="text-xl md:text-2xl font-extrabold text-yellow-400"
          animate={{
            textShadow: [
              "0 0 4px #0ef",
              "0 0 14px #0ef",
              "0 0 4px #0ef",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Aditya Kumar Bichhave
        </motion.h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative transition-all ${
                active === item ? "text-[#0ef]" : "text-white/90"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#0ef] transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden text-2xl text-yellow-400"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-6 py-6 bg-[#0b132b]/95 border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 text-lg ${
                  active === item ? "text-[#0ef]" : "text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
