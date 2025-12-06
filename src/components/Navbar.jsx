import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect scroll for navbar shrinking and scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // SCROLL SPY
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LINK HOVER ANIMATION
  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -3, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50 
        backdrop-blur-xl transition-all duration-500
        border-b border-transparent
        ${scrolled ? "py-2 bg-[#0b132bdf] shadow-lg border-[#0ef50]" : "py-4 bg-[#0b132b80]"}
      `}
      style={{
        boxShadow: scrolled
          ? "0 8px 25px rgba(0,255,255,0.15)"
          : "0 4px 12px rgba(0,255,255,0.05)",
      }}
    >
      {/* 💎 Gradient Glow Under Navbar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-[#0ef] to-yellow-400"></div>

      <div className="container-centered flex items-center justify-between text-white">

        {/* LOGO WITH GLOW ANIMATION */}
        <motion.h1
          animate={{
            textShadow: ["0px 0px 4px #0ef", "0px 0px 12px #0ef", "0px 0px 4px #0ef"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-wide"
        >
          Aditya Kumar Bichhave
        </motion.h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-lg">
          {["home", "about", "skills", "projects", "certifications", "contact"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`
                  relative transition cursor-pointer
                  ${active === item ? "text-[#0ef] font-semibold" : "text-white"}
                `}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Animated underline */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-[#0ef]"
                  animate={{ width: active === item ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            )
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="md:hidden text-3xl text-yellow-400"
          whileTap={{ scale: 0.75 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-[#0b132b] text-white px-6 py-6 space-y-5 shadow-xl border-t border-gray-700"
          >
            {["home", "about", "skills", "projects", "certifications", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg ${
                    active === item ? "text-[#0ef]" : "text-white"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
