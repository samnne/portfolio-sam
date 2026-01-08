import "./App.css";
import proper_seer from "../src/assets/proper_seer.png";
import {
  Home,
  About,
  Projects,
  Skills,
  Nav,
  Contact,
  Education,
} from "../sections";
import WorkExperience from "../sections/WorkExperience";
function App() {
  return (
    <>
      <main className="relative">
        <Nav></Nav>
        <section className="py-10 px-5 ">
          <Home />
        </section>
        <section className=" min-lg:px-25 px-10">
          <About />
        </section>
        <section className=" relative">
          <WorkExperience />
         
        </section>
        <section className="py-10 px-5 ">
          <Skills />
        </section>
        <section className="py-10 px-5 ">
          <Projects />
        </section>
        <section className="py-10 px-5 ">
          <Education />
        </section>
        <section className="py-10 px-5 ">
          <Contact />
        </section>
      </main>
      <footer className="flex max-sm:flex-col justify-between h-24 pl-5   items-center">
        <div className="flex justify-center gap-5 text-3xl text-accent-dark items-center">
          <div className="navbar-icon group">
            <a
              href="https://www.linkedin.com/in/samuel-echefu-251a21336/"
              target="none"
              className="group-hover:scale-120 transition-all duration-300"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <span className="sidebar-tooltip-to-top group-hover:scale-100">
              Linkedin
            </span>
          </div>
          <div className="navbar-icon group">
            <a
              href="https://github.com/samnne"
              target="none"
              className="group-hover:scale-120 transition-all duration-300"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <span className="sidebar-tooltip-to-top group-hover:scale-100">
              GitHub
            </span>
          </div>
          <div className="navbar-icon group">
            <a
              href="mailto:samuel.n.echefu@gmail.com"
              className="group-hover:scale-120 transition-all duration-300"
            >
              @
            </a>
            <span className="sidebar-tooltip-to-top group-hover:scale-100">
              Email
            </span>
          </div>
        </div>
        <p className="text-xl text-md text-accent-dark  text-center pr-5">
          &copy; 2025 Samuel Echefu. All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;
