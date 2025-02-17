import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto relative">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
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
            I'm a software Developer
          </p>
        </div>
      </div>

      {/* 3D PC Model */}
      <ComputersCanvas />

      {/* Clickable Scroll Animation */}
      <div className="absolute xs:bottom-15 bottom-42 w-full flex justify-center items-center">
        <a href="#about" className="scroll-smooth">
          <div className="w-[30px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
