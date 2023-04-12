import React, { HTMLAttributes } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import {Tilt} from 'react-tilt';

import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";
interface TiltProps extends HTMLAttributes<HTMLDivElement> {
  options: {
    max: number;
    scale: number;
    speed: number;
  };
  index: number;
}

const ServiceCard = ({ index, options }: TiltProps) => {
  return (
    <Tilt className='w-full h-full md:w-[1440px] md:h-[1024px]' options={options}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] flex justify-evenly items-center flex-col'
          style={{ height: '100%', width: '100%' }}
        >
          <img
            src='https://firebasestorage.googleapis.com/v0/b/mauriciodallonder-64688.appspot.com/o/About%20me%20page.png?alt=media&token=8c37005b-5037-4d68-af40-bc3311dbbcdf'
            alt='web-development'
            className='w-full h-full object-cover rounded-[20px]'
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
       <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
             
        <h3 className={styles.sectionHeadText}>Sobre Mim:</h3>
        <p className={styles.sectionSubText}>Sou um desenvolvedor web brasileiro apaixonado por criar projetos digitais. A seguir, apresento uma breve descrição sobre mim.</p>
       </motion.div>
    </div>
    
      <br />
      <div className='flex justify-center items-center m-0 auto'>
      <ServiceCard index={0} options={{ max: 45, scale: 1, speed: 450 }} />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
