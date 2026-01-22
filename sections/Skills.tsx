import { codingLanguages } from "../constants/constants";
import CodeCard from "../components/CodeCard.tsx";
import {motion} from "motion/react"
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col min-h-screen  justify-evenly items-center"
    >
      <header className="text-7xl relative font-light tracking-wider max-lg:text-5xl overflow-x-clip w-full ">
        <span className="text-shadow-black text-shadow-lg z-10 relative">
          Skills
        </span>
       
      </header>
      <p className="text-white text-2xl max-sm:text-lg font-medium">
        Always room for improvement
      </p>
      <motion.div
        variants={{
          show: {
            transition: {
              delayChildren: 0.1
            }
          }
        }}
      className="max-md:grid flex flex-wrap grid-cols-2 w-full  justify-center text-xl lg:max-w-4xl gap-3 items-center">
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
      </motion.div>
    </section>
  );
};

export default Skills;
