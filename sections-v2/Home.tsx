import { useEffect, useState } from 'react'



import { CiLocationOn } from "react-icons/ci"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { IoMdArrowDropright } from 'react-icons/io';
import { makeTextJitter } from '../components/TextJitter.tsx';


const Home = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [precentUntilCompletion, setPercentUntilCompletion] = useState(0);
  const [year, setYear] = useState(false);
  const [quote, setQuote] = useState({ author: "", quote: "" })

  const calculatePercentUntilCompletion = () => {
    const startDate = new Date('2024-09-01');
    const endDate = new Date('2028-04-30');
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedDuration = currentDate.getTime() - startDate.getTime();
    const percent = (elapsedDuration / totalDuration) * 100;
    setPercentUntilCompletion(percent > 100 ? 100 : percent);
  };

  const fetchQuote = async () => {
    const response = await fetch("https://dummyjson.com/quotes/random")

    const data = await response.json()

    setQuote({ author: data.author, quote: data.quote })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 50);
    return () => clearInterval(interval);
  })

  useEffect(() => {
    calculatePercentUntilCompletion();
  }, [currentDate])

  useEffect(() => {
    fetchQuote()
  }, [])


  const toggleShowYear = () => {
    setYear(prevYear => !prevYear);
  };


  const ROLES = [
    "software engineer",
    "full stack engineer",
    "designer",
    "writer"
  ];

  const pVars = {
    rest: { x: 0 },
    hover: { x: 0 },
    tap: { x: 0 }

  }
  const cVars = {
    rest: { x: 0 },
    hover: { x: 25 },
    tap: { x: 12.5 }
  }

  return (
    <LazyMotion features={domAnimation} strict>


      <header className='flex flex-col  gap-1 '>
        <div className="flex justify-between w-full items-center">
          <h1 className='text-4xl font-bold'>
            {makeTextJitter("Sam", -10, "#4ec0d5")} {" "}  {makeTextJitter("Echefu", -10, "#4ec0d5")} 
          </h1>


          <span className="ml-auto flex justify-center items-center gap-2 text-sm">Victoria, BC
            <CiLocationOn />


          </span>
        </div>
        <div className="flex  max-xl:flex-wrap w-full mt-2 ">
          <a href="mailto:sam@samechefu.com" className="pr-1 link " target="_blank" rel="noopener noreferrer">
            sam@samechefu.com
          </a>
          {" | "}
          <m.a variants={pVars} whileTap={"tap"} whileHover={"hover"} initial={"rest"} animate="rest" href="/Samuel_Echefu_Full_Stack_Resume.pdf" className="px-1  link" target="_blank" rel="noopener noreferrer">
            resume
            <m.span variants={cVars}  >
              <IoMdArrowDropright />
            </m.span>
          </m.a>
        </div>
        <div className="flex w-full justify-between gap-2 my-4">
          <span className="text-sm text-accent font-black">
            [
          </span>
          {ROLES.map(role => (
            <span key={role} className="text-sm ">{role}</span>
          ))}
          <span className="text-sm text-accent font-black">
            ]
          </span>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="w-full flex justify-between">

            <a href="https://www.uvic.ca/ecs/index.php" className="pr-1 link" target="_blank" rel="noopener noreferrer">
              uvic eng & cs with minor in stats '28
            </a>
            <span onClick={() => toggleShowYear()} className="text-sm cursor-pointer">
              {year ? "3rd year" : `${precentUntilCompletion.toFixed(7)}%`}
            </span>
          </div>
          <div className="w-full h-2  bg-background/50 mt-2">
            <div className="h-full bg-accent" style={{ width: `${precentUntilCompletion}%` }}></div>
          </div>

        </div>

        <section className="text-sm mt-10 flex flex-col gap-3">
          <p>
            Hi, I'm Sam, a 19 year old CS student and I like building software that touches the physical world, from
            real-time data pipelines to the apps people actually use every day. Right now I'm
            working with {" "}
            <a
              href="https://www.uvic.ca/ecs/index.php"
              className="text-sm text-accent transition-all hover:underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              UVic Satellite Design (UVSD)
            </a>
            , where I build SPI video and telemetry pipelines across embedded hardware.
          </p>
          <p className="text-background/50">
            I'm always{" "}
            <a href="/learning" className="text-sm text-accent transition-all hover:underline cursor-pointer">learning</a> and finding ways to be 1% smarter each day. I also have some personal
            creative <a href="/works" className="text-sm text-accent transition-all hover:underline cursor-pointer"
            >works</a> and <a href="/papers" className="text-sm text-accent transition-all hover:underline cursor-pointer"
            >past assignments</a> that I'm proud of.

          </p>
        </section>
      </header >
    </LazyMotion>
  )
}

export default Home