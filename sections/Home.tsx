import { motion, useAnimate, useInView } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaNewspaper,
  FaPaperclip,
  FaPaperPlane,
} from "react-icons/fa";
import me from "../src/assets/me.jpg";
const Home = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.5 });
  const variants = {
    button: {
      scale: 1.08,
      padding: "0.5rem 1rem",

      border: "1px solid #4ec0d5",
      background: "white",
      color: "#4ec0d5",
    },
  };

  const lookingFor = [
    {
      text: "Software Engineering internships (Fall 2026), with a focus on mobile application development.",
    },
    {
      text: "Roles in health tech and accessibility-focused software.",
    },
    {
      text: "Opportunities to build real-time, data-driven systems that impact user decisions.",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen m-auto  grid-cols-1 max-sm:mt-20 grid lg:grid-cols-2 justify-center items-center container "
    >
      <div className="flex flex-col  justify-center items-start">
        <h1 className="md:text-6xl  text-4xl font-bold">Hi, I'm Sam!</h1>
        <p className="text-2xl mt-8 font-light  max-sm:text-lg">
          I am a 19 year old, second year CS + Software Systems student at the
          University of Victoria. I have previously worked as a Frontend Intern{" "}
          <motion.a
            className="text-accent transition-all underline "
            whileHover={{
              fontWeight: "bold",
            }}
            target="_blank"
            transition={{
              duration: 1,
              type: "spring",

              bounce: 0.7,
            }}
            href="https://www.properseer.com/"
          >
            @ProperSeer
          </motion.a>
          , tasked with feature implementation and user design. My current
          project,{" "}
          <motion.a
            className="text-accent inline-block w-fit h-fit  relative underline transition-all"
            target="_blank"
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
            href="https://market-quad.com"
          >
            MarketQuad
          </motion.a>{" "}
          is a student marketplace created to provide a safer university-based
          community to buy and sell second hand items
        </p>
        <div className="flex flex-col max-xl:flex-wrap w-full mt-4 ">
          <h1 className="text-xl lg:text-4xl text-text-primary font-bold">
            Currently Looking For
          </h1>
          <ul className="list-disc lg:text-xl text-sm pl-12 pt-4 gap-2 flex flex-col">
            {lookingFor.map(({ text }) => {
              return <li>{text}</li>;
            })}
          </ul>
        </div>
        <div
          ref={scope}
          className="flex max-xl:flex-wrap mt-8 w-full   max-sm:justify-start max-sm:items-center gap-4"
        >
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
            className="button-home"
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
            className="button-home"
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
            className="button-home"
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
            className="button-home"
          >
            samuel.n.echefu@gmail.com <FaPaperPlane />
          </motion.a>
        </div>
      </div>
      <div className="w-full h-full max-sm:mt-4 flex justify-center items-center   aspect-auto ">
        <motion.img
          initial={{
            opacity: 0,
            x: 1200,
          }}
          animate={{
            x: isInView && [1200, 0],
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 0.5,
          }}
          className=" sm:w-100 sm:h-100 h-75 w-75 object-cover border-4  border-accent  rounded-full"
          src={me}
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
