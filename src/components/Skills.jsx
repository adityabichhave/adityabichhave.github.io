import React, { useState } from "react";
import { motion } from "framer-motion";
import skillsData from "../data/skills"; // you will get this file below

export default function Skills() {
  const [category, setCategory] = useState("All");

  return (
    <section
      id="skills"
      className="w-full bg-[#0b132b] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* 🔥 Sticky Heading */}
        <motion.h2
          className="sticky top-12 text-4xl font-bold text-[#0ef] bg-[#0b132b] py-3 z-30"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Underline Animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="h-[3px] bg-[#0ef] rounded-full mt-1 mb-8"
        />

        {/* 🔥 Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {Object.keys(skillsData).map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-md border border-[#0ef] ${
                category === cat
                  ? "bg-[#0ef] text-black"
                  : "text-[#0ef] hover:bg-[#0ef] hover:text-black"
              } transition`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skillsData[category].map((skill, index) => (
            <motion.div
  key={index}
  className="
    bg-[#111827] 
    p-5 
    rounded-2xl 
    shadow-md 
    flex flex-col items-center
    border border-transparent
    transition-all duration-300
    hover:shadow-[#0ef]/50 hover:border-[#0ef]
    group
  "
  initial={{ opacity: 0, scale: 0.8, y: 20 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  whileHover={{ scale: 1.2, rotate: 2 }}
  transition={{ type: 'spring', stiffness: 150, damping: 10 }}
  viewport={{ once: false, amount: 0.2 }}
>

  {/* Icon */}
  <motion.img
    src={skill.icon}
    alt={skill.name}
    className="w-14 h-14 drop-shadow-lg"
    whileHover={{ rotate: -5, scale: 1.15 }}
    transition={{ duration: 0.25 }}
  />

  {/* Text */}
  <motion.p
    className="text-gray-300 text-sm mt-3 opacity-80 group-hover:text-[#0ef] group-hover:opacity-100 transition"
    whileHover={{ y: -2 }}
  >
    {skill.name}
  </motion.p>

  

</motion.div>


          ))}
        </div>
        <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="text-center mt-10 text-xl font-semibold text-[#0ef] drop-shadow-[0_0_8px_#0ef]"
>
  More skills being added — continuously learning & improving 🚀
</motion.p>

      </div>
    </section>
  );
}
