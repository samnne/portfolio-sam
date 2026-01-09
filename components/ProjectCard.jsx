import { useGSAP } from "@gsap/react";
import Button from "./Button";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({ name, description, code, repo, website, imgURL, index }) => {

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  useGSAP(() => {
    if (!isTablet) {


      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.${name.split(' ')[0]}`,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        }
      })
      timeline.to(`#box${index} img`, {
        rotateX: 90,
        duration: 1,
        ease: "elastic.inOut"
      }).to(`#box${index} section`, {
        rotateX: 0,
        duration: 1,
        ease: "elastic.inOut"
      })
    } else {

      gsap.timeline({
        scrollTrigger:
        {
          trigger: `.${name.split(' ')[0]}`,
          start: "top 25%",
          end: "bottom center",
          scrub: 1,
          pin: true,
        }
      }).to(`#box${index} section`, {
        opacity: 1,
        rotateX: 0
      })
    }

  }, [])
  return (
    <div className={`grid ${name.split(' ')[0]}  h-screen mt-8 overflow-hidden`}>
      <div id={`box${index}`} className={`flex relative items-start ${index % 2 !== 0 && "order-1"} w-full h-full`}>
        <img src={imgURL} alt={name} className="w-full rotate-x-0 relative transition-all duration-300 aspect-video " />
        <section className="flex rotate-x-90 flex-col justify-center md:items-center gap-5 absolute inset-0">
          <h3 className="md:text-4xl box text-2xl font-bold px-5">
            {name}
          </h3>
          <article className="text-lg box md:text-2xl flex flex-col justify-center items-center gap-5 p-5">

            <p>
              {description}

            </p>
            <div className="flex flex-wrap box  items-center gap-2 justify-center ">


              {code.map(c => {
                return <span
                  className="flex  justify-center items-center shadow-md shadow-black animate-wiggle bg-secondary-dark py-2 px-1 min-sm:py-4 min-sm:px-3 gap-2 rounded-2xl ">
                  {c}
                </span>
              })}
            </div>
          </article>

        </section>
      </div>
    </div >
  );
};

export default ProjectCard;
