import { motion, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

const About = () => {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope)
  useEffect(
    ()=>{
      animate(".child", {
        y: [50, 0],
        
      }, {
        
        delayChildren: 0.5
      })
    }, [inView]
  )
  return (
    <>
      <h1 className=" capitalize font-light text-7xl max-lg:text-5xl text-shadow-black text-shadow-lg z-10 relative">
        A quick note
      </h1>
      <motion.section
        id="about"
        className="flex py-25 max-lg:flex-col justify-evenly items-center"
      >
        <motion.div
          variants={{
            show: {
              transition: {
                delayChildren: 0.1,
              },
            },
          }}
          ref={scope}
          className=""
        >
          <h2 className=" child text-4xl font-bold tracking-wider  ">
            Hey! I'm <span className="text-accent">SAM</span>
          </h2>
          <p className=" child capitalize  text-xl mt-4 lg:max-w-2xl text-accent-dark  ">
            I am Samuel Echefu, A computer science student and full stack
            developer based in Victoria, BC. With my 1 year into Web/Full Stack
            development and 5+ Years of Programming. I've built full end-to-end
            projects aiming to solve the little problems people face. I Utilize
            the Reactjs Framework, ExpressJs, Firebase, MongoDB, Tailwind CSS,
            and many more tools to ship my projects.
          </p>
          <p className=" child capitalize text-xl max-w-2xl mt-4 lg:max-w-xl text-accent-dark ">
            As of now I am in my second year of computer science seeking CO-OP
            education opporunites for 2026 Spring or 2026 Summer. Currently I am
            open to possible small jobs to enhance fellow codebases. I'm a quick
            learner, efficient communicator, and I take steps forward every day
            to enrich my capabilities as a developer
          </p>
          <div className=" child flex justify-start  text-3xl text-accent-dark items-center">
            <div className="navbar-icon group">
              <a
                href="https://www.linkedin.com/in/samuel-echefu-251a21336/"
                target="none"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <span className="sidebar-tooltip group-hover:scale-100">
                Linkedin
              </span>
            </div>
            <div className="navbar-icon group">
              <a href="https://github.com/samnne" target="none">
                <i className="fa-brands fa-github"></i>
              </a>
              <span className="sidebar-tooltip group-hover:scale-100">
                GitHub
              </span>
            </div>
            <div className="navbar-icon group">
              <a href="mailto:samuel.n.echefu@gmail.com">@</a>
              <span className="sidebar-tooltip group-hover:scale-100">
                Email
              </span>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center items-center w-50 h-50 min-sm:w-80 min-sm:h-80">
          <div className="w-full h-full  bg-secondary rounded-full"></div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
