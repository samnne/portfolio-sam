import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";
import { ProjectCards } from "../constants/constants";
import gsap from "gsap";

const Projects = () => {

  return (
    <section
      id="projects"
      className="flex flex-col font-opensans justify-center items-center"
    >
      <header className="relative text-7xl max-lg:text-4xl font-bold font-inter overflow-x-clip flex items-center justify-center w-full  ">
        <span className="text-shadow-black text-shadow-lg z-10 relative">
          Projects
        </span>

      </header>

      <div className="grid grid-cols-1 ">
        {ProjectCards.map((project, idx) => {
          return <ProjectCard key={idx} index={idx} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
