import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function CampusHighlights() {
  const categories = ["All", "Awards", "Events", "Campus"];

  const images = [
    { src: "/college/award 1.jpg", cat: "Awards", caption: "Award Ceremony" },
    { src: "/college/award2.jpg", cat: "Awards", caption: "Achievement Moment" },
    { src: "/college/award3.png", cat: "Awards", caption: "Achievement Moment" },

    { src: "/college/fest1.jpg", cat: "Events", caption: "Cultural Fest" },
    { src: "/college/fest2.jpg", cat: "Events", caption: "Tech Event" },
    { src: "/college/fest3.png", cat: "Events", caption: "Tech Event" },

    { src: "/college/campus1.jpg", cat: "Campus", caption: "Campus View" },
    { src: "/college/campus2.jpg", cat: "Campus", caption: "College Life" },
  ];

  const [category, setCategory] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filtered = category === "All"
    ? images
    : images.filter((img) => img.cat === category);

  return (
    <section id="campus" className="w-full bg-[#0b132b] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.h2
                className="sticky top-12 text-4xl font-bold text-[#0ef] bg-[#0b132b] py-3 z-30"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
          Campus Highlights
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "180px" }}
          transition={{ duration: 0.6 }}
          className="h-[3px] bg-[#0ef] rounded-full mt-2 mb-10"
        />

        {/* FILTER BUTTONS */}
        <div className="sticky top-26 z-40 bg-[#0b132b] py-4 mb-10">
  <div className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-md text-lg border border-[#0ef] transition ${
                category === cat
                  ? "bg-[#0ef] text-black"
                  : "text-[#0ef] hover:bg-[#0ef] hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
         </div>
</div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {filtered.map((img, idx) => (
            <Tilt key={idx} glareEnable={true} glareMaxOpacity={0.35} scale={1.03}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl hover:shadow-2xl"
                onClick={() => setSelectedImg(img)}
              >
                <img src={img.src} className="w-full rounded-xl" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md py-2 px-3 text-sm text-white">
                  {img.caption}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* FULLSCREEN LIGHTBOX */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-xl flex justify-center items-center z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.img
                src={selectedImg.src}
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
