import { codingLanguages } from "../constants/constants";
import { motion, type Variants } from "motion/react";

const Skills = () => {
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
      keys: ["Python", "TypeScript", "JavaScript", "SQL", "R", "HTML5", "CSS"],
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
      keys: ["Supabase", "Firebase", "MongoDB", "PostgreSQL", "Cloudinary"],
    },
    {
      category: "Tools & Other",
      keys: ["Docker", "REST APIs", "GitHub", "Socket.Io", "UI/UX Design"],
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
            Technical
          </p>
          <h2 className="text-6xl max-lg:text-4xl font-light tracking-widest">
            Skills
          </h2>
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
              <motion.div
                variants={stagger}
                className="lg:col-span-4 flex flex-wrap gap-3"
              >
                {group.keys.map((key, si) => {
                  const icon = iconMap[key.toLowerCase()];
                  const isEven = (gi + si) % 2 === 0;

                  return (
                    <motion.div
                      key={key}
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
                      className={`flex flex-col justify-center items-center w-20 h-20 sm:w-24 sm:h-24 shadow-md shadow-black py-2 px-1 sm:py-3 sm:px-2 gap-1 cursor-default
                        ${
                          isEven
                            ? "bg-black border border-white text-white"
                            : "bg-white text-black"
                        }`}
                    >
                      {icon ? (
                        <img
                          src={icon}
                          alt={key}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-[10px] tracking-widest uppercase opacity-50 text-center px-1">
                          {key}
                        </span>
                      )}
                      <p
                        className={`text-[10px] font-semibold tracking-wide text-center w-full truncate px-1
                        ${isEven ? "text-white/70" : "text-black/70"}`}
                      >
                        {key}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
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
