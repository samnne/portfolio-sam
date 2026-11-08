
import { Home as Home2, WorkExperience as WorkExperience2, Projects as Projects2, Links, Footer, Education } from "../sections-v2/index.ts"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main className="max-w-4xl mx-auto relative font-inter">
        <section className="py-10 px-5 ">
          <Home2 />
        </section>
        <section className="py-10 px-5 ">
          <WorkExperience2 />
        </section>
        <section className="py-10 px-5 ">
          <Projects2 />
        </section>
        <section className="py-10 px-5 ">
          <Education />
        </section>
        <section className="py-10 px-5 ">
          <Links />
        </section>
        {/* Footer */}
        <section className="py-10 px-5 ">
          <Footer />
        </section>
      </main>
     
    </>
  );
}

export default App;
