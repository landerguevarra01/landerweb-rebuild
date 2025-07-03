"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full border-2 border-[#7069F6] rounded-[30px] flex items-start justify-center p-16 sm:p-12"
      style={{ backgroundColor: "rgba(48, 32, 137, 0.5)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col justify-center items-center w-full max-w-4xl"
      >
        <div className="flex justify-center sm:justify-start items-center text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-[16px] sm:text-[18px] font-sans leading-relaxed"
          >
            Pioneering the Fusion of{" "}
            <span className="block sm:inline text-4xl sm:text-[40px] millik-font leading-none">
              Aesthetics &
            </span>{" "}
            <span className="block sm:inline text-4xl sm:text-[40px] millik-font leading-none">
              Functionality
            </span>{" "}
            in Digital Design
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
