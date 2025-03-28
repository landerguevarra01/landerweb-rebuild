"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full border-[2px] border-[#7069F6] rounded-[30px] flex items-center justify-center p-8"
      style={{ backgroundColor: "rgba(48, 32, 137, 0.5)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="grid grid-rows-2 justify-center items-center"
      >
        <div className="flex justify-center items-center text-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-[18px] font-sans leading-relaxed"
          >
            Pioneering the Fusion of{" "}
            <span className="text-[40px] millik-font leading-none">
              Aesthetics &
            </span>{" "}
            <span className="text-[40px] millik-font leading-none">
              Functionality
            </span>{" "}
            in Digital Design
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
