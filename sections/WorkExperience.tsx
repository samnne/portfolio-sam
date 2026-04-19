import React from "react";
import proper_seer from "../src/assets/proper_seer.png";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useMediaQuery } from "react-responsive";

const WorkExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const scrollIN: Variants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        stiffness: 800,
        delay: 0.1,
        damping: 100,
      },
    },
  };
  const fadeUp: Variants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const tags = ["React", "Redux", "Bootstrap", "C#", ".NET Core", "SQL Server"];

  return (
    <section
      id="we"
      className="flex flex-col justify-center items-center py-24 px-4"
    >
      {/* Header — mirrors Projects header */}
      <div className="relative w-full mb-16 px-2">
        <span
          className="absolute -top-10 left-0 text-[10rem] max-lg:text-[6rem] font-light tracking-widest text-white/[0.03] select-none pointer-events-none leading-none uppercase"
          aria-hidden
        >
          Exp
        </span>
        <motion.div
          variants={fadeUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-16"
        >
         
          <h2 className="text-6xl max-lg:text-4xl font-light tracking-widest">
            Work Experience
          </h2>
        </motion.div>
      </div>

      {/* Card — same border/gap treatment as project grid */}
      <div className="w-full max-w-6xl border border-white/10 bg-white/5">
        <a href="https://www.properseer.com/" target="_blank" rel="noreferrer">
          <motion.div className="whole-card cursor-pointer overflow-hidden">
            <div className="flex relative flex-col w-full">
              {/* Image */}
              <motion.img
                src={proper_seer}
                variants={scrollIN}
                initial="offscreen"
                whileInView="onscreen"
                alt="ProperSeer"
                className="w-full object-contain object-center relative transition-all duration-300 aspect-video"
              />

              {/* Overlay — exact same pattern as ProjectCard */}
              <motion.section
                variants={scrollIN}
                initial="offscreen"
                whileHover={!isTablet ? { opacity: 1, y: 0 } : undefined}
                whileInView={isTablet ? { opacity: 1, y: 0 } : undefined}
                className="flex bg-black relative lg:absolute lg:inset-0 w-full flex-col justify-center z-20 gap-5"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    x: -5,
                    y: 10,
                    rotateZ: -1,
                    rotateX: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-5 flex bg-white text-black p-2 z-50 top-15"
                >
                  Visit Site
                </motion.div>

                {/* Role badge */}
                <span className="mx-5 self-start text-[11px] tracking-[0.2em] uppercase text-white/40 border border-white/15 px-3 py-1">
                  Frontend Intern · May – Sep 2025
                </span>

                <h3 className="md:text-2xl text-2xl font-bold p-5">
                  ProperSeer
                </h3>

                <article className="text-md md:text-xl flex flex-col gap-5 p-5">
                  <p className="text-white/70 font-light leading-7">
                    Contributed to enhancing app functionality with React and
                    Bootstrap, collaborating with the lead developer to
                    implement user-friendly interfaces and improve cross-device
                    usability for property managers.
                  </p>

                  {/* Tech tags — identical to ProjectCard code tags */}
                  <div className="flex flex-wrap items-center gap-2 justify-center">
                    {tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{
                          scaleX: 1.1,
                          translateY: -15,
                          rotateX: "15deg",
                          rotateZ: -1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="flex relative justify-center items-center shadow-md shadow-black bg-white text-black gap-2 p-2"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </article>
              </motion.section>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default WorkExperience;
