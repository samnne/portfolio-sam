import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoMdArrowDown } from "react-icons/io";
import me from "../src/assets/me.jpg";
import { useState } from "react";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const ParralaxScroll = () => {
  const [done, setDone] = useState(false);
  const [complete, setComplete] = useState(false);

  useGSAP(() => {
    // Timeline 1 — letter animation on load (no scroll)
    const introTl = gsap.timeline();
    introTl.set(".parralax h1 .box", { x: -50, y: 50, scale: 0, opacity: 0 });
    introTl.to(".parralax h1 .box", {
      duration: 0.8,
      ease: "power3.out",
      stagger: { each: 0.06, from: "start" },
      keyframes: [
        { x: -50, y: 50, scale: 0, opacity: 0, duration: 0 },
        { x: -20, y: -10, scale: 0.8, opacity: 1, duration: 0.5 },
        { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.3 },
      ],
      onComplete: () => setDone(true),
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parralax",
        start: "center center",
        end: "+=600",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onLeave: () => {
          gsap.set(".parralax", { display: "none" });
          setComplete(true);
        },
      },
    });

    scrollTl.fromTo(
      ".parralax img",
      { scale: 8, opacity: 0 },
      { scale: 1, opacity: 1, ease: "power2.out" },
    );

    scrollTl.to(".parralax h1", { opacity: 0, y: -30, ease: "power1.in" }, 0);

    scrollTl.to(".parralax img", {
      x: 1200,
      delay: 0.2,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        setComplete(true);
      },
    });
  }, []);

  return (
    <section
      className={`min-h-screen flex  transition-all p-0 m-0 overflow-hidden  flex-col justify-center items-center parralax`}
    >
      <h1 className="text-4xl sm:text-8xl relative z-10">
        {[..."Welcome!"].map((char, i) => (
          <span key={i} className="box inline-block">
            {char}
          </span>
        ))}
      </h1>

      <div className="w-full absolute h-full flex justify-center items-center">
        <img
          className="sm:w-100 sm:h-100 h-75 w-75 object-cover border-4 border-accent rounded-full"
          src={me}
          alt=""
          style={{ opacity: 0 }} // hidden until scroll starts
        />
      </div>

      <motion.div
      initial={{
        y: 50,
        opacity: 0
      }}
        animate={{
          opacity: done ? 1 : 0,
          y: done ? [50, 0] : 50,
        }}
        className={`absolute bottom-25 text-4xl z-10 ${done ? "animate-bounce" : "animate-none"}`}
      >
        <IoMdArrowDown />
      </motion.div>
    </section>
  );
};

export default ParralaxScroll;
