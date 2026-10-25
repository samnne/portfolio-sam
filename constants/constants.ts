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
import ssi from "../src/assets/ssi.png";
import aeternum from "../src/assets/aeternum.png";
import benny from "../src/assets/benny.png";
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
    years: 5,
  },
  {
    label: "HTML5",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg",
    years: 4,
  },
  {
    label: "CSS",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg",
    years: 4,
  },
  {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg",
    years: 5,
  },
  {
    label: "TypeScript",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/typescript/typescript-original.svg",
    years: 2,
  },
  {
    label: "React JS",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg",
    years: 3,
  },
  {
    label: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/bootstrap/bootstrap-original.svg",
    years: 3,
  },
  {
    label: "GitHub",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/github/github-original.svg",
    years: 6,
  },
  {
    label: "Tailwind",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg",
    years: 3,
  },
  {
    label: "Express",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/express/express-original.svg",
    years: 3,
  },
  {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mongodb/mongodb-original.svg",
    years: 2,
  },
  {
    label: "Firebase",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/firebase/firebase-plain.svg",
    years: 2,
  },
  {
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg",
    years: 2,
  },
  {
    label: "MySQL",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg",
    years: 1,
  },
  {
    label: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/postgresql/postgresql-original.svg",
    years: 2,
  },
  {
    label: "SQL",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg",
    years: 1,
  },
  {
    label: "R",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/r/r-original.svg",
    years: 1,
  },
  {
    label: "Nextjs",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nextjs/nextjs-line.svg",
    years: 2,
  },
  {
    label: "FastAPI",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/fastapi/fastapi-original.svg",
    years: 2,
  },
  {
    label: "Node.js",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nodejs/nodejs-original.svg",
    years: 3,
  },
  {
    label: "Redux",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/redux/redux-original.svg",
    years: 3,
  },
  {
    label: "Zustand",
    icon: "https://files.svgcdn.io/devicon-plain/zustand.png",
    years: 2,
  },
  {
    label: ".NET Core",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/dotnetcore/dotnetcore-original.svg",
    years: 1,
  },
  {
    label: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp",
    years: 1,
  },
  {
    label: "Jupyter Notebook",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/jupyter/jupyter-original.svg",
    years: 1,
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
      "GitHub",
      "Cloudinary",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Zustand",
      "Tailwind",
    ],
    repo: "https://github.com/samnne/marketquad",
    website: "https://market-quad.com",
    imgURL: marketQuadIMG,
  },
  {
    name: "Benny",
    description:
      "A receipt-tracking budgeting app that parses grocery receipts and tracks spending by category. Benny analyzes receipt data to show where your money goes and predicts your total for your next trip, sending the estimate as a notification. Built with Java Spring Boot and the Gemini API for receipt parsing, TypeScript with React Native (Expo) on the frontend, and Firestore for storage.",

    code: [
      "React Native",
      "Expo",
      "TypeScript",
      "SpringBoot",
      "Java",
      "Firebase",
      "Google Cloud Platform (GCP)",
      "Zustand",
      "Tailwind",
      "CI/CD"
    ],
    repo: "https://github.com/samnne/benny",
    website: "",
    imgURL: benny,
  },
  {
    name: "uEyes",
    description:
      "A real-time assistive vision system designed to improve independence for visually impaired users. uEyes streams live camera input to an AI model that generates contextual scene descriptions, retains short-term visual memory, and supports natural, conversational queries.",
    code: [
      "React",
      "Zustand",
      "FastAPI",
      "Firebase",
      "Python",
      "GitHub",
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
    name: "Simple Shell Interpreter",
    description: `A shell interpreter written in C that runs built-in commands and any program on the user's PATH, with support for background tasks via system calls for process creation. Includes persistent command history across sessions, git support, and custom data structures for tracking background processes and stored commands.`,
    code: ["C", "System Calls", "Process Management", "Git", "Linux"],
    repo: "https://github.com/samnne/ssi",
    website: "",
    imgURL: ssi,
  },
  // {
  //   name: "uBlog",
  //   description: `A complete CRUD desktop based admin blogging system. Built with Python, PyQt6, with local storage handling. Tested with the Unit Test framework to follow the DAO protocol for best practices.`,
  //   code: ["Python", "PyQt6", "Unittest", "Git", "Linux", "CSS", "GitLab"],
  //   repo: "https://github.com/samnne/blogging-system",
  //   website: "",
  //   imgURL: uBlog,
  // },
  {
    name: "Survey Parser",
    description: `A high-performance C-based data parser that processes raw survey data and converts it into structured, analysis-ready datasets using Likert scale normalization.`,
    code: ["C", "Memory Management", "Bash", "Git", "Linux", "GitHub"],
    repo: "https://github.com/samnne/survey_parser",
    website: "",
    imgURL: survey_parser,
  },

  // {
  //   name: "TopShop",
  //   description:
  //     "A full-stack shopping system with an AI-powered estimation engine that generates real-world price predictions as users build lists. TopShop combines a RESTful backend taking everyday planning into dynamic data entry.",
  //   code: [
  //     "JavaScript",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Mongoose",
  //     "GitHub",
  //     "EJS",
  //     "Tailwind CSS",
  //     "Google Gemini",
  //   ],
  //   repo: "https://github.com/samnne/topshop",
  //   website: "https://topshop-t5gv.onrender.com/login",
  //   imgURL: topShopImg,
  // },
  // {
  //   name: "Macbook Redesign",
  //   description:
  //     "A pixel-perfect, responsive recreation of Apple's M4 MacBook Pro landing page featuring 3D model rendering with Three.js and scroll-driven animations via GSAP.",
  //   code: ["React", "Three.js", "GSAP", "Tailwind CSS", "WebGL"],
  //   repo: "https://github.com/samnne/m4macbook",
  //   website: "https://samnne.github.io/m4macbook/",
  //   imgURL: macbook,
  // },
  {
    name: "VST Fingers",
    description:
      "A real-time computer vision interface that transforms hand movements into expressive control signals for digital audio workstations. Using live tracking and gesture recognition, VST Fingers maps finger motion to MIDI/OSC parameters, enabling intuitive, touchless interaction with virtual instruments. ",
    code: [
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
    tags: [
      "TypeScript",
      "React Native",
      "FastAPI",
      "React",
      "UI/UX Design",
      "Figma",
    ],
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
