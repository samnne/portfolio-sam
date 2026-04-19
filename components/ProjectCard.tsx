

import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
const ProjectCard = ({
  name,
  description,
  code,
  repo,
  website,
  imgURL,
  index,
}: ProjectCardProps) => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const scrollIN: Variants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        stiffness: 800,
        delay: 0.1 ,
        damping: 100
      },
    },
    tap: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        stiffness: 800,
      },
    },
  };
  const buttonVars: Variants = {
    all: {
      scaleX: 1.2,

      border: "1px solid white",
      background: "black",
      color: "white",
    },
  };

  return (
    <a href={website ? website : repo} target="_blank">
      <motion.div
        className={` ${name.split(" ")[0]} cursor-pointer  whole-card overflow-hidden `}
      >
        <div id={`box${index}`} className={`flex relative flex-col   w-full  `}>
          <motion.img
            src={imgURL}
            variants={scrollIN}
            initial={"offscreen"}
            whileInView={"onscreen"}
            whileTap={"tap"}
            alt={name}
            className="w-full   lg:object-contain  lg:object-center  object-contain relative transition-all duration-300 aspect-video "
          />
          <motion.section
            variants={scrollIN}
            initial="offscreen"
            whileHover={
              !isTablet
                ? {
                    opacity: 1,
                    ...scrollIN["onscreen"],
                  }
                : ""
            }
            whileInView={
              isTablet
                ? {
                    opacity: 1,
                    ...scrollIN["onscreen"],
                  }
                : ""
            }
            className="flex bg-black relative lg:absolute lg:inset-0  w-full flex-col justify-center z-20  gap-5  "
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                x: -5,
                y: 5,
                rotateZ: -1,
                rotateX: 5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="absolute right-5 flex  bg-white text-black p-2  z-9999 top-5 "
            >
              Click Me
            </motion.div>
            <h3 className="md:text-2xl  box text-2xl font-bold p-5">{name}</h3>
            <article className="text-md box md:text-xl flex flex-col   gap-5 p-5">
              <p>{description}</p>
              <div className="flex flex-wrap box  items-center gap-2 justify-center ">
                {code.map((c) => {
                  return (
                    <motion.span
                      key={c}
                      whileHover={{
                        scaleX: 1.1,
                        translateY: -15,
                        rotateX: "15deg",
                        rotateZ: -1,
                        z: index,
                      }}
                      transition={{
                        delay: index * 0.02,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="flex relative justify-center items-center shadow-md shadow-black  bg-white text-black  gap-2 p-2 "
                    >
                      {c}
                    </motion.span>
                  );
                })}
              </div>
            </article>
          </motion.section>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
