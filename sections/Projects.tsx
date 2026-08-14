import ProjectCard from "../components/ProjectCard";
import { ProjectCards } from "../constants/constants";

import { FaGithub } from "react-icons/fa";
import { animate, stagger, type Variants } from "framer-motion";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Raw cursor position, updated on every mouse move over the grid.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs give the follower a slight lag/ease instead of snapping
  // exactly to the cursor every frame.
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    animate(
      ".whole-card",
      {
        opacity: 1,
        y: [50, 0],
      },
      {
        delay: stagger(1),
      },
    );
  });

  const variants = {
    button: {
      scale: 1.08,
      padding: "0.5rem 1rem",
      border: "1px solid #4ec0d5",
      background: "white",
      color: "#4ec0d5",
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

  return (
    <section
      id="projects"
      className="flex relative flex-col justify-center items-center"
    >
      <header className="relative text-7xl max-lg:text-4xl  p-8 font-light overflow-x-clip flex items-center justify-between w-full  ">
        <span
          className="absolute -top-10 left-0 text-[10rem] max-lg:text-[6rem] font-light tracking-widest text-white/[0.03] select-none pointer-events-none leading-none uppercase"
          aria-hidden
        >
          Work
        </span>
        <motion.div
          variants={fadeUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl max-lg:text-4xl font-light tracking-widest">
            Projects
          </h2>
        </motion.div>
        <motion.a
          className="text-lg flex justify-center items-center gap-4  bg-white p-4 font-medium text-black tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-accent border border-black"
          initial={{
            padding: "1rem",
            background: "white",
          }}
          variants={variants}
          whileHover={"button"}
          href="https://github.com/samnne"
          target="_blank"
        >
          Github <FaGithub />
        </motion.a>
      </header>

      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          // Position relative to the grid container, offset so the dot
          // is centered on the cursor rather than top-left anchored.
          mouseX.set(e.clientX - bounds.left);
          mouseY.set(e.clientY - bounds.top );
        }}
        className="grid lg:grid-cols-2  grid-cols-1 relative"
      >
        {isHovered && (
          <motion.div
            className="absolute top-0 left-0 text-xs px-2 py-1 rounded-xl rounded-tl-xs border-black drop-shadow drop-shadow-accent bg-white text-accent border font-bold pointer-events-none z-50"
            style={{ x: springX, y: springY }}
          >Click Me</motion.div>
        )}

        {ProjectCards.map((project: ProjectCardType, idx: number) => {
          return <ProjectCard key={idx} index={idx} {...project} />;
        })}
      </motion.div>
    </section>
  );
};

export default Projects;