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
                Blink Creative Studio <span className="text-[#DB0102]">|</span>{" "}
                Company Website
              </motion.h1>

              <motion.p
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-[32px]"
              >
                A multimedia powerhouse crafting design, production, and
                marketing solutions with purpose and artistry.
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              {/* NextJS */}
              <motion.div
                className="w-[152px] h-[56px] border-[2px] border-[#E44756] rounded-[30px] flex items-center justify-start gap-2 p-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "rgba(117, 31, 48, 1)" }}
                >
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6318 4.00975L20 0H0L1.10499 12.2933H14.9079L14.3666 17.5365L9.94615 18.748L5.46077 17.4262L5.22246 14.2979H1.25673L1.79853 20.6868L9.9459 23L18.1582 20.6868L19.2632 8.21752H4.76723L4.35553 4.00975H19.6318Z"
                      fill="#E44756"
                    />
                  </svg>
                </div>

                <motion.p
                  className="text-[22px] font-semibold"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Slight delay for staggered effect
                >
                  HTML
                </motion.p>
              </motion.div>

              {/* TailwindCSS */}
              <motion.div
                className="w-[129px] h-[56px] border-[2px] border-[#4993E2] rounded-[30px] flex items-center justify-start gap-2 p-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delayed for staggered effect
              >
                <div
                  className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "rgba(26, 42, 69, 1)" }}
                >
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41389 0.344482H18.7852L18.2875 3.90414H9.5697L18.1481 7.56302L17.6506 11.0042H5.01156L5.46948 15.8099L9.74885 16.6406L13.6299 15.6518L13.9286 12.9225H17.4914L17.0138 18.5987L9.37068 20.7148L2.04584 18.4009L1.11036 7.30577H8.85336L0.414122 3.82513L0.41389 0.344482Z"
                      fill="#4993E2"
                    />
                  </svg>
                </div>

                <motion.p
                  className="text-[22px] font-semibold"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Slight delay for staggered effect
                >
                  CSS
                </motion.p>
              </motion.div>

              {/* Vanilla Javascript */}
              <motion.div
                className="w-[259px] h-[56px] border-[2px] border-[#FCE545] rounded-[30px] flex items-center justify-start gap-2 p-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delayed for staggered effect
              >
                <div
                  className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "rgba(56, 35, 14, 1)" }}
                >
                  <svg
                    width="27"
                    height="19"
                    viewBox="0 0 27 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7336 13.2966C17.5589 14.632 18.6325 15.6137 20.5314 15.6137C22.1266 15.6137 23.1456 14.8235 23.1456 13.7316C23.1456 12.4233 22.0987 11.9598 20.3428 11.1987L19.3804 10.7894C16.6023 9.61634 14.7567 8.14682 14.7567 5.0402C14.7567 2.1785 16.9567 0 20.3949 0C22.8426 0 24.6023 0.84433 25.8704 3.05506L22.8725 4.96286C22.2125 3.78982 21.5004 3.32769 20.3949 3.32769C19.2672 3.32769 18.5525 4.03667 18.5525 4.96286C18.5525 6.10753 19.2679 6.57095 20.9197 7.27993L21.8821 7.68856C25.1531 9.0788 27 10.4961 27 13.6827C27 17.118 24.2772 19 20.6205 19C17.0451 19 14.7353 17.3113 13.605 15.098L16.7336 13.2966ZM3.13382 13.6272C3.7386 14.6907 4.28876 15.5898 5.61148 15.5898C6.87632 15.5898 7.67425 15.0993 7.67425 13.1922V0.217848H11.524V13.2437C11.524 17.1947 9.18685 18.9929 5.77536 18.9929C2.69291 18.9929 0.907825 17.4119 0 15.5076L3.13382 13.6272Z"
                      fill="#FCE545"
                    />
                  </svg>
                </div>

                <motion.p
                  className="text-[22px] font-semibold"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Slight delay for staggered effect
                >
                  Vanilla Javascript
                </motion.p>
              </motion.div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h1 className="text-[#DB0102] text-2xl">
                Currently Rebuilding Using
              </h1>
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
                In today’s digital-first world, a company’s website is not just
                a presence—it’s a platform for communication, credibility, and
                growth. The Blink Creative Studio Website was developed to
                reflect the studio’s expertise in design, production, and
                marketing, while serving as a central hub for showcasing its
                diverse portfolio and expanding creative ventures.
                <br />
                <br />
                Built with a focus on functionality, scalability, and visual
                clarity, the website features a clean interface, responsive
                layout, and dynamic content structure. It highlights the
                studio’s collaborative culture and commitment to delivering
                effective, artistic outputs across corporate, academic, and
                personal multimedia projects.
                <br />
                <br />
                As part of ongoing development and support, regular maintenance,
                revisions, and feature enhancements are implemented to ensure
                optimal performance and user experience. The website evolves
                alongside Blink Creative Studio, supporting its growing
                services—including its expansion into film, and web series
                production.
                <br />
                <br />
                This platform stands as a strategic tool that communicates the
                studio’s creative direction, strengthens its brand identity, and
                supports its vision of exceeding expectations with every
                milestone.
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-start items-center py-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <div
                className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#ffffff] rounded-[30px] overflow-hidden transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={
                    isHovered
                      ? "/assets/Blink/BCS_LOGOMARK_RED.png"
                      : "/assets/Blink/BCS_LOGOMARK_WHITE.png"
                  }
                  alt="Blink Logo"
                  width={210}
                  height={317}
                  unoptimized
                  className="w-[110px] h-auto transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="rounded-[30px] overflow-hidden">
                <Image
                  src="/assets/Blink/Blink_Cover.jpg"
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
                  src="/assets/Blink/BLINK 10th_Animated Logo_sample.mp4" // make sure this path is correct
                  width={556}
                  height={268}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover"
                />
              </div>

              <div className="flex justify-center items-center w-[268px] h-[268px] border-solid border-[2px] border-[#A30A24] rounded-[30px] overflow-hidden">
                <svg
                  width="222"
                  height="85"
                  viewBox="0 0 222 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_453_21)">
                    <path
                      d="M40.1248 0.576172H15.4362H11.416L-0.382812 23.9928L15.4362 24.03V82.8617H44.8548V0.576172H40.1248Z"
                      fill="#A30A24"
                    />
                    <path
                      d="M78.6366 85.0857C102.085 85.0857 121.095 66.1626 121.095 42.8197C121.095 19.4768 102.085 0.553711 78.6366 0.553711C55.1878 0.553711 36.1787 19.4768 36.1787 42.8197C36.1787 66.1626 55.1878 85.0857 78.6366 85.0857Z"
                      fill="#A30A24"
                    />
                    <path
                      d="M69.8427 60.6867L64.1562 62.2488V31.3266L69.8427 29.772V60.6867Z"
                      fill="#F2F2F2"
                    />
                    <path
                      d="M78.3749 35.5819V33.9082L93.1253 29.869V23.3975L71.8291 29.2293V43.8461L93.1253 38.0143V31.5427L78.3749 35.5819Z"
                      fill="#F2F2F2"
                    />
                    <path
                      d="M86.5795 49.6334V47.9597L71.8291 51.9988V45.5273L93.1253 39.688V54.3122L71.8291 60.1441V53.6725L86.5795 49.6334Z"
                      fill="#F2F2F2"
                    />
                    <path
                      d="M146.218 26.9679H143.998C143.939 26.6034 143.819 26.2836 143.647 26.0009C143.475 25.7182 143.266 25.4802 143.012 25.2868C142.758 25.0934 142.474 24.9446 142.153 24.8405C141.831 24.7363 141.488 24.6917 141.114 24.6917C140.456 24.6917 139.866 24.8553 139.358 25.1826C138.85 25.5099 138.446 25.9934 138.162 26.6183C137.871 27.2506 137.729 28.0167 137.729 28.9242C137.729 29.8318 137.871 30.6277 138.162 31.26C138.454 31.8922 138.85 32.3683 139.358 32.6882C139.866 33.008 140.449 33.1717 141.099 33.1717C141.465 33.1717 141.801 33.127 142.123 33.0303C142.444 32.9336 142.728 32.7923 142.982 32.6063C143.236 32.4204 143.453 32.1823 143.625 31.9071C143.797 31.6319 143.924 31.3195 143.991 30.9624L146.21 30.9773C146.128 31.5501 145.949 32.0931 145.672 32.5915C145.396 33.0973 145.037 33.5362 144.596 33.923C144.155 34.3098 143.64 34.6073 143.042 34.823C142.452 35.0388 141.794 35.1429 141.069 35.1429C140.001 35.1429 139.052 34.8974 138.215 34.4065C137.378 33.9155 136.72 33.2089 136.235 32.279C135.756 31.3492 135.51 30.2409 135.51 28.9391C135.51 27.6374 135.756 26.5216 136.242 25.5992C136.728 24.6768 137.393 23.9627 138.23 23.4718C139.067 22.9808 140.016 22.7354 141.077 22.7354C141.749 22.7354 142.377 22.8321 142.96 23.018C143.543 23.204 144.058 23.4866 144.514 23.8437C144.97 24.2082 145.343 24.6545 145.635 25.1752C145.926 25.7033 146.121 26.2984 146.21 26.9679H146.218Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M149.64 34.9719H147.294L151.568 22.8916H154.281L158.562 34.9719H156.216L152.973 25.3686H152.876L149.64 34.9719ZM149.722 30.2335H156.119V31.989H149.722V30.2335Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M158.159 24.7289V22.8916H167.843V24.7289H164.092V34.9719H161.91V24.7289H158.159Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M179.559 26.9679H177.34C177.28 26.6034 177.161 26.2836 176.989 26.0009C176.817 25.7182 176.608 25.4802 176.354 25.2868C176.1 25.0934 175.816 24.9446 175.494 24.8405C175.173 24.7363 174.829 24.6917 174.456 24.6917C173.798 24.6917 173.215 24.8553 172.7 25.1826C172.184 25.5099 171.788 25.9934 171.504 26.6183C171.213 27.2506 171.071 28.0167 171.071 28.9242C171.071 29.8318 171.213 30.6277 171.504 31.26C171.796 31.8922 172.192 32.3683 172.7 32.6882C173.208 33.008 173.791 33.1717 174.441 33.1717C174.807 33.1717 175.143 33.127 175.465 33.0303C175.778 32.9336 176.07 32.7923 176.324 32.6063C176.578 32.4204 176.795 32.1823 176.967 31.9071C177.138 31.6319 177.265 31.3195 177.333 30.9624L179.552 30.9773C179.47 31.5501 179.29 32.0931 179.014 32.5915C178.737 33.0973 178.379 33.5362 177.938 33.923C177.497 34.3098 176.981 34.6073 176.384 34.823C175.793 35.0388 175.136 35.1429 174.411 35.1429C173.342 35.1429 172.393 34.8974 171.557 34.4065C170.72 33.9155 170.062 33.2089 169.576 32.279C169.091 31.3492 168.852 30.2409 168.852 28.9391C168.852 27.6374 169.098 26.5216 169.584 25.5992C170.07 24.6768 170.735 23.9627 171.571 23.4718C172.408 22.9808 173.357 22.7354 174.418 22.7354C175.091 22.7354 175.726 22.8321 176.302 23.018C176.884 23.204 177.4 23.4866 177.856 23.8437C178.312 24.2082 178.685 24.6545 178.977 25.1752C179.268 25.6959 179.462 26.2984 179.552 26.9679H179.559Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M181.577 34.9719V22.8916H183.774V28.0019H189.393V22.8916H191.598V34.9719H189.393V29.8392H183.774V34.9719H181.577Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M196.185 22.8916V34.9719H193.988V22.8916H196.185Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M208.544 22.8916V34.9719H206.587L200.87 26.7448H200.773V34.9719H198.576V22.8916H200.541L206.25 31.1261H206.355V22.8916H208.544Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M219.065 26.7524C218.968 26.4326 218.833 26.1499 218.661 25.897C218.489 25.6441 218.288 25.4283 218.049 25.2424C217.81 25.0639 217.533 24.9225 217.227 24.8333C216.92 24.744 216.584 24.6919 216.218 24.6919C215.568 24.6919 214.985 24.8556 214.477 25.1829C213.969 25.5102 213.565 25.9862 213.274 26.6185C212.982 27.2508 212.84 28.017 212.84 28.9245C212.84 29.832 212.982 30.6056 213.274 31.2453C213.565 31.8776 213.961 32.3611 214.477 32.6884C214.992 33.0157 215.59 33.1793 216.263 33.1793C216.875 33.1793 217.413 33.0603 217.862 32.8223C218.31 32.5843 218.661 32.2495 218.908 31.8181C219.155 31.3866 219.274 30.8734 219.274 30.2857L219.775 30.3601H216.479V28.6493H221.404V30.0998C221.404 31.1337 221.18 32.0264 220.739 32.7851C220.298 33.5364 219.685 34.124 218.915 34.5257C218.138 34.9348 217.249 35.1357 216.248 35.1357C215.127 35.1357 214.148 34.8828 213.304 34.3844C212.459 33.886 211.802 33.1719 211.331 32.2421C210.86 31.3197 210.621 30.2188 210.621 28.9394C210.621 27.9649 210.763 27.0946 211.04 26.3284C211.316 25.5622 211.705 24.9076 212.213 24.3721C212.713 23.8365 213.304 23.4274 213.976 23.1447C214.649 22.862 215.388 22.7207 216.181 22.7207C216.853 22.7207 217.481 22.8174 218.056 23.0108C218.631 23.2042 219.155 23.4794 219.603 23.8365C220.059 24.1935 220.425 24.6175 220.716 25.1085C221.008 25.5994 221.202 26.1425 221.292 26.7375H219.05L219.065 26.7524Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M142.421 46.1445C142.369 45.6312 142.137 45.2295 141.727 44.9394C141.316 44.6493 140.785 44.508 140.135 44.508C139.679 44.508 139.283 44.5749 138.954 44.7162C138.625 44.8501 138.379 45.0435 138.2 45.2741C138.028 45.5122 137.938 45.78 137.931 46.0849C137.931 46.3379 137.99 46.5536 138.102 46.7395C138.222 46.9255 138.379 47.0817 138.581 47.2082C138.782 47.3346 139.007 47.4462 139.253 47.528C139.5 47.6173 139.746 47.6842 139.993 47.7437L141.129 48.0264C141.585 48.1306 142.025 48.2793 142.451 48.4579C142.877 48.6364 143.258 48.867 143.595 49.1422C143.931 49.4174 144.2 49.7522 144.394 50.139C144.588 50.5258 144.693 50.987 144.693 51.5077C144.693 52.2143 144.514 52.8392 144.148 53.3748C143.781 53.9103 143.258 54.3269 142.571 54.6319C141.883 54.9294 141.054 55.0856 140.083 55.0856C139.111 55.0856 138.319 54.9369 137.624 54.6468C136.929 54.3566 136.391 53.9326 136.003 53.3748C135.614 52.8169 135.405 52.1399 135.375 51.3366H137.535C137.564 51.7606 137.699 52.1102 137.923 52.3854C138.147 52.6607 138.454 52.8764 138.82 53.0103C139.186 53.1516 139.604 53.2185 140.06 53.2185C140.516 53.2185 140.957 53.1442 141.316 53.0028C141.674 52.8615 141.958 52.6606 142.167 52.4003C142.377 52.1399 142.474 51.8424 142.481 51.4928C142.481 51.1804 142.384 50.92 142.205 50.7117C142.025 50.5035 141.771 50.3324 141.443 50.191C141.114 50.0497 140.733 49.9233 140.299 49.8191L138.917 49.4621C137.916 49.2092 137.131 48.8149 136.548 48.2942C135.973 47.7735 135.681 47.0817 135.681 46.2188C135.681 45.5047 135.876 44.8873 136.264 44.3518C136.653 43.8162 137.183 43.3996 137.856 43.1021C138.528 42.8045 139.291 42.6558 140.135 42.6558C140.979 42.6558 141.749 42.8045 142.399 43.1021C143.049 43.3996 143.557 43.8087 143.931 44.3369C144.304 44.865 144.491 45.4675 144.506 46.1445H142.392H142.421Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M146.127 44.6567V42.8193H155.811V44.6567H152.06V54.8996H149.878V44.6567H146.127Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M167.984 48.8672C167.984 50.169 167.737 51.2848 167.251 52.2072C166.766 53.1295 166.101 53.8436 165.264 54.3346C164.427 54.8255 163.47 55.071 162.409 55.071C161.348 55.071 160.399 54.8255 159.555 54.3346C158.711 53.8436 158.053 53.1295 157.567 52.2072C157.082 51.2848 156.835 50.169 156.835 48.8747C156.835 47.5804 157.082 46.4571 157.567 45.5348C158.053 44.6124 158.718 43.8983 159.555 43.4073C160.392 42.9164 161.348 42.6709 162.409 42.6709C163.47 42.6709 164.419 42.9164 165.264 43.4073C166.101 43.8983 166.766 44.6049 167.251 45.5348C167.737 46.4571 167.984 47.5729 167.984 48.8747V48.8672ZM165.772 48.8672C165.772 47.9523 165.63 47.1787 165.339 46.5464C165.047 45.9141 164.659 45.4381 164.15 45.1108C163.642 44.7835 163.059 44.6272 162.402 44.6272C161.744 44.6272 161.161 44.7909 160.653 45.1108C160.145 45.4306 159.749 45.9141 159.465 46.5464C159.181 47.1787 159.032 47.9523 159.032 48.8672C159.032 49.7822 159.174 50.5558 159.465 51.1881C159.749 51.8203 160.145 52.2964 160.653 52.6237C161.161 52.951 161.744 53.1072 162.402 53.1072C163.059 53.1072 163.642 52.9436 164.15 52.6237C164.659 52.3039 165.055 51.8203 165.339 51.1881C165.622 50.5558 165.772 49.7822 165.772 48.8672Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M170.07 54.9074V42.8271H174.62C175.554 42.8271 176.339 42.9908 176.967 43.3107C177.602 43.6305 178.08 44.0843 178.409 44.6645C178.738 45.2447 178.894 45.9216 178.894 46.6878C178.894 47.4539 178.73 48.1309 178.401 48.7036C178.073 49.269 177.587 49.7078 176.944 50.0203C176.302 50.3327 175.517 50.4814 174.583 50.4814H171.34V48.6664H174.284C174.83 48.6664 175.278 48.592 175.622 48.4433C175.965 48.2945 176.227 48.0713 176.391 47.7738C176.563 47.4837 176.645 47.1192 176.645 46.6952C176.645 46.2712 176.563 45.8993 176.391 45.5943C176.219 45.2893 175.965 45.0587 175.614 44.8951C175.263 44.7314 174.815 44.657 174.269 44.657H172.252V54.9074H170.055H170.07ZM176.339 49.4326L179.343 54.9074H176.892L173.94 49.4326H176.339Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M183.124 42.8271V54.9074H180.927V42.8271H183.124Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M185.515 54.9074V42.8271H193.405V44.6645H187.712V47.9449H192.994V49.7822H187.712V53.0775H193.45V54.9148H185.515V54.9074Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M202.245 46.1445C202.192 45.6312 201.961 45.2295 201.55 44.9394C201.139 44.6493 200.608 44.508 199.958 44.508C199.502 44.508 199.106 44.5749 198.778 44.7162C198.449 44.8576 198.202 45.0435 198.023 45.2741C197.851 45.5122 197.761 45.78 197.754 46.0849C197.754 46.3379 197.814 46.5536 197.926 46.7395C198.045 46.9255 198.202 47.0817 198.404 47.2082C198.606 47.3346 198.83 47.4462 199.076 47.528C199.323 47.6173 199.57 47.6842 199.816 47.7437L200.952 48.0264C201.408 48.1306 201.849 48.2793 202.275 48.4579C202.7 48.6364 203.082 48.867 203.418 49.1422C203.754 49.4174 204.023 49.7522 204.217 50.139C204.412 50.5258 204.516 50.987 204.516 51.5077C204.516 52.2143 204.337 52.8392 203.971 53.3748C203.605 53.9103 203.082 54.3269 202.394 54.6319C201.707 54.9294 200.885 55.0856 199.913 55.0856C198.942 55.0856 198.15 54.9369 197.455 54.6468C196.76 54.3566 196.222 53.9326 195.833 53.3748C195.445 52.8169 195.236 52.1399 195.198 51.3366H197.358C197.388 51.7606 197.515 52.1102 197.746 52.3854C197.978 52.6681 198.277 52.8764 198.643 53.0103C199.009 53.1516 199.428 53.2185 199.883 53.2185C200.339 53.2185 200.78 53.1442 201.146 53.0028C201.505 52.8615 201.789 52.6606 201.998 52.4003C202.207 52.1399 202.312 51.8424 202.312 51.4928C202.312 51.1804 202.215 50.92 202.035 50.7117C201.856 50.5035 201.602 50.3324 201.273 50.191C200.944 50.0497 200.571 49.9233 200.13 49.8191L198.748 49.4621C197.746 49.2092 196.962 48.8149 196.379 48.2942C195.804 47.7735 195.512 47.0817 195.512 46.2188C195.512 45.5047 195.706 44.8873 196.095 44.3518C196.483 43.8162 197.014 43.3996 197.687 43.1021C198.359 42.8045 199.121 42.6558 199.966 42.6558C200.81 42.6558 201.58 42.8045 202.23 43.1021C202.88 43.3996 203.388 43.8087 203.762 44.3369C204.135 44.865 204.322 45.4675 204.337 46.1445H202.222H202.245Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M136.897 73.7852V73.2099L139.058 70.8448C139.311 70.5678 139.52 70.3271 139.684 70.1225C139.848 69.9158 139.97 69.7219 140.049 69.5408C140.13 69.3576 140.17 69.1658 140.17 68.9656C140.17 68.7354 140.115 68.5362 140.004 68.3679C139.895 68.1996 139.746 68.0696 139.556 67.978C139.367 67.8864 139.154 67.8406 138.917 67.8406C138.666 67.8406 138.446 67.8928 138.259 67.9972C138.073 68.0994 137.93 68.2433 137.827 68.4286C137.727 68.614 137.677 68.8313 137.677 69.0806H136.923C136.923 68.6971 137.011 68.3604 137.188 68.0707C137.365 67.7809 137.606 67.555 137.91 67.3931C138.217 67.2312 138.561 67.1502 138.943 67.1502C139.326 67.1502 139.666 67.2312 139.962 67.3931C140.258 67.555 140.491 67.7734 140.659 68.0483C140.827 68.3232 140.911 68.6289 140.911 68.9656C140.911 69.2063 140.868 69.4418 140.78 69.6719C140.695 69.8999 140.546 70.1545 140.333 70.4357C140.122 70.7148 139.829 71.0558 139.454 71.4585L137.984 73.0309V73.082H141.027V73.7852H136.897ZM144.481 73.8746C144 73.8746 143.59 73.7436 143.251 73.4815C142.912 73.2173 142.653 72.8349 142.474 72.3342C142.295 71.8313 142.206 71.2241 142.206 70.5124C142.206 69.805 142.295 69.201 142.474 68.7003C142.655 68.1974 142.915 67.8139 143.254 67.5497C143.595 67.2834 144.004 67.1502 144.481 67.1502C144.959 67.1502 145.367 67.2834 145.706 67.5497C146.046 67.8139 146.306 68.1974 146.485 68.7003C146.666 69.201 146.757 69.805 146.757 70.5124C146.757 71.2241 146.668 71.8313 146.489 72.3342C146.31 72.8349 146.051 73.2173 145.712 73.4815C145.373 73.7436 144.963 73.8746 144.481 73.8746ZM144.481 73.1715C144.959 73.1715 145.329 72.9414 145.594 72.4812C145.858 72.021 145.99 71.3647 145.99 70.5124C145.99 69.9457 145.929 69.4631 145.808 69.0646C145.688 68.6662 145.516 68.3626 145.29 68.1538C145.066 67.945 144.797 67.8406 144.481 67.8406C144.008 67.8406 143.639 68.0739 143.372 68.5405C143.106 69.005 142.973 69.6623 142.973 70.5124C142.973 71.0792 143.033 71.5607 143.152 71.957C143.271 72.3533 143.443 72.6548 143.666 72.8615C143.892 73.0682 144.164 73.1715 144.481 73.1715ZM150.273 67.2397V73.7852H149.48V68.0707H149.442L147.844 69.1317V68.3263L149.48 67.2397H150.273ZM154.201 73.8746C153.826 73.8746 153.488 73.8001 153.187 73.6509C152.887 73.5018 152.646 73.2972 152.465 73.0373C152.284 72.7773 152.185 72.4812 152.168 72.1488H152.935C152.965 72.445 153.099 72.69 153.338 72.8839C153.578 73.0756 153.866 73.1715 154.201 73.1715C154.469 73.1715 154.708 73.1087 154.916 72.983C155.127 72.8572 155.293 72.6847 155.412 72.4652C155.533 72.2436 155.594 71.9933 155.594 71.7141C155.594 71.4286 155.531 71.174 155.405 70.9503C155.282 70.7244 155.111 70.5465 154.894 70.4165C154.677 70.2866 154.429 70.2205 154.149 70.2184C153.949 70.2163 153.744 70.2472 153.533 70.3111C153.322 70.3729 153.148 70.4528 153.012 70.5508L152.27 70.4613L152.666 67.2397H156.067V67.9428H153.331L153.101 69.8732H153.139C153.274 69.7667 153.442 69.6783 153.644 69.608C153.847 69.5376 154.058 69.5025 154.277 69.5025C154.678 69.5025 155.035 69.5984 155.348 69.7901C155.663 69.9798 155.91 70.2397 156.089 70.57C156.271 70.9002 156.361 71.2773 156.361 71.7013C156.361 72.119 156.267 72.4918 156.08 72.82C155.894 73.146 155.639 73.4038 155.313 73.5934C154.987 73.7809 154.616 73.8746 154.201 73.8746ZM162.987 70.1609V70.864H160.124V70.1609H162.987ZM166.833 73.7852V73.2099L168.993 70.8448C169.247 70.5678 169.456 70.3271 169.62 70.1225C169.784 69.9158 169.905 69.7219 169.984 69.5408C170.065 69.3576 170.106 69.1658 170.106 68.9656C170.106 68.7354 170.05 68.5362 169.939 68.3679C169.831 68.1996 169.682 68.0696 169.492 67.978C169.302 67.8864 169.089 67.8406 168.853 67.8406C168.601 67.8406 168.382 67.8928 168.194 67.9972C168.009 68.0994 167.865 68.2433 167.763 68.4286C167.663 68.614 167.613 68.8313 167.613 69.0806H166.858C166.858 68.6971 166.947 68.3604 167.124 68.0707C167.301 67.7809 167.541 67.555 167.846 67.3931C168.153 67.2312 168.497 67.1502 168.878 67.1502C169.262 67.1502 169.602 67.2312 169.898 67.3931C170.194 67.555 170.426 67.7734 170.595 68.0483C170.763 68.3232 170.847 68.6289 170.847 68.9656C170.847 69.2063 170.803 69.4418 170.716 69.6719C170.631 69.8999 170.482 70.1545 170.269 70.4357C170.058 70.7148 169.765 71.0558 169.39 71.4585L167.919 73.0309V73.082H170.962V73.7852H166.833ZM174.417 73.8746C173.935 73.8746 173.525 73.7436 173.187 73.4815C172.848 73.2173 172.589 72.8349 172.41 72.3342C172.231 71.8313 172.141 71.2241 172.141 70.5124C172.141 69.805 172.231 69.201 172.41 68.7003C172.591 68.1974 172.851 67.8139 173.19 67.5497C173.531 67.2834 173.94 67.1502 174.417 67.1502C174.894 67.1502 175.302 67.2834 175.641 67.5497C175.982 67.8139 176.242 68.1974 176.421 68.7003C176.602 69.201 176.693 69.805 176.693 70.5124C176.693 71.2241 176.603 71.8313 176.424 72.3342C176.245 72.8349 175.986 73.2173 175.647 73.4815C175.309 73.7436 174.899 73.8746 174.417 73.8746ZM174.417 73.1715C174.894 73.1715 175.265 72.9414 175.529 72.4812C175.793 72.021 175.926 71.3647 175.926 70.5124C175.926 69.9457 175.865 69.4631 175.743 69.0646C175.624 68.6662 175.451 68.3626 175.226 68.1538C175.002 67.945 174.732 67.8406 174.417 67.8406C173.944 67.8406 173.574 68.0739 173.308 68.5405C173.042 69.005 172.908 69.6623 172.908 70.5124C172.908 71.0792 172.968 71.5607 173.087 71.957C173.207 72.3533 173.378 72.6548 173.602 72.8615C173.828 73.0682 174.1 73.1715 174.417 73.1715ZM177.907 73.7852V73.2099L180.068 70.8448C180.321 70.5678 180.53 70.3271 180.694 70.1225C180.858 69.9158 180.979 69.7219 181.058 69.5408C181.139 69.3576 181.18 69.1658 181.18 68.9656C181.18 68.7354 181.124 68.5362 181.014 68.3679C180.905 68.1996 180.756 68.0696 180.566 67.978C180.377 67.8864 180.163 67.8406 179.927 67.8406C179.676 67.8406 179.456 67.8928 179.269 67.9972C179.083 68.0994 178.939 68.2433 178.837 68.4286C178.737 68.614 178.687 68.8313 178.687 69.0806H177.933C177.933 68.6971 178.021 68.3604 178.198 68.0707C178.375 67.7809 178.616 67.555 178.92 67.3931C179.227 67.2312 179.571 67.1502 179.953 67.1502C180.336 67.1502 180.676 67.2312 180.972 67.3931C181.268 67.555 181.5 67.7734 181.669 68.0483C181.837 68.3232 181.921 68.6289 181.921 68.9656C181.921 69.2063 181.878 69.4418 181.79 69.6719C181.705 69.8999 181.556 70.1545 181.343 70.4357C181.132 70.7148 180.839 71.0558 180.464 71.4585L178.994 73.0309V73.082H182.036V73.7852H177.907ZM185.402 73.8746C185.027 73.8746 184.689 73.8001 184.389 73.6509C184.088 73.5018 183.847 73.2972 183.666 73.0373C183.485 72.7773 183.386 72.4812 183.369 72.1488H184.136C184.166 72.445 184.3 72.69 184.539 72.8839C184.78 73.0756 185.067 73.1715 185.402 73.1715C185.67 73.1715 185.909 73.1087 186.118 72.983C186.329 72.8572 186.494 72.6847 186.613 72.4652C186.734 72.2436 186.795 71.9933 186.795 71.7141C186.795 71.4286 186.732 71.174 186.607 70.9503C186.483 70.7244 186.313 70.5465 186.095 70.4165C185.878 70.2866 185.63 70.2205 185.351 70.2184C185.15 70.2163 184.945 70.2472 184.734 70.3111C184.523 70.3729 184.349 70.4528 184.213 70.5508L183.471 70.4613L183.868 67.2397H187.268V67.9428H184.532L184.302 69.8732H184.341C184.475 69.7667 184.643 69.6783 184.846 69.608C185.048 69.5376 185.259 69.5025 185.478 69.5025C185.879 69.5025 186.236 69.5984 186.549 69.7901C186.864 69.9798 187.112 70.2397 187.291 70.57C187.472 70.9002 187.562 71.2773 187.562 71.7013C187.562 72.119 187.468 72.4918 187.281 72.82C187.096 73.146 186.84 73.4038 186.514 73.5934C186.188 73.7809 185.817 73.8746 185.402 73.8746Z"
                      fill="#808080"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_453_21">
                      <rect
                        width="221"
                        height="84"
                        fill="white"
                        transform="translate(0.31543 0.819824)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="border-solid border-[2px] border-[#30363D] rounded-[30px] overflow-hidden w-auto h-[550px] flex justify-center items-center">
            <Image
              src="/assets/Blink/alexander-the-great.png"
              alt="Hovered Image"
              width={268}
              height={550}
              className="px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
