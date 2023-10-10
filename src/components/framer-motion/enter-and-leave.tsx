"use client";

import { motion } from "framer-motion";
import { AnimationWrapper } from "./animation-wrapper";

export const EnterAndLeaveExample = () => {
  return (
    <AnimationWrapper title="Enter and leave (scroll triggered)">
      <motion.div
        className="h-12 w-12 bg-pink-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
      />
    </AnimationWrapper>
  );
};
