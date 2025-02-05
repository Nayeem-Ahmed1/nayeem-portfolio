import React from "react";

import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useScreenSize } from "../utils/ScreenSizeContext";
import { techGuy } from "../assets";

function Hero() {
  const isMobile = useScreenSize();

  return (
    <section
      className={`relative w-full h-screen
      mx-auto`}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Nayeem</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web Application <br className="sm:block hidden" />
            and User Interfaces
          </p>
        </div>
      </div>

      {isMobile && (
        <div className="bg-slate-100 h-48 w-48 absolute flex justify-center items-center left-[5.2rem] top-2/4 rounded-full">
          <img
            src={techGuy}
            alt="MD-Nayeem-Ahmed-portfolio"
            className="rounded-full w-44"
          />
        </div>
      )}

      {!isMobile && <ComputersCanvas />}

      <div className="absolute xs:bottom-10 sm:bottom-32 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
