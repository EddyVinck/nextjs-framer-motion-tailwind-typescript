"use client";

import { motion } from "framer-motion";
import { AnimationWrapper } from "./animation-wrapper";

export const KeyframesExample = () => {
  return (
    <AnimationWrapper title="Keyframes">
      <motion.div
        className="h-12 w-12 bg-pink-600"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </AnimationWrapper>
  );
};
