import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1} // No zoom
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full 
                   transition-all duration-300 hover:shadow-[0_0_20px_#00f0ff,0_0_40px_#00f0ff]"
      >
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden group">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Hover Buttons Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                          flex items-center justify-center gap-4 transition-all duration-300">
            {/* GitHub */}
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 
                         flex justify-center items-center hover:scale-110 transition"
              title="View Source Code"
            >
              <FiGithub className="text-white w-5 h-5" />
            </button>

            {/* Live Demo */}
            {live_demo_link && (
              <button
                onClick={() => window.open(live_demo_link, "_blank")}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 
                           flex justify-center items-center hover:scale-110 transition"
                title="View Live Demo"
              >
                <FiExternalLink className="text-white w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
