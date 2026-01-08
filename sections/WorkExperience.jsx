import React from "react";
import proper_seer from "../src/assets/proper_seer.png";
const WorkExperience = () => {
  return (
    <section className="h-screen">
      <div className=" flex flex-col mb-5 justify-start items-center ">
        <header className="text-7xl max-sm:text-5xl font-extrabold tracking-wider ">
          <h1 className="">Work Experience</h1>
        </header>
      </div>
      <article className="flex  cursor-pointer justify-center  text-black w-full  ">
        <a href="https://www.properseer.com/" target="none" className=" flex flex-col sm:px-12 px-4  gap-12 group">
          <div className=" sm:scale-80   aspect-video group-hover:opacity-100 transition-all duration-300 ease-in-out opacity-80 -z-20">
            <img
              src={proper_seer}
              className="aspect-video rounded-2xl  "
              alt="proper_seer"
            />
          </div>
          <p className="sm:text-2xl text-lg text-primary text-center font-light leading-6  capitalize">
            I have worked as a frontend developer intern at ProperSeer where I
            contributed to enhancing the app functionality with React and
            Bootstrap. I collaborated with the head developer to implement
            user-friendly interfaces and enhance the overall user experience.
          </p>
        </a>
      </article>
    </section>
  );
};

export default WorkExperience;
