"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollExample = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed z-10 w-full top-0 left-0">
      <motion.div className="h-2 w-full bg-pink-600" style={{ scaleX }} />
    </div>
  );
};
