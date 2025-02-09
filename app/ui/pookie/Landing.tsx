"use client";

import React from "react";
import { motion } from "framer-motion";
import { dynaPuffFont } from "@/app/utils/fonts";
import { firaSansFont } from "@/app/utils/fonts";
import { FallAnimation } from "@/app/ui/animations/fall-animation";

export function Landing({
  name,
  landingPickupLine,
  userName,
  setPageNo,
}: {
  name: string;
  landingPickupLine: string;
  userName: string;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section className="w-full relative h-full flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50/5">
      <FallAnimation count={20} delayDuration={500} emoji="💝" />
      <div className="wrapper w-full max-w-screen-xl h-dvh items-center justify-center backdrop-blur-sm">
        <motion.div
          className="animated-welcome w-full h-fit flex flex-col p-8 space-y-6 sm:space-y-10 md:space-y-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, y: 20, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={`w-fit ${dynaPuffFont.className} font-semibold text-4xl md:text-5xl lg:text-6xl relative`}
          >
            <span className="bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-purple-600 to-blue-500">
              Hi{" "}
              <span className="underline decoration-yellow-200 decoration-wavy">
                {name}
              </span>{" "}
            </span>
            <motion.span
              className="inline-block ml-2"
              animate={{
                rotate: [0, 20, -10, 20, 0],
                transition: { duration: 1, repeat: Infinity, repeatDelay: 1.5 },
              }}
            >
              👋
            </motion.span>
          </motion.div>
          <div className="content-container-landing w-full h-fit max-w-[40rem]">
            <div className="container-box bg-black/40 w-full h-fit max-w-[40rem] rounded-lg shadow-lg p-4 backdrop-blur-md">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className={`text-base sm:text-lg md:text-xl text-white ${firaSansFont.className}`}
              >
                Today, let me tell you something special 💫
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl space-y-4 p-6"
              >
                <motion.div
                  className={`font-medium ${firaSansFont.className} bg-black/30 p-4 rounded-lg shadow-inner`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <span className="text-pink-300 text-2xl">"</span>
                  <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
                    {landingPickupLine}
                  </span>
                  <span className="text-pink-300 text-2xl">"</span>
                  <span className="ml-2">💝</span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-4 text-right"
              >
                <span
                  className={`text-pink-200 ${firaSansFont.className} text-lg italic`}
                >
                  - With love, {userName} 💌
                </span>
              </motion.div>
            </div>

            <motion.button
              onClick={() => setPageNo(1)}
              className="mx-auto mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg hover:shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all duration-200 text-white font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Secret Message</span>
              <span className="text-lg">💝</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Landing;
