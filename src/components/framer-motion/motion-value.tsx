"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { AnimationWrapper } from "./animation-wrapper";
import { useState } from "react";

type CallStatus = "incoming" | "pickup" | "hangup";

export const MotionValueExample = () => {
  const [status, setStatus] = useState<CallStatus>("incoming");
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#a41111", "#46404c", "#0c8229"]
  );
  const pickUpPath = useTransform(x, [10, 100], [0, 1]);
  const hangupPath = useTransform(x, [-10, -55], [0, 1]);
  const incomingPath = useTransform(x, [-20, 0, 0, 20], [0, 1, 1, 0]);

  const bgOverride =
    status === "hangup"
      ? "#a41111"
      : status === "pickup"
      ? "#0c8229"
      : background;

  function updateStatus(newStatus: CallStatus) {
    setStatus(newStatus);

    setTimeout(function resetStatus() {
      x.jump(0);
      setStatus("incoming");
    }, 1500);
  }

  return (
    <AnimationWrapper title="Motion value">
      <div className="flex flex-col items-center">
        <motion.div
          key={`${status}-wrapper`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ background: bgOverride, x }}
          className="w-12 h-12 rounded-full flex justify-center items-center relative"
          onDragEnd={(_event, info) => {
            if (info.offset.x > 0) {
              updateStatus("pickup");
            } else {
              updateStatus("hangup");
            }
          }}
        >
          {/* Incoming */}
          <svg
            key={`${status}-incoming`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            fill="rgba(255, 255, 255, 1)"
          >
            <title>Incoming call</title>
            <motion.path
              style={{
                opacity: ["hangup", "pickup"].includes(status)
                  ? 0
                  : incomingPath,
              }}
              d="M16.712 13.288a.999.999 0 00-1.414 0l-1.597 1.596c-.824-.245-2.166-.771-2.99-1.596-.874-.874-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 000-1.414l-4-4a1.03 1.03 0 00-1.414 0l-2.709 2.71c-.382.38-.597.904-.588 1.437.022 1.423.396 6.367 4.297 10.268C10.195 21.6 15.142 21.977 16.566 22h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 000-1.414l-3.999-4zM16.585 20c-1.248-.021-5.518-.356-8.874-3.712C4.343 12.92 4.019 8.636 4 7.414l2.004-2.005L8.59 7.995 7.297 9.288c-.238.238-.34.582-.271.912.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.994.994 0 00.912-.271l1.293-1.293 2.586 2.586L16.585 20z"
            ></motion.path>
            <motion.path
              style={{
                opacity: ["hangup", "pickup"].includes(status)
                  ? 0
                  : incomingPath,
              }}
              d="M15.795 6.791L13.005 4v6.995H20l-2.791-2.79 4.503-4.503-1.414-1.414z"
            ></motion.path>
          </svg>

          {/* Accepted */}
          <svg
            key={`${status}-accepted`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            fill="rgba(255, 255, 255, 1)"
          >
            <title>Accepted call</title>
            <motion.path
              style={{
                opacity: ["hangup", "incoming"].includes(status)
                  ? pickUpPath
                  : 1,
              }}
              d="M16.57 22a2 2 0 001.43-.59l2.71-2.71a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0l-1.6 1.59a7.55 7.55 0 01-3-1.59 7.62 7.62 0 01-1.59-3l1.59-1.6a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0L2.59 6A2 2 0 002 7.43 15.28 15.28 0 006.3 17.7 15.28 15.28 0 0016.57 22zM6 5.41L8.59 8 7.3 9.29a1 1 0 00-.3.91 10.12 10.12 0 002.3 4.5 10.08 10.08 0 004.5 2.3 1 1 0 00.91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 01-8.87-3.71A13.28 13.28 0 014 7.41zM20 11h2a8.81 8.81 0 00-9-9v2a6.77 6.77 0 017 7z"
            ></motion.path>
            <motion.path
              style={{
                opacity: ["hangup", "incoming"].includes(status)
                  ? pickUpPath
                  : 1,
              }}
              d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"
            ></motion.path>
          </svg>

          {/* Cancelled */}
          <svg
            key={`${status}-cancelled`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            fill="rgba(255, 255, 255, 1)"
          >
            <title>Cancelled call</title>
            <motion.path
              style={{
                opacity: ["pickup", "incoming"].includes(status)
                  ? hangupPath
                  : 1,
              }}
              d="M10.09 12.5a8.92 8.92 0 01-1-2.2l1.59-1.59a1 1 0 000-1.42l-4-4a1 1 0 00-1.41 0L2.59 6A2 2 0 002 7.44 15.44 15.44 0 005.62 17L2.3 20.29l1.41 1.42 18-18-1.41-1.42zM7 15.55a13.36 13.36 0 01-3-8.13l2-2L8.59 8 7.3 9.29a1 1 0 00-.27.92 11 11 0 001.62 3.73zm9.71-2.26a1 1 0 00-1.41 0l-1.6 1.6-.34-.12-1.56 1.55a12.06 12.06 0 002 .66 1 1 0 00.91-.27l1.3-1.3L18.59 18l-2 2A13.61 13.61 0 0110 18.1l-1.43 1.45a15.63 15.63 0 008 2.45 2 2 0 001.43-.58l2.71-2.71a1 1 0 000-1.42z"
            ></motion.path>
          </svg>
        </motion.div>
        <p className="text-lg font-medium mt-2">{status}</p>
      </div>
    </AnimationWrapper>
  );
};
