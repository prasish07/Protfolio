import {
	banking,
	drink,
	ecommerce,
	node,
	instagram,
	facebook,
	linkedin,
	html,
	css,
	javascript,
	react,
	nodeIcon,
	edu,
	game2048,
	towerDefense,
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
	{
		id: "project9",
		category: "JS",
		title: "Eduvalt Clone",
		description:
			"This website is Eduvalt clone building using html, css and vanilla JS. This website is fully responsive in all the screen sizes.",
		image: edu,
		github_link: "https://github.com/prasish07/Eduvalt-clone",
		live_website: "https://prasish07.github.io/Eduvalt-clone/",
	},
	{
		id: "project10",
		category: "JS",
		title: "2048 Game",
		description:
			"This is a clone of original 2048 game. User can play this game using the arrow key. User can earn the point when two cell of equal value get collided and the game is end when user can not move any cell anymore.",
		image: game2048,
		github_link: "https://github.com/prasish07/2048-clone",
		live_website: "https://prasish07.github.io/2048-clone/",
	},
	{
		id: "project11",
		category: "JS",
		title: "Tower defense Game",
		description:
			"This is a tower defense game build in pure vanilla js. In this game, user need to protect their castle using the 3 different magic tower. Each tower has their own special abilities. There is 3 different level and in each level 3 different wave of enemy comes. The game contain 3 different type of enemy is different health and damage deal to the castle. Along with this, User can also build their own level where he/she can build the path in which the enemy follow to the castle, they can define their own tower placement areas and many more.",
		image: towerDefense,
		github_link: "https://github.com/prasish07/tower-defense-game",
		live_website: "https://prasish07.github.io/tower-defense-game/",
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
