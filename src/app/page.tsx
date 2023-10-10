import { AnimationExample } from "@/components/framer-motion/animation-example";
import { DragExample } from "@/components/framer-motion/drag";
import { EnterAndLeaveExample } from "@/components/framer-motion/enter-and-leave";
import { KeyframesExample } from "@/components/framer-motion/keyframes";
import { ListExample } from "@/components/framer-motion/list-example";
import { MotionValueExample } from "@/components/framer-motion/motion-value";
import { ScrollExample } from "@/components/framer-motion/scroll";
import { VariantsExample } from "@/components/framer-motion/variants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <ScrollExample />
      <p>
        You can replace most HTML elements, like a <code>&lt;div&gt;</code> with
        a <code>motion</code> variant like{" "}
        <code>
          &lt;<strong>motion</strong>.div&gt;
        </code>{" "}
        which adds animation capabilities.
      </p>
      <p>
        <code>AnimatePresence</code> keeps components from being removed from
        the DOM until the exit-animation is complete.
      </p>
      <AnimationExample />
      <ListExample />
      <EnterAndLeaveExample />
      <MotionValueExample />
      <KeyframesExample />
      <VariantsExample />
      <DragExample />
    </main>
  );
}
