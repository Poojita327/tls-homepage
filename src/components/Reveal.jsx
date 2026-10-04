import { motion } from "framer-motion";

const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const distance = 45;

  const initial = {
    opacity: 0,
    x:
      direction === "left"
        ? -distance
        : direction === "right"
          ? distance
          : 0,
    y: direction === "up" ? distance : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;