import { useState } from "react";
import { codingLanguages } from "../constants/constants";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { getSkillUsage } from "../constants/utils";

const Skills = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const fadeUp: Variants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger: Variants = {
    offscreen: {},
    onscreen: {
      transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  const skillGroups = [
    {
      category: "Languages",
      keys: ["Python", "TypeScript", "JavaScript", "SQL", "R", "C","HTML5", "CSS"],
    },
    {
      category: "Frameworks",
      keys: [
        "Nextjs",
        "React JS",
        "FastAPI",
        "Node.js",
        "Express",
        "Redux",
        "Zustand",
        ".NET Core",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      category: "Databases & Cloud",
      keys: [
        "Supabase",
        "Firebase",
        "MongoDB",
        "PostgreSQL",
        "Cloudinary",
        "Google Cloud Platform",
      ],
    },
    {
      category: "Tools & Other",
      keys: ["Docker", "GitHub", "VSCode", "Gemini API", "Linux", "Git", "GitLab"],
    },
  ];

  // Build a lookup map from your existing codingLanguages constant
  const iconMap = Object.fromEntries(
    codingLanguages.map((l) => [l.label.toLowerCase(), l.icon]),
  );

  return (
    <section
      id="skills"
      className="flex flex-col min-h-screen justify-center items-center py-24 px-6"
    >
      <div className="relative w-full ">
        {/* Ghost text */}
        <span
          className="absolute -top-10 left-0 text-[10rem] max-lg:text-[6rem] font-light tracking-widest text-white/[0.03] select-none pointer-events-none leading-none uppercase"
          aria-hidden
        >
          Stack
        </span>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            The 
          </p>
          <h2 className="text-6xl max-lg:text-4xl font-light tracking-widest">
            Skills
          </h2>
          <span className="text-gray-500 text-sm">Click on skills to see which projects used them!</span>
        </motion.div>

        {/* Skill groups */}
        <motion.div
          variants={stagger}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col border-t border-white/10"
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="grid lg:grid-cols-5 grid-cols-1 border-b border-white/10 py-8 gap-6 items-start hover:bg-white/[0.02] transition-colors duration-300"
            >
              {/* Category label */}
              <div className="lg:col-span-1 flex items-start gap-4 pt-1">
                <span className="text-white/20 font-light text-sm tabular-nums">
                  0{gi + 1}
                </span>
                <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                  {group.category}
                </p>
              </div>

              {/* Icon cards */}
              {/* Icon cards + usage panel */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <motion.div variants={stagger} className="flex flex-wrap gap-3">
                  {group.keys.map((key, si) => {
                    const icon = iconMap[key.toLowerCase()];
                    const isEven = (gi + si) % 2 === 0;
                    const usage = getSkillUsage(key);
                    const isSelected = selected === key;

                    return (
                      <motion.button
                        key={key}
                        type="button"
                        aria-pressed={isSelected}
                        aria-disabled={usage.length === 0}
                        aria-label={
                          usage.length
                            ? `${key}, used in ${usage.length} ${usage.length === 1 ? "place" : "places"}`
                            : key
                        }
                        onClick={() => {
                          if (usage.length)
                            setSelected(isSelected ? null : key);
                        }}
                        variants={{
                          offscreen: { opacity: 0, y: 12 },
                          onscreen: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: si * 0.04,
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                        whileHover={{
                          scaleX: 1.1,
                          translateY: -15,
                          rotateX: "15deg",
                          rotateZ: -1,
                          transition: {
                            delay: 0,
                            type: "spring",
                            stiffness: 300,
                          },
                        }}
                        whileTap={{ scale: 0.93 }}
                        className={`relative flex flex-col justify-between items-center w-20 h-20 sm:w-24 sm:h-24 shadow-md shadow-black py-2 px-1 sm:py-3 sm:px-2 gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
            ${usage.length ? "cursor-pointer" : "cursor-default"}
            ${isSelected ? "ring-2 ring-accent" : ""}
            ${isEven ? "bg-black border border-white text-white" : "bg-white text-black"}`}
                      >
                        {usage.length > 0 && (
                          <span
                            aria-hidden
                            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-background text-[10px] font-bold flex items-center justify-center"
                          >
                            {usage.length}
                          </span>
                        )}
                        {icon ? (
                          <img
                            src={icon}
                            alt=""
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                          />
                        ) : (
                          <span className="flex-1 flex items-center justify-center text-[10px] tracking-widest uppercase opacity-50 text-center px-1">
                            {key}
                          </span>
                        )}
                        <p
                          className={`text-[10px] font-semibold tracking-wide text-center w-full truncate px-1 flex-shrink-0
              ${isEven ? "text-white/70" : "text-black/70"}`}
                        >
                          {key}
                        </p>
                      </motion.button>
                    );
                  })}
                </motion.div>

                <AnimatePresence initial={false}>
                  {selected && group.keys.includes(selected) && (
                    <motion.div
                      key={selected}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border border-accent-dark bg-secondary-dark/30 rounded-md p-4">
                        <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                          {selected} used in
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {getSkillUsage(selected).map((u) => (
                            <li key={`${u.kind}-${u.name}`}>
                              <a
                                href={u.href}
                                className="flex items-center gap-2 border border-accent text-accent px-3 py-1.5 text-sm rounded-md hover:bg-accent hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300"
                              >
                                <span className="text-[10px] tracking-widest uppercase opacity-60">
                                  {u.kind === "work" ? "Work" : "Project"}
                                </span>
                                {u.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          variants={fadeUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="text-white/20 font-light text-sm tracking-widest uppercase mt-12 text-right"
        >
          Always learning —
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
