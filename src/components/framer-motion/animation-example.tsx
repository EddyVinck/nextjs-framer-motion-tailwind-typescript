"use client";

import { motion } from "framer-motion";
import { AnimationWrapper } from "./animation-wrapper";

export const AnimationExample = () => {
  return (
    <AnimationWrapper title="Hover me!" resettable={false}>
      <motion.div
        className="h-12 w-12 bg-pink-600"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      />
    </AnimationWrapper>
  );
};
