"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Philsan() {
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <div
      className="relative w-full h-full border-[2px] border-[#30363D] rounded-[30px] flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundColor: "rgba(13, 17, 23, 0.5)" }}
    >
      {/* Image Container with Smooth Transition */}
      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {hoveredButton ? (
            <motion.div
              key="hoveredImage"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              {/* Image Wrapper (Scales) */}
              <div className="relative w-full h-full flex justify-center items-center">
                <motion.img
                  src="/assets/philsanwebsite.png"
                  alt="Hovered Image"
                  width={570}
                  height={317}
                  className="rounded-[15px] -rotate-[30deg] ml-[240px] mb-[100px]"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              </div>

              {/* Gradient Overlay (Fixed & Covers 80% from Bottom) */}
              <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-[#000000]/100 to-[#0D1117]/0 pointer-events-none" />
            </motion.div>
          ) : (
            <motion.div
              key="defaultImage"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src="/assets/PHILSAN LOGO@4x 1.png"
                alt="Default Image"
                width={250}
                height={100}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Motion Button */}
      <motion.button
        className={`absolute bottom-6 left-6 flex items-center justify-center border rounded-full transition-all duration-300 cursor-pointer ${
          hoveredButton
            ? "w-[119px] h-[56px] bg-transparent border-solid border-2 border-white"
            : "w-[56px] h-[56px]"
        }`}
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
      >
        <Link href="/your-link" passHref>
          <div className="flex items-center gap-4">
            <AnimatePresence>
              {hoveredButton && (
                <motion.span
                  className="ml-3 text-white text-xl whitespace-nowrap"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  Visit
                </motion.span>
              )}
            </AnimatePresence>

            {/* Arrow SVG with slight movement on hover */}
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ x: hoveredButton ? 5 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <path
                d="M1 11L11 1M11 1H1M11 1V11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </Link>
      </motion.button>
    </div>
  );
}
