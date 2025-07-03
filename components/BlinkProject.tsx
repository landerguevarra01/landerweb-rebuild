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
            <div className="relative w-full h-full">
              {/* Only scale the image */}
              <motion.div
                key="hoveredImage"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src="/assets/Blink/blinkwebsite.png"
                  alt="Hovered Image"
                  width={210}
                  height={317}
                  className="rounded-[15px] -rotate-[30deg] ml-[100px] mt-[90px]"
                />
              </motion.div>

              {/* Keep gradient outside the scaling div */}
              <div className="absolute bottom-0 left-0 mb-26 w-full h-[60%] bg-gradient-to-t from-[#000000]/100 to-[#0D1117]/0 pointer-events-none" />
            </div>
          ) : (
            <motion.div
              key="defaultImage"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src="/assets/Blink/BCS_LOGOMARK_WHITE.png"
                alt="Default Image"
                width={78}
                height={100}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Motion Button (Now Above the Image) */}
      <Link href="/projects/Blink%20Creative%20Studio-Company-Website" passHref>
        <motion.button
          className={`absolute bottom-6 left-6 flex items-center justify-center border rounded-full transition-all cursor-pointer z-10 ${
            hoveredButton
              ? "w-[119px] h-[56px] bg-transparent border-solid border-2 border-white"
              : "w-[56px] h-[56px] duration-1000"
          }`}
          onMouseEnter={() => setHoveredButton(true)}
          onMouseLeave={() => setHoveredButton(false)}
        >
          <div className="flex items-center gap-4">
            <AnimatePresence>
              {hoveredButton && (
                <motion.span
                  className="ml-3 text-white text-xl whitespace-nowrap"
                  initial={{ opacity: 0, z: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, z: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Visit
                </motion.span>
              )}
            </AnimatePresence>

            {/* SVG rotates on hover */}
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: hoveredButton ? 90 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
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
        </motion.button>
      </Link>
    </div>
  );
}
