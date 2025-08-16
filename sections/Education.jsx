import { education } from "../constants/constants";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center h-screen justify-center"
    >
      <header className="text-7xl max-sm:text-5xl font-extrabold tracking-wider ">
        <h1 className="text-shadow-black text-shadow-lg z-10 relative">
          Education
        </h1>
      </header>
      {education.map((school) => {
        return (
          <article
            key={school.school}
            className="flex flex-col items-center mt-12 text-center"
          >
            <i className="fa-solid fa-graduation-cap text-4xl"></i>
            <h3 className="min-md:text-4xl text-2xl font-bold font-inter tracking-widest text-primary leading-12 min-sm:leading-24">
              {school.credential}
            </h3>
            <p className="min-md:text-2xl text-lg font-semibold tracking-wide font-opensans text-secondary leading-10">
              {school.duration}
            </p>
            <p className="min-md:text-2xl  text-lg font-semibold tracking-wide font-opensans text-secondary leading-10">
              {school.school}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Education;
