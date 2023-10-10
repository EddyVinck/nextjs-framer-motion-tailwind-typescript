import { Github } from "lucide-react";

export const GitHubButton = () => {
  return (
    <a
      className="bg-pink-600 py-2 px-4 flex items-center gap-2"
      href="https://github.com/EddyVinck/nextjs-framer-motion-tailwind-typescript"
    >
      <Github aria-hidden />
      Source code on GitHub
    </a>
  );
};
