import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaNewspaper, FaPaperclip, FaPaperPlane } from "react-icons/fa";
const Home = () => {
  const variants = {
    button: {
      scale: 1.08,
      padding: "0.5rem 1rem",

      border: "1px solid white",
      background: "black",
      color: "white",
    },
  };
  return (
    <section
      id="home"
      className="min-h-screen m-auto flex flex-col justify-center items-start container "
    >
      <h1 className="md:text-6xl  text-4xl font-bold">Hi! I'm Sam!</h1>
      <p className="text-2xl mt-8 font-light sm:w-1/2 max-sm:text-lg">
        I'm an 19 year old second year University of Victoria Computer Science
        student based in Victoria, BC. I've previously worked as a Frontend
        Intern{" "}
        <motion.a
          className="text-accent transition-all underline "
          whileHover={{
            fontWeight: "bold",
          }}
          transition={{
            duration: 1,
            type: "spring",

            bounce: 0.7,
          }}
          href="https://www.properseer.com/"
        >
          @ProperSeer
        </motion.a>
        , tasked with feature implementation and user design. I'm currently
        working on a AI powered accessiblity tool{" "}
        <motion.a
          className="text-accent inline-block w-fit h-fit  relative underline transition-all"
          initial={{
            y: 0,
          }}
          whileHover={{
            fontWeight: "bold",
          }}
          transition={{
            type: "spring",

            bounce: 0.7,
          }}
          href="https://github.com/samnne/u-eyes"
        >
          uEyes
        </motion.a>{" "}
        which is a personal assistant with vision.
      </p>

      <div className="flex max-sm:flex-wrap mt-8 w-full   max-sm:justify-start max-sm:items-center gap-4">
        <motion.a
          initial={{
            padding: "0.5rem",
          }}
          href="https://github.com/samnne"
          target="_blank"
          variants={variants}
          whileTap={"button"}
          whileHover={"button"}
          whileFocus={"button"}
          role="button"
          className="max-sm:text-sm text-lg flex justify-center items-center gap-2 bg-white p-4 font-medium text-black tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-accent border border-black"
        >
          Github <FaGithub />
        </motion.a>

        <motion.a
          initial={{
            padding: "0.5rem",
          }}
          target="_blank"
          href="https://www.linkedin.com/in/samuel-echefu-251a21336/"
          variants={variants}
          whileTap={"button"}
          whileHover={"button"}
          whileFocus={"button"}
          role="button"
          className="max-sm:text-sm  text-lg flex justify-center items-center gap-2 bg-white p-4 font-medium text-black tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-accent border border-black"
        >
          Linkedin <FaLinkedin />
        </motion.a>

        <motion.a
          initial={{
            padding: "0.5rem",
          }}
          href="/portfolio-sam/Samuel_Echefu_Full_Stack_Resume.pdf"
          variants={variants}
          target="_blank"
          whileTap={"button"}
          whileHover={"button"}
          whileFocus={"button"}
          role="button"
          className="max-sm:text-sm  text-lg flex justify-center items-center gap-2 bg-white p-4 font-medium text-black tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-accent border border-black"
        >
          Resume <FaPaperclip />
        </motion.a>
          <motion.a
            initial={{
              padding: "0.5rem",
            }}
            href="mailto:samuel.n.echefu@gmail.com"
            target="_blank"
            variants={variants}
            whileTap={"button"}
            whileHover={"button"}
            whileFocus={"button"}
            role="button"
            className="max-sm:text-sm text-lg flex justify-center items-center gap-2 bg-white p-4 font-medium text-black tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-accent border border-black"
          >
            samuel.n.echefu@gmail.com <FaPaperPlane />
          </motion.a>
      </div>
    </section>
  );
};

export default Home;
