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
    description: `
      This website offers a seamless shopping experience for users and efficient management capabilities for administrators. Users can easily view a wide range of products and access detailed information about each item.The website's user interface is intuitive and user-friendly, allowing customers to add products to their cart with just a few clicks. They can proceed to the checkout process smoothly and securely.
      `,
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
      "This is a preview of a contemporary banking website developed using React and Tailwind CSS. The objective was to create a cutting-edge website that embodies the essence of a banking company in a modern context.",
    image: banking,
    github_link: "https://github.com/prasish07/Banking-website-",
    live_website: "https://banking009.netlify.app/",
  },
  {
    id: "project3",
    category: "React",
    title: "Drink website",
    description:
      "This is a compact website designed for browsing various drinks. The website was developed using React.js, aiming to provide an engaging user experience while exploring different beverage options.",
    image: drink,
    github_link: "https://github.com/prasish07",
    live_website: "https://react-project-cocktail-drinksearch.netlify.app/",
  },
  {
    id: "project5",
    category: "Node",
    title: "Job API",
    description:
      "This API incorporates CRUD operations for job management, alongside robust authentication and authorization mechanisms.",
    image: node,
    github_link: "https://github.com/prasish07/job-API.git",
    live_website: "live.com",
  },
  {
    id: "project6",
    category: "Node",
    title: "E-commerece API",
    description:
      "The project is a hosted e-commerce API developed using the MERN stack. It includes features such as user authentication and authorization, CRUD operations for jobs, and integration with MongoDB for database management. The API offers routes for user registration, login, and logout, as well as routes for managing products, reviews, and orders. The project also implements security measures like rate limiting, helmet, and XSS protection. It has been deployed on Heroku for easy access and scalability.",
    image: node,
    github_link: "https://github.com/prasish07/Server-Side-e-commerce-API-.git",
    live_website: "live.com",
  },
  {
    id: "project7",
    category: "Node",
    title: "Payment API",
    description:
      "This project has simple register, signin operation to make the payment for a website. This allow only authenticated user to make the payment",
    image: node,
    github_link: "https://github.com/prasish07/payment-api.git",
    live_website: "live.com",
  },
  {
    id: "project8",
    category: "Node",
    title: "Records API",
    description:
      "This API is built with Node.js and MySQL, utilizing Sequelize as the ORM for performing CRUD operations on the database. It incorporates data validation using the Zod library, ensuring the integrity of the data. Additionally, unit testing has been implemented to ensure the reliability and functionality of the API.",
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
