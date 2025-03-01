import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 sm:gap-6'>
      {technologies.map((technology) => (
        <Tilt
          key={technology.name}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          className='w-16 h-16 sm:w-20 sm:h-20 green-pink-gradient p-[1px] rounded-[10px] shadow-card'
        >
          <div className='bg-tertiary rounded-[10px] flex items-center justify-center w-full h-full'>
            <img src={technology.icon} alt={technology.name} className='w-10 h-10 sm:w-12 sm:h-12 object-contain' />
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
