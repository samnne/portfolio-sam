import React from "react";
import proper_seer from "../src/assets/proper_seer.png";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
const WorkExperience = () => {
  const vars: Variants = {
    offscreen: {
      opacity: 0,
      x: 100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="h-screen">
      <div className=" flex flex-col mb-5 justify-start items-start ">
        <header className="text-7xl max-sm:text-5xl font-light tracking-wider ">
          <h1 className="pl-5">Work Experience</h1>
        </header>
      </div>
      <article className="flex  cursor-pointer justify-center  items-center text-black w-full  ">
        <a
          href="https://www.properseer.com/"
          target="none"
          className=" flex flex-col justify-center items-center sm:px-12 px-4  gap-12 group"
        >
          <div className=" sm:scale-80   aspect-video group-hover:opacity-100 transition-all duration-300 ease-in-out opacity-80 -z-20">
            <motion.img
              whileInView={{
                opacity: 0.5,
              }}
              src={proper_seer}
              className="aspect-video"
              alt="proper_seer"
            />
          </div>
          <motion.div  variants={vars}
              initial="offscreen"
              whileInView={"onscreen"} className=" sm:text-2xl p-4 text-lg text-white text-center font-light leading-6  capitalize">
            
              <motion.h1 className="text-3xl -top-15 relative font-bold ">
                ProperSeer
              </motion.h1>

            <motion.p
             className=""
            >
              I have worked as a frontend developer intern at ProperSeer where I
              contributed to enhancing the app functionality with React and
              Bootstrap. I collaborated with the head developer to implement
              user-friendly interfaces and enhance the overall user experience.
            </motion.p>
          </motion.div>
        </a>
      </article>
    </section>
  );
};

export default WorkExperience;
