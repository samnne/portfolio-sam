const navLinks = [
    {
        label: "Home",
        href: "#home"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Education",
        href: "#education"
    },
    {
        label: "Contact",
        href: "#contact"
    },
]

const codingLanguages = [
    {
        "label": "Python",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
        "label": "HTML5",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        "label": "CSS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        "label": "VSCode",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
        "label": "JavaScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        "label": "React JS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        "label": "Bootstrap",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
        "label": "GitHub",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        "label": "Tailwind",
        "icon": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    },
    {
        "label": "Express",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
        "label": "MongoDB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        "label": "Java",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
        "label": "Canva",
        "icon": "../src/assets/canva.svg"
    }
]

const education = [
    {
        school: "University of Victoria (UVic)",
        duration: "2024–2028",
        credential: "Bachelor's Degree"
    },
    {
        school: "Ernest Manning High School",
        duration: "2021–2024",
        credential: "High School Diploma"
    },

];


const ProjectCards = [
    {
        "name": "UVic",
        "description": "A practice project of designing a UVic cuisine website to make hours, locations, and menu's more accessable.",
        "code": ["HTML", "CSS", "Bootstrap"],
        "repo": "https://github.com/samnne/uvic",
        "website": "https://samnne.github.io/uvic/html/index.html",
        "imgURL": "../src/assets/uvic.png"
    },
    {
        "name": "Nike Redesign",
        "description": "A static and responsive webpage with a clean design and a predictable yet friendly flow.",
        "code": ["React", "Vite", "Tailwind CSS", "JavaScript"],
        "repo": "https://github.com/samnne/nikedesign-sam",
        "website": "https://nikedesign-sam.pages.dev/",
        "imgURL": "../src/assets/nike.png"
    },
    {
        "name": "TopShop",
        "description": "A Shopping List CRUD, REST, Mongodb, and Express application that utilizes google gemini to generate price ranges. ",
        "code": ["JavaScript", "CSS", "EJS", "Node.js", "Express", "Tailwind CSS", "Google Gemini", "MongoDb"],
        "repo": "https://github.com/samnne/topshop",
        "website": "hi",
        "imgURL": "../src/assets/topshop.png"
    }
]

export {
    navLinks, codingLanguages, ProjectCards, education
}