import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { achievements } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const Achievemetns = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achievements.map((achievement, index) => (
          <li
            key={`achievements-achieve-${index}`}
            className='text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            {achievement.achieve}
          </li>
        ))}
      </ul>
      </motion.p>

    </>
  );
};

export default SectionWrapper(Achievemetns, "achievements");
