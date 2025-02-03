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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bluecose,
  ranksTel,
  reactPizza,
  farAway,
  jackSmith,
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
    title: "Web Designer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Bluecose",
    icon: bluecose,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Bluecose",
    icon: bluecose,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "RanksTel",
    icon: ranksTel,
    iconBg: "#E6DEDD",
    date: "Date Not Shown!",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Anonymous",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Date Not Shown!",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nayeem proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nayeem does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nayeem optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "React Fast Pizza",
    description:
      "A fast and user-friendly pizza ordering platform with a modern UI and real-time cart updates. Users can browse the menu, customize their orders, and track deliveries seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reactPizza,
    source_code_link: "https://github.com/Nayeem-Ahmed1/React-fast-pizza",
  },
  {
    name: "Far Away",
    description:
      "A simple and efficient travel packing assistant that helps users plan and organize their trip essentials. Users can create packing lists, categorize items, and check them off as they pack. With a clean UI and real-time updates, it ensures nothing important is left behind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "component",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: farAway,
    source_code_link: "https://github.com/Nayeem-Ahmed1/Travel-list-React",
  },
  {
    name: "Jack Smith Portfolio",
    description:
      "A sleek and responsive personal portfolio for Jack Smith, built with HTML and CSS. It showcases his skills, projects, and contact information in a clean, professional design. Optimized for all devices, it provides a smooth browsing experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jackSmith,
    source_code_link:
      "https://github.com/Nayeem-Ahmed1/jack-smith-website?tab=readme-ov-file",
  },
];

export { services, technologies, experiences, testimonials, projects };
