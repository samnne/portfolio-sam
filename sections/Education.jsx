import { education } from "../constants/constants";
import uvicPhoto from "/src/assets/uvic-mark.webp";
import { motion } from "motion/react";
const Education = () => {
  const childanim = {
    init: {
      opacity: 0,
      y: 50,
    },
    inView: {
      z: 0,
      opacity: 1,
      y: 0,
    },
    hover: {
      scaleX: 1.1,
      translateY: -15,
      rotateX: "15deg",
      rotateZ: -1,
      transition: {
        delay: 0,
      },
    },
    transition: {
      delay: 0.02,
      type: "spring",
      stiffness: 300,
    },
  };
  return (
    <section
      id="education"
      className=" gap-5 items-start h-screen justify-center"
    >
      <header className="text-7xl max-sm:text-5xl font-light tracking-wider ">
        <h1 className="text-shadow-black text-shadow-lg z-10 relative">
          Education
        </h1>
      </header>
      <div className="grid md:grid-cols-2 grid-cols-1 h-full justify-center items-center">
        <motion.div
          transition={{
            delayChildren: 0.1,
          }}
          className="flex flex-col "
        >
          {education.map((school, index) => {
            return (
              <motion.article
                transition={{
                  delayChildren: 0.1,
                }}
                key={school.school}
                className="flex flex-col items-center  text-center"
              >
                <motion.i
                  variants={childanim}
                  whileHover={"hover"}
                  whileInView={"inView"}
                  initial={"init"}
                  className="fa-solid fa-graduation-cap text-4xl"
                ></motion.i>
                <motion.h3
                  variants={childanim}
                  whileHover={"hover"}
                  whileInView={"inView"}
                  initial={"init"}
                  className="md:text-4xl text-2xl font-bold tracking-widest text-white leading-12 sm:leading-24"
                >
                  {school.credential}
                </motion.h3>
                <motion.p
                  variants={childanim}
                  whileHover={"hover"}
                  whileInView={"inView"}
                  initial={"init"}
                  className="md:text-2xl text-lg font-semibold tracking-wide  text-white/50 leading-10"
                >
                  {school.duration}
                </motion.p>
                <motion.p
                  variants={childanim}
                  whileHover={"hover"}
                  whileInView={"inView"}
                  initial={"init"}
                  className="md:text-2xl  text-lg font-semibold tracking-wide  text-white/50 leading-10"
                >
                  {school.school}
                </motion.p>
              </motion.article>
            );
          })}
        </motion.div>
        <a href="https://uvic.ca" target="_blank">
          <motion.img
            whileHover={{
              filter: "grayscale(100%)",
            }}
            src={uvicPhoto}
            className="w-full cursor-pointer  h-full p-8"
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default Education;
