"use client";

import { motion } from "framer-motion";
import { AnimationWrapper } from "./animation-wrapper";

const list = { hidden: { opacity: 0 } };
const item = { hidden: { x: -10, opacity: 0 } };

export const ListExample = () => {
  return (
    <AnimationWrapper title="List">
      <motion.ul animate="hidden" variants={list} className="text-white">
        {new Array(3).fill(null).map((_, index) => (
          <motion.li key={index} variants={item}>
            {index}
          </motion.li>
        ))}
      </motion.ul>
    </AnimationWrapper>
  );
};
