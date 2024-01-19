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
  nodejs,
  mongodb,
  git,
  docker,
  celebal,
  carrent,
  jobit,
  tripguide,
  java_prev_ui,
  postman1,
  expressjs_prev_ui
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
    title: "javascript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "data visualizer",
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
    name:"express.js",
    icon:expressjs_prev_ui
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"java",
    icon:java_prev_ui,
  },
  {
    name:"postman",
    icon:postman1

  }
];

const experiences = [
  {
    title: "Jr. Data engineer intern",
    company_name: "celebal technologies",
    icon: celebal,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Developed projects having functionalities consist of machile learning algorithm like classification,linear regression and many more",
      "Gained proficiency in data manipulation,analysis and visualization applied SQL and python for ETL processes and automation",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Code tutor",
    icon: java_prev_ui,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - april 2022",
    points: [
      "Contributed as teaching assistant in non profitable organization.",
      "Collaborating with team members in creating coding related assignment along with its solution.",
      "Participating in code reviews and providing constructive feedback to student on their learning journey.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His commitment to learning and growing in this field hasn't gone unnoticed. It's inspiring to see how you tackle challenges and continuously strive for improvement",
    name: "Robbin Thakur",
    designation: "SDE",
    company: "Acme Co",
    image: "https://media.licdn.com/dms/image/D4D03AQHAg9C1tiVL6w/profile-displayphoto-shrink_800_800/0/1692549669068?e=1710979200&v=beta&t=auzfyiB0BQ33i8vzytnEv-vx02XlOKH4BKqQ5iSRx-8",
  },
  {
    testimonial:
      "Aman's willingness to explore new technologies and embrace the learning curve is a testament to your resilience and his journey as a software developer is shaping up beautifully,",
    name: "Suman Sourabh",
    designation: "User Experience Designer",
    company: "ShyftLabs",
    image: "https://media.licdn.com/dms/image/D4D03AQFBKDgfYr6OZA/profile-displayphoto-shrink_800_800/0/1690729902751?e=1710979200&v=beta&t=HGFiajblxSZaXIgvG1NxfMgrUyroKvvXcv0j-zi3FJo",
  },
  {
    testimonial:
      " A truly commendable guy not just for the technical expertise but also for the  collaborative spirit.Keep coding and dreaming big—your potential is limitless! ",
    name: "Anant kumar ",
    designation: "Associate Software Engineer",
    company: "Virtusa",
    image: "https://images.pexels.com/photos/16225811/pexels-photo-16225811/free-photo-of-man-looking-up-on-a-modern-architecture-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
];

const projects = [
  {
    name: "WanderLust",
    description:
      "A comprehensive travel booking platform that platform that allows users to search, book, and manage hotels and rooms  from various providers, providing a convenient and efficient solution for vacation needs.",
    tags: [
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Amanavi75/wanderlust",
  },
  {
    name: "Weather",
    description:
      "Web application that enables users to search for temperature and all otherweather activity based on their location.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html5",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Amanavi75/weather_app",
  },
  {
    name: "ChatX",
    description:
      "A comprehensive Chat room  allows users to chat inside and rooms between different groups.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Amanavi75/chatX",
  },
];

export { services, technologies, experiences, testimonials, projects };
