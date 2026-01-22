import PropTypes from "prop-types";
import { motion } from "motion/react";
import type { Component, JSX, ReactElement } from "react";
import type { IconType } from "react-icons/lib";
const Button = ({
  label,
  icon: ICON,
  link,
}: {
  label: string;
  icon: any;
  link: string;
}) => {
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
    <motion.button
      initial={{
        padding: "1rem",
        background: "white",
      }}
      variants={variants}
      whileTap={"button"}
      whileHover={"button"}
      whileFocus={"button"}
      className="bg-white p-4 flex justify-center items-center gap-4 text-black transition-all duration-300 ease-in-out"
    >
      <span className="max-md:text-md max-md:text-lg font-semibold  px-1">
        {label}
      </span>

      {link ? (
        <motion.a
          whileHover={{
      
            background: "#4ec0d5",
            padding: "0.2rem 1rem",
          }}
          href={`${link}`}
          className=""
          target="_self"
        >
          {ICON}
        </motion.a>
      ) : (
        <motion.div
          whileHover={{
            color: "white",
            background: "#4ec0d5",
            padding: "0.2rem 1rem",
          }}
         
          className=""
       
        >
          {ICON}
        </motion.div>
      )}
    </motion.button>
  );
};

export default Button;
