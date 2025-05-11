import { codingLanguages } from "../constants/constants";
import CodeCard from "../components/CodeCard";
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col min-h-screen font-opensans justify-evenly items-center"
    >
      <header className="text-7xl relative font-inter font-bold tracking-wider max-lg:text-4xl overflow-x-clip w-full text-center">
        <h2 className="absolute right-10 top-5 text-9xl opacity-25">Skills</h2>
        <span className="text-shadow-black text-shadow-lg z-10 relative">
          Skills
        </span>
        <h2 className="absolute left-40 top-5 text-9xl opacity-25">Skills</h2>
        <h2 className="absolute -top-20 text-9xl opacity-25">Skills</h2>
        <h2 className="absolute -top-20 right-49 text-9xl opacity-25">
          Skills
        </h2>
      </header>
      <p className="text-accent-dark text-2xl max-sm:text-lg font-medium">
        Always room for improvement
      </p>
      <div className="flex justify-center text-xl min-lg:max-w-2xl flex-wrap gap-3 items-center">
        {codingLanguages.map((lang, index) => {
          return (
            <CodeCard
              key={lang.label}
              codeName={lang.label}
              icon={lang.icon}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
