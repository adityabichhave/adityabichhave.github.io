import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion with animations, sticky sections, and responsive UI.",
      img: "/projects/portfolio.png",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/adityabichhave/adityabichhave.github.io.git",
      live: "#home",
    },
    {
      title: "Facial Reaction Password",
      desc: "A next-gen biometric authentication system that uses facial micro-reactions, blinking, and movement patterns instead of traditional passwords.",
      img: "/projects/facial reaction password.png",
      tech: ["Vite", "TailwindCSS", "React" , "MediaPipe", "Node.js"],
      github: "https://github.com/adityabichhave/facial-reaction-password",
      live: "#",
    },
    {
      title: "Information Gathering Tool (OSINT)",
      desc: "A Python-based OSINT tool that fetches domain IPs, geolocation, ISP data, and ownership information using DNS lookups and public APIs.",
      img: "/projects/informationgathering.png",
      tech: ["Python", "Socket", "Requests","OSINT APIs"],
      github: "https://github.com/adityabichhave/-Information-Gathering-Tool-OSINT-",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#0b132b] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Sticky title */}
        <motion.h2
          className="sticky top-12 text-4xl font-bold text-[#0ef] bg-[#0b132b] py-3 z-30"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.6 }}
          className="h-[3px] bg-[#0ef] rounded-full mt-1 mb-12"
        />

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-[#111827]/60 backdrop-blur-xl 
                p-5 rounded-2xl shadow-xl border border-[#0ef]/20 
                hover:border-[#0ef] overflow-hidden 
                hover:shadow-[#0ef]/40 transition relative group
              "
            >
              {/* Image */}
              <motion.div
                className="w-full h-48 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-4 text-yellow-400">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                {proj.desc}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#0ef]/20 border border-[#0ef]/40 text-[#0ef] px-2 py-[3px] rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4 mt-5">
                {/* GitHub */}
                <motion.a
                  href={proj.github}
  target="_blank"
  className="flex items-center justify-center gap-3 px-8 py-3 bg-[#0ef] text-black rounded-lg text-md font-bold shadow-lg hover:scale-110 transition-all duration-300 w-full"
>
                  <FaGithub className="text-3xl" />
View On Github
                </motion.a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
