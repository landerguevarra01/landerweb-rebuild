"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/_DSC8035 (2).JPG",
  "/assets/_DSC8037 (1).JPG",
  "/assets/_DSC8040 (1).JPG",
];

const FADE_DURATION = 1.5; // Fade-in time in seconds
const DISPLAY_DURATION = 6; // Time before the next image starts fading in

export default function MyImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, DISPLAY_DURATION * 1000); // Wait before next image fades in

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-full rounded-[30px] overflow-hidden"
      style={{ backgroundColor: "rgba(32, 47, 18, 0.5)" }}
    >
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={i <= index ? { opacity: 1 } : {}}
          transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
          className="absolute w-full h-full"
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={src}
            alt="Solo Leveling 2024"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
