import { codingLanguages } from "../constants/constants";
import CodeCard from "../components/CodeCard.tsx";
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col min-h-screen font-opensans justify-evenly items-center"
    >
      <header className="text-7xl relative font-inter font-bold tracking-wider max-lg:text-4xl overflow-x-clip w-full text-center">
        <span className="text-shadow-black text-shadow-lg z-10 relative">
          Skills
        </span>
       
      </header>
      <p className="text-accent-dark text-2xl max-sm:text-lg font-medium">
        Always room for improvement
      </p>
      <div className="flex justify-center text-xl min-lg:max-w-4xl flex-wrap gap-3 items-center">
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
