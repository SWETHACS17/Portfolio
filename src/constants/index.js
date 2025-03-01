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
  starbucks,
  carrent,
  jobit,
  tripguide,
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
    title: "Messenger-app developer",
    company_name: "Personal",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2024",
    points: [
      "Developed a responsive real-time messenger application using React.js and Firebase.",
      "Implemented a user-friendly interface with Material-UI for styling and seamless user interaction.",
      "Configured Firebase Firestore for real-time database functionality, enabling instant messages",
      "Deployed the application using Firebase Hosting for fast and secure delivery",
      "Ensured a dynamic user experience by incorporating features like username prompts , and real-time UI updates. "
    ],
  }
  /*
  ,
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
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
];

export { services, technologies, experiences, testimonials, projects };