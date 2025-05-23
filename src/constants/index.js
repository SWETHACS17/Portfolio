import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  Python,
  Java,
  cpp,
  MySQL,
  Vite,
  MaterialUI,
  FireStore,
  GitHub,
  MATLAB,
  nodejs,
  mongodb,
  git,
  figma,
  Linux,
  VScode,
  Eclipse,
  Codeblocks,
  Canva,
  supplychainmanagement,
  black,
  metatroncube,
  zidio,
  jobit,
  tripguide,
  messenger,
  threejs,
  meta,
  shopify,
  tesla,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Creative",
    icon: web,
  },
  {
    title: "Resilience",
    icon: mobile,
  },
  {
    title: "Collaborative",
    icon: backend,
  },
  {
    title: "Eloquent",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Vite",
    icon: Vite,
  },
  {
    name: "Material UI",
    icon: MaterialUI,
  },
  {
    name: "FireStore",
    icon: FireStore,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "MATLAB",
    icon: MATLAB,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Linux",
    icon: Linux,
  },
  {
    name: "VScode",
    icon: VScode,
  },
  {
    name: "Eclipse",
    icon: Eclipse,
  },
  {
    name: "Codeblocks",
    icon: Codeblocks,
  },
  {
    name: "Canva",
    icon: Canva,
  },

];

const experiences = [
 /* {
    title: "Messenger-app developer",
    company_name: "Personal",
    icon: black,
    iconBg: "#383E56",
    date: "December 2024",
    points: [
      "Developed a responsive real-time messenger application using React.js and Firebase.",
      "Implemented a user-friendly interface with Material-UI for styling and seamless user interaction.",
      "Configured Firebase Firestore for real-time database functionality, enabling instant messages",
      "Deployed the application using Firebase Hosting for fast and secure delivery",
      "Ensured a dynamic user experience by incorporating features like username prompts , and real-time UI updates. "
    ],
  },*/
  {
    title: "Frontend Developer | Intern",
    company_name: "MetatronCube Software Solutions",
    icon: metatroncube,
    iconBg: "#ffffff",
    date: "Mar 2025 - present",
    points: [
      "Enhancing a restaurant management system using the Frappe framework and JavaScript, with a focus on improving UI/UX and system integration.",
      "Collaborating with the team to optimize web applications for better performance and usability.",
    ],
  },
  {
    title: "Web Developer | Intern",
    company_name: "Zidio Developement",
    icon: zidio,
    iconBg: "#ffffff",
    date: "feb 2025 - present",
    points: [
      "Gaining expertise in full-stack development (MERN) by improving skills in frontend (React.js), backend technologies, and database management.",
      "Developing responsive and scalable web applications by following best practices, optimizing performance, and ensuring a smooth user experience.",
    ],
  },

/*
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
];


const testimonials = [
  /*
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  */
];


const projects = [
  {
    name: "Supply Chain Management",
    description:
      "Designed and implemented a graph data structure for supply chain modeling. Developed traversal methods to optimize routes and improve efficiency. Enhanced decision-making with advanced network analysis. Optimized costs and ensured smooth operations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Data Structures",
        color: "green-text-gradient",
      },
      {
        name: "Graph Algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: supplychainmanagement,
    source_code_link: "https://github.com/SWETHACS17/DSA/tree/main",
  },
   {
    name: "Messenger App Sea_The_Text",
    description:
      "Developed a responsive real-time messenger app using React.js and Firebase with a user-friendly Material-UI interface. Configured Firebase Firestore for instant messaging and deployed with Firebase Hosting for fast, secure access. Added dynamic features like username prompts and real-time UI updates for a smooth user experience. Ensured high performance with real-time data synchronization and an intuitive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "fireStore",
        color: "pink-text-gradient",
      },
    ],
    image: messenger,
    source_code_link: "https://github.com/SWETHACS17/Sea-The-Text-Messenger-App",
  },
  /*
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  */
];

export { services, technologies, experiences, testimonials, projects };