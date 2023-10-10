"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimationWrapper } from "./animation-wrapper";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const VariantsExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimationWrapper title="Variants">
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        Click here 👀
      </button>
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <ul>
          <li>Hey</li>
          <li>Hello</li>
          <li>Hi</li>
        </ul>
      </motion.nav>
    </AnimationWrapper>
  );
};
