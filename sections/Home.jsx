import Button from "../components/Button";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
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
          className="max-sm:text-4xl font-inter font-bold text-7xl text-shadow-lg z-10 text-shadow-secondary-dark text-text-primary"
        />
      <h2 className="text-3xl mt-8 font-opensans text-primary font-semibold max-sm:text-lg">
        Hi! I'm Samuel Echefu A Student Web Developer
      </h2>

      

      <div className="flex mt-8 max-sm:flex-col-reverse font-opensans justify-center items-center gap-8">
        <Button label="Lets Chat" icon={`fa-regular fa-handshake`}></Button>
        <a
          role="button"
          className="text-lg font-medium tracking-wider cursor-pointer transition-all duration-300 ease-in-out hover:text-primary"
        >
          samuel.n.echefu@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Home;
