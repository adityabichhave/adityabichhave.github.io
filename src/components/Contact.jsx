import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef(null);

  function handleMailSubmit(e) {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const mailto = `mailto:adityabichhave536@gmail.com?subject=${encodeURIComponent(
      "Message from " + name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
  }

  return (
    <section
      id="contact"
      className="w-full bg-[#0b132b] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Contact Header */}
        <h2 className="
    relative md:sticky md:top-12
    pointer-events-none md:pointer-events-auto
    text-3xl md:text-4xl
    font-bold text-[#0ef]
    bg-[#0b132b] py-3
    z-30
  ">Send a Message</h2>

        {/* Your Glow Container */}
        <div className="p-10 rounded-3xl shadow-[0_0_30px_#b26bff] bg-[#101b3e]">

          {/* FORM START */}
          <form ref={formRef} onSubmit={handleMailSubmit} className="space-y-6">

            {/* Top Inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              
              <div>
                <label className="text-gray-300">Your Name</label>
                <input
                  name="name"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0d1731] text-white border border-[#1e2b4d] focus:border-[#0ef] outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="text-gray-300">Your Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0d1731] text-white border border-[#1e2b4d] focus:border-[#0ef] outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-300">Message</label>
              <textarea
                name="message"
                rows="6"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0d1731] text-white border border-[#1e2b4d] focus:border-[#0ef] outline-none"
                placeholder="Write your message..."
                required
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-[#0ef] text-black py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_#0ef]"
            >
              Send Message 🚀
            </motion.button>
          </form>
          {/* FORM END */}

        </div>
      </div>
    </section>
  );
}
