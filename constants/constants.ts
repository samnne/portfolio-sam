import uPathIMG from "../src/assets/uPath.png";
import vstfingers from "../src/assets/VSTfingers.png";
import topShopImg from "../src/assets/topshop.png";
import marketQuadIMG from "../src/assets/marketquad.png";
import macbook from "../src/assets/macbook.png";
import uEyesIMG from "../src/assets/ueyes.png";
import uBlog from "../src/assets/ublog.png";
import type { NavLink } from "../types/global";
import survey_parser from "../src/assets/survey_parser.png";
import proper_seer from "../src/assets/proper_seer.png";
import aeternum from "../src/assets/aeternum.png"
import type { CodingLanguage } from "../types/global";
import type { EducationItem, ProjectCard } from "../types/global.js";
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
    icon: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/python.svg",
  },
  {
    label: "HTML5",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg",
  },
  {
    label: "CSS",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg",
  },
  {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg",
  },
  {
    label: "TypeScript",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/typescript/typescript-original.svg",
  },
  {
    label: "React JS",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg",
  },
  {
    label: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/bootstrap/bootstrap-original.svg",
  },
  {
    label: "GitHub",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/github/github-original.svg",
  },
  {
    label: "Tailwind",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    label: "Express",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/express/express-original.svg",
  },
  {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "Firebase",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/firebase/firebase-plain.svg",
  },
  {
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg",
  },
  {
    label: "MySQL",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg",
  },
  {
    label: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/postgresql/postgresql-original.svg",
  },
  {
    label: "SQL",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg",
  },
  {
    label: "R",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/r/r-original.svg",
  },
  {
    label: "Nextjs",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nextjs/nextjs-line.svg",
  },
  {
    label: "FastAPI",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/fastapi/fastapi-original.svg",
  },
  {
    label: "Node.js",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nodejs/nodejs-original.svg",
  },
  {
    label: "Redux",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/redux/redux-original.svg",
  },
  {
    label: "Zustand",
    icon: "https://files.svgcdn.io/devicon-plain/zustand.png",
  },
  {
    label: ".NET Core",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    label: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp",
  },
  {
    label: "Jupyter Notebook",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/jupyter/jupyter-original.svg",
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
    name: "MarketQuad",
    description:
      "A secure, student-only marketplace built for the University of Victoria community. MarketQuad enforces verified access to eliminate spam and unsafe interactions, enabling trusted peer-to-peer transactions on campus. ",
    code: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Cloudinary",
      "Prisma",
      "Supabase",
      "PostgreSQL",
    ],
    repo: "https://github.com/samnne/marketquad",
    website: "https://market-quad.com",
    imgURL: marketQuadIMG,
  },
  {
    name: "uEyes",
    description:
      "A real-time assistive vision system designed to improve independence for visually impaired users. uEyes streams live camera input to an AI model that generates contextual scene descriptions, retains short-term visual memory, and supports natural, conversational queries.",
    code: [
      "React",
      "FastAPI",
      "Firebase",
      "Python",
      "WebSockets",
      "Google Gemini",
      "Tailwind",
      "Docker",
    ],
    repo: "https://github.com/samnne/u-eyes",
    website: "",
    imgURL: uEyesIMG,
  },
  {
    name: "uBlog",
    description: `A complete CRUD desktop based admin blogging system. Built with Python, PyQt6, with local storage handling. Tested with the Unit Test framework to follow the DAO protocol for best practices.`,
    code: ["Python", "PyQt6", "Unittest", "Git", "Linux", "CSS"],
    repo: "https://github.com/samnne/blogging-system",
    website: "",
    imgURL: uBlog,
  },
  {
    name: "Survey Parser",
    description: `A high-performance C-based data parser that processes raw survey data and converts it into structured, analysis-ready datasets using Likert scale normalization.`,
    code: ["C", "Memory Management", "Bash", "Git", "Linux"],
    repo: "https://github.com/samnne/survey_parser",
    website: "",
    imgURL: survey_parser,
  },

  {
    name: "TopShop",
    description:
      "A full-stack shopping system with an AI-powered estimation engine that generates real-world price predictions as users build lists. TopShop combines a RESTful backend taking everyday planning into dynamic data entry.",
    code: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Tailwind CSS",
      "Google Gemini",
    ],
    repo: "https://github.com/samnne/topshop",
    website: "https://topshop-t5gv.onrender.com/login",
    imgURL: topShopImg,
  },
  {
    name: "Macbook Redesign",
    description:
      "A pixel-perfect, responsive recreation of Apple's M4 MacBook Pro landing page featuring 3D model rendering with Three.js and scroll-driven animations via GSAP.",
    code: ["React", "Three.js", "GSAP", "Tailwind CSS", "WebGL"],
    repo: "https://github.com/samnne/m4macbook",
    website: "https://samnne.github.io/m4macbook/",
    imgURL: macbook,
  },
  {
    name: "VST Fingers",
    description:
      "A real-time computer vision interface that transforms hand movements into expressive control signals for digital audio workstations. Using live tracking and gesture recognition, VST Fingers maps finger motion to MIDI/OSC parameters, enabling intuitive, touchless interaction with virtual instruments. ",    code: [
      "Python 3",
      "OpenCV",
      "MediaPipe",
      "OSC",
      "Max9",
      "Audio Processing",
    ],
    repo: "https://github.com/samnne/vst-fingers",
    website: "",
    imgURL: vstfingers,
  },
];


const jobs: Job[] = [
  {
    company: "Aeternum",
    role: "Frontend Developer (Riipen)",
    dateRange: "May – Jul 2026",
    image: aeternum,
    link: "https://aeternumproject.com/", // swap in the real link
    bullets: [
      "Contributed new features to a secure digital legacy platform that lets users create and share moments through photos, documents, and videos with family and friends.",
      "Implemented a permission-first memory system (Memoria) in TypeScript across a shared codebase, including a typed service layer and Zustand store.",
      "Built RAG-backed similarity search with a FastAPI and pgvector backend, filtering retrieved chunks by permission scope and relevance.",
      "Used Figma throughout the design process, adhering to accessibility standards for users with minimal technical literacy.",
    ],
    tags: ["TypeScript", "React Native", "FastAPI", "React", "UI/UX Design", "Figma"],
  },
  {
    company: "ProperSeer",
    role: "Frontend Intern",
    dateRange: "May – Sep 2025",
    image: proper_seer,
    link: "https://www.properseer.com/",
    bullets: [
      "Collaborated directly with the lead developer to conduct rigorous code analysis, maintaining high-quality standards and modularity across the company's property management code base.",
      "Engineered responsive, accessible user interfaces using React, Redux, and Bootstrap, which significantly enhanced cross-device usability and workflow efficiency for property managers.",
      "Bridged frontend components with backend services by handling complex API calls and asynchronous data flows involving SQL Server, C#, and .NET Core.",
      "Led the development of the Owner's Page, providing property owners with centralized tools to manage tenants.",
    ],
    tags: ["React", "Redux", "Bootstrap", "C#", ".NET Core", "SQL Server"],
  },
];
export { navLinks, codingLanguages, ProjectCards, education, jobs };
