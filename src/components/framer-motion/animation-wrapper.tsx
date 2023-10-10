"use client";

import { ReactNode, useState } from "react";
import { RotateCcw } from "lucide-react";

type Props = {
  title?: string;
  children: ReactNode;
};
export const AnimationWrapper = ({ children, title }: Props) => {
  const [animationKey, setAnimationKey] = useState(0);

  function runAnimation() {
    setAnimationKey((prev) => prev + 1);
  }
  return (
    <div key={animationKey}>
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
      <button
        className="bg-slate-400 p-2 text-slate-900 mt-2"
        onClick={runAnimation}
      >
        <RotateCcw aria-hidden className="h-4 w-4" />
        <span className="sr-only">Run animation</span>
      </button>
    </div>
  );
};
