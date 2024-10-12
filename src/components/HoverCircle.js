import { AnimatePresence, motion } from "framer-motion";

export default function HoverCircle() {
  return (
    <motion.div
      className="rounded-full w-full h-full absolute top-0 left-0 z-40 bg-white/15"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.75,
        transition: {
          opacity: {
            ease: [0.32, 0, 0.67, 0],
            duration: 0.1,
          },
        },
      }}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.15 }}
    ></motion.div>
  );
}
