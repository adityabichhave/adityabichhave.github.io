import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#0b132b] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Sticky Heading */}
        <motion.h2
         className="
    relative md:sticky md:top-12
    pointer-events-none md:pointer-events-auto
    text-3xl md:text-4xl
    font-bold text-[#0ef]
    bg-[#0b132b] py-3
    z-30
  "
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Underline Animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-[3px] bg-[#0ef] rounded-full mt-1 mb-6"
        />

        {/* Paragraph 1 */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I’m <span className="text-yellow-400 font-semibold">Aditya Kumar Bichhave</span>, a
          2nd-year CSE student and Full Stack Developer passionate about building clean,
          fast, and modern digital experiences. I work across both Frontend 
          (<span className="text-[#0ef]">HTML, CSS, JavaScript, React, Tailwind</span>) 
          and Backend (<span className="text-[#0ef]">Node.js, Express, MongoDB</span>) 
          to create complete and scalable applications.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className="mt-4 text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I also have experience with 
          <span className="text-[#0ef]"> C, C++, Python</span>, and a strong understanding
          of <span className="text-[#0ef]">Data Structures & Algorithms (DSA)</span>.
          Alongside development, I’m exploring 
          <span className="text-[#0ef]"> Cyber Security</span>, learning how systems work 
          and how to secure them.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          className="mt-4 text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I use <span className="text-[#0ef]">Git & GitHub</span> for version control and 
          follow clean coding practices while working on real-world projects.
        </motion.p>

        {/* Paragraph 4 */}
        <motion.p
          className="mt-4 text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I’m continuously learning, improving, and building new things that help me grow 
          as a developer.
        </motion.p>

      </div>
    </section>
  );
}
