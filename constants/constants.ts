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
import uvsdlogo from "../src/assets/uvsdlogo.jpeg";
import benny from "../src/assets/benny.png";
import type { CodingLanguage } from "../types/global";
import type { EducationItem, Job, ProjectCard } from "../types/global.js";


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
    simpleSummary: "A verified, student-only marketplace.",
    code: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Expo",
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
    simpleSummary: "An AI-powered receipt tracker.",

    code: [
      "Java",
      "TypeScript",
      "SpringBoot",
      "React Native",
      "Expo",
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
    simpleSummary: "conversational vision assistant.",
    code: [
      "React",
      "Python",
      "Docker",
      "Zustand",
      "FastAPI",
      "Firebase",
      "GitHub",
      "WebSockets",
      "Google Gemini",
      "Tailwind",
    ],
    repo: "https://github.com/samnne/u-eyes",
    website: "",
    imgURL: uEyesIMG,
  },
  {
    name: "Simple Shell Interpreter",
    description: `A shell interpreter written in C that runs built-in commands and any program on the user's PATH, with support for background tasks via system calls for process creation. Includes persistent command history across sessions, git support, and custom data structures for tracking background processes and stored commands.`,
    simpleSummary: "A C-based Unix shell.",
    code: ["C", "Process Management", "Linux", "System Calls", , "Git"],
    repo: "https://github.com/samnne/ssi",
    website: "",
    imgURL: ssi,
  },
  {
    name: "uBlog",
    description: `A complete CRUD desktop based admin blogging system. Built with Python, PyQt6, with local storage handling. Tested with the Unit Test framework to follow the DAO protocol for best practices.`,
    code: ["Python", "PyQt6", "Unittest", "Git", "Linux", "CSS", "GitLab"],
    repo: "https://github.com/samnne/blogging-system",
    website: "",
    simpleSummary: "An admin CRUD blogging system.",
    imgURL: uBlog,
  },
  {
    name: "Survey Parser",
    description: `A high-performance C-based data parser that processes raw survey data and converts it into structured, analysis-ready datasets using Likert scale normalization.`,
    simpleSummary: "A fast C parser for survey responses.",
    code: ["C", "Bash", "Linux", "Git", "Linux", "GitHub", "Memory Management"],
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
    simpleSummary: "A hand-tracking MIDI controller.",
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
    company: "UVic Satellite Design",
    role: "Software Engineer",
    dateRange: "Sep 2026 – Present",
    logo: uvsdlogo,
    image: "", 
    link: "https://home.uvsd.ca/", 
    bullets: [
      "Bridged hardware components using a Raspberry Pi to relay SPI telemetry and video packets to a host PC.",
      "Built a high-speed SPI video pipeline between an nRF5340, a Raspberry Pi, and an output laptop using FreeRTOS, Python, and C to chunk frames and stream them in real time.",
    ],
    tags: ["C", "Python", "FreeRTOS", "Raspberry Pi"],
    simpleSummary: "Built a real-time SPI video pipeline across embedded hardware.",
    location: "Victoria, BC",
  },
  {
    company: "Aeternum Corp",
    role: "Software Developer",
    dateRange: "May – Jul 2026",
    image: aeternum,
    link: "https://aeternumproject.com/", // swap in the real link
    bullets: [
      "Built context-processing logic that structures data into chunks and metadata for an LLM response pipeline.",
      "Created a dashboard API that batched metric requests, reducing network overhead and cutting latency by 70%.",
      "Designed a Figma prototype and ported it to a React Native mobile app that displays data and LLM responses, following accessibility standards for users with minimal technical literacy.",
      "Implemented a permission-first RAG memory system using FastAPI and TypeScript, backed by pgvector similarity search and enforcing a 90% confidence threshold so user data stays safe and relevant per session.",
    ],
    tags: ["TypeScript", "React Native", "Python", "FastAPI", "Figma"],
    simpleSummary: "Built a permission-first RAG memory system and a dashboard API.",
    location: "Edmonton, AB (Remote)",
  },
  {
    company: "ProperSeer",
    role: "Frontend Developer",
    dateRange: "May – Sep 2025",
    image: proper_seer,
    link: "https://www.properseer.com/",
    bullets: [
      "Created responsive user interfaces using React, Redux, and Bootstrap, improving cross-device usability.",
      "Cached expensive operations through memoization and prefetching, improving overall page load time by 20%.",
      "Developed centralized dashboard views with React and Redux, including the Owner's Page, streamlining property management workflows.",
      "Connected frontend components to backend services, handling API calls and asynchronous data flows involving SQL Server, C#, and .NET Core.",
    ],
    tags: ["React", "Redux", "JavaScript", "Bootstrap"],
    simpleSummary: "Built responsive interfaces that cut page load time by 20%.",
    location: "Calgary, AB (Remote)",
  },
];
export { navLinks, codingLanguages, ProjectCards, education, jobs };
