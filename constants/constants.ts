
import uPathIMG from "../src/assets/uPath.png";
import movieIMG from "../src/assets//movieApp.png";
import topShopImg from "../src/assets//topshop.png";
import nike from "../src/assets//nike.png";
import type { NavLink } from "../types/global";
const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const codingLanguages: CodingLanguage[] = [
  {
    label: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    label: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    label: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    label: "VSCode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    label: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "Tailwind",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    label: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    label: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const education: EducationItem[] = [
  {
    school: "University of Victoria (UVic)",
    duration: "2024–2028",
    credential: "Bachelor's Degree",
  },
  // {
  //   school: "Ernest Manning High School",
  //   duration: "2021–2024",
  //   credential: "High School Diploma",
  // },
];



const ProjectCards: ProjectCard[] = [
  {
    name: "uPath",
    description:
      "A learning path generator which aims to de-mystify the journey of gaining a new skill.",
    code: [
      "React",
      "Tailwind",
      "Firebase",
      "Firestore",
      "ExpressJs",
      "Google Prompt API",
      "Node.Js",
    ],
    repo: "https://github.com/samnne/google_ai_hackathon",
    website: "https://samnne.github.io/google_ai_hackathon/",
    imgURL: uPathIMG,
  },
  {
    name: "TopShop",
    description:
      "A Full Stack Shopping List REST Api, Mongodb, and Express application that utilizes google gemini to generate price ranges.",
    code: [
      "JavaScript",
      "CSS",
      "EJS",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Google Gemini",
      "MongoDb",
    ],
    repo: "https://github.com/samnne/topshop",
    website: "https://topshop-t5gv.onrender.com/login",
    imgURL: topShopImg,
  },
  {
    name: "Nike Redesign",
    description:
      "A static and responsive webpage with a clean design and a predictable yet friendly flow.",
    code: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    repo: "https://github.com/samnne/nikedesign-sam",
    website: "https://nikedesign-sam.pages.dev/",
    imgURL: nike,
  },

  // {
  //     "name": "Portfolio",
  //     "description": "A personal portfolio used to showcase my proficiencies in React, and Tailwind",
  //     "code": ["React", "Vite", "CSS", "Tailwind CSS", "Cloudflare", "JavaScript", "HTML5"],
  //     "repo": "https://github.com/samnne/portfolio-sam",
  //     "website": "portfolio-sam.pages.dev",
  //     "imgURL": "/portfolio.png"
  // },
  {
    name: "Movie App",
    description:
      "A movie application which allows user to search for any given movie saved to computers local storage. Designed with React",
    code: ["JavaScript", "HTML", "CSS", "React", "Redux", "Vite"],
    repo: "https://github.com/samnne/movieApp",
    website: "https://samnne.github.io/movieApp",
    imgURL: movieIMG,
  },
];

export { navLinks, codingLanguages, ProjectCards, education };
