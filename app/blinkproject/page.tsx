"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SansanWeb() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center items-center">
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
        <div className="grid grid-cols-2 py-8 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px]">
              Blink Creative Studio <span className="text-[#A30A24]">|</span>{" "}
              Company Website
            </h1>
            <p className="text-[32px]">
              A multimedia powerhouse crafting design, production, and marketing
              solutions with purpose and artistry.
            </p>
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
            <p className="text-[18px]">
              In today’s digital-first world, a company’s website is not just a
              presence—it’s a platform for communication, credibility, and
              growth. The Blink Creative Studio Website was developed to reflect
              the studio’s expertise in design, production, and marketing, while
              serving as a central hub for showcasing its diverse portfolio and
              expanding creative ventures.
              <br />
              <br />
              Built with a focus on functionality, scalability, and visual
              clarity, the website features a clean interface, responsive
              layout, and dynamic content structure. It highlights the studio’s
              collaborative culture and commitment to delivering effective,
              artistic outputs across corporate, academic, and personal
              multimedia projects.
              <br />
              <br />
              As part of ongoing development and support, regular maintenance,
              revisions, and feature enhancements are implemented to ensure
              optimal performance and user experience. The website evolves
              alongside Blink Creative Studio, supporting its growing
              services—including its expansion into film, TV, and web series
              production.
              <br />
              <br />
              This platform stands as a strategic tool that communicates the
              studio’s creative direction, strengthens its brand identity, and
              supports its vision of exceeding expectations with every
              milestone.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center py-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <div className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#DB0102] rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/JAYSON_ANIMATED.gif"
                  alt="Hovered Image"
                  width={210}
                  height={317}
                  unoptimized
                  className=""
                />
              </div>
              <div className="rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/sansan_web_asset_1.png"
                  alt="Hovered Image"
                  width={556}
                  height={268}
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/sansan_web_asset_3.png"
                  alt="Hovered Image"
                  width={556}
                  height={268}
                  className=""
                />
              </div>
              <div className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#DB0102] rounded-[30px] overflow-hidden">
                <svg
                  width="106"
                  height="82"
                  viewBox="0 0 106 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_205_941)">
                    <path
                      d="M4.595175 38.2919L0.863838 28.0393C4.64244 28.5593 11.1126 29.3096 15.2347 29.3081C17.5246 29.3071 18.2115 28.9013 18.211 27.975C18.211 27.1638 17.8099 27.0482 13.8022 26.4125C3.03846 24.7374 0.00295871 21.7267 2.05545e-06 13.6173C-0.00394015 2.55406 5.66298 0.00349176 15.1667 1.93472e-06C19.6322 -0.00149371 26.4458 0.864482 30.3387 1.50013L29.9992 11.9262C26.5069 11.5802 20.4379 11.0608 16.3158 11.0628C13.9687 11.0638 13.3961 11.2956 13.3961 12.1062C13.3961 12.9169 13.7972 13.2065 17.4615 14.0161C28.3977 16.5029 31.6042 17.9497 31.6076 27.0432C31.6111 36.9478 26.2309 40.3673 16.441 40.3708C10.4868 40.3728 3.73081 39.1594 4.595175 38.2919Z"
                      fill="white"
                    />
                    <path
                      d="M39.8999 0.743806L59.9953 0.736328L68.6544 39.5407L55.2573 39.5457L54.1677 35.0862L45.4082 35.0897L44.4936 39.5502L31.4404 39.5552L39.8999 0.743806ZM52.7899 24.8346L50.7237 11.2816H49.2922L47.1215 24.8366L52.7894 24.8346H52.7899Z"
                      fill="white"
                    />
                    <path
                      d="M70.0137 0.732221L83.0668 0.727236L91.889 15.4359H92.6907L92.6853 0.723247L105.968 0.718262L105.982 39.5261L92.8711 39.5311L84.1632 23.7217H83.3043L83.3102 39.5346L70.028 39.5396L70.0137 0.731723V0.732221Z"
                      fill="white"
                    />
                    <path
                      d="M0.313729 79.9208L0.882393 69.6682C4.661 70.1882 11.1311 70.9385 15.2532 70.937C17.5431 70.936 18.2301 70.5302 18.2296 69.6039C18.2296 68.7927 17.8285 68.6771 13.8207 68.0414C3.05701 66.3663 0.0215134 63.3556 0.0185567 55.2462C0.0146145 44.183 5.68153 41.6324 15.1852 41.6289C19.6507 41.6274 26.4643 42.4934 30.3573 43.129L30.0178 53.5551C26.5255 53.2092 20.4564 52.6897 16.3344 52.6917C13.9873 52.6927 13.4147 52.9245 13.4147 53.7351C13.4147 54.5458 13.8158 54.8354 17.4801 55.6451C28.4162 58.1318 31.6227 59.5786 31.6262 68.6721C31.6296 78.5767 26.2495 81.9963 16.4595 81.9997C10.5053 82.0017 3.74936 80.7883 0.313729 79.9208Z"
                      fill="#DB0102"
                    />
                    <path
                      d="M39.9185 42.3727L60.0139 42.3652L68.6729 81.1696L55.2758 81.1746L54.1863 76.7151L45.4267 76.7186L44.5121 81.1791L31.459 81.1841L39.918 42.3732L39.9185 42.3727ZM52.8085 66.4635L50.7423 52.9105H49.3108L47.1401 66.4655L52.808 66.4635H52.8085Z"
                      fill="#DB0102"
                    />
                    <path
                      d="M70.0312 42.3611L83.0849 42.3561L91.907 57.0648H92.7088L92.7034 42.3522L105.986 42.3472L106 81.1551L92.8891 81.16L84.1808 65.3506H83.3219L83.3278 81.1635L70.0455 81.1685L70.0312 42.3606V42.3611Z"
                      fill="#DB0102"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_205_941">
                      <rect width="106" height="82" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="border-solid border-[2px] border-[#30363D] rounded-[30px] overflow-hidden">
            <Image
              src="/assets/sansan_web_asset_2.png"
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
