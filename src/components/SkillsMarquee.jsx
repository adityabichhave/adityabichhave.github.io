import React from "react";
import { motion } from "framer-motion";

const skills = [
"/skills/node.svg",
"/skills/mongo.svg",
"/skills/c.svg",
"/skills/css.svg",
"/skills/html.svg",
"/skills/js.svg",
"/skills/cpp.png",
"/skills/python.svg",
"/skills/git.svg",
"/skills/github.svg",
"/skills/react.svg",
"/skills/linux.png",
"/skills/vscode.svg",
"/skills/tailwind.svg" ,
"/skills/firebase.svg",
"/skills/mysql.png",
];

export default function SkillsMarquee() {
  return (
    <section className="w-full bg-[#0b132b] py-14 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#0ef] mb-6">
  Technologies I Use
</h2>


      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden touch-pan-y">
        <motion.div
  className="flex gap-12"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
  style={{
    willChange: "transform",
  }}
>

          {[...skills, ...skills].map((icon, i) => (
            <img
              key={i}
              src={icon}
              className="w-20 h-20 object-contain drop-shadow-[0_0_10px_#0ef]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
