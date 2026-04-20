import "./App.css";
import {
  Home,
  About,
  Projects,
  Skills,
  Nav,
  Contact,
  Education,
} from "../sections/index";

import WorkExperience from "../sections/WorkExperience.tsx";
import ParralaxScroll from "../sections/ParralaxScroll.js";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
    <div className="overflow-x-hidden">

      <ParralaxScroll />
    </div>
        <Nav></Nav>
      <main className=" relative overflow-hidden overflow-x-hidden font-google">
        <section className="py-10 px-5 ">
          <Home />
        </section>
        <section className="py-10">
          <Projects />
        </section>
        <section className=" relative">
          <WorkExperience />
        </section>
        <section className="py-10 px-5 ">
          <Skills />
        </section>

        <section className="py-10 px-5 ">
          <Education />
        </section>
        {/* <section className="py-10 px-5 ">
          <Contact />
        </section> */}
      </main>
      <footer className="flex  justify-between h-24 pl-5   items-center">
        <div className="flex justify-center gap-1 text-xl text-white  items-center">
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
        <p className="text-sm text-md text-white  text-center  pr-2 flex justify-center items-center pt-1">
          &copy; 2025 Samuel Echefu. All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;
