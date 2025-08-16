const About = () => {
  return (
    <>
      <h1 className="text-center animate-wiggle capitalize font-extrabold text-6xl min-lg:text-8xl text-shadow-black text-shadow-lg z-10 relative">
        A quick note
      </h1>
      <section
        id="about"
        className="flex py-25 max-lg:flex-col justify-evenly items-center"
      >
        <div className="font-opensans">
          <h2 className="text-4xl font-bold tracking-wider font-inter ">
            Hey! I'm <span className="text-accent">SAM</span>
          </h2>
          <p className="capitalize  text-xl mt-4 lg:max-w-2xl text-accent-dark  ">
            I am Samuel Echefu, A computer science student web developer based
            in Victoria, BC. With 6 months into web development and 4+ years of
            coding. I look to specialize into creating clean, responsive, ready
            for production websites & landing pages Utilizing HTML, CSS,
            JavaScript, Reactjs, and Python.
          </p>
          <p className="capitalize text-xl max-w-2xl mt-4 lg:max-w-xl text-accent-dark ">
            As of now I am entering my second year in computer science. I'm open
            to freelance opporunites. I'm very independent, quick learner,
            efficient communicator, and I take steps forward every day to enrich
            my capabilities as a developer
          </p>
          <div className="flex justify-start  text-3xl text-accent-dark items-center">
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
        </div>
        <div className="flex justify-center items-center w-50 h-50 min-sm:w-80 min-sm:h-80">
          <div className="w-full h-full  bg-secondary rounded-full"></div>
        </div>
      </section>
    </>
  );
};

export default About;
