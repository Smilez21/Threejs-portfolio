import {
  mobile,
  fi,
  backend,
  creator,
  man,
  car,
  sky,
  web,
  cryptoverse,
  javascript,
  typescript,
  html,
  css,
  cp,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  ui,
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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Code Plateau",
    icon: cp,
    iconBg: "#383E56",
    date: "Febuary 2022 - April 2022",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other senior developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Code Plateau",
    icon: cp,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mentor",
    company_name: "Blue House Technologies",
    icon: creator,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications.",
      "Mentoring students based on stacks.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Virtuous proved me wrong.",
    name: "Vincent .J",
    designation: "Founder",
    company: "Vezz Stiches",
    image: sky,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Virtuous does.",
    name: "Henry .O",
    designation: "COO",
    company: "Pet Pal",
    image: man,
  },
  {
    testimonial:
      "Virtuous is a timely and organised developer with interest of his client at heart.!",
    name: "Hillary",
    designation: "Manager",
    company: "Hillary nails",
    image: car,
  },
];

const projects = [
  {
    name: "Cryptoverse",
    description:
      "Web-based platform that allows users to see the general crypto stats of all cryptocurrencies.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Antd",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoverse,
    source_code_link: "https://smilez1.netlify.app",
  },
  {
    name: "Smilez-Fitness",
    description:
      "Web application that enables users with thier daily routines of exercises.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: fi,
    source_code_link: "https://smilez-fitness.netlify.app",
  },
  {
    name: "Nexis",
    description:
      "A modern UI/UX website built with React and Tailwindcss.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: ui,
    source_code_link: "https://ecommerce-sanity-ten.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
