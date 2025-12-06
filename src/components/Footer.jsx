import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaRocket
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full mt-20 bg-[#0b132b] text-white overflow-hidden pt-20 pb-10">

      {/* 🌌 Aurora Animated Background */}
      <div className="absolute inset-0 aurora-bg opacity-40"></div>

      {/* 🌊 Moving Gradient Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 footer-wave"></div>

      {/* ✨ Glassmorphic Container */}
      <div className="max-w-6xl mx-auto px-6 py-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 relative z-10 shadow-[0_0_25px_rgba(0,238,255,0.2)]">
        
        {/* ⭐ Name */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-wide bg-gradient-to-r from-[#0ef] via-yellow-300 to-pink-500 bg-clip-text text-transparent animate-glowText">
          Aditya Kumar Bichhave
        </h2>

        {/* 📜 Tagline */}
        <p className="text-center text-gray-300 mt-2">
          Building Premium Web Experiences | Developer | Cybersecurity Explorer
        </p>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center gap-8 mt-8">
          
          {/* LinkedIn */}
          <div className="icon-wrapper">
            <a href="https://www.linkedin.com/in/aditya-kumar-bichhave-aab610248" target="_blank">
              <FaLinkedin className="footer-social-icon text-blue-500" />
            </a>
          </div>

          {/* GitHub */}
          <div className="icon-wrapper">
            <a href="https://github.com/adityabichhave" target="_blank">
              <FaGithub className="footer-social-icon text-gray-300" />
            </a>
          </div>

          {/* Instagram */}
          <div className="icon-wrapper">
            <a href="https://www.instagram.com/adityabichhave" target="_blank">
              <FaInstagram className="footer-social-icon text-pink-500" />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="icon-wrapper">
            <a href="https://wa.me/6268474571" target="_blank">
              <FaWhatsapp className="footer-social-icon text-green-400" />
            </a>
          </div>

        </div>

        {/* 📩 Contact Info */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Email: <span className="text-[#0ef]"> <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpgJdDjqvklGqPHtLtsNRsZGZCNVpzLqtjTQWCnlVQCGRFnBLmrxkqXNXXmhkwnsVRKdvf">adityabichhave536@gmail.com</a></span> | 
          Phone: <span className="text-[#0ef] ml-1">6268474571</span>
        </p>

        {/* ⚡ Shine Line */}
        <div className="w-full h-[2px] mt-6 shine-line"></div>

        {/* 📝 Copyright */}
        <p className="text-center text-white-500 text-xs mt-4">
          © {new Date().getFullYear()} Aditya Kumar Bichhave — All Rights Reserved.
        </p>
      </div>

      {/* 🚀 Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
      >
        <FaRocket className="text-2xl" />
      </button>

    </footer>
  );
}
