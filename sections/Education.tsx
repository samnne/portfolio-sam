import { education } from "../constants/constants";
import uvicPhoto from "/src/assets/uvic-mark.webp";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const Education = () => {
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
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const courseworkGroups = [
    {
      category: "Comp Sci",
      courses: [
        "CSC 225/226: Data Structures & Algorithms",
        "CSC 230: Computer Architecture",
        "SENG 265: Software Development Methods",
      ],
    },
    {
      category: "Math",
      courses: [
        "MATH 200: Multivariable Calculus",
        "MATH 204: Differential Equations",
        "MATH 122: Discrete Math",
        "MATH 211: Matrix Algebra",
      ],
    },
    {
      category: "Stats",
      courses: ["STAT 260: Probability & Statistics I"],
    },
  ];

  return (
    <section
      id="education"
      className="flex flex-col justify-center items-center py-24 px-6 min-h-screen"
    >
      {/* Large background text — gives it its own identity */}
      <div className="relative w-full ">
        <span
          className="absolute -top-10 left-0 text-[10rem] max-lg:text-[6rem] font-light tracking-widest text-white/[0.03] select-none pointer-events-none leading-none uppercase"
          aria-hidden
        >
          Edu
        </span>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl max-lg:text-4xl font-light tracking-widest">
            Education
          </h2>
        </motion.div>

        {/* Main content — horizontal split */}
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-16 items-start">
          {/* Left col — school info (3/5 width) */}
          <motion.div
            variants={stagger}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3 flex flex-col gap-12"
          >
            {education.map((school) => (
              <motion.div
                key={school.school}
                variants={fadeUp}
                className="flex flex-col gap-8"
              >
                {/* School name + duration */}
                <div className="flex flex-col gap-1 border-l-2 border-white/20 pl-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-white/30">
                    {school.duration}
                  </p>
                  <h3 className="text-3xl max-sm:text-xl font-light tracking-wide text-white">
                    {school.school}
                  </h3>
                  <p className="text-white/50 text-lg font-light tracking-wide mt-1">
                    {school.credential}
                  </p>
                </div>

                {/* Coursework */}
                {/* Coursework */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col gap-6 pl-6"
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white/25">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-col gap-5">
                    {courseworkGroups.map((group) => (
                      <div key={group.category} className="flex flex-col gap-2">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
                          {group.category}
                        </p>
                        <motion.div
                          variants={stagger}
                          className="flex flex-wrap gap-2"
                        >
                          {group.courses.map((c, i) => (
                            <motion.span
                              key={c}
                              variants={{
                                offscreen: { opacity: 0, y: 10 },
                                onscreen: {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                    delay: i * 0.06,
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                  },
                                },
                              }}
                              whileHover={{
                                y: -4,
                                transition: { type: "spring", stiffness: 400 },
                              }}
                              className="text-xs tracking-widest uppercase text-white/50 border border-white/10 px-3 py-1.5 hover:border-white/30 hover:text-white/80 transition-colors duration-200"
                            >
                              {c}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right col — UVic logo (2/5 width) */}
          <motion.div
            variants={fadeUp}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6 items-start"
          >
            <a
              href="https://uvic.ca"
              target="_blank"
              rel="noreferrer"
              className="w-full group"
            >
              <motion.div
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <motion.img
                  src={uvicPhoto}
                  alt="University of Victoria"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full object-contain"
                />
              </motion.div>
              <motion.p
                variants={fadeUp}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="text-[11px] tracking-[0.2em] uppercase text-white/25 mt-4 group-hover:text-white/50 transition-colors duration-200"
              >
                uvic.ca ↗
              </motion.p>
            </a>

            {/* Stat block */}
            <motion.div
              variants={stagger}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="flex flex-col gap-px w-full mt-4 border border-white/10"
            >
              {[
                { label: "Year", value: "2nd Year" },
                { label: "Degree", value: "B.Sc. Computer Science" },
                { label: "Location", value: "Victoria, BC" },
                { label: "Expected", value: "Apr 2028" },
              ].map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex justify-between items-center px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <span className="text-[11px] tracking-[0.15em] uppercase text-white/30">
                    {label}
                  </span>
                  <span className="text-sm text-white/70 font-light">
                    {value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
