"use client";

import { ReactNode, useState } from "react";
import { RotateCcw } from "lucide-react";

type Props = {
  title?: string;
  children: ReactNode;
  resettable?: boolean;
};
export const AnimationWrapper = ({
  children,
  title,
  resettable = true,
}: Props) => {
  const [animationKey, setAnimationKey] = useState(0);

  function runAnimation() {
    setAnimationKey((prev) => prev + 1);
  }
  return (
    <div key={animationKey} className="flex flex-col items-center">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
      {resettable && (
        <button
          className="bg-slate-400 p-2 text-slate-900 mt-2 rounded-full"
          onClick={runAnimation}
        >
          <RotateCcw aria-hidden className="h-4 w-4" />
          <span className="sr-only">Run animation</span>
        </button>
      )}
    </div>
  );
};
