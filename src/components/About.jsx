import React from "react";
import Tilt from "react-parallax-tilt"; 
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a passionate software developer with experience in frontend, backend, databases, 
        and API integration. I love learning new technologies, collaborating with teams, and building 
        efficient, scalable, and user-friendly web applications. I’m also deeply interested in Networks, IOT, AI/ML, 
        Blockchain, Design Patterns and AWS. When I’m not coding, you can find me exploring tech news, contributing to open-source projects, playing Chess or Basketball, or doing Yoga.
        <p>Let's work together and bring our ideas to life!</p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-11">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Wrap About section in SectionWrapper to enable smooth scrolling & animations
export default SectionWrapper(About, "about");
