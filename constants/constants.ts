import uPathIMG from "../src/assets/uPath.png";
import vstfingers from "../src/assets/VSTfingers.png";
import topShopImg from "../src/assets/topshop.png";
import marketQuadIMG from "../src/assets/marketquad.png"
import macbook from "../src/assets/macbook.png";
import type { NavLink } from "../types/global";
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
    name: "MarketQuad",
    description:
      "A student-only marketplace built exclusively for the University of Victoria community. Verified UVic students can securely buy and sell items on campus — no external spam, no sketchy strangers.",
    code: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Google Gemini",
    ],
    repo: "https://github.com/samnne/marketquad",
    website: "https://market-quad.com",
    imgURL: marketQuadIMG,
  },
  {
    name: "uPath",
    description:
      "An AI-powered learning path generator that breaks down any skill into a clear, structured roadmap — removing the guesswork from self-directed learning.",
    code: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Express.js",
      "Node.js",
      "Google Gemini",
    ],
    repo: "https://github.com/samnne/google_ai_hackathon",
    website: "https://samnne.github.io/google_ai_hackathon/",
    imgURL: uPathIMG,
  },
  {
    name: "TopShop",
    description:
      "A full-stack shopping list app with a REST API backend. Uses Google Gemini to intelligently generate real-world price estimates for items as you add them.",
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
  // {
  //   name: "Macbook Redesign",
  //   description:
  //     "A pixel-perfect, responsive recreation of Apple's M4 MacBook Pro landing page — featuring 3D model rendering with Three.js and scroll-driven animations via GSAP.",
  //   code: ["React", "Three.js", "GSAP", "Tailwind CSS", "WebGL"],
  //   repo: "https://github.com/samnne/m4macbook",
  //   website: "https://samnne.github.io/m4macbook/",
  //   imgURL: macbook,
  // },
  {
    name: "VST Fingers",
    description:
      "A camera-to-DAW controller that uses real-time hand tracking to trigger and modulate VST instruments inside Max9 — turning your fingers into a live instrument.",
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

export { navLinks, codingLanguages, ProjectCards, education };
