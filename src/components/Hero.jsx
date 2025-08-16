import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.png"; // Adjust path accordingly

const Hero = () => {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    navigate("/resume");
  };
  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative w-full h-screen overflow-hidden text-white bg-transparent">
      <div className="relative z-10 max-w-7xl mt-10 mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 gap-6">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Rishi Gupta
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            A Full-Stack Developer passionate about crafting{" "}
            <span className="font-semibold">scalable</span> &{" "}
            <span className="font-semibold">high-performance</span> web
            solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-950 to-gray-700 text-white hover:scale-105 transition-transform font-medium hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]"
            >
              Download CV
            </button>
            <button
              onClick={handleContactScroll}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-950 text-white hover:scale-105 transition-transform font-medium hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Avatar Card with Neon Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-xs sm:max-w-sm md:w-96 h-80 sm:h-96 
             rounded-3xl overflow-hidden border border-white/10 shadow-xl 
             transition-all duration-500 ease-in-out group hover:shadow-gradient sm:px-0"
        >
          <img
            src={avatar}
            alt="Rishi Gupta"
            className="w-full h-full object-cover" // removed hover scale class
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center animate-pulse">
          <FaArrowDown className="text-white/50 text-2xl" />
        </div>
      </motion.div>

      {/* Custom Gradient Shadow */}
      <style jsx="true">{`
        .hover\\:shadow-gradient:hover {
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.6),
            /* cyan-400 with 60% opacity */ 0 0 50px rgba(34, 211, 238, 0.8),
            /* cyan-400 with 80% opacity */ 0 0 75px rgba(34, 211, 238, 0.4); /* cyan-400 with 40% opacity */
        }
      `}</style>
    </section>
  );
};

export default Hero;
