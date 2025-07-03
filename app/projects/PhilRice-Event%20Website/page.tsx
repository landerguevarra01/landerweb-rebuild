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
                PhilRice <span className="text-[#DB0102]">|</span> Event Website
              </motion.h1>
              <motion.p
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-[32px]"
              >
                A custom event website built to present event information—such
                as the agenda, speaker lineup, and participation.
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              {/* NextJS */}
              <motion.div
                className="w-[162px] h-[56px] border-[2px] border-[#4993E2] rounded-[30px] flex items-center justify-start gap-2 p-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "rgba(26, 42, 69, 1)" }}
                >
                  <svg
                    width="32"
                    height="29"
                    viewBox="0 0 32 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 14.5033C32 12.3522 29.3453 10.3137 25.2752 9.04952C26.2144 4.84004 25.797 1.49099 23.9576 0.418768C23.5336 0.167258 23.0379 0.0481225 22.4965 0.0481225V1.52409C22.7966 1.52409 23.0379 1.58365 23.2401 1.69617C24.1272 2.21243 24.512 4.17817 24.212 6.70651C24.1402 7.32866 24.0228 7.98391 23.8793 8.6524C22.6009 8.3347 21.2051 8.08981 19.7375 7.93096C18.8569 6.70651 17.9437 5.59457 17.0241 4.62162C19.1504 2.61617 21.1464 1.51747 22.5031 1.51747V0.0415039C20.7093 0.0415039 18.3612 1.33876 15.987 3.58911C13.6127 1.352 11.2646 0.0679787 9.47085 0.0679787V1.54394C10.821 1.54394 12.8235 2.63602 14.9499 4.62824C14.0367 5.60119 13.1235 6.70651 12.256 7.93096C10.7819 8.08981 9.38606 8.3347 8.10762 8.65901C7.9576 7.99715 7.84672 7.35514 7.76845 6.7396C7.46188 4.21127 7.8402 2.24552 8.72075 1.72265C8.91643 1.60351 9.17081 1.55056 9.47085 1.55056V0.0745973C8.92295 0.0745973 8.42723 0.193733 7.99674 0.445243C6.16388 1.51747 5.75296 4.8599 6.69874 9.05613C2.64166 10.3269 0 12.3589 0 14.5033C0 16.6544 2.65471 18.6929 6.72483 19.9571C5.78557 24.1666 6.20302 27.5156 8.0424 28.5878C8.46637 28.8393 8.96209 28.9585 9.50999 28.9585C11.3037 28.9585 13.6519 27.6612 16.0261 25.4109C18.4003 27.648 20.7485 28.932 22.5422 28.932C23.0901 28.932 23.5858 28.8129 24.0163 28.5614C25.8492 27.4891 26.2601 24.1467 25.3143 19.9505C29.3583 18.6863 32 16.6477 32 14.5033ZM23.5075 10.0886C23.2662 10.9425 22.9662 11.8227 22.627 12.703C22.3596 12.1735 22.0791 11.644 21.7725 11.1145C21.4725 10.585 21.1529 10.0688 20.8333 9.56577C21.7595 9.70476 22.6531 9.87685 23.5075 10.0886ZM20.5202 17.1375C20.0114 18.0311 19.4896 18.8782 18.9482 19.6659C17.9764 19.7519 16.9914 19.7982 16 19.7982C15.0151 19.7982 14.0302 19.7519 13.0648 19.6725C12.5234 18.8849 11.9951 18.0443 11.4863 17.1574C10.9906 16.2903 10.5406 15.4101 10.1296 14.5232C10.534 13.6363 10.9906 12.7494 11.4798 11.8823C11.9886 10.9888 12.5104 10.1416 13.0518 9.35397C14.0236 9.26793 15.0086 9.2216 16 9.2216C16.9849 9.2216 17.9698 9.26793 18.9352 9.34736C19.4766 10.135 20.0049 10.9755 20.5137 11.8625C21.0094 12.7295 21.4594 13.6098 21.8704 14.4967C21.4594 15.3836 21.0094 16.2705 20.5202 17.1375ZM22.627 16.2771C22.9792 17.164 23.2793 18.0509 23.5271 18.9113C22.6726 19.1231 21.7725 19.3018 20.8398 19.4408C21.1594 18.9312 21.479 18.4083 21.779 17.8722C22.0791 17.3427 22.3596 16.8066 22.627 16.2771ZM16.013 23.3392C15.4064 22.7038 14.7998 21.9956 14.1998 21.2213C14.7868 21.2477 15.3869 21.2676 15.9935 21.2676C16.6066 21.2676 17.2132 21.2543 17.8068 21.2213C17.2197 21.9956 16.6131 22.7038 16.013 23.3392ZM11.1602 19.4408C10.234 19.3018 9.3404 19.1298 8.48594 18.918C8.72727 18.0641 9.02731 17.1839 9.36649 16.3036C9.63392 16.8331 9.91439 17.3626 10.221 17.8921C10.5275 18.4216 10.8406 18.9378 11.1602 19.4408ZM15.9804 5.66737C16.587 6.30277 17.1936 7.01096 17.7937 7.78535C17.2067 7.75887 16.6066 7.73902 16 7.73902C15.3869 7.73902 14.7803 7.75226 14.1867 7.78535C14.7737 7.01096 15.3804 6.30277 15.9804 5.66737ZM11.1537 9.56577C10.8341 10.0754 10.5145 10.5983 10.2144 11.1344C9.91439 11.6639 9.63392 12.1934 9.36649 12.7229C9.01427 11.836 8.71423 10.9491 8.46637 10.0886C9.32083 9.88347 10.221 9.70476 11.1537 9.56577ZM5.25071 17.8523C2.94171 16.8529 1.44802 15.5424 1.44802 14.5033C1.44802 13.4642 2.94171 12.1471 5.25071 11.1543C5.81166 10.9094 6.42479 10.6909 7.05748 10.4858C7.42927 11.783 7.91847 13.1332 8.52507 14.5165C7.92499 15.8932 7.44232 17.2368 7.07705 18.5275C6.43131 18.3223 5.81818 18.0972 5.25071 17.8523ZM8.75989 27.3104C7.87281 26.7942 7.48797 24.8284 7.78802 22.3001C7.85976 21.6779 7.97717 21.0227 8.12067 20.3542C9.3991 20.6719 10.7949 20.9168 12.2625 21.0756C13.1431 22.3001 14.0563 23.412 14.9759 24.385C12.8496 26.3904 10.8536 27.4891 9.49694 27.4891C9.20342 27.4825 8.95557 27.4229 8.75989 27.3104ZM24.2316 22.267C24.5381 24.7953 24.1598 26.7611 23.2792 27.284C23.0836 27.4031 22.8292 27.456 22.5291 27.456C21.179 27.456 19.1765 26.364 17.0501 24.3717C17.9633 23.3988 18.8765 22.2935 19.744 21.069C21.2181 20.9102 22.6139 20.6653 23.8924 20.341C24.0424 21.0095 24.1598 21.6515 24.2316 22.267ZM26.7428 17.8523C26.1818 18.0972 25.5687 18.3157 24.936 18.5208C24.5642 17.2236 24.075 15.8734 23.4684 14.4901C24.0685 13.1134 24.5512 11.7698 24.9164 10.4791C25.5622 10.6843 26.1753 10.9094 26.7493 11.1543C29.0583 12.1537 30.552 13.4642 30.552 14.5033C30.5455 15.5424 29.0518 16.8595 26.7428 17.8523Z"
                      fill="#4993E2"
                    />
                    <path
                      d="M15.9926 17.528C17.6388 17.528 18.9734 16.1738 18.9734 14.5032C18.9734 12.8327 17.6388 11.4785 15.9926 11.4785C14.3463 11.4785 13.0117 12.8327 13.0117 14.5032C13.0117 16.1738 14.3463 17.528 15.9926 17.528Z"
                      fill="#4993E2"
                    />
                  </svg>
                </div>

                <motion.p
                  className="text-[22px] font-semibold"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Slight delay for staggered effect
                >
                  ReactJS
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
                The PhilRice Ugnay Palay website is a digital platform designed
                to provide a seamless and efficient experience for its users.
                Serving as an essential resource for agricultural professionals,
                researchers, and farmers, the website offers easy access to
                comprehensive event details, including schedules, speaker
                profiles, and other relevant information.
                <br />
                <br />
                With a strong emphasis on accessibility and functionality, the
                site ensures a smooth user experience across various devices.
                Ongoing updates and enhancements contribute to its effectiveness
                in supporting the Philippine Rice Research Institute’s mission
                to foster innovation, knowledge sharing, and collaboration
                within the rice industry.
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-start items-center py-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <div className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#0C6972] rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/Philrice/PhilRiceLogoWhite.png"
                  alt="Hovered Image"
                  width={210}
                  height={317}
                  unoptimized
                  className=""
                />
              </div>
              <div className="rounded-[30px] max-w-[556px] max-h-[268px] flex justify-center items-center overflow-hidden">
                <Image
                  src="/assets/Philrice/PHILRICE_WEBSITE BANNER.jpg"
                  alt="Hovered Image"
                  width={556}
                  height={268}
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-[30px] max-w-[556px] max-h-[268px] flex justify-center items-center overflow-hidden">
                <video
                  src="/assets/Philrice/PHILRICE_BUMPER_23SEC.mp4" // make sure this path is correct
                  width={556}
                  height={268}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#0e9147] rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/Philrice/DOALogo.png"
                  alt="Hovered Image"
                  width={210}
                  height={317}
                  unoptimized
                  className="p-2"
                />
              </div>
            </div>
          </div>
          <div className="border-solid border-[2px] border-[#30363D] rounded-[30px] overflow-hidden w-auto h-[550px] flex justify-center items-center">
            <Image
              src="/assets/Philrice/SocMed and Email announcement_Ugnay Palay 2024-05.png"
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
