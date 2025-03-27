"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Recently() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full border-[2px] border-[#AEFA62] rounded-[30px] flex flex-col justify-center items-start p-8"
      style={{ backgroundColor: "rgba(32, 47, 18, 0.5)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-white text-[18px] mb-2"
      >
        Recently watched
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src="/assets/image 6.png"
          alt="Solo Leveling 2024"
          width={66.2}
          height={99.3}
          className="rounded-lg"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="text-[22px]"
      >
        Solo Leveling
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="text-[16px]"
      >
        2024
      </motion.h2>
    </motion.div>
  );
}
