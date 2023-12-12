import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faDatabase,
  faEnvelope,
  faGraduationCap,
  faHome,
  faLaptop,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

type ImenuItems = {
  label: string;
  url?: string;
  icon: IconProp | null;
  id?: string;
};

interface IjourneyData {
  icon: IconProp;
  img: string;
  title: string;
  text: string;
}

interface IpreviewData {
  img: string;
  title: string;
  text: string;
  usage: string;
  // icon: IconProp;
}

interface IStackIcon {
  icon: string;
}

interface IMERNIcon {
  icon: string;
  label: string;
}

interface ItoolData {
  img: string;
  title: string;
  text: string;
  usage: string;
}

interface IprojectsData {
  img: string;
  title: string;
  text: string;
  techno: Itechno[];
  urlDemo?: string;
  urlGit?: string;
}

interface Itechno {
  text: string;
}

export default function dataHelper() {
  //données pour le menu items
  const navItems: ImenuItems[] = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Technos", url: "/techno", icon: faCode },
    { label: "Projects", url: "/projects", icon: faLaptop },
    { label: "Contact", icon: faEnvelope, id: "btn-contact" },
  ];

  const overviewData = [
    { label: "Projects", statistic: 15 },
    { label: "Repositories", statistic: 21, id: "second-column" },
    { label: "Contributions", statistic: 7, id: "last-column" },
  ];

  const journeyData: IjourneyData[] = [
    {
      icon: faGraduationCap,
      img: "/images/day1.jpg",
      text: "",
      title: "High School grade",
    },
    {
      icon: faUniversity,
      img: "/images/day2.jpg",
      text: "",
      title: "University License 1",
    },
  ];

  const previewTechno: IpreviewData[] = [
    {
      img: "/images/react.png",
      title: "React js",
      text: "The ultimate and popular Javascript Framework for the frontend to build a powerful view",
      usage: "Frontend",
    },
    {
      img: "/images/next.jpg",
      title: "Next js",
      text: "Next.js enables to create full-stack Web applications by extending the latest React features",
      usage: "Frontend",
    },
    {
      img: "/images/node.jpg",
      title: "Node js",
      text: "Framework javascript for the serverside, for a flexible and powerful backend able to easy connect to Database",
      usage: "Backend",
    },
  ];

  const socialIcons = [
    { icon: "/images/facebook .png" },
    { icon: "/images/github.png" },
    { icon: "/images/linkedin.png" },
  ];

  const StackIcon: IStackIcon[] = [
    { icon: "/images/react-icones.png" },
    { icon: "/images/next-icon.svg" },
    { icon: "/images/node-icon.png" },
    { icon: "/images/type-icon.svg" },
  ];

  const toolData: ItoolData[] = [
    {
      img: "/images/tools/react.png",
      title: "React JS",
      text: "React js simplifies building interactive user interfaces by providing reusable components. Its approach enables  a best development experience",
      usage: "Frontend",
    },
    {
      img: "/images/tools/next.png",
      title: "Next JS",
      text: "Next.js, built on React, makes web application development easier by offering server-side and client-side rendering . It also simplifies routing, data management",
      usage: "Frontend",
    },
    {
      img: "/images/tools/node.png",
      title: "Node JS",
      text: "Node.js is favored for its asynchronous server-side performance . It easily integrates with databases , simplifying server application development.",
      usage: "Backend",
    },
    {
      img: "/images/tools/mongoDB.png",
      title: "MongoDB",
      text: "MongoDB, a NoSQL database, stands out for its JSON document-oriented storage model, providing flexibility and scalability. Its architecture allows for easy horizontal scaling",
      usage: "Backend",
    },
    {
      img: "/images/tools/ts.webp",
      title: "Typescript JS",
      text: "TypeScript is an extension of JavaScript improving code robustness and making large code  easier to maintain. It offers JavaScript modernization features, such as interfaces and classes",
      usage: "Frontend",
    },
    {
      img: "/images/tools/sass.png",
      title: "SASS",
      text: "Sass is a CSS-extended stylesheet language, providing features such as variables, mixins, and functions, making CSS code easier to manage and reuse",
      usage: "Frontend",
    },
    {
      img: "/images/tools/express.jpg",
      title: "Express JS",
      text: "Express.js is a minimalist web framework for Node.js, simplifying the creation of robust web applications with routing and middleware features.",
      usage: "Backend",
    },
    {
      img: "/images/tools/css.jpeg",
      title: "CSS",
      text: "CSS (Cascading Style Sheets) is a style language used to define the presentation of HTML documents, allowing you to control the design, layout and visual appearance of web pages.",
      usage: "Frontend",
    },
    {
      img: "/images/tools/boostrap.jpg",
      title: "Boostrap",
      text: "Bootstrap is an open source CSS framework that offers a collection of ready-to-use tools and components, making it easy to develop responsive and aesthetically pleasing web interfaces.",
      usage: "Frontend",
    },
    {
      img: "/images/tools/html.jpg",
      title: "HTML",
      text: "HTML (Hypertext Markup Language) is the standard markup language used to create and structure the content of web pages. It defines the structure of documents using tags",
      usage: "Frontend",
    },
    {
      img: "/images/tools/mysql.webp",
      title: "MySQL BD",
      text: "MySQL is an open source relational database management system (RDBMS) widely used for storing, organizing, and retrieving data. It supports Structured Query Language (SQL)",
      usage: "Backend",
    },
    {
      img: "/images/tools/java.jpeg",
      title: "JAVA",
      text: "Java is a general-purpose, object-oriented programming language popular for its performance and widespread use, particularly in the development  on various devices.",
      usage: "Backend",
    },
    {
      img: "/images/tools/js.svg",
      title: "Vanilla Js",
      text: `Vanilla" JavaScript allows a lightweight approach, without external dependencies, providing direct control over the code `,
      usage: "Frontend",
    },
    {
      img: "/images/tools/json.png",
      title: "JSON",
      text: `JSON is a lightweight data format , used to make easy the use of React to avoid to write many lines of code , it' s also used to send response between server and client`,
      usage: "Backend",
    },
  ];

  const projectsData: IprojectsData[] = [
    {
      img: "/images/madagascar-visit.png",
      title: "Madagascar Visit Company",
      text: "My first experience with coding website for an travel agency to improve Madagascar Tourism",
      techno: [{ text: "React" }, { text: "Typescript" }, { text: "Boostrap" }],
      urlDemo: "https://madagascar-visite.com/",
      urlGit: "https://github.com/KiritoEM/Madagascar-visit-compagny",
    },
    {
      img: "/images/book-bay.png",
      title: "Book-bay",
      text: "Web app for selling Harry Potter books with cart for customer with PRICE using Google API Books",
      techno: [
        { text: "React" },
        { text: "Typescript" },
        { text: "Next" },
        { text: "Boostrap" },
      ],
      urlDemo: "https://bookbaybynext.vercel.app/",
      urlGit: "https://github.com/KiritoEM/Bookbay",
    },
    {
      img: "/images/student-hub.png",
      title: "Student-hub",
      text: "Template web app for school website and for helping student to make register online",
      techno: [
        { text: "React" },
        { text: "Typescript" },
        { text: "Next" },
        { text: "Node" },
        { text: "MongoDB" },
      ],
      urlDemo: "",
      urlGit: "https://github.com/KiritoEM/StudentHub",
    },
    {
      img: "/images/zara.png",
      title: "Zara project",
      text: "Zara project is an IFM topic for their hackathon , I was  front-end developer for this project",
      techno: [
        { text: "React" },
        { text: "Typescript" },
        { text: "Node" },
        { text: "MongoDB" },
      ],
      urlDemo: "",
      urlGit: "https://github.com/KiritoEM/Zara",
    },

    {
      img: "/images/otaku-vortex.png",
      title: "Otaku-Vortex",
      text: "App for an innovative Otaku community , with implemented web security to protect the community",
      techno: [
        { text: "React" },
        { text: "Typescript" },
        { text: "Next" },
        { text: "Node" },
        { text: "MongoDB" },
        { text: "Socket.io" },
      ],
      urlDemo: "",
      urlGit: "https://github.com/KiritoEM/Otaku-vortex",
    },
    {
      img: "/images/learn-share.png",
      title: "Learn-Share",
      text: "App for an innovative Study community , with implemented web security to protect the community",
      techno: [
        { text: "React" },
        { text: "Typescript" },
        { text: "Next" },
        { text: "Node" },
        { text: "MongoDB" },
        { text: "Socket.io" },
      ],
      urlDemo: "",
      urlGit: "https://github.com/KiritoEM/LearnShare",
    },
  ];

  return {
    navItems,
    overviewData,
    journeyData,
    previewTechno,
    socialIcons,
    StackIcon,
    toolData,
    projectsData,
  };
}
