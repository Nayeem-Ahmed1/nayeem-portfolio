import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import { useScreenSize } from "../utils/ScreenSizeContext";

function SectionWrapper(Component, idName) {
  function HOC() {
    const isMobile = useScreenSize();
    const amountData = isMobile ? 0.05 : 0.25;

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: amountData }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  }
  return HOC;
}

export default SectionWrapper;
