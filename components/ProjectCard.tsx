import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { useState } from "react";

type ProjectCardProps = {
  name: string;
  description: string;
  code: string[];
  repo?: string;
  website?: string;
  imgURL: string;
  index: number;
};
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
  const [active, setActive] = useState(false);
  const scrollIN: Variants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,

        type: "spring",
      },
    },
    tap: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const infoContent = (
    <>
      <h3 className=" box text-2xl font-bold p-5">{name}</h3>
      <article className="text-sm box  md:text-lg flex flex-col   gap-2 p-5">
        <p className="lg:w-3/4  overflow-y-hidden text-wrap">{description}</p>
        <div className="flex flex-wrap box  items-center gap-2 justify-start ">
          {code.map((c: string) => (
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
                type: "spring",
                stiffness: 300,
              }}
              className="flex relative justify-center text-sm items-center shadow-md shadow-black  bg-white text-black  gap-2 p-2 "
            >
              {c}
            </motion.span>
          ))}
        </div>
      </article>
    </>
  );

  return (
    <motion.div
      onClick={() => setActive((prev) => !prev)}
      className={` ${name.split(" ")[0]} cursor-pointer  whole-card overflow-hidden `}
    >
      <div
        id={`box${index}`}
        className={`flex relative flex-col  scrollbar-track-accent  w-full  `}
      >
        <AnimatePresence>
          {active && (
            <motion.section
              variants={scrollIN}
              initial="offscreen"
              animate="onscreen"
              exit={{
                opacity: 0,
                y: -200,
                transition: { duration: 0.6, type: "spring" },
              }}
              whileHover={
                !isTablet
                  ? {
                      opacity: 1,
                      ...scrollIN["onscreen"],
                    }
                  : undefined
              }
              whileInView={
                isTablet
                  ? {
                      opacity: 1,
                      ...scrollIN["onscreen"],
                    }
                  : undefined
              }
              className="flex bg-black relative lg:absolute lg:inset-0 description  overflow-y-auto   w-full flex-col justify-start z-20  gap-5  "
            >
              <a
                href={website ? website : repo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-5 top-5"
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
                  className="flex bg-white text-black p-2  z-9999 "
                >
                  Click Me
                </motion.div>
              </a>
              <h3 className=" box text-2xl font-bold p-5">{name}</h3>
              <article className="text-sm box  md:text-lg flex flex-col   gap-2 p-5">
                <p className="lg:w-3/4  overflow-y-hidden text-wrap">
                  {description}{" "}
                </p>
                <div className="flex flex-wrap box  items-center gap-2 justify-start ">
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
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="flex relative justify-center text-sm  items-center shadow-md shadow-black  bg-white text-black  gap-2 p-2 "
                      >
                        {c}
                      </motion.span>
                    );
                  })}
                </div>
              </article>
            </motion.section>
          )}
        </AnimatePresence>
        <motion.img
          src={imgURL}
          variants={scrollIN}
          initial={"offscreen"}
          whileInView={"onscreen"}
          whileTap={"tap"}
          alt={name}
          className="w-full   lg:object-contain  lg:object-center  object-contain relative transition-all  aspect-video "
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
