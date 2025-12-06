import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CampusHighlights from "./components/CampusHighlights";


import CursorParticles from "./components/CursorParticles";   // 👈 ADD HERE
import SkillsMarquee from "./components/SkillsMarquee";       // 👈 ADD HERE


export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 GLOBAL CURSOR PARTICLES */}
      <CursorParticles />  {/* 👈 VERY IMPORTANT — MUST BE AT TOP */}

      {/* 🔥 NAVBAR */}
      <Navbar scrolled={scrolled} progress={progress} />

      {/* 🔥 HERO SECTION */}
      <Hero />

      {/* 🔥 PREMIUM SKILLS MARQUEE */}
      <SkillsMarquee />   {/* 👈 PLACE IT EXACTLY HERE */}

      {/* 🔥 ABOUT SECTION */}
      <About />
      

      {/* 🔥 SKILLS SECTION */}
      <Skills />

      {/* 🔥 PROJECTS */}
      <Projects />

      {/* 🔥 CERTIFICATIONS */}
      <Certifications />
      <CampusHighlights />

      {/* 🔥 CONTACT SECTION */}
      <Contact />

      {/* 🔥 FOOTER */}
      <Footer />
    </>
  );
}
