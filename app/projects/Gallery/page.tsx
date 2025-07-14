"use client";
// pages/index.js

import { useMemo } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const gallery = [
  "/assets/gallery/480261478_1151223883411420_6201128048610433372_n.jpg",
  "/assets/gallery/480922608_1153531826343668_5265216594814811604_n.jpg",
  "/assets/gallery/ACL01560.JPG",
  "/assets/gallery/ACL01576.JPG",
  "/assets/gallery/BCS_1672.JPG",
  "/assets/gallery/IMG01568.jpg",
  "/assets/gallery/IMG01576.jpg",
  "/assets/gallery/IMG02265.jpg",
];

// Utility function to shuffle array
// Utility function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const shuffledGallery = useMemo(() => shuffleArray(gallery), []);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center items-center px-8">
      <div className="max-w-[1120px] h-auto flex flex-col justify-center items-center my-8">
        <div className="py-16">
          <motion.div
            className="flex justify-center items-center w-[56px] h-[56px] border-2 border-solid border-[#30363D] rounded-full cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => router.push("/")} // Redirects to homepage on click
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <AnimatePresence mode="wait">
                {isHovered ? (
                  // Horizontal Line (appears when hovered)
                  <motion.path
                    key="line"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    d="M1 6H11"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  // "X" Shape (appears when not hovered)
                  <>
                    <motion.path
                      key="x1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                      d="M11 1L1 11"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <motion.path
                      key="x2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                      d="M1 1L11 11"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )}
              </AnimatePresence>
            </svg>
          </motion.div>
        </div>
        <div className="flex flex-col gap-16 py-16">
          <h1 className="text-3xl font-bold text-center mb-6">
            Canvas of Snaps
          </h1>
          <div className="columns-3 gap-4">
            {shuffledGallery.map((src, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
