import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  store,
  jjk,
  snapit,
  nowted,
  remotestate,
} from "../assets";
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "exp",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Technology",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "RemoteState",
    icon: remotestate,
    iconBg: "#383E56",
    date: "Feb 2025 - June 2025",
    points: [
      "Developed an interview management dashboard using React.js and Next.js",
      "Integrated RESTful APIs and Shadcn/UI components for dynamic user interactions",
      "Reduced page load time by ~40% through component optimization and lazy loading",
      "Collaborated in Agile sprints with backend and design teams using GitHub and Figma",
    ],
  },
];

const projects = [
  {
    name: "StoreX - Asset Management",
    description:
      "Web-based HR tool to manage company assets, employee WFH status, and leave data with admin controls and reporting features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: store,
    source_code_link: "https://github.com/RSrishigupta/StoreX",
  },
  {
    name: "Nowted - Notes App",
    description:
      "Full-stack note-taking application with secure login, user authentication, and cross-device synchronization capabilities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: nowted, // Add your project image import
    source_code_link: "https://github.com/RSrishigupta/nowted_Nextjs",
    live_demo_link:
      "https://nowted-nextjs-i0tgx69jb-rishi-guptas-projects-f08aefc5.vercel.app/",
  },
  {
    name: "Jujutsu Kaisen Explorer",
    description:
      "Interactive anime character explorer with dynamic routing, search functionality, and detailed character profiles from a public API.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: jjk, // Add your project image import
    source_code_link: "https://github.com/rishigupta0786/JujutsuKaisen",
    live_demo_link: "https://jujutsu-kaisen-sand.vercel.app/",
  },
  {
    name: "SnapIt - Image Gallery",
    description:
      "Stylish animated image gallery with smooth transitions, responsive layout, and interactive UI elements for enhanced visual experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: snapit, // Add your project image import
    source_code_link: "https://github.com/rishigupta0786/SnapIt",
    live_demo_link: "https://rishigupta0786.github.io/SnapIt/",
  },
];

export { services, technologies, experiences, projects };
