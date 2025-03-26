"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blink() {
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
              className="w-full h-full"
            >
              <Image
                src="/assets/Mask group.png"
                alt="Hovered Image"
                width={267}
                height={317}
              />
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
                src="/assets/BCS_LOGOMARK_WHITE 1.png"
                alt="Default Image"
                width={78}
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

            {/* SVG is always visible, but moves on hover */}
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={false}
              animate={{ x: hoveredButton ? 5 : 0 }} // Moves right slightly on hover
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
