import { AnimatePresence, motion } from "framer-motion";

export default function HoverCircle() {
  return (
    <motion.div
      className="w-full h-full absolute top-0 left-0 z-40 bg-white/15"
      initial={{ opacity: 0, scale: 0.25, borderRadius: "1.5rem" }}
      animate={{
        opacity: 1,
        scale: 1,
        borderRadius: "0.75rem",
        transition: {
          borderRadius: {
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1],
          },
          ease: [0.33, 1, 0.68, 1],
          duration: 0.15,
        },
      }}
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
    ></motion.div>
  );
}
