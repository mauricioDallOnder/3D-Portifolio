import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
interface Tag {
  name: string;
  color: string;
}

interface ProjectProps {
  index: number;
  name: string;
  description: string;
  image: string;
  source_code_link: string;
  tags: Tag[];
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 h-[150px]">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
       <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
       <div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
             
        <h3 className={styles.sectionHeadText}>Projetos:</h3>
        <p className={styles.sectionSubText}>Os projetos a seguir demonstram minhas habilidades e experiências por meio de exemplos dos trabalhos que já realizei. Cada projeto é descrito brevemente, acompanhado de links para os respectivos repositórios de código.</p>
       </div>
    </div>
      <div className="flex justify-center flex-col items-center w-full h-full ">
       
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((item, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...item} />
          ))}
         
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
