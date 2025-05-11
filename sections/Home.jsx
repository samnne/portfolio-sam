import Button from "../components/Button";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="max-sm:text-5xl font-inter font-bold text-8xl text-shadow-lg z-10 text-shadow-secondary-dark text-text-primary">
        Student Developer
      </h1>
      <h2 className="text-2xl my-8 font-opensans text-primary font-semibold max-sm:text-lg">
        Hi! I'm Samuel Echefu A Student Web Developer
      </h2>

      <p className="text-2xl max:text-lg font-opensans py-2 text-primary font-semibold">
        Web Developer, Designer, and CS Student
      </p>

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
