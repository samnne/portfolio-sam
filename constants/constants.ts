import uPathIMG from "../src/assets/uPath.png";
import vstfingers from "../src/assets/VSTfingers.png";
import topShopImg from "../src/assets//topshop.png";

import macbook from "../src/assets/macbook.png";
import type { NavLink } from "../types/global";
import type { CodingLanguage } from "../types/global";
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
    label: "Work Experience",
    href: "#we",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  // {
  //   label: "About",
  //   href: "#about",
  // },
  {
    label: "Education",
    href: "#education",
  },
  // {
  //   label: "Contact",
  //   href: "#contact",
  // },
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
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
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
    label: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    label: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    label: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    label: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
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
    name: "Macbook Redesign",
    description:
      "A clean, modern, and repsonsive redesign of Apple's own M4 Macbook pro. Using ThreeJs, Gsap, and React",
    code: ["React", "GSAP", "Tailwind CSS", "ThreeJS"],
    repo: "https://github.com/samnne/m4macbook",
    website: "https://samnne.github.io/m4macbook/",
    imgURL: macbook,
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
    name: "VST Fingers",
    description:
      "A Python-to-Max9 Application using machine learning to control VST's by your fingers",
    code: [
      "Python3",
      "Max9",
      "OpenCV",
      "MediaPipe",
      "Machine Learning",
      "Audio Processing",
    ],
    repo: "https://github.com/samnne/vst-fingers",
    website: "",
    imgURL: vstfingers,
  },
];

export { navLinks, codingLanguages, ProjectCards, education };
