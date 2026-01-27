import React from "react";
import proper_seer from "../src/assets/proper_seer.png";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
const WorkExperience = () => {
  const vars: Variants = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="we" className="h-screen">
      <div className=" flex flex-col mb-5 justify-center items-start ">
        <header className="text-7xl max-sm:text-5xl font-light tracking-wider ">
          <h1 className="pl-5">Work Experience</h1>
        </header>
      </div>
      <article className="grid sm:grid-cols-2 justify-center  items-center text-black w-full  ">
        <motion.div
          variants={vars}
          initial="offscreen"
          whileInView={"onscreen"}
          className="flex flex-col sm:text-xl items-center w-1/2 m-auto justify-center p-4 text-lg text-white  font-light leading-6 gap-8 capitalize"
        >
          <div className="flex flex-col gap-4">


            <motion.h1 className="text-3xl  relative font-bold ">
              ProperSeer
            </motion.h1>

            <motion.p
              className="">
              I have worked as a frontend developer intern at ProperSeer where I
              contributed to enhancing the app functionality with React and
              Bootstrap. I collaborated with the head developer to implement
              user-friendly interfaces and enhance the overall user experience.
            </motion.p>
          </div>
        </motion.div>
        <a
          href="https://www.properseer.com/"
          target="none"
          className="flex px-2 justify-center items-center  gap-12 group"
        >
          <div className=" transition-all duration-300 overflow-hidden ease-in-out  ">

            <motion.img
              initial={{
                y: 50,
                scale: 1
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              whileHover={{
                scale: 1.1
              }}
              src={proper_seer}
              className="relative  w-full h-full"
              alt="proper_seer"
            />
          </div>
        </a>
      </article>
    </section>
  );
};

export default WorkExperience;
