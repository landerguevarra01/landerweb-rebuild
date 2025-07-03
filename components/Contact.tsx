"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "guevarralander0@gmail.com";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Clipboard write failed:", err);
        });
    } else {
      // fallback: create a temporary textarea
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          alert("Unable to copy");
        }
      } catch (err) {
        alert("Fallback: Unable to copy");
      }

      document.body.removeChild(textArea);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full border-2 border-[#FA3ABF] rounded-[30px] flex items-center justify-start p-6 sm:p-8"
      style={{ backgroundColor: "rgba(71, 16, 45, 0.5)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col gap-6 sm:gap-8 w-full"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col items-start text-start"
        >
          <p className="text-3xl sm:text-[40px] millik-font">Let's Connect</p>
          <p className="text-base sm:text-lg font-sans">
            Have a project or just want to say hi? <br />
            Drop me a message! 🤙
          </p>
        </motion.div>

        {/* Email Button */}
        <div className="relative">
          {/* Email Copy Button */}
          <motion.div
            onClick={handleCopy}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="w-fit sm:w-fit h-[56px] border-2 border-[#FA3ABF] rounded-[30px] flex items-center justify-start gap-3 px-4 py-2 cursor-pointer"
            style={{ backgroundColor: "rgba(71, 16, 45, 0.5)" }}
          >
            {/* Icon */}
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#FA3ABF] rounded-full flex justify-center items-center"
              style={{ backgroundColor: "rgba(71, 16, 45, 0.5)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_196_22)">
                  <path
                    d="M3.95801 11.8752H3.16634C2.74641 11.8752 2.34369 11.7083 2.04676 11.4114C1.74982 11.1145 1.58301 10.7118 1.58301 10.2918V3.16683C1.58301 2.7469 1.74982 2.34418 2.04676 2.04724C2.34369 1.75031 2.74641 1.5835 3.16634 1.5835H10.2913C10.7113 1.5835 11.114 1.75031 11.4109 2.04724C11.7079 2.34418 11.8747 2.7469 11.8747 3.16683V3.9585M8.70801 7.12516H15.833C16.7075 7.12516 17.4163 7.83404 17.4163 8.7085V15.8335C17.4163 16.7079 16.7075 17.4168 15.833 17.4168H8.70801C7.83356 17.4168 7.12467 16.7079 7.12467 15.8335V8.7085C7.12467 7.83404 7.83356 7.12516 8.70801 7.12516Z"
                    stroke="#FA3ABF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_196_22">
                    <rect width="19" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Email Text */}
            <motion.p
              key={copied ? "copied" : "default"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[14px] md:text-[22px] font-semibold underline break-all"
            >
              {copied ? "Email copied!" : "guevarralander0@gmail.com"}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
