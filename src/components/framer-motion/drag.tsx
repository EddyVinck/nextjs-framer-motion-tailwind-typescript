"use client";

import { motion } from "framer-motion";
import { AnimationWrapper } from "./animation-wrapper";
import { useRef } from "react";

export const DragExample = () => {
  const constraintsRef = useRef(null);

  return (
    <AnimationWrapper title="Drag event">
      <div className="relative w-72 h-72">
        <motion.div
          className="w-[256px] h-[256px] rounded-lg bg-white/20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          ref={constraintsRef}
        >
          <motion.div
            className="h-[128px] w-[128px] bg-pink-600 absolute rounded-md left-[calc(50%-128px/2)] top-[calc(50%-128px/2)]"
            drag
            dragConstraints={{
              top: -64,
              left: -64,
              right: 64,
              bottom: 64,
            }}
          />
        </motion.div>
      </div>
    </AnimationWrapper>
  );
};
