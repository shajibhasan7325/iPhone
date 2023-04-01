import { motion, useViewportScroll, useTransform } from "framer-motion";

const boxVariants = {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Framer() {
  const { scrollY } = useViewportScroll();
  const position = useTransform(
    scrollY,
    [0, document.body.scrollHeight - window.innerHeight],
    [0, 1],
  );

  return (
    <div>
      <motion.div
        variants={boxVariants}
        initial="initial"
        animate={position >= 0 ? "visible" : "initial"}
      >
        This is the first div
      </motion.div>
      <motion.div
        variants={boxVariants}
        initial="initial"
        animate={position >= 0.25 ? "visible" : "initial"}
      >
        This is the second div
      </motion.div>
      <motion.div
        variants={boxVariants}
        initial="initial"
        animate={position >= 0.5 ? "visible" : "initial"}
      >
        This is the third div
      </motion.div>
      <motion.div
        variants={boxVariants}
        initial="initial"
        animate={position >= 0.75 ? "visible" : "initial"}
      >
        This is the fourth div
      </motion.div>
    </div>
  );
}
export default Framer;
