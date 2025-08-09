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
      <div className="relative z-10 max-w-7xl mt-10 mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 gap-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Rishi Gupta
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            A Full-Stack Developer passionate about crafting{" "}
            <span className="font-semibold">scalable</span> &{" "}
            <span className="font-semibold">high-performance</span> web
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-black to-gray-800 text-white hover:scale-105 transition-transform font-medium"
            >
              Download CV
            </button>
            <button
              onClick={handleContactScroll}
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:scale-105 transition-transform font-medium"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Avatar Card with Gradient Glow and Zoom on Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative w-96 h-96 rounded-3xl overflow-hidden border border-white/10 shadow-xl 
                     transition-all duration-500 ease-in-out group hover:shadow-gradient"
        >
          <img
            src={avatar}
            alt="Rishi Gupta"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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
          {/* <span className="text-sm mt-2 text-white/50">Scroll down</span> */}
        </div>
      </motion.div>

      {/* Custom Gradient Shadow */}
      <style jsx="true">{`
        .hover\\:shadow-gradient:hover {
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5), 
                      0 0 40px rgba(128, 0, 128, 0.5), 
                      0 0 60px rgba(255, 105, 180, 0.4),
                      0 0 80px rgba(255, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;
