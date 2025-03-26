"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
    console.log("Dark mode active:", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className="w-full h-full border-[2px] border-[#E7C73B] rounded-[30px] flex flex-col justify-center items-center p-8"
      style={{ backgroundColor: "rgba(99, 67, 27, 0.5)" }}
    >
      {/* Toggle Button */}
      <div
        className={`w-[113px] h-[72px] bg-[#1f2228] border-2 border-[#E7C73B] rounded-full flex items-center px-2 cursor-pointer`}
        onClick={() => {
          setIsDarkMode((prev) => !prev);
          console.log("SVG clicked! Toggling mode...");
        }}
      >
        {/* Animated Toggle Switch */}
        <motion.div
          className="w-[51.43px] h-[51.43px] rounded-full flex justify-center items-center"
          style={{ backgroundColor: "rgba(99, 67, 27, 0.5)" }}
          animate={{
            x: isDarkMode ? 0 : 40, // Moves right for light mode
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isDarkMode ? (
            // Moon Icon (Dark Mode)
            <svg
              width="41"
              height="42"
              viewBox="0 0 41 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.8752 22.5639C35.6065 25.4719 34.5151 28.2431 32.7289 30.5535C30.9426 32.8638 28.5353 34.6176 25.7887 35.6097C23.0421 36.6018 20.0697 36.7912 17.2193 36.1556C14.369 35.52 11.7586 34.0859 9.69367 32.0209C7.62869 29.9559 6.19451 27.3455 5.55896 24.4952C4.9234 21.6449 5.11275 18.6725 6.10486 15.9259C7.09696 13.1792 8.85078 10.7719 11.1611 8.98568C13.4714 7.19943 16.2427 6.10809 19.1506 5.83936C17.4481 8.14265 16.6289 10.9805 16.8419 13.8368C17.0549 16.693 18.286 19.378 20.3113 21.4033C22.3366 23.4286 25.0215 24.6597 27.8778 24.8727C30.7341 25.0857 33.5719 24.2664 35.8752 22.5639Z"
                fill="#E7C73B"
              />
            </svg>
          ) : (
            // Sun Icon (Light Mode)
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9997 26.9168C23.3719 26.9168 26.9163 23.3724 26.9163 19.0002C26.9163 14.6279 23.3719 11.0835 18.9997 11.0835C14.6274 11.0835 11.083 14.6279 11.083 19.0002C11.083 23.3724 14.6274 26.9168 18.9997 26.9168Z"
                fill="#E7C73B"
              />
              <path
                d="M18.9997 1.5835V4.75016M18.9997 33.2502V36.4168M6.68134 6.68183L8.92968 8.93016M29.0697 29.0702L31.318 31.3185M1.58301 19.0002H4.74967M33.2497 19.0002H36.4163M6.68134 31.3185L8.92968 29.0702M29.0697 8.93016L31.318 6.68183M26.9163 19.0002C26.9163 23.3724 23.3719 26.9168 18.9997 26.9168C14.6274 26.9168 11.083 23.3724 11.083 19.0002C11.083 14.6279 14.6274 11.0835 18.9997 11.0835C23.3719 11.0835 26.9163 14.6279 26.9163 19.0002Z"
                stroke="#E7C73B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.div>
      </div>
    </div>
  );
}
