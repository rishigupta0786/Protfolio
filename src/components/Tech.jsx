import React, { useEffect, useState, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { reactjs } from "../assets";
const iconRx = 300;
const iconRy = 200;
const center = { x: 250, y: 250 };
const Tech = () => {
  const [iconAngles, setIconAngles] = useState(
    Array(technologies.length)
      .fill(0)
      .map((_, i) => (i * 2 * Math.PI) / technologies.length)
  );
  const [logoRotation, setLogoRotation] = useState(0);
  useEffect(() => {
    let animationFrameId;
    const update = () => {
      setIconAngles((prev) => prev.map((angle) => angle - 0.01));
      setLogoRotation((prev) => prev + 1);
      animationFrameId = requestAnimationFrame(update);
    };
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="w-full h-auto flex flex-col items-center justify-center mt-4">
        <div className="hidden md:flex w-[500px] h-[500px] items-center justify-center relative">
          {iconAngles.map((angle, index) => {
            const x = center.x + iconRx * Math.cos(angle);
            const y = center.y + iconRy * Math.sin(angle);
            return (
              <div
                key={technologies[index].name}
                className="absolute flex flex-col items-center justify-center text-white cursor-pointer"
                style={{
                  left: `${x - 30}px`,
                  top: `${y - 30}px`,
                  width: "60px",
                  height: "60px",
                }}
              >
                <img
                  src={technologies[index].icon}
                  alt={technologies[index].name}
                  className="w-20 h-20 object-contain hover:scale-125 transition-transform duration-300"
                />
                {technologies[index].name}
              </div>
            );
          })}

          <motion.div
            className="absolute z-10"
            style={{ rotate: logoRotation }}
          >
            <img src={reactjs} alt="React" className="w-20 h-20" />
          </motion.div>
        </div>
        <div className="flex md:hidden flex-wrap gap-6 justify-center items-center mt-10 px-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center w-20">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-white text-xs mt-2 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
