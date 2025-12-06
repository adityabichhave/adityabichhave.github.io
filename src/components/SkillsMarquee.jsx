import React from "react";
import { motion } from "framer-motion";

const skills = [
"../../public//skills/node.svg",
"../../public//skills/mongo.svg",
"../../public//skills/c.svg",
"../../public//skills/css.svg",
"../../public/skills/html.svg",
"../../public//skills/js.svg",
"../../public//skills/cpp.png",
  "/../../public/skills/python.svg",
"../../public//skills/git.svg",
"../../public//skills/github.svg",
"../../public//skills/react.svg",
"../../public//skills/linux.png",
"../../public//skills/vscode.svg",
"../../public//skills/tailwind.svg" ,
"../../public//skills/firebase.svg",
"../../public//skills/mysql.png",
];

export default function SkillsMarquee() {
  return (
    <section className="w-full bg-[#0b132b] py-14 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#0ef] mb-6">
        Technologies I Use
      </h2>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
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
