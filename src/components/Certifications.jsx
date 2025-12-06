import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Certifications() {
  const certificates = [
    { img: "/certs/1stopcyber.png", title: "CYBER SECURITY PROJECTS" },
    { img: "/certs/C.png", title: "C Training" },
    { img: "/certs/codespire.png", title: "CODESPIRE 3.0" },
    { img: "/certs/Ai_tools.png", title: "AI TOOLS WORKSHOP" },
    { img: "/certs/internship.png", title: "INTERNSHIP PROGRAM IN CYBER SECURITY" },
    { img: "/certs/CHEMAGINATION.jpg", title: "CHEMAGINATION" },
    { img: "/certs/cyberprogram.png", title: "CYBER SECURITY PROGRAM" },
    {
      img: "/certs/GREEN SCIENCES FOR SUSTAILNABLE ECOSYSTEM AND ECONOMY.jpg",
      title: "GREEN SCIENCES FOR SUSTAINABLE ECOSYSTEM & ECONOMY",
    },
    { img: "/certs/CyberQ.jpg", title: "CYBER QUEST CTF" },
    { img: "/certs/Code Craft.jpg", title: "CODE CRAFT CHALLENGE" },
  ];

  const [index, setIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const next = () => setIndex((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  /* Keyboard Support */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="certifications"
      className="w-full bg-[#0b132b] text-white py-24 px-4 sm:px-6"
    >
      {/* ===== Sticky Heading ===== */}
      <div className="sticky top-16 z-30 bg-[#0b132b] pb-6">
        <motion.h2
          className="text-4xl font-bold text-[#0ef]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "180px" }}
          transition={{ duration: 0.6 }}
          className="h-[3px] bg-[#0ef] rounded-full mt-2"
        />
      </div>

      {/* ===== Carousel Wrapper ===== */}
      <div className="relative max-w-7xl mx-auto mt-16 flex items-center justify-center gap-3 md:gap-6 overflow-visible">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="
            bg-[#0ef] text-black rounded-full shadow-lg
            flex items-center justify-center
            absolute left-2 md:static z-20
            w-8 h-8 md:w-10 md:h-10
            hover:scale-110 transition
          "
        >
          ❮
        </button>

        {/* CARD + TITLE */}
        <div className="flex flex-col items-center gap-4 select-none px-2 sm:px-0">

          {/* SWIPE AREA */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="24px"
              scale={1.04}
            >
              <motion.div
                key={index}
                onClick={() => setSelectedImg(certificates[index].img)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="
                  relative rounded-2xl cursor-pointer
                  bg-[#0d1628]
                  border border-[#0ef]/60
                  shadow-[0_0_25px_rgba(0,238,255,0.35)]
                  sm:shadow-[0_0_45px_rgba(0,238,255,0.7)]
                  p-4 sm:p-6
                  w-[90vw] sm:w-[500px] md:w-[750px]
                  h-[260px] sm:h-[350px] md:h-[430px]
                  transition-all duration-500
                "
              >
                {/* Spotlight */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Image */}
                <img
                  src={certificates[index].img}
                  alt=""
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </motion.div>
            </Tilt>
          </motion.div>

          {/* TITLE */}
          <motion.p
            className="text-xl md:text-2xl font-bold text-[#0ef] drop-shadow-xl text-center max-w-[90vw]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {certificates[index].title}
          </motion.p>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="
            bg-[#0ef] text-black rounded-full shadow-lg
            flex items-center justify-center
            absolute right-2 md:static z-20
            w-8 h-8 md:w-10 md:h-10
            hover:scale-110 transition
          "
        >
          ❯
        </button>
      </div>

      {/* ===== FULLSCREEN MODAL ===== */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[999]"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              className="max-w-[95%] max-h-[90%] rounded-2xl shadow-2xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
