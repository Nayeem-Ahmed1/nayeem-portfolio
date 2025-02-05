import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "./../utils/motion.js";
import { SectionWrapper } from "./../hoc";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[32px]"
      >
        <strong>
          Hi, I'm Md. Nayeem Ahmed, a Software Developer specializing in
          JavaScript, React, Node.js, and Next.js.
        </strong>
        I build <strong>scalable, high-performance web applications,</strong>
        that enhance user experience and drive business growth.
        <br /> As a <strong>quick learner and problem-solver,</strong> I
        collaborate closely with clients to{" "}
        <strong>develop efficient, secure, and user-friendly solutions </strong>
        for real-world challenges. My focus is on writing{" "}
        <strong>clean, maintainable code</strong> while optimizing performance.
        <br />
        <br />
        <strong>💡 Let's work together to turn your ideas into reality!</strong>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
