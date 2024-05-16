import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const aboutText = `
Hello, my name is Dhenmas Adhimaulana Saputra. I am an Information Systems student and am very enthusiastic about developing myself as a Full Stack Developer and Software Engineer. I have attended an intensive bootcamp at Harisenin.com, where I learned about ReactJS, Node.js, Express, and MySQL with passion and earnestness.

Apart from that, I also took part in the MSIB 6 program at Stechoq Academy, the focus was on Industry 4.0 for the Manufacturing Industry. There, I studied Vue.js, Node.js, Express, and MySQL. This experience not only enhanced my skills, but also broadened my understanding of future industrial and technological developments.

The skills and expertise that I have are HTML, CSS, Tailwind CSS, ReactJS, VueJS, NodeJS, ExpressJS, MySQL. With the skills and experience that I have, I am ready to face new challenges and contribute to innovative projects. For me, every opportunity is an opportunity to learn and grow. I am committed to continuing to expand my knowledge and skills to achieve my goals as a Full Stack Developer and Software Engineer.
`;

export const PROJECTS = [
  {
    img: project1,
    title: "Ecommerce Web",
    description:
      "This project is the development of an e-commerce site that allows users to browse, buy and sell various types of fruit online. The site offers complete features, including product search, shopping cart, payment processing, transaction management, and user and admin authentication. Admins can easily add, edit, or delete products, while users can enjoy easy shopping and set their preferences.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MySql"],
    github: "https://github.com/orgs/HSBC-United-Team/repositories",
  },
  {
    img: project2,
    title: "Informatic Connect",
    description:
      "The application that we developed is a display or front-end that has the idea of allowing its members to share knowledge, experiences, the latest news, and other important resources in the world of informatics. This will facilitate collaboration between technology professionals and enthusiasts, promote meaningful discussions, and enable quick and easy access to the latest information in the field of informatics.",
    technologies: ["Dart", "Flutter"],
    github: "https://github.com/dhenmasadhi/InformaticConnect_App.git",
  },
  {
    img: project3,
    title: "Vue Store",
    description:
      "This project is the development of an e-commerce site that displays products and adds to cart.",
    technologies: ["VueJS", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/orgs/KelasFullstack-CP/repositories",
  },
];

export const EDUCATION = [
  {
    university: "Surabaya State University",
    city: "- Surabaya, Indonesia",
    major: "Bachelor Degree of Information Systems, 3.64/4.00",
    eduskills: [
      "Database",
      "Programming",
      "Systems Analysis",
      "Project Management",
      "Data Analysis",
    ],
    year: "2021-Present",
  },
];

export const COURSES = [
  {
    academy: "Harisenin.com",
    city: "- Jakarta, Indonesia",
    course: "Full Stack Developer Bootcamp",
    skills: ["ReactJS", "NodeJS", "ExpressJS", "MySql"],
    year: "2023-2024",
  },
  {
    academy: "CodePolitan",
    city: "- Bandung, Indonesia",
    course: "E-Learning Kelas Fullstack",
    skills: ["ReactJS", "VueJS", "NodeJS", "ExpressJS", "MySql", "MongoDB"],
    year: "2023-Present",
  },
  {
    academy: "Stechoq Academy",
    city: "- Yogyakarta, Indonesia",
    course: "Full-Stack Specialist In Industry 4.0 For Manufacturing Industry ",
    skills: ["VueJS", "NodeJS", "ExpressJS", "MySql"],
    year: "2024",
  },
];
