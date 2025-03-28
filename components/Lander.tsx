"use client";

import { motion } from "framer-motion";

export default function Lander() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full border-[2px] border-[#E44756] rounded-[30px] flex items-center justify-center p-8"
      style={{ backgroundColor: "rgba(117, 31, 48, 0.5)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="grid grid-rows-2 justify-center items-center"
      >
        <div className="flex justify-start items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="w-[84px] h-[84px] bg-[#d9d9d9] rounded-full"
          />
        </div>
        <div className="flex justify-center items-center text-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="text-[18px] font-sans leading-relaxed"
          >
            👋 Hey there! I’m{" "}
            <span className="text-[40px] millik-font leading-none">Lander</span>, a Front-end
            Web Developer who builds sleek, dynamic, and user-friendly websites
            that just work.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
