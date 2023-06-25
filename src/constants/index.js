import {
  banking,
  drink,
  ecommerce,
  node,
  instagram,
  facebook,
  twitter,
  linkedin,
  html,
  css,
  javascript,
  react,
  nodeIcon,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    goTo: "/",
  },
  {
    id: "education&experience",
    title: "Education & Experience",
    goTo: "/education&experience",
  },
  {
    id: "about_me",
    title: "About me",
    goTo: "/about_me",
  },

  {
    id: "contact",
    title: "Contact",
    goTo: "/contact",
  },
];

export const projects = [
  {
    id: "project1",
    category: "React",
    title: "E-commerce website",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: ecommerce,
    github_link:
      "https://github.com/prasish07/Client-side-e-commerece-website-.git",
    live_website: "https://e-commerce-0990.onrender.com",
  },
  {
    id: "project2",
    category: "React",
    title: "Banking website",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: banking,
    github_link: "https://github.com/prasish07/Banking-website-",
    live_website: "https://banking009.netlify.app/",
  },
  {
    id: "project3",
    category: "React",
    title: "Drink website",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: drink,
    github_link: "https://github.com/prasish07",
    live_website: "https://react-project-cocktail-drinksearch.netlify.app/",
  },
  {
    id: "project5",
    category: "Node",
    title: "Job API",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: node,
    github_link: "https://github.com/prasish07/job-API.git",
    live_website: "live.com",
  },
  {
    id: "project6",
    category: "Node",
    title: "E-commerece API",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: node,
    github_link: "https://github.com/prasish07/Server-Side-e-commerce-API-.git",
    live_website: "live.com",
  },
  {
    id: "project7",
    category: "Node",
    title: "Payment API",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: node,
    github_link: "https://github.com/prasish07/payment-api.git",
    live_website: "live.com",
  },
  {
    id: "project4",
    category: "Node",
    title: "Task management API",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: node,
    github_link: "https://github.com/prasish07/Task-manager_API.git",
    live_website: "live.com",
  },
  {
    id: "project8",
    category: "Node",
    title: "Records API",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: node,
    github_link: "https://github.com/prasish07/Records.git",
    live_website: "live.com",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/prasish_07/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100009284236842",
  },
  // {
  //   id: "social-media-3",
  //   icon: twitter,
  //   link: "https://www.twitter.com/",
  // },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/prasish-shrestha-8b5336237/",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    icon: html,
  },
  {
    id: 1,
    name: "CSS",
    icon: css,
  },
  {
    id: 1,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 1,
    name: "React",
    icon: react,
  },
  {
    id: 1,
    name: "Node",
    icon: nodeIcon,
  },
];

export const education = [
  {
    id: 1,
    degree: "Bsc(hons) Computer Science",
    university: "Affiliated University of Wolverhamptom",
    year: "2022 - present",
    college: "Herald collage, Kathmandu",
  },
  {
    id: 2,
    degree: "Plus two",
    university: "Tribhuvan University",
    year: "2019-2021",
    college: "Khwopa college",
  },
];
export const experience = [
  {
    id: 1,
    company: "Development Platform",
    college: "Herald College, Kathmandu",
    Role: "Backend Developer",
    year: "2023 - present",
  },
];
