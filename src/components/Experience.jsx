import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 50px rgba(0,255,255,0.6)" }}
      className="relative w-full sm:w-[320px] p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
    >
      <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 h-full flex flex-col items-center text-center border border-cyan-400/20">
        {/* Rotating Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-purple-500 mb-10"
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-16 h-16 object-contain"
          />
        </motion.div>

        {/* Title & Company */}
        <h3 className="text-white text-lg font-bold">{experience.title}</h3>
        <p className="text-cyan-300 ">{experience.company_name}</p>
        <p className="text-gray-400 ">{experience.date}</p>

        {/* Points */}
        <ul className="mt-4 space-y-2 text-gray-300 text-sm list-disc list-inside text-left w-full">
          {experience.points.map((point, index) => (
            <li key={index} className="leading-snug">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10 text-center">
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      {/* Timeline container */}
      <div className="relative flex flex-col sm:flex-row gap-8 sm:gap-12 items-center justify-center">
        {/* Animated line */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute sm:h-[4px] sm:w-full h-full w-[4px] bg-gradient-to-r sm:from-cyan-400 sm:via-blue-500 sm:to-purple-500 from-cyan-500 via-blue-500 to-purple-500 bg-[length:200%_200%] rounded-full"
        />

        {/* Experience Cards */}
        <div className="flex flex-col sm:flex-row gap-8 relative z-10">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "exp");
