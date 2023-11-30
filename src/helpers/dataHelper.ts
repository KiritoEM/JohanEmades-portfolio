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
  icon: IconProp;
}

export default function dataHelper() {
  //données pour le menu items
  const navItems: ImenuItems[] = [
    { label: "Home", url: "", icon: faHome },
    { label: "Technos", url: "", icon: faCode },
    { label: "Projects", url: "", icon: faLaptop },
    { label: "Contact", icon: faEnvelope, id: "btn-contact" },
  ];

  const overviewData = [
    { label: "Projects", statisitic: 15 },
    { label: "Repositories", statisitic: 21 },
    { label: "Contributions", statisitic: 5, id: "last-column" },
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
      icon: faLaptop,
    },
    {
      img: "/images/next.jpg",
      title: "Next js",
      text: "Next.js enables to create full-stack Web applications by extending the latest React features",
      usage: "Frontend",
      icon: faLaptop,
    },
    {
      img: "/images/node.jpg",
      title: "Node js",
      text: "Framework javascript for the serverside, for a flexible and powerful backend",
      usage: "Backend",
      icon: faDatabase,
    },
  ];

  const socialIcons = [{ icon: "/images/facebook .png" }, { icon: "/images/github.png" }, { icon: "/images/linkedin.png" }];

  return { navItems, overviewData, journeyData, previewTechno, socialIcons };
}
