import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import profilePic from "../aditya.jpeg";

// Typewriter roles
const roles = [
  "Full Stack Developer",
  "CSE Student",
  "Cybersecurity Enthusiast",
  "MERN Stack Developer",
  "Ready for Internships 🚀",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Parallax mouse movement values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    x.set(e.clientX - innerWidth / 2);
    y.set(e.clientY - innerHeight / 2);
  };

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
  id="home" className="relative w-full bg-[#0b132b] text-white 
             pt-32 md:pt-24 pb-20 overflow-hidden"
>

      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center animate-pulse-slow"></div>

      {/* Floating neon blobs */}
      <motion.div
        className="absolute -top-10 -left-10 w-80 h-80 bg-[#0ef]/30 blur-3xl rounded-full"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/25 blur-3xl rounded-full"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Profile + Orbit with Parallax effect */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative w-[20rem] h-[30rem] flex justify-center items-center"
        >
          {/* BIGGER, SHARPER TECH ORBIT */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[
              "/skills/c.svg",
              "/skills/html.svg",
              "/skills/js.svg",
              "/skills/html.svg",
              "/skills/css.svg",
              "/skills/mongo.svg",
              "/skills/vscode.svg",
              "/skills/linux.png",
              "/skills/cpp.png",
            ].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                className="w-16 h-16 absolute drop-shadow-[0_0_12px_#0ef]"
                style={{
                  transform: `rotate(${(i * 360) / 9}deg) translate(200px) rotate(-${(i * 360) / 9}deg)`,
                }}
              />
            ))}
          </motion.div>

          {/* Profile Card */}
          <motion.div
            className="
              p-4 rounded-2xl bg-[#ffffff0f] backdrop-blur-xl shadow-2xl 
              border border-[#0ef]/40 w-[20rem] h-[30rem] flex justify-center items-center
            "
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={profilePic}
              alt="Aditya Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left select-none">


          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight"
          >
            <span className="font-heading text-6xl bg-gradient-to-r from-[#0ef] via-yellow-400 to-[#0ef] bg-clip-text text-transparent">
              Aditya Kumar Bichhave
            </span>
          </motion.h1>

          {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "220px" }}
            transition={{ duration: 0.7 }}
            className="h-[3px] bg-[#0ef] rounded-full mt-2 mb-4"
          />

          {/* ORIGINAL SUBTITLE (DO NOT CHANGE) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-lg max-w-xl mx-auto md:mx-0"

          >
            Aspiring Full-Stack Developer & Cybersecurity Enthusiast passionate about building
            modern web applications, solving real-world problems, and exploring advanced
            technologies.
          </motion.p>

          {/* Typewriter */}
          <motion.p
            className="text-xl text-yellow-300 font-semibold h-8 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {text}
            <span className="text-[#0ef]">|</span>
          </motion.p>

          {/* One-line work availability */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 mt-3 text-lg"
          >
            Ready for Internships, Freelance Work & Real-World Development 🚀
          </motion.p>

          {/* Social + Resume */}
          <div className="flex items-center gap-6 mt-8 
                justify-center md:justify-start
                flex-wrap">

            {/* Resume */}
            <motion.a
              href="/AdityaResume.pdf"
              target="_blank"
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 bg-[#0ef] text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-[#0ef]/50"
            >
              <FaFileAlt /> Resume
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/adityabichhave"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-3xl hover:text-[#0ef]"
            >
              <FaGithub />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/aditya-kumar-bichhave-aab610248"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-3xl hover:text-[#0ef]"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
