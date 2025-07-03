"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SansanWeb() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-8">
          <div className="flex flex-col gap-4">
            <AnimatePresence>
              <motion.h1
                key="heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-[40px]"
              >
                PHILSAN <span className="text-[#DB0102]">|</span> Event Website
              </motion.h1>
              <motion.p
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-[32px]"
              >
                The Philippine Society of Animal Nutritionists (PHILSAN)
                advances animal nutrition through expert-led discussions,
                academic lectures, and professional consultations.
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              {/* NextJS */}
              <motion.div
                className="w-[152px] h-[56px] border-[2px] border-[#302089] rounded-[30px] flex items-center justify-start gap-2 p-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "rgba(48, 32, 137, 1)" }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 9L9.81068 8.4145C9.55672 8.06288 9.10504 7.91506 8.69234 8.0485C8.27962 8.18196 8 8.56626 8 9H9ZM15 28C7.8203 28 2 22.1798 2 15H0C0 23.2842 6.71572 30 15 30V28ZM28 15C28 22.1798 22.1798 28 15 28V30C23.2842 30 30 23.2842 30 15H28ZM15 2C22.1798 2 28 7.8203 28 15H30C30 6.71572 23.2842 0 15 0V2ZM15 0C6.71572 0 0 6.71572 0 15H2C2 7.8203 7.8203 2 15 2V0ZM10 24V9H8V24H10ZM8.18932 9.5855L21.1894 27.5854L22.8106 26.4146L9.81068 8.4145L8.18932 9.5855ZM20 8V20H22V8H20Z"
                      fill="#7069F6"
                    />
                  </svg>
                </div>

                <motion.p
                  className="text-[22px] font-semibold"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Slight delay for staggered effect
                >
                  NextJS
                </motion.p>
              </motion.div>

              {/* TailwindCSS */}
              <motion.div
                className="w-[209px] h-[56px] border-[2px] border-[#FA3ABF] rounded-[30px] flex items-center justify-start gap-2 p-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delayed for staggered effect
              >
                <div
                  className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "rgba(71, 16, 45, 1)" }}
                >
                  <svg
                    width="30"
                    height="18"
                    viewBox="0 0 30 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0C11 0 8.5 2 7.5 6C9 4 10.75 3.25 12.75 3.75C13.8912 4.035 14.7063 4.8625 15.61 5.78C17.0812 7.2725 18.7825 9 22.5 9C26.5 9 29 7 30 3C28.5 5 26.75 5.75 24.75 5.25C23.6088 4.965 22.7938 4.1375 21.89 3.22C20.42 1.7275 18.7188 0 15 0ZM7.5 9C3.5 9 1 11 0 15C1.5 13 3.25 12.25 5.25 12.75C6.39125 13.035 7.20625 13.8625 8.11 14.78C9.58125 16.2725 11.2825 18 15 18C19 18 21.5 16 22.5 12C21 14 19.25 14.75 17.25 14.25C16.1087 13.965 15.2937 13.1375 14.39 12.22C12.92 10.7275 11.2188 9 7.5 9Z"
                      fill="#FA3ABF"
                    />
                  </svg>
                </div>

                <motion.p
                  className="text-[22px] font-semibold"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Slight delay for staggered effect
                >
                  TailwindCSS
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="mt-[85px]">
            <AnimatePresence>
              <motion.p
                key="heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-[18px]"
              >
                PHILSAN.org is the official online platform of the Philippine
                Society of Animal Nutritionists (PHILSAN), serving as a vital
                hub for professionals, researchers, and stakeholders in the
                field of animal nutrition. The website provides easy access to
                valuable resources, scientific updates, and information on
                upcoming events such as annual conventions and training
                programs. It plays a key role in facilitating the exchange of
                knowledge and best practices that support the continued growth
                and modernization of the industry.
                <br />
                <br />
                The platform is continuously improved to ensure a user-friendly
                experience across all devices. With a responsive and efficient
                interface, PHILSAN.org is designed to meet the evolving needs of
                its community—promoting collaboration, innovation, and
                sustainable approaches to animal nutrition. By centralizing
                information and fostering professional engagement, the website
                helps reinforce PHILSAN’s mission of advancing the science and
                application of animal nutrition in the Philippines.
                <br />
                <br />
                Whether you're a student, practitioner, or policymaker,
                PHILSAN.org offers a reliable space to stay informed, connected,
                and involved in the ongoing development of animal nutrition in
                the country.
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-start items-center py-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <div className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#349544] rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/Philsan/Philsan Logomark@300x 2.png"
                  alt="Hovered Image"
                  width={88}
                  height={128}
                  unoptimized
                  className=""
                />
              </div>
              <div className="rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/SanSan/sansan_web_asset_1.png"
                  alt="Hovered Image"
                  width={556}
                  height={268}
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-[30px] max-w-[556px] max-h-[268px] flex justify-center items-center overflow-hidden">
                {/* <video
                  src="/assets/Philsan/SDE.mp4" // make sure this path is correct
                  width={556}
                  height={268}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="scale-[150%] lg:scale-[125%] object-cover"
                /> */}
              </div>
              <div className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#DB0102] rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/Philsan/Philsan-Logo-2 1.png"
                  alt="Hovered Image"
                  width={415}
                  height={106}
                  unoptimized
                  className="p-6"
                />
              </div>
            </div>
          </div>
          <div className="border-solid border-[2px] border-[#30363D] rounded-[30px] overflow-hidden">
            <Image
              src="/assets/SanSan/sansan_web_asset_2.png"
              alt="Hovered Image"
              width={268}
              height={550}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
