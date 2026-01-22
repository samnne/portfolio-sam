import { education } from "../constants/constants";
import uvicPhoto from "/src/assets/uvic-mark.webp";
import {motion} from "motion/react"
const Education = () => {
  return (
    <section
      id="education"
      className=" gap-5 items-start h-screen justify-center"
    >
      <header className="text-7xl max-sm:text-5xl font-light tracking-wider ">
        <h1 className="text-shadow-black text-shadow-lg z-10 relative">
          Education
        </h1>
      </header>
      <div className="grid md:grid-cols-2 grid-cols-1 h-full justify-center items-center">
        <div className="flex flex-col  ">
          {education.map((school, index) => {
            return (
              <>
                <article
                  key={school.school}
                  className="flex flex-col items-center  text-center"
                >
                  <i className="fa-solid fa-graduation-cap text-4xl"></i>
                  <h3 className="min-md:text-4xl text-2xl font-bold tracking-widest text-primary leading-12 min-sm:leading-24">
                    {school.credential}
                  </h3>
                  <p className="min-md:text-2xl text-lg font-semibold tracking-wide  text-secondary leading-10">
                    {school.duration}
                  </p>
                  <p className="min-md:text-2xl  text-lg font-semibold tracking-wide  text-secondary leading-10">
                    {school.school}
                  </p>
                </article>
                {/* {
            index == 0 &&
            <div className="h-50 relative border my-8"></div>
          } */}
              </>
            );
          })}
        </div>
        <div>
          <motion.img whileHover={{
            filter: "grayscale(100%)"

          }} src={uvicPhoto} className="w-full cursor-pointer  h-full p-8" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Education;
