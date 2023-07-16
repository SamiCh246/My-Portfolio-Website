import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  java,
  c,
  swift,
  dart,
  jupyter,
  bluej,
  androidstudio,
  visualstudio,
  flutter,
  firebase,
  tensorflow,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  ddsc,
  meta,
  starbucks,
  tesla,
  shopify,
  tti,
  carrent,
  jobit,
  tripguide,
  threejs,
  comingsoon,
  mobileapp,
  webdev,
  machinelearning,
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
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "C++",
    icon: c,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Swift",
    icon: swift,
  },
  // {
  //   name: "Dart",
  //   icon: dart,
  // },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  // {
  //   name: "BlueJ",
  //   icon: bluej,
  // },
  // {
  //   name: "Android Studio",
  //   icon: androidstudio,
  // },
  // {
  //   name: "Visual Studio",
  //   icon: visualstudio,
  // },
  {
    name: "Flutter",
    icon: flutter,
  },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "TensorFlow",
  //   icon: tensorflow,
  // },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Tti Testing Laboratories",
    icon: tti,
    iconBg: "#FFFFFF",
    date: "May 2021 - Jul 2021",
    points: [
      "Formulated Standard Operating Procedures through American Standards for Testing Materials for testing Personal Protective Equipment used by frontline workers and the public, amidst the Covid-19 outbreak.",
      "Raised funds worth $2380 to provide no/low cost testing to manufacturers and encourage standard.",
      "Implementing responsiveAssisted in directing a public service message to prevent sanitizer poisoning in underprivileged areas design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "President",
    company_name: "DePauw Data Science Club",
    icon: ddsc,
    iconBg: "#C3E0E5",
    date: "Jan 2023 - Present",
    points: [
      "Revived the organization by the help of Depauw Student government and the faculty. Brought awareness of the club through social media, and opened recruitment applications for the Spring 2023 executive board.",
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

const projects = [
  {
    name: "Sign Language Detector (In Progress)",
    description:
      "The Sign Language Detection Software is a Python and TensorFlow project that utilizes LabelImg for gesture annotation. It employs machine learning and computer vision techniques to accurately detect and interpret sign language gestures in real-time. By breaking down communication barriers, this software aims to facilitate seamless communication between sign language users and non-sign language users, promoting inclusivity and accessibility.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "labelimg",
        color: "pink-text-gradient",
      },
    ],
    image: machinelearning,
    source_code_link: "https://github.com/SamiCh246/Sign-Language-Detector",
  },
  {
    name: "Clima",
    description:
      "Clima is a user-friendly weather forecast application that provides real-time weather information for any location worldwide. This repository contains the source code and project files for the Clima app, enabling you to explore, contribute, and enhance the functionality of the application.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
    ],
    image: mobileapp,
    source_code_link: "https://github.com/SamiCh246/Clima",
  },
  {
    name: "Nutrivive",
    description:
      "The website provides information about the latest developments in addressing hunger and malnutrition, including current initiatives and projects. It showcases the work of organizations and raises awareness to encourage more involvement and contributions. The website also offers resources and information for those interested in learning more and making a difference.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: webdev,
    source_code_link: "https://github.com/SamiCh246/Nutrivive_Web_Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
