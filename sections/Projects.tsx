import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";
import { ProjectCards } from "../constants/constants";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";
import { animate, stagger } from "framer-motion";
import { motion } from "motion/react";
import { useEffect } from "react";
const Projects = () => {
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
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center"
    >
      <header className="relative text-7xl max-lg:text-4xl  p-8 font-light overflow-x-clip flex items-center justify-between w-full  ">
        <span className="text-shadow-black text-shadow-lg z-10 relative">
          Projects
        </span>
        <motion.a
          className="text-lg flex justify-center items-center gap-4  bg-white p-4 font-medium text-black tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-accent border border-black"
          initial={{
            padding: "1rem",
            background: "white"
          }}
          whileHover={{
            scale: 1.08,
            padding: "1rem 2rem",

            border: "1px solid white",
            background: "black",
            color: "white",
          }}
          href="https://github.com/samnne"
          target="_blank"
        >
          Github <FaGithub />
        </motion.a>
      </header>

      <motion.div className="grid lg:grid-cols-2  grid-cols-1 ">
        {ProjectCards.map((project: ProjectCardType, idx: number) => {
          return <ProjectCard key={idx} index={idx} {...project} />;
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
