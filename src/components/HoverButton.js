import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HoverCircle from "./HoverCircle";

export default function HoverButton({ icon, text, className, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.button
      className={className}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={onClick}
    >
      {icon}
      <AnimatePresence>{hover && <HoverCircle />}</AnimatePresence>
      <p className="text-[12px] font-light">{text}</p>
    </motion.button>
  );
}
