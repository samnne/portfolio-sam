import {
  Home as Home2,
  WorkExperience as WorkExperience2,
  Projects as Projects2,
  Links,
  Footer,
  Education,
  Skills,
} from "../sections-v2/index.ts";

function App() {
  return (
    <>
      <main className="screen">
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
          <Skills />
        </section>

        <section className="py-10 px-5 ">
          <Links />
        </section>

        <section className="py-10 px-5 ">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
