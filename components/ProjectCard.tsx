import { useGSAP } from "@gsap/react";
import Button from "./Button.tsx";
import gsap from "gsap";
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

  // useGSAP(() => {
  //   if (!isTablet) {

  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: `.${name.split(' ')[0]}`,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 1,
  //         pin: true,
  //       }
  //     })
  //     timeline.to(`#box${index} img`, {
  //       rotateX: 90,
  //       duration: 1,
  //       ease: "elastic.inOut"
  //     }).to(`#box${index} section`, {
  //       rotateX: 0,
  //       duration: 1,
  //       ease: "elastic.inOut"
  //     })
  //   } else {

  //     gsap.timeline({
  //       scrollTrigger:
  //       {
  //         trigger: `.${name.split(' ')[0]}`,
  //         start: "top 25%",
  //         end: "bottom center",
  //         scrub: 1,
  //         pin: true,
  //       }
  //     }).to(`#box${index} section`, {
  //       opacity: 1,
  //       rotateX: 0
  //     })
  //   }

  // }, [])

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
        stiffness: 100,
        delay: 0.1 * index,
      },
    },
    tap: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        stiffness: 10,
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
    <a href={website} target="_blank">
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
            className="w-full   lg:object-cover lg:object-center  relative transition-all duration-300 aspect-video "
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
            className="flex bg-black lg:absolute lg:inset-0  w-full flex-col justify-center z-20 md:items-center gap-5  "
          >
            <h3 className="md:text-2xl box text-2xl font-bold px-5">{name}</h3>
            <article className="text-md box md:text-xl flex flex-col justify-center items-center gap-5 p-5">
              <p>{description}</p>
              <div className="flex flex-wrap box  items-center gap-2 justify-center ">
                {code.map((c) => {
                  return (
                    <motion.a
                     
                      
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
                    </motion.a>
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
