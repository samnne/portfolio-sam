import { useEffect, useState } from "react";
import { navLinks } from "../constants/constants";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const [isAnimated, setIsAnimated] = useState(false)
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  function toggleCollapse() {
    const content = document.getElementById(`navLinks`);
    //content.classList.toggle("hidden")

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
  useEffect(()=>{
    setIsAnimated(prev => isTablet ? prev : false)
  }, isTablet)

  function handleActiveLink(e, index) {
    const button = document.querySelectorAll(`#active-links`);

    button.forEach((b) => {
      if (b.classList.contains(index)) {
        b.classList.toggle("bg-black");
      } else {
        b.classList.remove("bg-black");
      }
    });
  }
  return (
    <header className="fixed z-50 py-4 w-full fixed-top bg-black shadow-lg shadow-gray-950 min-lg:shadow-none min-lg:bg-none">
      <nav className="flex justify-center max-lg:justify-between px-5 text-primary">
        <ul className="flex justify-center max-lg:hidden gap-2 border bg-black shadow-md shadow-gray-950 border-secondary-dark p-1 rounded-full">
          {navLinks.map((item, index) => {
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleActiveLink(e, index)}
                id="active-links"
                role="button"
                className={` ${index} hover:bg-white hover:text-black text-xl  cursor-pointer transition-all duration-200 ease-in-out text-text-primary px-5 py-2 rounded-full `}
              >
                <li className="" key={item.label}>
                  {item.label}
                </li>
              </a>
            );
          })}
        </ul>
        <p className="hidden max-lg:block cursor-pointer py-1 px-2 text-3xl text-white rounded-full duration-300 transition-colors">
          <span className="font-bold tracking-widest">SAM</span>
        </p>
        <motion.a
          role="button"
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.2,
          }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.04}
          onClick={()=> setIsAnimated(!isAnimated)}
          aria-controls="navLinks"
          className="hidden max-lg:block text-white cursor-pointer py-1 px-2 text-3xl rounded-full duration-300 transition-colors peer"
        >
          <i className="fa-solid fa-bars "></i>
        </motion.a>
      </nav>
      <motion.nav id="navLinks" 
        animate={{
          height: isAnimated ? "fit-content" : 0

        }}
      className="overflow-hidden h-0 ">
        <ul className="flex flex-col gap-2 ">
          {navLinks.map((nav) => {
            return <motion.a 
              href={nav.href}
              whileHover={{
                background: "rgba(255,255,255,0.3)",
              }}
              whileTap={{
                background: "rgba(255,255,255,0.5)",
                fontWeight: "bold",
                
              }}
            className="w-full h-full text-2xl p-2 transition-all cursor-pointer">
              {nav.label}
            </motion.a>;
          })}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Nav;
