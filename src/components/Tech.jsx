import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const radius = 250;

const Tech = () => {
  const angleStep = (2 * Math.PI) / technologies.length;

  const rotateParent = useMotionValue(0);
  const counterRotate = useTransform(rotateParent, (val) => -val);

  // 🔄 Smooth incremental rotation without reset
  useEffect(() => {
    let animationFrameId;
    let angle = 0;

    const update = () => {
      angle += 0.5; // adjust speed here
      rotateParent.set(angle);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, [rotateParent]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="w-full h-[500px] flex items-center justify-center mt-12">
        <motion.div
          className="relative w-[500px] h-[500px]"
          style={{ rotate: rotateParent }}
        >
          {technologies.map((tech, index) => {
            const angle = index * angleStep;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={tech.name}
                className="absolute"
                style={{
                  left: `${x + 250 - 40}px`,
                  top: `${y + 250 - 40}px`,
                  width: "80px",
                  height: "80px",
                }}
              >
                <motion.div
                  className="w-full h-full flex flex-col items-center justify-center"
                  style={{ rotate: counterRotate }}
                >
                  <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 
                  hover:scale-150 ">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-white text-xs ml-1">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
