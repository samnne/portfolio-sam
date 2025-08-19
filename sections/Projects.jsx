import ProjectCard from "../components/ProjectCard";
import { ProjectCards } from "../constants/constants";

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
        <h2 className="absolute  -top-2  text-7xl opacity-15">Projects</h2>
        <h2 className="absolute -top-0  left-40 text-7xl opacity-15">
          Projects
        </h2>
        <h2 className="absolute -top-4 right-40 text-7xl opacity-15">
          Projects
        </h2>
        <h2 className="absolute -top-4  left-40 text-7xl opacity-15">
          Projects
        </h2>
        <h2 className="absolute -top-0 right-40 text-7xl opacity-15">
          Projects
        </h2>
      </header>

      <div className="grid grid-cols-1 min-md:grid-cols-2  gap-5 mt-20">
        {ProjectCards.map((project) => {
          return <ProjectCard key={project.name} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
