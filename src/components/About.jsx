import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ServiceCard = ({ title, icon, index, activeIndex }) => {
  const total = services.length;
  const angle = (index - activeIndex) * (360 / total);
  const distance = 120; // pixels - adjust this to change the radius of the circle

  return (
    <motion.div
      initial={false}
      animate={{
        x: Math.sin(angle * Math.PI / 180) * distance,
        y: -Math.cos(angle * Math.PI / 180) * distance,
        scale: index === activeIndex ? 1.1 : 0.6,
        opacity: index === activeIndex ? 1 : 0.7,
        zIndex: index === activeIndex ? 30 : 20,
        filter: index === activeIndex ? "none" : "blur(1px)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.5
      }}
      className={`absolute w-[160px] h-[200px] md:w-[200px] md:h-[260px] 
                  bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 shadow-md 
                  flex flex-col items-center justify-center p-6 text-center`}
    >
      <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
      <h3 className="text-white text-lg font-semibold">{title}</h3>
    </motion.div>
  );
};

const NewAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Touch swipe handlers
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!startX) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    
    if (diffX > 50) {
      // Swipe left - next card
      setActiveIndex((prev) => (prev + 1) % services.length);
    } else if (diffX < -50) {
      // Swipe right - previous card
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }
    
    setStartX(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OVERVIEW</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row mt-10 gap-10 md:gap-8">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[18px] md:text-[20px] leading-[28px] w-full md:w-2/3 text-center md:text-left"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div 
          className="w-full md:w-1/3 h-[350px] md:h-[400px] flex items-center justify-center mt-20 md:mt-0"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(NewAbout, "about");