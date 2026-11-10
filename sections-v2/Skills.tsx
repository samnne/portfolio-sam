import { makeTextJitter } from "../components/TextJitter.tsx";
import { LazyMotion, domAnimation } from "framer-motion";

type SkillGroup = { category: string; skills: string[] };

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C",
      "C++",
      "SQL",
      "R",
      "HTML",
      "CSS",
      "Golang",
    ],
  },
  {
    category: "Frameworks",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express",
      "FastAPI",
      "Spring Boot",
      ".NET Core",
      "Redux",
      "Zustand",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Cloudinary",
      "Google Cloud Platform",
    ],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Docker", "Linux", "Figma", "Gemini API"],
  },
];

function SkillGroupRow({ group }: { group: SkillGroup }) {
  return (
    <div className="flex w-full justify-between gap-4 mb-6">
      <div className="w-1/2">
        <div className="text-sm font-bold">{group.category}</div>
      </div>
      <ul className="flex flex-wrap items-center gap-2 justify-end w-full">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="flex relative justify-start items-start font-bold bg-white text-black gap-2 p-1 text-xs"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Skills = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <div id="skills" className="border-t border-accent/20">
        <div className="grid grid-cols-3 items-start relative pt-10">
          <h2 className="text-accent sticky top-10 uppercase font-black text-base">
            <span className="flex">{makeTextJitter("Skills", -10)}</span>
          </h2>
          <div className="col-span-2">
            {skillGroups.map((group) => (
              <SkillGroupRow key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Skills;

