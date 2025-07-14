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
  mazegame,
  messenger,
  complaintManagementSystem,
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
  {
    title: "Full Stack Developer Intern",
    company_name: "Young Mynds Infotech",
    icon: black,
    iconBg: "#383E56",
    date: "May 2025 - Jun 2025",
    points: [
      "Led a team of three to design a scalable e-commerce platform for SMB Naturals, transitioning from WhatsApp-based orders to acomplete online storefront using Next.js, Firebase, Stripe, Cloudinary, and Google Auth.",
      "Developed the platform end-to-end with three distinct dashboards—user, admin, and super-admin—featuring role-basedcontrols, product and order handling, promotional offer modules, integrated payments, and courier-based delivery pricing logic."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "MetatronCube Software Solutions",
    icon: metatroncube,
    iconBg: "#ffffff",
    date: "Apr 2025 - May 2025",
    points: [
      "Migrated the company’s academy landing page from WordPress to a responsive Next.js app with SCSS, reducing hosting costsby 55% and improving performance.",
      "Debugged layout issues using Chrome DevTools and console logs, collaborated using GitHub with modern React/Next.js workflows.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Zidio Developement",
    icon: zidio,
    iconBg: "#ffffff",
    date: "Feb 2025 - May 2025",
    points: [
      "Gaining expertise in full-stack development by improving skills in frontend, backend technologies, and database management.",
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
    name: "Treasure-Hunt-Maze",
    description:
      "A-maze-ng is an exciting maze adventure game with locks, keys, multi-player mode, enemy robote chasing and much more, developed using Pygame, where players navigate through a maze to reach the treasure. With two game modes — Play with Friends and Play with Computer (Classic, Easy, Hard levels/modes)using Algorithms like A* we have made this game to offer a thrilling challenge for everyone!",
    tags: [
      {
        name: "Pygame",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: mazegame,
    source_code_link: "https://github.com/SWETHACS17/Treasure-Hunt-Maze",
  },
  
   {
    name: "Sea_The_Text",
    description:
      "Developed a responsive real-time Messenger App using React.js and Firebase with a user-friendly Material-UI interface. Configured Firebase Firestore for instant messaging and deployed with Firebase Hosting for fast, secure access. Added dynamic features like username prompts and real-time UI updates for a smooth user experience. Ensured high performance with real-time data synchronization and an intuitive design.",
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
    {
    name: "Complaint-Management-System",
    description:
      "A simple complaint management system built with Next.js, MongoDB,Cloudinary and Tailwind CSS. With features like user authentication, complaint submission, and complaints dashboard for managing/deleting complaints. The system allows users to submit complaints with image description attached to their complaints if needed.",
    tags: [
      {
        name: "Next.js, Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: complaintManagementSystem,
    source_code_link: "https://github.com/SWETHACS17/Complaint-Management-System",
  },
   {
    name: "Event Proposal Management App",
    description:
      "Led development and maintained the GitHub repository for a proposal management platform designed specifically for Anokha 2025 Techfest, featuring structured role-based access for Users, Reviewers (L0, L1, L2) and Admins. Enhanced usability and streamlined multi-level review, resulting in a 40% increase in proposal submissions and significantly improving the experience for reviewers and admins.",
    tags: [
      {
        name: "Next.js , Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: complaintManagementSystem,
    source_code_link: "https://github.com/SWETHACS17/event-proposal-app",
  },
];

export { services, technologies, experiences, testimonials, projects };