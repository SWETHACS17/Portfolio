import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Hero Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">SWETHA</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm an aspiring software Developer
          </p>
        </div>
      </div>

      {/* 3D PC Model - Added custom height for better mobile responsiveness */}
      <div className="absolute inset-0 top-[20px] sm:h-[550px] h-[350px]">
        <ComputersCanvas />
      </div>

      {/* Responsive Scroll Animation - Adjusted positioning for better visibility on mobile */}
      <div 
        className={`
          absolute w-full flex justify-center items-center
          bottom-32 sm:bottom-10
          transition-all duration-300 ease-in-out
          z-10
        `}
      >
        <a
          href="#about"
          onClick={scrollToAbout}
          className="
            w-[30px] h-[64px]
            rounded-3xl border-4 border-secondary
            flex justify-center items-start p-2
            hover:border-[#915eff] transition-colors duration-300
            cursor-pointer
            relative
            group
          "
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="
              w-6 h-3 rounded-full bg-secondary
              group-hover:bg-[#915eff]
              transition-colors duration-300
            "
          />
          {/* Touch indicator for mobile */}
          <span className="
            absolute -bottom-7 left-1/2 -translate-x-1/2
            text-secondary text-xs whitespace-nowrap
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          ">
            Scroll Down
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;