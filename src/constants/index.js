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
  c,
  cpp,
  Bootstrap,
  kubernetes,
  MySQL,
  Python,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  quiz,
  tesla,
  shopify,
  library,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
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
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Python",
    icon: Python,
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
];

const testimonials = [
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
];
const education=[
  {
    name:"Dr Br Ambedkar National Institute Of Technology,Jalandhar,Punjab",
    degree:"Bachelor of Technology,Information Technology",
    date:"12/2021 - Present",
    score:"CGPA: 7.56",
  },
  {
    name:"Saint Fateh Singh Convent School,Bathinda,Punjab",
    degree:"Higher Secondary-CBSE Board",
    date:"06/2019 - 07/2021",
    score:"Percentage: 85%",
  },
  {
    name:"Lord Rama Public School,Bathinda,Punjab",
    degree:"Secondary-CBSE Board",
    date:"03/2007 - 06/2019",
    score:"Percentage: 88.6%",
  },
]
const projects = [
  {
    name: "Library Management System",
    description:
    "I created a robust library management system for HackMol3.0, including MySQL database management, frontend collaboration, and user-specific publication management for diverse user roles.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "red-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/KingshukBansal/Team-Hustlers.git",
  },
  {
    name: "Quiz Application",
    description:
      "I developed a Java-based quiz application with backend functionality, MySQL database management, and result tracking, allowing teachers to create question papers and students to attempt them while providing easy access to student results for teachers.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/KingshukBansal/Quiz_application.git",
  },
  
];
const achievements=[
{
  achieve:"Solved 250+ problems on GeeksforGeeks with an Overall Coding Score greater than 600+."
},
{
  achieve:"Got 98.41 percentile in JEE Mains 2021 and 13090 rank in JEE Advance 2021."
},
{
  achieve:"Dance prodigy in award-winning club, clinching 3rd prize at the prestigious ”Shutup N Dance during Utkansh 23’ fest."
}
];
export { services, technologies, experiences, testimonials, projects ,education, achievements};
