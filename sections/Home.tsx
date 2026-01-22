import Button from "../components/Button.tsx";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { FaHandshake } from "react-icons/fa";
const Home = () => {
  const variants = {
    button: {
      scale: 1.08,
      padding: "1rem 2rem",

      border: "1px solid white",
      background: "black",
      color: "white",
    },
  };
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <TypeAnimation
        sequence={[
          "Web Developer",
          1500,
          "Student Developer",
          1500,
          "Front End Designer",
          1500,
          "Full Stack Developer",
          1500,
        ]}
        wrapper="h1"
        repeat={Infinity}
        speed={25}
        className="max-sm:text-4xl font-bold text-7xl text-shadow-lg z-10 text-shadow-secondary-dark text-text-primary"
      />
      <h2 className="text-3xl mt-8 font-semibold max-sm:text-lg">
        Hi! I'm Samuel Echefu A Student Web Developer
      </h2>

      <div className="flex mt-8 max-sm:flex-col-reverse  justify-center items-center gap-8">
        <Button
          link="#contact"
          label="Lets Chat"
          icon={<FaHandshake />}
        ></Button>
        <motion.a
          initial={{
            padding: "1rem",
          }}
          href="mailto:samuel.n.echefu@gmail.com"
          variants={variants}
          whileTap={"button"}
          whileHover={"button"}
          whileFocus={"button"}
          role="button"
          className="text-lg bg-white p-4 font-medium text-black tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-accent border border-black"
        >
          samuel.n.echefu@gmail.com
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
