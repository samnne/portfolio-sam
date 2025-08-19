import "./App.css";

import {
  Home,
  About,
  Projects,
  Skills,
  Nav,
  Contact,
  Education,
} from "../sections";
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
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <span className="sidebar-tooltip-to-top group-hover:scale-100">
              Linkedin
            </span>
          </div>
          <div className="navbar-icon group">
            <a href="https://github.com/samnne" target="none">
              <i className="fa-brands fa-github"></i>
            </a>
            <span className="sidebar-tooltip-to-top group-hover:scale-100">
              GitHub
            </span>
          </div>
          <div className="navbar-icon group">
            <a href="mailto:samuel.n.echefu@gmail.com">@</a>
            <span className="sidebar-tooltip-to-top group-hover:scale-100">Email</span>
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
